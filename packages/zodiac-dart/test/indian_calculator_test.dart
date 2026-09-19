import 'package:test/test.dart';
import 'package:ets_zodiac/zodiac.dart';

void main() {
  group('Indian Calculator', () {
    test('should identify April 14 as Mesha (Aries)', () {
      final result = getIndianZodiac(4, 14);
      expect(result.rashi.id, equals('mesha'));
      expect(result.rashi.name, equals('Mesha'));
    });

    test('should identify April 12 as Meena (Pisces)', () {
      final result = getIndianZodiac(4, 12);
      expect(result.rashi.id, equals('meena'));
      expect(result.rashi.name, equals('Meena'));
    });

    test('should throw on invalid date', () {
      expect(
          () => getIndianZodiac(13, 1), throwsA(isA<ZodiacValidationError>()));
    });

    test('should return localized data', () {
      final result =
          getIndianZodiac(4, 14, options: IndianOptions(locale: 'bn'));
      expect(result.locale, equals('bn'));
      expect(result.localizedName, equals('মেষ'));
    });
  });
}
