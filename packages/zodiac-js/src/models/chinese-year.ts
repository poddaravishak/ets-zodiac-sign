/**
 * Chinese Zodiac year result.
 *
 * Full result for a Chinese Zodiac year calculation including
 * animal, element, yin/yang, and 60-year cycle position.
 */
import type { ChineseAnimal } from './chinese-animal';
import type { ZodiacIcon } from './zodiac-icon';

export interface ChineseYear {
  /** The resolved Chinese Zodiac animal */
  readonly animal: ChineseAnimal;

  /** The heavenly stem element for this year */
  readonly element: string;

  /** Yin/Yang for this specific year */
  readonly yinYang: 'yin' | 'yang';

  /** Position in the 60-year sexagenary cycle (1–60) */
  readonly cyclePosition: number;

  /** The Gregorian year this result corresponds to */
  readonly year: number;

  /** Locale used for localized fields (if any) */
  readonly locale?: string;

  /** Localized animal name (if locale was provided) */
  readonly localizedName?: string;

  /** Localized element name (if locale was provided) */
  readonly localizedElement?: string;

  /** Resolved icon (if icon mode is enabled) */
  readonly icon?: ZodiacIcon;
}
