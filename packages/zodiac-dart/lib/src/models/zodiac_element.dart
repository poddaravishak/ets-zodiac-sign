/// Zodiac element model.
class ZodiacElement {
  final String id;
  final String name;
  final String system; // 'western' | 'chinese'
  final List<String> members;

  const ZodiacElement({
    required this.id,
    required this.name,
    required this.system,
    required this.members,
  });
}
