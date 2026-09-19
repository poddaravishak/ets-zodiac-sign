/**
 * Zodiac modality model.
 *
 * Represents a Western Zodiac modality (Cardinal, Fixed, Mutable).
 */
export interface ZodiacModality {
  /** Stable identifier (e.g., "cardinal") */
  readonly id: string;

  /** English display name */
  readonly name: string;

  /** Sign IDs in this modality */
  readonly members: readonly string[];
}
