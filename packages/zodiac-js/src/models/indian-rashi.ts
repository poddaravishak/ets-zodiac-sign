import type { ZodiacIcon } from './zodiac-icon';

export interface IndianRashi {
  id: string;
  name: string;
  sanskritName: string;
  westernEquivalent: string;
  dateRange: {
    start: { month: number; day: number };
    end: { month: number; day: number };
  };
}

export interface IndianResult {
  rashi: IndianRashi;
  locale?: string;
  localizedName?: string;
  icon?: ZodiacIcon;
}
