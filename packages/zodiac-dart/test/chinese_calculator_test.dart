import 'package:test/test.dart';
import 'package:ets_zodiac/zodiac.dart';

void main() {
  group('Chinese Calculator', () {
    group('getChineseZodiac (year based)', () {
      test('should identify 1984 as Rat year', () {
        final result = getChineseZodiac(1984);
        expect(result.animal.id, equals('rat'));
        expect(result.element, equals('wood'));
        expect(result.yinYang, equals('yang'));
      });

      test('should identify 2024 as Dragon year', () {
        final result = getChineseZodiac(2024);
        expect(result.animal.id, equals('dragon'));
        expect(result.element, equals('wood'));
        expect(result.yinYang, equals('yang'));
      });

      test('should include localized data if requested', () {
        final result =
            getChineseZodiac(2024, options: const ChineseOptions(locale: 'zh-CN'));
        expect(result.localizedName, equals('龙'));
      });

      test('should throw for years out of range', () {
        expect(() => getChineseZodiac(1899),
            throwsA(isA<ZodiacValidationError>()));
        expect(() => getChineseZodiac(2101),
            throwsA(isA<ZodiacValidationError>()));
      });
    });

    group('getChineseZodiacByDate (date based)', () {
      test('should correctly assign January 1, 2024 to Rabbit (previous year)',
          () {
        final date = DateTime(2024, 1, 1);
        final result = getChineseZodiacByDate(date);
        expect(result.animal.id, equals('rabbit')); // 2023 was Rabbit
      });

      test('should correctly assign February 11, 2024 to Dragon (after CNY)',
          () {
        final date = DateTime(2024, 2, 11);
        final result = getChineseZodiacByDate(date);
        expect(result.animal.id, equals('dragon'));
      });
    });
  });
}
