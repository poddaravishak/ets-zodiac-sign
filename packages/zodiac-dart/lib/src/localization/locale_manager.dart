import 'locale_data.dart';

class ZodiacLocaleError implements Exception {
  final String message;
  ZodiacLocaleError(this.message);
  @override
  String toString() => 'ZodiacLocaleError: $message';
}

String _defaultLocale = 'en';

/// Sets the default fallback locale (must be one of the supported locales).
void setDefaultLocale(String locale) {
  if (!supportedLocales.contains(locale)) {
    throw ZodiacLocaleError('Unsupported locale: "$locale"');
  }
  _defaultLocale = locale;
}

/// Returns a list of all supported locales.
List<String> getSupportedLocales() {
  return supportedLocales;
}

/// Gets a localized string or array by key.
/// If the key is not found in the requested locale, it falls back to 'en'.
dynamic getLocaleText(String locale, String key) {
  String targetLocale = locale;
  if (!supportedLocales.contains(targetLocale)) {
    targetLocale = _defaultLocale;
  }

  final data = localeData[targetLocale];
  if (data != null && data.containsKey(key)) {
    return data[key];
  }

  if (targetLocale != 'en') {
    final enData = localeData['en'];
    if (enData != null && enData.containsKey(key)) {
      return enData[key];
    }
  }

  return null;
}
