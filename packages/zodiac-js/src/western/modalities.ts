/**
 * Western Zodiac modalities data module.
 */

import type { ZodiacModality } from '../models/zodiac-modality';

export const WESTERN_MODALITIES: readonly ZodiacModality[] = [
  { id: 'cardinal', name: 'Cardinal', members: ['aries', 'cancer', 'libra', 'capricorn'] },
  { id: 'fixed', name: 'Fixed', members: ['taurus', 'leo', 'scorpio', 'aquarius'] },
  { id: 'mutable', name: 'Mutable', members: ['gemini', 'virgo', 'sagittarius', 'pisces'] },
];

const modalityMap = new Map<string, ZodiacModality>(
  WESTERN_MODALITIES.map((m) => [m.id, m]),
);

/** Returns a modality by ID. Throws if not found. */
export function getModality(id: string): ZodiacModality {
  const mod = modalityMap.get(id);
  if (!mod) {
    throw new Error(`Modality not found: "${id}"`);
  }
  return mod;
}

/** Returns all 3 modalities. */
export function getAllModalities(): readonly ZodiacModality[] {
  return WESTERN_MODALITIES;
}
