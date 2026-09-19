/**
 * Western Zodiac elements data module.
 */

import type { ZodiacElement } from '../models/zodiac-element';

export const WESTERN_ELEMENTS: readonly ZodiacElement[] = [
  { id: 'fire', name: 'Fire', system: 'western', members: ['aries', 'leo', 'sagittarius'] },
  { id: 'earth', name: 'Earth', system: 'western', members: ['taurus', 'virgo', 'capricorn'] },
  { id: 'air', name: 'Air', system: 'western', members: ['gemini', 'libra', 'aquarius'] },
  { id: 'water', name: 'Water', system: 'western', members: ['cancer', 'scorpio', 'pisces'] },
];

const elementMap = new Map<string, ZodiacElement>(
  WESTERN_ELEMENTS.map((e) => [e.id, e]),
);

/** Returns a Western element by ID. Throws if not found. */
export function getWesternElement(id: string): ZodiacElement {
  const el = elementMap.get(id);
  if (!el) {
    throw new Error(`Western element not found: "${id}"`);
  }
  return el;
}

/** Returns all 4 Western elements. */
export function getAllWesternElements(): readonly ZodiacElement[] {
  return WESTERN_ELEMENTS;
}
