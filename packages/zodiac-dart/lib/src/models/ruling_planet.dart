/// Ruling planet model.
///
/// Represents a celestial body used as a ruling planet in Western astrology.
class RulingPlanet {
  /// Stable identifier (e.g., "mars").
  final String id;

  /// English display name.
  final String name;

  /// Unicode symbol (if applicable).
  final String? symbol;

  const RulingPlanet({
    required this.id,
    required this.name,
    this.symbol,
  });
}
