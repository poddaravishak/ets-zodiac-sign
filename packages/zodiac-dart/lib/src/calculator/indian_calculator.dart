import '../models/indian_rashi.dart';
import '../indian/rashis.dart';
import '../validation/validator.dart';
import '../localization/locale_manager.dart';
import '../icons/icon_provider.dart';
import '../models/zodiac_icon.dart';

class IndianOptions {
  final String? locale;
  final String iconMode;

  const IndianOptions({
    this.locale,
    this.iconMode = 'builtin',
  });
}

/// Determines the Indian Zodiac sign (Rashi) for a given month and day.
IndianResult getIndianZodiac(int month, int day, {IndianOptions? options}) {
  validateDate(month, day);

  var foundRashi = indianRashis[0];

  for (var rashi in indianRashis) {
    final startMonth = rashi.dateRange.startMonth;
    final startDay = rashi.dateRange.startDay;
    final endMonth = rashi.dateRange.endMonth;
    final endDay = rashi.dateRange.endDay;

    if ((month == startMonth && day >= startDay) ||
        (month == endMonth && day <= endDay)) {
      foundRashi = rashi;
      break;
    }
  }

  String? resolvedLocale;
  String? localizedName;

  if (options?.locale != null) {
    final locale = options!.locale!;
    resolvedLocale = getSupportedLocales().contains(locale) ? locale : 'en';

    localizedName =
        getLocaleText(locale, 'indian.${foundRashi.id}.name') as String? ??
            foundRashi.name;
  }

  ZodiacIcon? icon;
  final iconMode = options?.iconMode ?? 'builtin';
  if (iconMode != 'none') {
    icon = getIndianIcon(foundRashi.id, foundRashi.westernEquivalent, iconMode);
  }

  return IndianResult(
    rashi: foundRashi,
    locale: resolvedLocale,
    localizedName: localizedName,
    icon: icon,
  );
}
