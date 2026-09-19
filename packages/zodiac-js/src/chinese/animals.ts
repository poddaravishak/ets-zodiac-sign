/**
 * Chinese Zodiac animals data module.
 *
 * Embeds all 12 Chinese Zodiac animal definitions as TypeScript constants
 * derived from core-data/chinese/animals.json.
 */

import type { ChineseAnimal } from '../models/chinese-animal';

/** All 12 Chinese Zodiac animals in cycle order. */
export const CHINESE_ANIMALS: readonly ChineseAnimal[] = [
  {
    id: 'rat', name: 'Rat', symbol: '🐀', order: 1,
    yinYang: 'yang', fixedElement: 'water',
    description: 'The Rat is traditionally associated with cleverness, resourcefulness, and adaptability in Chinese astrological tradition. People born in the Year of the Rat are often described as quick-witted, charming, and ambitious.',
    keywords: ['clever', 'resourceful', 'adaptable', 'quick-witted', 'charming'],
    strengths: ['Intelligent', 'Adaptable', 'Quick-witted', 'Charming', 'Artistic', 'Sociable'],
    weaknesses: ['Cunning', 'Stubborn', 'Selfish', 'Manipulative'],
    compatible: ['dragon', 'monkey', 'ox'],
    iconId: 'rat',
  },
  {
    id: 'ox', name: 'Ox', symbol: '🐂', order: 2,
    yinYang: 'yin', fixedElement: 'earth',
    description: 'The Ox is traditionally associated with diligence, dependability, and strength in Chinese astrological tradition. People born in the Year of the Ox are often described as hardworking, honest, and patient.',
    keywords: ['diligent', 'dependable', 'strong', 'determined', 'honest'],
    strengths: ['Diligent', 'Dependable', 'Strong', 'Determined', 'Honest', 'Patient'],
    weaknesses: ['Stubborn', 'Narrow-minded', 'Materialistic', 'Rigid'],
    compatible: ['rat', 'snake', 'rooster'],
    iconId: 'ox',
  },
  {
    id: 'tiger', name: 'Tiger', symbol: '🐅', order: 3,
    yinYang: 'yang', fixedElement: 'wood',
    description: 'The Tiger is traditionally associated with bravery, competitiveness, and confidence in Chinese astrological tradition. People born in the Year of the Tiger are often described as courageous, charismatic, and natural leaders.',
    keywords: ['brave', 'competitive', 'confident', 'charismatic', 'courageous'],
    strengths: ['Brave', 'Confident', 'Competitive', 'Charismatic', 'Generous'],
    weaknesses: ['Aggressive', 'Short-tempered', 'Reckless', 'Impatient'],
    compatible: ['dragon', 'horse', 'pig'],
    iconId: 'tiger',
  },
  {
    id: 'rabbit', name: 'Rabbit', symbol: '🐇', order: 4,
    yinYang: 'yin', fixedElement: 'wood',
    description: 'The Rabbit is traditionally associated with gentleness, elegance, and compassion in Chinese astrological tradition. People born in the Year of the Rabbit are often described as kind, responsible, and artistic.',
    keywords: ['gentle', 'elegant', 'compassionate', 'kind', 'artistic'],
    strengths: ['Gentle', 'Elegant', 'Compassionate', 'Responsible', 'Artistic'],
    weaknesses: ['Overly cautious', 'Hesitant', 'Stubborn', 'Superficial'],
    compatible: ['goat', 'monkey', 'dog', 'pig'],
    iconId: 'rabbit',
  },
  {
    id: 'dragon', name: 'Dragon', symbol: '🐉', order: 5,
    yinYang: 'yang', fixedElement: 'earth',
    description: 'The Dragon is traditionally the most revered sign in Chinese astrological tradition, associated with power, strength, and good fortune. People born in the Year of the Dragon are often described as ambitious, energetic, and charismatic.',
    keywords: ['powerful', 'ambitious', 'energetic', 'charismatic', 'lucky'],
    strengths: ['Confident', 'Intelligent', 'Ambitious', 'Enthusiastic', 'Energetic'],
    weaknesses: ['Arrogant', 'Tactless', 'Quick-tempered', 'Impatient'],
    compatible: ['rooster', 'rat', 'monkey'],
    iconId: 'dragon',
  },
  {
    id: 'snake', name: 'Snake', symbol: '🐍', order: 6,
    yinYang: 'yin', fixedElement: 'fire',
    description: 'The Snake is traditionally associated with wisdom, intuition, and sophistication in Chinese astrological tradition. People born in the Year of the Snake are often described as intelligent, graceful, and analytical.',
    keywords: ['wise', 'intuitive', 'sophisticated', 'intelligent', 'graceful'],
    strengths: ['Intelligent', 'Wise', 'Graceful', 'Determined', 'Analytical'],
    weaknesses: ['Jealous', 'Suspicious', 'Cunning', 'Materialistic'],
    compatible: ['dragon', 'rooster', 'ox'],
    iconId: 'snake',
  },
  {
    id: 'horse', name: 'Horse', symbol: '🐎', order: 7,
    yinYang: 'yang', fixedElement: 'fire',
    description: 'The Horse is traditionally associated with energy, freedom, and enthusiasm in Chinese astrological tradition. People born in the Year of the Horse are often described as active, animated, and independent.',
    keywords: ['energetic', 'free-spirited', 'enthusiastic', 'active', 'independent'],
    strengths: ['Energetic', 'Active', 'Animated', 'Warm-hearted', 'Enthusiastic'],
    weaknesses: ['Impatient', 'Short-tempered', 'Wasteful', 'Stubborn'],
    compatible: ['tiger', 'goat', 'rabbit'],
    iconId: 'horse',
  },
  {
    id: 'goat', name: 'Goat', symbol: '🐐', order: 8,
    yinYang: 'yin', fixedElement: 'earth',
    description: 'The Goat is traditionally associated with creativity, gentleness, and compassion in Chinese astrological tradition. People born in the Year of the Goat are often described as calm, reliable, and sympathetic.',
    keywords: ['creative', 'gentle', 'compassionate', 'calm', 'reliable'],
    strengths: ['Calm', 'Gentle', 'Sympathetic', 'Creative', 'Resilient'],
    weaknesses: ['Indecisive', 'Timid', 'Pessimistic', 'Over-sensitive'],
    compatible: ['rabbit', 'horse', 'pig'],
    iconId: 'goat',
  },
  {
    id: 'monkey', name: 'Monkey', symbol: '🐒', order: 9,
    yinYang: 'yang', fixedElement: 'metal',
    description: 'The Monkey is traditionally associated with wit, intelligence, and playfulness in Chinese astrological tradition. People born in the Year of the Monkey are often described as clever, inventive, and versatile.',
    keywords: ['witty', 'intelligent', 'playful', 'clever', 'inventive'],
    strengths: ['Sharp', 'Smart', 'Curious', 'Clever', 'Inventive', 'Versatile'],
    weaknesses: ['Erratic', 'Deceptive', 'Suspicious', 'Selfish'],
    compatible: ['ox', 'rabbit', 'dragon', 'rat'],
    iconId: 'monkey',
  },
  {
    id: 'rooster', name: 'Rooster', symbol: '🐓', order: 10,
    yinYang: 'yin', fixedElement: 'metal',
    description: 'The Rooster is traditionally associated with confidence, honesty, and punctuality in Chinese astrological tradition. People born in the Year of the Rooster are often described as observant, hardworking, and courageous.',
    keywords: ['confident', 'honest', 'punctual', 'observant', 'hardworking'],
    strengths: ['Observant', 'Hardworking', 'Courageous', 'Talented', 'Confident'],
    weaknesses: ['Vain', 'Arrogant', 'Reckless', 'Impatient'],
    compatible: ['ox', 'snake', 'dragon'],
    iconId: 'rooster',
  },
  {
    id: 'dog', name: 'Dog', symbol: '🐕', order: 11,
    yinYang: 'yang', fixedElement: 'earth',
    description: 'The Dog is traditionally associated with loyalty, honesty, and kindness in Chinese astrological tradition. People born in the Year of the Dog are often described as faithful, courageous, and reliable.',
    keywords: ['loyal', 'honest', 'kind', 'faithful', 'courageous'],
    strengths: ['Loyal', 'Honest', 'Amiable', 'Kind', 'Cautious', 'Prudent'],
    weaknesses: ['Anxious', 'Pessimistic', 'Stubborn', 'Sensitive'],
    compatible: ['rabbit', 'tiger', 'horse'],
    iconId: 'dog',
  },
  {
    id: 'pig', name: 'Pig', symbol: '🐷', order: 12,
    yinYang: 'yin', fixedElement: 'water',
    description: 'The Pig is traditionally associated with generosity, compassion, and diligence in Chinese astrological tradition. People born in the Year of the Pig are often described as warm-hearted, good-natured, and dependable.',
    keywords: ['generous', 'compassionate', 'diligent', 'warm-hearted', 'dependable'],
    strengths: ['Compassionate', 'Generous', 'Diligent', 'Warm-hearted', 'Dependable'],
    weaknesses: ['Naive', 'Gullible', 'Materialistic', 'Lazy'],
    compatible: ['tiger', 'rabbit', 'goat'],
    iconId: 'pig',
  },
] as const;

/** Map of animal ID → ChineseAnimal for O(1) lookup. */
const animalMap = new Map<string, ChineseAnimal>(
  CHINESE_ANIMALS.map((a) => [a.id, a]),
);

/** Returns all 12 Chinese Zodiac animals. */
export function getAllAnimals(): readonly ChineseAnimal[] {
  return CHINESE_ANIMALS;
}

/** Returns a Chinese Zodiac animal by its stable ID. Throws if not found. */
export function getAnimalById(id: string): ChineseAnimal {
  const animal = animalMap.get(id);
  if (!animal) {
    throw new Error(`Chinese zodiac animal not found: "${id}"`);
  }
  return animal;
}
