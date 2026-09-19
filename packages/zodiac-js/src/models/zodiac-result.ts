/**
 * Result of a Western Zodiac calculation.
 *
 * Wraps a ZodiacSign with optional localization and icon data.
 */
import type { ZodiacSign } from './zodiac-sign';
import type { ZodiacIcon } from './zodiac-icon';

export interface ZodiacResult {
  /** The resolved Zodiac sign */
  readonly sign: ZodiacSign;

  /** Locale used for localized fields (if any) */
  readonly locale?: string;

  /** Localized name (if locale was provided) */
  readonly localizedName?: string;

  /** Localized description (if locale was provided) */
  readonly localizedDescription?: string;

  /** Localized keywords (if locale was provided) */
  readonly localizedKeywords?: readonly string[];

  /** Resolved icon (if icon mode is enabled) */
  readonly icon?: ZodiacIcon;
}
