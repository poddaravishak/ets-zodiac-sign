import '../models/zodiac_result.dart';
import '../western/signs.dart';
import '../validation/validator.dart';
import '../localization/locale_manager.dart';
import '../icons/icon_provider.dart';

class WesternOptions {
  final String? locale;
  final String iconMode; // 'none', 'builtin', 'custom'

  const WesternOptions({
    this.locale,
    this.iconMode = 'builtin',
  });
}

/// Determines the Western Zodiac sign for a given month and day.
ZodiacResult getWesternSign(int month, int day, {WesternOptions? options}) {
  validateDate(month, day);

  var foundSign = westernSigns[0];

  for (var sign in westernSigns) {
    final startMonth = sign.dateRange.startMonth;
    final startDay = sign.dateRange.startDay;
    final endMonth = sign.dateRange.endMonth;
    final endDay = sign.dateRange.endDay;

    if ((month == startMonth && day >= startDay) ||
        (month == endMonth && day <= endDay)) {
      foundSign = sign;
      break;
    }
  }

  String? resolvedLocale;
  String? localizedName;
  String? localizedDescription;
  List<String>? localizedKeywords;

  if (options?.locale != null) {
    final locale = options!.locale!;
    resolvedLocale = getSupportedLocales().contains(locale) ? locale : 'en';

    localizedName =
        getLocaleText(locale, 'western.${foundSign.id}.name') as String? ??
            foundSign.name;
    localizedDescription =
        getLocaleText(locale, 'western.${foundSign.id}.description')
                as String? ??
            foundSign.description;

    final keywords = getLocaleText(locale, 'western.${foundSign.id}.keywords');
    if (keywords is List) {
      localizedKeywords = keywords.cast<String>();
    } else {
      localizedKeywords = foundSign.keywords;
    }
  }

  final iconMode = options?.iconMode ?? 'builtin';
  final icon =
      iconMode != 'none' ? getWesternIcon(foundSign.id, iconMode) : null;

  return ZodiacResult(
    sign: foundSign,
    locale: resolvedLocale,
    localizedName: localizedName,
    localizedDescription: localizedDescription,
    localizedKeywords: localizedKeywords,
    icon: icon,
  );
}
