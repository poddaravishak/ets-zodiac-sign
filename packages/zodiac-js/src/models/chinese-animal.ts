/**
 * Chinese Zodiac animal model.
 *
 * Represents one of the 12 Chinese Zodiac animals with all metadata.
 */
export interface ChineseAnimal {
  /** Stable, language-independent identifier (e.g., "rat") */
  readonly id: string;

  /** English display name */
  readonly name: string;

  /** Emoji or symbol */
  readonly symbol: string;

  /** Position in the 12-animal cycle (1–12) */
  readonly order: number;

  /** Yin/Yang classification */
  readonly yinYang: 'yin' | 'yang';

  /** Fixed element associated with this animal */
  readonly fixedElement: string;

  /** Traditional description */
  readonly description: string;

  /** Characteristic keywords */
  readonly keywords: readonly string[];

  /** Traditional strengths */
  readonly strengths: readonly string[];

  /** Traditional weaknesses */
  readonly weaknesses: readonly string[];

  /** Compatible animal IDs */
  readonly compatible: readonly string[];

  /** Icon identifier */
  readonly iconId: string;
}
