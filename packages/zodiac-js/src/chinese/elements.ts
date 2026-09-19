/**
 * Chinese Zodiac five elements data module.
 */

import type { ZodiacElement } from '../models/zodiac-element';

export const CHINESE_ELEMENTS: readonly ZodiacElement[] = [
  { id: 'wood', name: 'Wood', system: 'chinese', members: [] },
  { id: 'fire', name: 'Fire', system: 'chinese', members: [] },
  { id: 'earth', name: 'Earth', system: 'chinese', members: [] },
  { id: 'metal', name: 'Metal', system: 'chinese', members: [] },
  { id: 'water', name: 'Water', system: 'chinese', members: [] },
];

const elementMap = new Map<string, ZodiacElement>(
  CHINESE_ELEMENTS.map((e) => [e.id, e]),
);

/** Returns a Chinese element by ID. */
export function getChineseElement(id: string): ZodiacElement {
  const el = elementMap.get(id);
  if (!el) {
    throw new Error(`Chinese element not found: "${id}"`);
  }
  return el;
}

/** Returns all 5 Chinese elements. */
export function getAllChineseElements(): readonly ZodiacElement[] {
  return CHINESE_ELEMENTS;
}
