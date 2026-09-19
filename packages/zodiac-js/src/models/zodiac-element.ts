/**
 * Zodiac element model.
 *
 * Represents an element in either the Western or Chinese Zodiac system.
 */
export interface ZodiacElement {
  /** Stable identifier (e.g., "fire", "water", "wood") */
  readonly id: string;

  /** English display name */
  readonly name: string;

  /** Which zodiac system this element belongs to */
  readonly system: 'western' | 'chinese';

  /** Sign/animal IDs associated with this element */
  readonly members: readonly string[];
}
