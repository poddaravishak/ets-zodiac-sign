import { describe, it, expect } from 'vitest';
import { getChineseZodiac, getChineseZodiacByDate } from '../../src/calculator/chinese-calculator';
import { ZodiacValidationError } from '../../src/validation/validator';

describe('Chinese Calculator', () => {
  describe('getChineseZodiac (year based)', () => {
    it('should identify 1984 as Rat year', () => {
      const result = getChineseZodiac(1984);
      expect(result.animal.id).toBe('rat');
      expect(result.element).toBe('wood');
      expect(result.yinYang).toBe('yang');
    });

    it('should identify 2024 as Dragon year', () => {
      const result = getChineseZodiac(2024);
      expect(result.animal.id).toBe('dragon');
      expect(result.element).toBe('wood');
      expect(result.yinYang).toBe('yang');
    });

    it('should include localized data if requested', () => {
      const result = getChineseZodiac(2024, { locale: 'zh-CN' });
      expect(result.localizedName).toBe('龙');
    });

    it('should throw for years out of range', () => {
      expect(() => getChineseZodiac(1899)).toThrow(ZodiacValidationError);
      expect(() => getChineseZodiac(2101)).toThrow(ZodiacValidationError);
    });
  });

  describe('getChineseZodiacByDate (date based)', () => {
    it('should correctly assign January 1, 2024 to Rabbit (previous year)', () => {
      const date = new Date(2024, 0, 1); // Jan 1 2024
      const result = getChineseZodiacByDate(date);
      expect(result.animal.id).toBe('rabbit'); // 2023 was Rabbit
    });

    it('should correctly assign February 11, 2024 to Dragon (after CNY)', () => {
      const date = new Date(2024, 1, 11); // Feb 11 2024
      const result = getChineseZodiacByDate(date);
      expect(result.animal.id).toBe('dragon');
    });
  });
});
