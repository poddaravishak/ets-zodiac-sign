import 'chinese_animal.dart';
import 'zodiac_icon.dart';

/// Chinese Zodiac year result.
class ChineseYear {
  final ChineseAnimal animal;
  final String element;
  final String yinYang; // 'yin' | 'yang'
  final int cyclePosition;
  final int year;
  final String? locale;
  final String? localizedName;
  final String? localizedElement;
  final ZodiacIcon? icon;

  const ChineseYear({
    required this.animal,
    required this.element,
    required this.yinYang,
    required this.cyclePosition,
    required this.year,
    this.locale,
    this.localizedName,
    this.localizedElement,
    this.icon,
  });
}
