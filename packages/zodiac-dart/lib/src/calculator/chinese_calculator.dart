import '../models/chinese_year.dart';
import '../chinese/cycle.dart';
import '../chinese/animals.dart';
import '../validation/validator.dart';
import '../localization/locale_manager.dart';
import '../icons/icon_provider.dart';

class ChineseOptions {
  final String? locale;
  final String iconMode; // 'none', 'builtin', 'custom'

  const ChineseOptions({
    this.locale,
    this.iconMode = 'builtin',
  });
}

/// Determines the Chinese Zodiac for a given Gregorian year (approximation).
ChineseYear getChineseZodiac(int year, {ChineseOptions? options}) {
  validateYear(year);
  return _calculateChineseZodiac(year, year, options);
}

/// Determines the accurate Chinese Zodiac for a given Gregorian date.
ChineseYear getChineseZodiacByDate(DateTime date, {ChineseOptions? options}) {
  final year = date.year;
  final month = date.month;
  final day = date.day;

  validateYear(year);
  validateDate(month, day);

  final chineseYearInt = getChineseYear(year, month, day);
  return _calculateChineseZodiac(chineseYearInt, year, options);
}

ChineseYear _calculateChineseZodiac(
    int chineseYearInt, int gregorianYear, ChineseOptions? options) {
  final animalId = getAnimalForYear(chineseYearInt);
  final animal = getAnimalById(animalId);

  final stemResult = getStemForYear(chineseYearInt);
  final cyclePosition = getCyclePosition(chineseYearInt);

  String? resolvedLocale;
  String? localizedName;
  String? localizedElement;

  if (options?.locale != null) {
    final locale = options!.locale!;
    resolvedLocale = getSupportedLocales().contains(locale) ? locale : 'en';

    localizedName =
        getLocaleText(locale, 'chinese.$animalId.name') as String? ??
            animal.name;
    localizedElement =
        getLocaleText(locale, 'chinese.element.${stemResult.element}')
                as String? ??
            stemResult.element;
  }

  final iconMode = options?.iconMode ?? 'builtin';
  final icon = iconMode != 'none' ? getChineseIcon(animalId, iconMode) : null;

  return ChineseYear(
    animal: animal,
    element: stemResult.element,
    yinYang: stemResult.yinYang,
    cyclePosition: cyclePosition,
    year: gregorianYear,
    locale: resolvedLocale,
    localizedName: localizedName,
    localizedElement: localizedElement,
    icon: icon,
  );
}
