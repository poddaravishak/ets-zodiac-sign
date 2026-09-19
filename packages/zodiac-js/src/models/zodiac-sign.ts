/**
 * Western Zodiac sign model.
 *
 * Represents a single Western Zodiac sign with all associated metadata.
 */
export interface ZodiacSign {
  /** Stable, language-independent identifier (e.g., "aries") */
  readonly id: string;

  /** English display name */
  readonly name: string;

  /** Symbol name (e.g., "Ram") */
  readonly symbol: string;

  /** Unicode zodiac symbol (e.g., "♈") */
  readonly unicodeSymbol: string;

  /** Date range for this sign */
  readonly dateRange: {
    readonly startMonth: number;
    readonly startDay: number;
    readonly endMonth: number;
    readonly endDay: number;
  };

  /** Associated element ID (e.g., "fire") */
  readonly element: string;

  /** Associated modality ID (e.g., "cardinal") */
  readonly modality: string;

  /** Ruling planet information */
  readonly rulingPlanet: RulingPlanetRef;

  /** Traditional astrological description */
  readonly description: string;

  /** Characteristic keywords */
  readonly keywords: readonly string[];

  /** Traditional strengths */
  readonly strengths: readonly string[];

  /** Traditional weaknesses */
  readonly weaknesses: readonly string[];

  /** Icon identifier */
  readonly iconId: string;
}

/** Reference to ruling planet(s) with traditional/modern distinction */
export interface RulingPlanetRef {
  readonly traditional: string;
  readonly modern: string;
}
