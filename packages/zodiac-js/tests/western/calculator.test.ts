import { describe, it, expect } from 'vitest';
import { getWesternSign } from '../../src/calculator/western-calculator';
import { ZodiacValidationError } from '../../src/validation/validator';

describe('Western Calculator', () => {
  it('should correctly identify Aries for March 21', () => {
    const result = getWesternSign(3, 21);
    expect(result.sign.id).toBe('aries');
  });

  it('should correctly identify Aries for April 19', () => {
    const result = getWesternSign(4, 19);
    expect(result.sign.id).toBe('aries');
  });

  it('should correctly identify Capricorn for December 31', () => {
    const result = getWesternSign(12, 31);
    expect(result.sign.id).toBe('capricorn');
  });

  it('should correctly identify Capricorn for January 1', () => {
    const result = getWesternSign(1, 1);
    expect(result.sign.id).toBe('capricorn');
  });
  
  it('should include localization when requested', () => {
    const result = getWesternSign(3, 21, { locale: 'ru' });
    expect(result.locale).toBe('ru');
    expect(result.localizedName).toBe('Овен');
  });

  it('should fallback to English for unknown locales', () => {
    const result = getWesternSign(3, 21, { locale: 'xx' }); // Unsupported
    expect(result.locale).toBe('en');
    expect(result.localizedName).toBe('Aries');
  });

  it('should throw ZodiacValidationError for invalid dates', () => {
    expect(() => getWesternSign(13, 1)).toThrow(ZodiacValidationError);
    expect(() => getWesternSign(2, 30)).toThrow(ZodiacValidationError);
    expect(() => getWesternSign(0, 15)).toThrow(ZodiacValidationError);
  });
});
