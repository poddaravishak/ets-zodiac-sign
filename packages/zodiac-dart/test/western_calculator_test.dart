import 'package:test/test.dart';
import 'package:ets_zodiac/ets_zodiac.dart';

void main() {
  group('Western Calculator', () {
    test('should identify March 21 as Aries', () {
      final result = getWesternSign(3, 21);
      expect(result.sign.id, equals('aries'));
      expect(result.sign.element, equals('fire'));
    });

    test('should identify December 31 as Capricorn', () {
      final result = getWesternSign(12, 31);
      expect(result.sign.id, equals('capricorn'));
      expect(result.sign.element, equals('earth'));
    });

    test('should throw on invalid date', () {
      expect(
          () => getWesternSign(13, 1), throwsA(isA<ZodiacValidationError>()));
      expect(
          () => getWesternSign(2, 30), throwsA(isA<ZodiacValidationError>()));
    });

    test('should return localized data', () {
      final result =
          getWesternSign(3, 21, options: const WesternOptions(locale: 'zh-CN'));
      expect(result.locale, equals('zh-CN'));
      expect(result.localizedName, equals('白羊座'));
      expect(result.localizedKeywords, contains('自信'));
    });

    test('should fall back to English for unknown locale', () {
      final result =
          getWesternSign(3, 21, options: const WesternOptions(locale: 'xx-XX'));
      expect(
          result.locale, equals('en')); // falls back in result.locale correctly
      expect(result.localizedName, equals('Aries'));
    });
  });
}
