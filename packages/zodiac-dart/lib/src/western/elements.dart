import '../models/zodiac_element.dart';

const List<ZodiacElement> westernElements = [
  ZodiacElement(
      id: 'fire',
      name: 'Fire',
      system: 'western',
      members: ['aries', 'leo', 'sagittarius']),
  ZodiacElement(
      id: 'earth',
      name: 'Earth',
      system: 'western',
      members: ['taurus', 'virgo', 'capricorn']),
  ZodiacElement(
      id: 'air',
      name: 'Air',
      system: 'western',
      members: ['gemini', 'libra', 'aquarius']),
  ZodiacElement(
      id: 'water',
      name: 'Water',
      system: 'western',
      members: ['cancer', 'scorpio', 'pisces']),
];

final Map<String, ZodiacElement> _elementMap = {
  for (var e in westernElements) e.id: e
};

ZodiacElement getWesternElement(String id) {
  final el = _elementMap[id];
  if (el == null) throw Exception('Western element not found: "$id"');
  return el;
}
