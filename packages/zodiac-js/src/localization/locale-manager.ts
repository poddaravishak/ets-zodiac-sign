/**
 * Localization manager.
 *
 * Handles loading locale data, resolving localized strings,
 * and managing the fallback chain.
 */

import { LOCALE_DATA, SUPPORTED_LOCALES } from './locale-data';
import { ZodiacLocaleError } from '../validation/validator';

let defaultLocale = 'en';

/**
 * Sets the default fallback locale (must be one of the supported locales).
 * @param locale The locale code (e.g. 'en', 'zh-CN')
 */
export function setDefaultLocale(locale: string): void {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    throw new ZodiacLocaleError(`Unsupported locale: "${locale}"`);
  }
  defaultLocale = locale;
}

/**
 * Returns an array of all supported locales.
 */
export function getSupportedLocales(): readonly string[] {
  return SUPPORTED_LOCALES;
}

/**
 * Gets a localized string or array by key.
 * If the key is not found in the requested locale, it falls back to 'en'.
 * 
 * @param locale Requested locale
 * @param key The data key (e.g. "western.aries.name")
 * @returns The localized text, array, or undefined if not found.
 */
export function getLocaleText(locale: string, key: string): any {
  let targetLocale = locale;
  if (!SUPPORTED_LOCALES.includes(targetLocale)) {
    targetLocale = defaultLocale;
  }
  
  const data = LOCALE_DATA[targetLocale];
  if (data && data[key] !== undefined) {
    return data[key];
  }

  // Fallback to English (if not already checking English)
  if (targetLocale !== 'en') {
    const enData = LOCALE_DATA['en'];
    if (enData && enData[key] !== undefined) {
      return enData[key];
    }
  }

  return undefined;
}
