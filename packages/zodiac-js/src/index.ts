/**
 * Public API surface for ets-zodiac
 */

// Models
export type { ZodiacSign, RulingPlanetRef } from './models/zodiac-sign';
export type { ZodiacElement } from './models/zodiac-element';
export type { ZodiacModality } from './models/zodiac-modality';
export type { ChineseAnimal } from './models/chinese-animal';
export type { ZodiacIcon } from './models/zodiac-icon';
export type { ZodiacResult } from './models/zodiac-result';
export type { ChineseYear } from './models/chinese-year';
export type { IndianRashi, IndianResult } from './models/indian-rashi';

// Calculators
export { getWesternSign, type WesternOptions } from './calculator/western-calculator';
export { getChineseZodiac, getChineseZodiacByDate, type ChineseOptions } from './calculator/chinese-calculator';
export { getIndianZodiac, type IndianOptions } from './calculator/indian-calculator';

// Data Modules (Read-only access)
export { getAllSigns, getSignById } from './western/signs';
export { getAllWesternElements, getWesternElement } from './western/elements';
export { getAllModalities, getModality } from './western/modalities';
export { getAllAnimals, getAnimalById } from './chinese/animals';
export { getAllChineseElements, getChineseElement } from './chinese/elements';
export { INDIAN_RASHIS, getRashiById } from './indian/rashis';
export { 
  getChineseYear, getChineseNewYearDate, getAnimalForYear, getStemForYear, getCyclePosition, 
  MIN_YEAR, MAX_YEAR, REFERENCE_YEAR 
} from './chinese/cycle';

// Localization
export { setDefaultLocale, getSupportedLocales } from './localization/locale-manager';

// Icons
export { setCustomIcons, clearCustomIcons } from './icons/icon-provider';

// Validation / Errors
export { ZodiacValidationError, ZodiacLocaleError, validateDate, validateYear } from './validation/validator';
