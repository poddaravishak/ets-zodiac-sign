import { describe, it, expect } from 'vitest';
import { getIndianZodiac } from '../../src/calculator/indian-calculator';
import { ZodiacValidationError } from '../../src/validation/validator';

describe('Indian (Vedic) Calculator', () => {
  it('should identify April 14 as Mesha (Aries)', () => {
    const result = getIndianZodiac(4, 14);
    expect(result.rashi.id).toBe('mesha');
    expect(result.rashi.name).toBe('Mesha');
  });

  it('should identify April 12 as Meena (Pisces)', () => {
    const result = getIndianZodiac(4, 12);
    expect(result.rashi.id).toBe('meena');
    expect(result.rashi.name).toBe('Meena');
  });

  it('should return localized data', () => {
    const result = getIndianZodiac(4, 14, { locale: 'bn' });
    expect(result.localizedName).toBe('মেষ');
  });

  it('should throw for invalid dates', () => {
    expect(() => getIndianZodiac(2, 30)).toThrow(ZodiacValidationError);
  });
});
