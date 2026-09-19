/// Western Zodiac sign model.
///
/// Represents a single Western Zodiac sign with all associated metadata.
class ZodiacSign {
  /// Stable, language-independent identifier (e.g., "aries")
  final String id;

  /// English display name
  final String name;

  /// Symbol name (e.g., "Ram")
  final String symbol;

  /// Unicode zodiac symbol (e.g., "♈")
  final String unicodeSymbol;

  /// Date range for this sign
  final DateRange dateRange;

  /// Associated element ID (e.g., "fire")
  final String element;

  /// Associated modality ID (e.g., "cardinal")
  final String modality;

  /// Ruling planet information
  final RulingPlanetRef rulingPlanet;

  /// Traditional astrological description
  final String description;

  /// Characteristic keywords
  final List<String> keywords;

  /// Traditional strengths
  final List<String> strengths;

  /// Traditional weaknesses
  final List<String> weaknesses;

  /// Icon identifier
  final String iconId;

  const ZodiacSign({
    required this.id,
    required this.name,
    required this.symbol,
    required this.unicodeSymbol,
    required this.dateRange,
    required this.element,
    required this.modality,
    required this.rulingPlanet,
    required this.description,
    required this.keywords,
    required this.strengths,
    required this.weaknesses,
    required this.iconId,
  });
}

class DateRange {
  final int startMonth;
  final int startDay;
  final int endMonth;
  final int endDay;

  const DateRange({
    required this.startMonth,
    required this.startDay,
    required this.endMonth,
    required this.endDay,
  });
}

class RulingPlanetRef {
  final String traditional;
  final String modern;

  const RulingPlanetRef({
    required this.traditional,
    required this.modern,
  });
}
