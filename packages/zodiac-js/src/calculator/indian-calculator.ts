import { INDIAN_RASHIS } from '../indian/rashis';
import { validateDate } from '../validation/validator';
import { getLocaleText, getSupportedLocales } from '../localization/locale-manager';
import { getIndianIcon } from '../icons/icon-provider';
import type { IndianResult } from '../models/indian-rashi';

export interface IndianOptions {
  locale?: string;
  iconMode?: 'none' | 'builtin' | 'custom';
}

/**
 * Determines the Indian Zodiac sign (Rashi) for a given month and day.
 */
export function getIndianZodiac(month: number, day: number, options?: IndianOptions): IndianResult {
  validateDate(month, day);

  let foundRashi = INDIAN_RASHIS[0]; // fallback, shouldn't occur

  for (const rashi of INDIAN_RASHIS) {
    const { start, end } = rashi.dateRange;

    // e.g. Start: Apr 13, End: May 14
    if (
      (month === start.month && day >= start.day) ||
      (month === end.month && day <= end.day)
    ) {
      foundRashi = rashi;
      break;
    }
  }

  const result: Partial<IndianResult> = { rashi: foundRashi };

  if (options?.locale) {
    const locale = options.locale;
    (result as any).locale = getSupportedLocales().includes(locale) ? locale : 'en';
    (result as any).localizedName = getLocaleText(locale, `indian.${foundRashi.id}.name`) ?? foundRashi.name;
  }

  const iconMode = options?.iconMode ?? 'builtin';
  if (iconMode !== 'none') {
    result.icon = getIndianIcon(foundRashi.id, foundRashi.westernEquivalent, iconMode);
  }

  return result as IndianResult;
}
