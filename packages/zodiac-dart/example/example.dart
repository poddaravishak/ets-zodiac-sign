import 'package:ets_zodiac/zodiac.dart';

void main() {
  print('--- Western Zodiac ---');
  final western = getWesternSign(3, 21);
  print('Sign: ${western.sign.name}');
  print('Element: ${western.sign.element}');
  print('Modality: ${western.sign.modality}');

  print('\n--- Chinese Zodiac ---');
  final date = DateTime(2024, 1, 1);
  final chinese = getChineseZodiacByDate(date);
  // January 1st, 2024 is still the Rabbit year (Before CNY)
  print('Animal: ${chinese.animal.name}');
  print('Element: ${chinese.element}');
  print('Yin/Yang: ${chinese.yinYang}');

  print('\n--- Localization (Spanish) ---');
  final localizedWestern =
      getWesternSign(3, 21, options: WesternOptions(locale: 'es'));
  print('Sign (ES): ${localizedWestern.localizedName}');

  print('\n--- Icons ---');
  final westernWithIcon = getWesternSign(3, 21);
  print('Icon SVG: ${westernWithIcon.icon?.svg}');
}
