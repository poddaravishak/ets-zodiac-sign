/// Chinese Zodiac animal model.
class ChineseAnimal {
  final String id;
  final String name;
  final String symbol;
  final int order;
  final String yinYang; // 'yin' | 'yang'
  final String fixedElement;
  final String description;
  final List<String> keywords;
  final List<String> strengths;
  final List<String> weaknesses;
  final List<String> compatible;
  final String iconId;

  const ChineseAnimal({
    required this.id,
    required this.name,
    required this.symbol,
    required this.order,
    required this.yinYang,
    required this.fixedElement,
    required this.description,
    required this.keywords,
    required this.strengths,
    required this.weaknesses,
    required this.compatible,
    required this.iconId,
  });
}
