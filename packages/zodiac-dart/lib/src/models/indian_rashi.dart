import 'zodiac_icon.dart';

class IndianRashi {
  final String id;
  final String name;
  final String sanskritName;
  final String westernEquivalent;
  final RashiDateRange dateRange;

  const IndianRashi({
    required this.id,
    required this.name,
    required this.sanskritName,
    required this.westernEquivalent,
    required this.dateRange,
  });
}

class RashiDateRange {
  final int startMonth;
  final int startDay;
  final int endMonth;
  final int endDay;

  const RashiDateRange({
    required this.startMonth,
    required this.startDay,
    required this.endMonth,
    required this.endDay,
  });
}

class IndianResult {
  final IndianRashi rashi;
  final String? locale;
  final String? localizedName;
  final ZodiacIcon? icon;

  const IndianResult({
    required this.rashi,
    this.locale,
    this.localizedName,
    this.icon,
  });
}
