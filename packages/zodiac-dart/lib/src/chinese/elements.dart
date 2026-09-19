import '../models/zodiac_element.dart';

const List<ZodiacElement> chineseElements = [
  ZodiacElement(id: 'wood', name: 'Wood', system: 'chinese', members: []),
  ZodiacElement(id: 'fire', name: 'Fire', system: 'chinese', members: []),
  ZodiacElement(id: 'earth', name: 'Earth', system: 'chinese', members: []),
  ZodiacElement(id: 'metal', name: 'Metal', system: 'chinese', members: []),
  ZodiacElement(id: 'water', name: 'Water', system: 'chinese', members: []),
];

final Map<String, ZodiacElement> _elementMap = {
  for (var e in chineseElements) e.id: e
};

ZodiacElement getChineseElement(String id) {
  final el = _elementMap[id];
  if (el == null) throw Exception('Chinese element not found: "$id"');
  return el;
}
