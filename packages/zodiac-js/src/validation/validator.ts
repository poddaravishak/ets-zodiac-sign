/**
 * Input validation layer.
 *
 * Validates dates, months, days, years, locales, and configuration
 * before passing to calculation logic.
 */

/**
 * Custom error class for Zodiac validation errors.
 */
export class ZodiacValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZodiacValidationError';
  }
}

/**
 * Custom error class for unsupported locale errors.
 */
export class ZodiacLocaleError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ZodiacLocaleError';
  }
}

/**
 * Validates that a month and day combination is valid.
 * Allows February 29th regardless of leap year since Western zodiac
 * calculation doesn't require a specific year.
 */
export function validateDate(month: number, day: number): void {
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new ZodiacValidationError('Month must be an integer between 1 and 12');
  }
  
  if (!Number.isInteger(day) || day < 1) {
    throw new ZodiacValidationError('Day must be a positive integer');
  }

  // Max days per month. We allow 29 for Feb to cover leap years.
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const maxDays = daysInMonth[month - 1];

  if (day > maxDays) {
    throw new ZodiacValidationError(`Day ${day} is not valid for month ${month}`);
  }
}

/**
 * Validates that a year falls within the supported Chinese cycle range.
 */
export function validateYear(year: number): void {
  if (!Number.isInteger(year) || year < 1900 || year > 2100) {
    throw new ZodiacValidationError('Year must be an integer between 1900 and 2100');
  }
}
