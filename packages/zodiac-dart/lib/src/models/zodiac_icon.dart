/// Zodiac icon model.
class ZodiacIcon {
  final String id;
  final String type; // 'builtin' | 'custom' | 'none'
  final String? svg;
  final String? path;

  const ZodiacIcon({
    required this.id,
    required this.type,
    this.svg,
    this.path,
  });
}
