/**
 * Ruling planet model.
 *
 * Represents a celestial body used as a ruling planet in Western astrology.
 */
export interface RulingPlanet {
  /** Stable identifier (e.g., "mars") */
  readonly id: string;

  /** English display name */
  readonly name: string;

  /** Unicode symbol (if applicable) */
  readonly symbol?: string;
}
