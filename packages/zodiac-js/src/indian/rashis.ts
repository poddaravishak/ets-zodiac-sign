import type { IndianRashi } from '../models/indian-rashi';

/**
 * 12 Indian/Vedic Rashis with approximate Sidereal boundaries.
 */
export const INDIAN_RASHIS: IndianRashi[] = [
  { id: 'mesha', name: 'Mesha', sanskritName: 'मेष', westernEquivalent: 'aries', dateRange: { start: { month: 4, day: 13 }, end: { month: 5, day: 14 } } },
  { id: 'vrishabha', name: 'Vrishabha', sanskritName: 'वृषभ', westernEquivalent: 'taurus', dateRange: { start: { month: 5, day: 15 }, end: { month: 6, day: 14 } } },
  { id: 'mithuna', name: 'Mithuna', sanskritName: 'मिथुन', westernEquivalent: 'gemini', dateRange: { start: { month: 6, day: 15 }, end: { month: 7, day: 15 } } },
  { id: 'karka', name: 'Karka', sanskritName: 'कर्क', westernEquivalent: 'cancer', dateRange: { start: { month: 7, day: 16 }, end: { month: 8, day: 16 } } },
  { id: 'simha', name: 'Simha', sanskritName: 'सिंह', westernEquivalent: 'leo', dateRange: { start: { month: 8, day: 17 }, end: { month: 9, day: 16 } } },
  { id: 'kanya', name: 'Kanya', sanskritName: 'कन्या', westernEquivalent: 'virgo', dateRange: { start: { month: 9, day: 17 }, end: { month: 10, day: 16 } } },
  { id: 'tula', name: 'Tula', sanskritName: 'तुला', westernEquivalent: 'libra', dateRange: { start: { month: 10, day: 17 }, end: { month: 11, day: 15 } } },
  { id: 'vrischika', name: 'Vrischika', sanskritName: 'वृश्चिक', westernEquivalent: 'scorpio', dateRange: { start: { month: 11, day: 16 }, end: { month: 12, day: 15 } } },
  { id: 'dhanu', name: 'Dhanu', sanskritName: 'धनु', westernEquivalent: 'sagittarius', dateRange: { start: { month: 12, day: 16 }, end: { month: 1, day: 13 } } },
  { id: 'makara', name: 'Makara', sanskritName: 'मकर', westernEquivalent: 'capricorn', dateRange: { start: { month: 1, day: 14 }, end: { month: 2, day: 12 } } },
  { id: 'kumbha', name: 'Kumbha', sanskritName: 'कुम्भ', westernEquivalent: 'aquarius', dateRange: { start: { month: 2, day: 13 }, end: { month: 3, day: 13 } } },
  { id: 'meena', name: 'Meena', sanskritName: 'मीन', westernEquivalent: 'pisces', dateRange: { start: { month: 3, day: 14 }, end: { month: 4, day: 12 } } },
];

export function getRashiById(id: string): IndianRashi {
  const rashi = INDIAN_RASHIS.find((r) => r.id === id);
  if (!rashi) {
    throw new Error(`Rashi not found: "${id}"`);
  }
  return rashi;
}
