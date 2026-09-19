import '../models/zodiac_modality.dart';

const List<ZodiacModality> westernModalities = [
  ZodiacModality(
      id: 'cardinal',
      name: 'Cardinal',
      members: ['aries', 'cancer', 'libra', 'capricorn']),
  ZodiacModality(
      id: 'fixed',
      name: 'Fixed',
      members: ['taurus', 'leo', 'scorpio', 'aquarius']),
  ZodiacModality(
      id: 'mutable',
      name: 'Mutable',
      members: ['gemini', 'virgo', 'sagittarius', 'pisces']),
];

final Map<String, ZodiacModality> _modalityMap = {
  for (var m in westernModalities) m.id: m
};

ZodiacModality getModality(String id) {
  final mod = _modalityMap[id];
  if (mod == null) throw Exception('Modality not found: "$id"');
  return mod;
}
