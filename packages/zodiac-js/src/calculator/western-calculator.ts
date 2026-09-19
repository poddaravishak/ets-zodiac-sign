/**
 * Western Zodiac calculator.
 *
 * Determines the Western Zodiac sign from a month and day input.
 * Uses standard date-range approach.
 */

import { getAllSigns } from '../western/signs';
import { validateDate } from '../validation/validator';
import { getLocaleText, getSupportedLocales } from '../localization/locale-manager';
import { getWesternIcon } from '../icons/icon-provider';
import type { ZodiacResult } from '../models/zodiac-result';

export interface WesternOptions {
  /** Optional locale code for localized output (e.g. 'zh-CN', 'fr', 'ar') */
  locale?: string;
  /**
   * Icon mode:
   * 'none' - No icon included
   * 'builtin' - Uses the built-in SVG icon
   * 'custom' - Retains the iconId for custom asset loading
   * Default is 'builtin'.
   */
  iconMode?: 'none' | 'builtin' | 'custom';
}

/**
 * Determines the Western Zodiac sign for a given month and day.
 *
 * @param month The month of birth (1-12)
 * @param day The day of birth (1-31)
 * @param options Optional configuration for locale and icons
 * @returns The resolved ZodiacResult
 * @throws ZodiacValidationError if month or day is invalid
 */
export function getWesternSign(month: number, day: number, options?: WesternOptions): ZodiacResult {
  validateDate(month, day);

  const signs = getAllSigns();
  let foundSign = signs[0]; // Default fallback

  // Find the matching sign
  for (const sign of signs) {
    const { startMonth, startDay, endMonth, endDay } = sign.dateRange;

    // A sign always spans exactly two months. 
    // This logic correctly handles Capricorn wrapping from 12 to 1.
    if (
      (month === startMonth && day >= startDay) ||
      (month === endMonth && day <= endDay)
    ) {
      foundSign = sign;
      break;
    }
  }

  // Construct the result
  const result: ZodiacResult = {
    sign: foundSign,
  };

  // 1. Localization
  if (options?.locale) {
    const locale = options.locale;
    (result as any).locale = getSupportedLocales().includes(locale) ? locale : 'en';
    (result as any).localizedName = getLocaleText(locale, `western.${foundSign.id}.name`) ?? foundSign.name;
    (result as any).localizedDescription = getLocaleText(locale, `western.${foundSign.id}.description`) ?? foundSign.description;
    
    // Attempt to load localized keywords, fallback to English
    const localizedKeywords = getLocaleText(locale, `western.${foundSign.id}.keywords`);
    if (Array.isArray(localizedKeywords)) {
      (result as any).localizedKeywords = localizedKeywords;
    } else {
      (result as any).localizedKeywords = foundSign.keywords;
    }
  }

  // 2. Icon Provider
  const iconMode = options?.iconMode ?? 'builtin';
  if (iconMode !== 'none') {
    (result as any).icon = getWesternIcon(foundSign.id, iconMode);
  }

  return result;
}
