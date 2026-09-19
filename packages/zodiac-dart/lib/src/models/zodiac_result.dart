import 'zodiac_sign.dart';
import 'zodiac_icon.dart';

/// Result of a Western Zodiac calculation.
class ZodiacResult {
  final ZodiacSign sign;
  final String? locale;
  final String? localizedName;
  final String? localizedDescription;
  final List<String>? localizedKeywords;
  final ZodiacIcon? icon;

  const ZodiacResult({
    required this.sign,
    this.locale,
    this.localizedName,
    this.localizedDescription,
    this.localizedKeywords,
    this.icon,
  });
}
