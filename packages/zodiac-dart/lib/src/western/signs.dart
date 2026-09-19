import '../models/zodiac_sign.dart';

/// All 12 Western Zodiac signs in order.
const List<ZodiacSign> westernSigns = [
  ZodiacSign(
    id: 'aries',
    name: 'Aries',
    symbol: 'Ram',
    unicodeSymbol: '♈',
    dateRange: DateRange(startMonth: 3, startDay: 21, endMonth: 4, endDay: 19),
    element: 'fire',
    modality: 'cardinal',
    rulingPlanet: RulingPlanetRef(traditional: 'mars', modern: 'mars'),
    description:
        'Aries is traditionally associated with courage, determination, and enthusiasm. As the first sign of the zodiac, it is often linked to leadership, initiative, and a pioneering spirit in astrological tradition.',
    keywords: [
      'courageous',
      'determined',
      'confident',
      'enthusiastic',
      'optimistic',
      'honest',
      'passionate'
    ],
    strengths: [
      'Courageous',
      'Determined',
      'Confident',
      'Enthusiastic',
      'Optimistic',
      'Honest'
    ],
    weaknesses: [
      'Impatient',
      'Moody',
      'Short-tempered',
      'Impulsive',
      'Aggressive'
    ],
    iconId: 'aries',
  ),
  ZodiacSign(
    id: 'taurus',
    name: 'Taurus',
    symbol: 'Bull',
    unicodeSymbol: '♉',
    dateRange: DateRange(startMonth: 4, startDay: 20, endMonth: 5, endDay: 20),
    element: 'earth',
    modality: 'fixed',
    rulingPlanet: RulingPlanetRef(traditional: 'venus', modern: 'venus'),
    description:
        'Taurus is traditionally associated with reliability, patience, and practicality. In astrological tradition, it is linked to a love of beauty, comfort, and stability.',
    keywords: [
      'reliable',
      'patient',
      'practical',
      'devoted',
      'responsible',
      'stable'
    ],
    strengths: [
      'Reliable',
      'Patient',
      'Practical',
      'Devoted',
      'Responsible',
      'Stable'
    ],
    weaknesses: ['Stubborn', 'Possessive', 'Uncompromising', 'Materialistic'],
    iconId: 'taurus',
  ),
  ZodiacSign(
    id: 'gemini',
    name: 'Gemini',
    symbol: 'Twins',
    unicodeSymbol: '♊',
    dateRange: DateRange(startMonth: 5, startDay: 21, endMonth: 6, endDay: 20),
    element: 'air',
    modality: 'mutable',
    rulingPlanet: RulingPlanetRef(traditional: 'mercury', modern: 'mercury'),
    description:
        'Gemini is traditionally associated with adaptability, communication, and intellectual curiosity. In astrological tradition, it is linked to versatility, wit, and a love of learning.',
    keywords: [
      'gentle',
      'affectionate',
      'curious',
      'adaptable',
      'quick-learning',
      'expressive'
    ],
    strengths: [
      'Gentle',
      'Affectionate',
      'Curious',
      'Adaptable',
      'Quick learner'
    ],
    weaknesses: ['Nervous', 'Inconsistent', 'Indecisive', 'Superficial'],
    iconId: 'gemini',
  ),
  ZodiacSign(
    id: 'cancer',
    name: 'Cancer',
    symbol: 'Crab',
    unicodeSymbol: '♋',
    dateRange: DateRange(startMonth: 6, startDay: 21, endMonth: 7, endDay: 22),
    element: 'water',
    modality: 'cardinal',
    rulingPlanet: RulingPlanetRef(traditional: 'moon', modern: 'moon'),
    description:
        'Cancer is traditionally associated with deep emotional sensitivity, intuition, and strong family bonds. In astrological tradition, it is linked to nurturing, protectiveness, and loyalty.',
    keywords: [
      'tenacious',
      'highly imaginative',
      'loyal',
      'emotional',
      'sympathetic',
      'persuasive'
    ],
    strengths: [
      'Tenacious',
      'Highly imaginative',
      'Loyal',
      'Emotional',
      'Sympathetic'
    ],
    weaknesses: [
      'Moody',
      'Pessimistic',
      'Suspicious',
      'Manipulative',
      'Insecure'
    ],
    iconId: 'cancer',
  ),
  ZodiacSign(
    id: 'leo',
    name: 'Leo',
    symbol: 'Lion',
    unicodeSymbol: '♌',
    dateRange: DateRange(startMonth: 7, startDay: 23, endMonth: 8, endDay: 22),
    element: 'fire',
    modality: 'fixed',
    rulingPlanet: RulingPlanetRef(traditional: 'sun', modern: 'sun'),
    description:
        'Leo is traditionally associated with creativity, warmth, and self-confidence. In astrological tradition, it is linked to generosity, leadership, and a dramatic, passionate nature.',
    keywords: [
      'creative',
      'passionate',
      'generous',
      'warm-hearted',
      'cheerful',
      'humorous'
    ],
    strengths: [
      'Creative',
      'Passionate',
      'Generous',
      'Warm-hearted',
      'Cheerful',
      'Humorous'
    ],
    weaknesses: ['Arrogant', 'Stubborn', 'Self-centered', 'Lazy', 'Inflexible'],
    iconId: 'leo',
  ),
  ZodiacSign(
    id: 'virgo',
    name: 'Virgo',
    symbol: 'Maiden',
    unicodeSymbol: '♍',
    dateRange: DateRange(startMonth: 8, startDay: 23, endMonth: 9, endDay: 22),
    element: 'earth',
    modality: 'mutable',
    rulingPlanet: RulingPlanetRef(traditional: 'mercury', modern: 'mercury'),
    description:
        'Virgo is traditionally associated with analytical thinking, attention to detail, and a methodical approach to life. In astrological tradition, it is linked to service, practicality, and a desire for order.',
    keywords: [
      'loyal',
      'analytical',
      'kind',
      'hardworking',
      'practical',
      'methodical'
    ],
    strengths: ['Loyal', 'Analytical', 'Kind', 'Hardworking', 'Practical'],
    weaknesses: [
      'Shy',
      'Overly critical',
      'Worry-prone',
      'All work and no play'
    ],
    iconId: 'virgo',
  ),
  ZodiacSign(
    id: 'libra',
    name: 'Libra',
    symbol: 'Scales',
    unicodeSymbol: '♎',
    dateRange: DateRange(startMonth: 9, startDay: 23, endMonth: 10, endDay: 22),
    element: 'air',
    modality: 'cardinal',
    rulingPlanet: RulingPlanetRef(traditional: 'venus', modern: 'venus'),
    description:
        'Libra is traditionally associated with balance, harmony, and a strong sense of justice. In astrological tradition, it is linked to diplomacy, social grace, and an appreciation for beauty and partnership.',
    keywords: [
      'cooperative',
      'diplomatic',
      'gracious',
      'fair-minded',
      'social',
      'harmonious'
    ],
    strengths: [
      'Cooperative',
      'Diplomatic',
      'Gracious',
      'Fair-minded',
      'Social'
    ],
    weaknesses: [
      'Indecisive',
      'Avoids confrontation',
      'Self-pitying',
      'Easily influenced'
    ],
    iconId: 'libra',
  ),
  ZodiacSign(
    id: 'scorpio',
    name: 'Scorpio',
    symbol: 'Scorpion',
    unicodeSymbol: '♏',
    dateRange:
        DateRange(startMonth: 10, startDay: 23, endMonth: 11, endDay: 21),
    element: 'water',
    modality: 'fixed',
    rulingPlanet: RulingPlanetRef(traditional: 'mars', modern: 'pluto'),
    description:
        'Scorpio is traditionally associated with intensity, passion, and resourcefulness. In astrological tradition, it is linked to determination, emotional depth, and transformative power.',
    keywords: [
      'resourceful',
      'brave',
      'passionate',
      'stubborn',
      'strategic',
      'intense'
    ],
    strengths: [
      'Resourceful',
      'Brave',
      'Passionate',
      'Stubborn',
      'A true friend'
    ],
    weaknesses: [
      'Distrusting',
      'Jealous',
      'Secretive',
      'Violent',
      'Manipulative'
    ],
    iconId: 'scorpio',
  ),
  ZodiacSign(
    id: 'sagittarius',
    name: 'Sagittarius',
    symbol: 'Archer',
    unicodeSymbol: '♐',
    dateRange:
        DateRange(startMonth: 11, startDay: 22, endMonth: 12, endDay: 21),
    element: 'fire',
    modality: 'mutable',
    rulingPlanet: RulingPlanetRef(traditional: 'jupiter', modern: 'jupiter'),
    description:
        'Sagittarius is traditionally associated with optimism, freedom, and a love of travel and philosophy. In astrological tradition, it is linked to adventure, honesty, and intellectual exploration.',
    keywords: [
      'generous',
      'idealistic',
      'great sense of humor',
      'adventurous',
      'philosophical'
    ],
    strengths: [
      'Generous',
      'Idealistic',
      'Great sense of humor',
      'Adventurous'
    ],
    weaknesses: [
      'Promises more than can deliver',
      'Impatient',
      'Tactless',
      'Restless'
    ],
    iconId: 'sagittarius',
  ),
  ZodiacSign(
    id: 'capricorn',
    name: 'Capricorn',
    symbol: 'Sea-Goat',
    unicodeSymbol: '♑',
    dateRange: DateRange(startMonth: 12, startDay: 22, endMonth: 1, endDay: 19),
    element: 'earth',
    modality: 'cardinal',
    rulingPlanet: RulingPlanetRef(traditional: 'saturn', modern: 'saturn'),
    description:
        'Capricorn is traditionally associated with discipline, responsibility, and ambition. In astrological tradition, it is linked to self-control, good management, and a practical, grounded approach to life.',
    keywords: [
      'responsible',
      'disciplined',
      'self-control',
      'good managers',
      'ambitious'
    ],
    strengths: ['Responsible', 'Disciplined', 'Self-control', 'Good managers'],
    weaknesses: [
      'Know-it-all',
      'Unforgiving',
      'Condescending',
      'Expecting the worst'
    ],
    iconId: 'capricorn',
  ),
  ZodiacSign(
    id: 'aquarius',
    name: 'Aquarius',
    symbol: 'Water Bearer',
    unicodeSymbol: '♒',
    dateRange: DateRange(startMonth: 1, startDay: 20, endMonth: 2, endDay: 18),
    element: 'air',
    modality: 'fixed',
    rulingPlanet: RulingPlanetRef(traditional: 'saturn', modern: 'uranus'),
    description:
        'Aquarius is traditionally associated with progressive thinking, independence, and humanitarianism. In astrological tradition, it is linked to originality, innovation, and a desire for social change.',
    keywords: [
      'progressive',
      'original',
      'independent',
      'humanitarian',
      'inventive'
    ],
    strengths: ['Progressive', 'Original', 'Independent', 'Humanitarian'],
    weaknesses: [
      'Runs from emotional expression',
      'Temperamental',
      'Uncompromising',
      'Aloof'
    ],
    iconId: 'aquarius',
  ),
  ZodiacSign(
    id: 'pisces',
    name: 'Pisces',
    symbol: 'Fish',
    unicodeSymbol: '♓',
    dateRange: DateRange(startMonth: 2, startDay: 19, endMonth: 3, endDay: 20),
    element: 'water',
    modality: 'mutable',
    rulingPlanet: RulingPlanetRef(traditional: 'jupiter', modern: 'neptune'),
    description:
        'Pisces is traditionally associated with compassion, artistic talent, and deep intuition. In astrological tradition, it is linked to empathy, wisdom, and a strong connection to the emotional and spiritual world.',
    keywords: [
      'compassionate',
      'artistic',
      'intuitive',
      'gentle',
      'wise',
      'musical'
    ],
    strengths: [
      'Compassionate',
      'Artistic',
      'Intuitive',
      'Gentle',
      'Wise',
      'Musical'
    ],
    weaknesses: [
      'Fearful',
      'Overly trusting',
      'Sad',
      'Desire to escape reality',
      'Easily led'
    ],
    iconId: 'pisces',
  ),
];

final Map<String, ZodiacSign> _signMap = {
  for (var sign in westernSigns) sign.id: sign
};

ZodiacSign getSignById(String id) {
  final sign = _signMap[id];
  if (sign == null) {
    throw Exception('Zodiac sign not found: "$id"');
  }
  return sign;
}
