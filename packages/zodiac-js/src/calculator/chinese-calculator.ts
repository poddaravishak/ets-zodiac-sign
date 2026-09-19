/**
 * Chinese Zodiac calculator.
 *
 * Determines the Chinese Zodiac animal, element, yin/yang, and
 * 60-year cycle position from a year or date input.
 * Accounts for Chinese New Year boundaries.
 */

import { validateYear, validateDate } from '../validation/validator';
import { getChineseYear, getAnimalForYear, getStemForYear, getCyclePosition } from '../chinese/cycle';
import { getAnimalById } from '../chinese/animals';
import { getLocaleText, getSupportedLocales } from '../localization/locale-manager';
import { getChineseIcon } from '../icons/icon-provider';
import type { ChineseYear } from '../models/chinese-year';

export interface ChineseOptions {
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
 * Determines the Chinese Zodiac for a given Gregorian year.
 * Note: This roughly estimates based on the year. For accurate results
 * based on the Chinese New Year boundary, use getChineseZodiacByDate.
 *
 * @param year Gregorian year (1900-2100)
 * @param options Optional configuration for locale and icons
 * @returns The resolved ChineseYear
 * @throws ZodiacValidationError if year is invalid
 */
export function getChineseZodiac(year: number, options?: ChineseOptions): ChineseYear {
  validateYear(year);
  return calculateChineseZodiac(year, year, options);
}

/**
 * Determines the accurate Chinese Zodiac for a given Gregorian date,
 * respecting the precise Chinese New Year boundaries.
 *
 * @param date Native Date object
 * @param options Optional configuration for locale and icons
 * @returns The resolved ChineseYear
 * @throws ZodiacValidationError if year is invalid
 */
export function getChineseZodiacByDate(date: Date, options?: ChineseOptions): ChineseYear {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  validateYear(year);
  validateDate(month, day);
  
  const chineseYearInt = getChineseYear(year, month, day);
  return calculateChineseZodiac(chineseYearInt, year, options);
}

/** Internal calculation logic */
function calculateChineseZodiac(chineseYearInt: number, gregorianYear: number, options?: ChineseOptions): ChineseYear {
  const animalId = getAnimalForYear(chineseYearInt);
  const animal = getAnimalById(animalId);
  
  const stem = getStemForYear(chineseYearInt);
  const cyclePosition = getCyclePosition(chineseYearInt);

  const result: ChineseYear = {
    animal,
    element: stem.element,
    yinYang: stem.yinYang,
    cyclePosition,
    year: gregorianYear, // Original Gregorian year context
  };

  // 1. Localization
  if (options?.locale) {
    const locale = options.locale;
    (result as any).locale = getSupportedLocales().includes(locale) ? locale : 'en';
    (result as any).localizedName = getLocaleText(locale, `chinese.${animalId}.name`) ?? animal.name;
    (result as any).localizedElement = getLocaleText(locale, `chinese.element.${stem.element}`) ?? stem.element;
  }

  // 2. Icon Provider
  const iconMode = options?.iconMode ?? 'builtin';
  if (iconMode !== 'none') {
    (result as any).icon = getChineseIcon(animalId, iconMode);
  }

  return result;
}
