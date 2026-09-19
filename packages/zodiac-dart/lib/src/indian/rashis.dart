import '../models/indian_rashi.dart';

/// All 12 Indian/Vedic Rashis with approximate sidereal boundaries.
const List<IndianRashi> indianRashis = [
  IndianRashi(
      id: 'mesha',
      name: 'Mesha',
      sanskritName: 'मेष',
      westernEquivalent: 'aries',
      dateRange:
          RashiDateRange(startMonth: 4, startDay: 13, endMonth: 5, endDay: 14)),
  IndianRashi(
      id: 'vrishabha',
      name: 'Vrishabha',
      sanskritName: 'वृषभ',
      westernEquivalent: 'taurus',
      dateRange:
          RashiDateRange(startMonth: 5, startDay: 15, endMonth: 6, endDay: 14)),
  IndianRashi(
      id: 'mithuna',
      name: 'Mithuna',
      sanskritName: 'मिथुन',
      westernEquivalent: 'gemini',
      dateRange:
          RashiDateRange(startMonth: 6, startDay: 15, endMonth: 7, endDay: 15)),
  IndianRashi(
      id: 'karka',
      name: 'Karka',
      sanskritName: 'कर्क',
      westernEquivalent: 'cancer',
      dateRange:
          RashiDateRange(startMonth: 7, startDay: 16, endMonth: 8, endDay: 16)),
  IndianRashi(
      id: 'simha',
      name: 'Simha',
      sanskritName: 'सिंह',
      westernEquivalent: 'leo',
      dateRange:
          RashiDateRange(startMonth: 8, startDay: 17, endMonth: 9, endDay: 16)),
  IndianRashi(
      id: 'kanya',
      name: 'Kanya',
      sanskritName: 'कन्या',
      westernEquivalent: 'virgo',
      dateRange: RashiDateRange(
          startMonth: 9, startDay: 17, endMonth: 10, endDay: 16)),
  IndianRashi(
      id: 'tula',
      name: 'Tula',
      sanskritName: 'तुला',
      westernEquivalent: 'libra',
      dateRange: RashiDateRange(
          startMonth: 10, startDay: 17, endMonth: 11, endDay: 15)),
  IndianRashi(
      id: 'vrischika',
      name: 'Vrischika',
      sanskritName: 'वृश्चिक',
      westernEquivalent: 'scorpio',
      dateRange: RashiDateRange(
          startMonth: 11, startDay: 16, endMonth: 12, endDay: 15)),
  IndianRashi(
      id: 'dhanu',
      name: 'Dhanu',
      sanskritName: 'धनु',
      westernEquivalent: 'sagittarius',
      dateRange: RashiDateRange(
          startMonth: 12, startDay: 16, endMonth: 1, endDay: 13)),
  IndianRashi(
      id: 'makara',
      name: 'Makara',
      sanskritName: 'मकर',
      westernEquivalent: 'capricorn',
      dateRange:
          RashiDateRange(startMonth: 1, startDay: 14, endMonth: 2, endDay: 12)),
  IndianRashi(
      id: 'kumbha',
      name: 'Kumbha',
      sanskritName: 'कुम्भ',
      westernEquivalent: 'aquarius',
      dateRange:
          RashiDateRange(startMonth: 2, startDay: 13, endMonth: 3, endDay: 13)),
  IndianRashi(
      id: 'meena',
      name: 'Meena',
      sanskritName: 'मीन',
      westernEquivalent: 'pisces',
      dateRange:
          RashiDateRange(startMonth: 3, startDay: 14, endMonth: 4, endDay: 12)),
];

final Map<String, IndianRashi> _rashiMap = {
  for (var rashi in indianRashis) rashi.id: rashi
};

IndianRashi getRashiById(String id) {
  final rashi = _rashiMap[id];
  if (rashi == null) {
    throw Exception('Indian Rashi not found: "$id"');
  }
  return rashi;
}
