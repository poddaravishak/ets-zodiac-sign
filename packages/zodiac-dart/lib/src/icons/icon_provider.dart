import '../models/zodiac_icon.dart';

final Map<String, String> _customIconMap = {};

/// Sets custom icon paths globally.
void setCustomIcons(Map<String, String> mapping) {
  _customIconMap.addAll(mapping);
}

/// Clears any globally set custom icons.
void clearCustomIcons() {
  _customIconMap.clear();
}

/// Resolves the Western Zodiac icon based on the requested mode.
ZodiacIcon getWesternIcon(String id, String mode) {
  if (mode == 'none') {
    return ZodiacIcon(id: id, type: 'none');
  }

  if (mode == 'custom') {
    return ZodiacIcon(id: id, type: 'custom', path: _customIconMap[id] ?? id);
  }

  return ZodiacIcon(
      id: id, type: 'builtin', svg: '<svg data-icon="western-$id"></svg>');
}

/// Resolves the Chinese Zodiac icon based on the requested mode.
ZodiacIcon getChineseIcon(String id, String mode) {
  if (mode == 'none') {
    return ZodiacIcon(id: id, type: 'none');
  }

  if (mode == 'custom') {
    return ZodiacIcon(id: id, type: 'custom', path: _customIconMap[id] ?? id);
  }

  return ZodiacIcon(
      id: id, type: 'builtin', svg: '<svg data-icon="chinese-$id"></svg>');
}

/// Resolves the Indian Zodiac icon by using its Western equivalent.
ZodiacIcon getIndianIcon(
    String rashiId, String westernEquivalent, String mode) {
  if (mode == 'none') {
    return ZodiacIcon(id: rashiId, type: 'none');
  }

  if (mode == 'custom') {
    return ZodiacIcon(
        id: rashiId,
        type: 'custom',
        path: _customIconMap[westernEquivalent] ?? westernEquivalent);
  }

  // Builtin returns SVG string placeholder pointing to the western icon
  return ZodiacIcon(
      id: rashiId,
      type: 'builtin',
      svg: '<svg data-icon="western-$westernEquivalent"></svg>');
}
