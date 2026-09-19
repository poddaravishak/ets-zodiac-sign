class ZodiacValidationError implements Exception {
  final String message;
  ZodiacValidationError(this.message);
  @override
  String toString() => 'ZodiacValidationError: $message';
}

/// Validates that a month and day combination is valid.
void validateDate(int month, int day) {
  if (month < 1 || month > 12) {
    throw ZodiacValidationError('Month must be between 1 and 12');
  }

  if (day < 1) {
    throw ZodiacValidationError('Day must be positive');
  }

  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  final maxDays = daysInMonth[month - 1];

  if (day > maxDays) {
    throw ZodiacValidationError('Day $day is not valid for month $month');
  }
}

/// Validates that a year falls within the supported Chinese cycle range.
void validateYear(int year) {
  if (year < 1900 || year > 2100) {
    throw ZodiacValidationError('Year must be between 1900 and 2100');
  }
}
