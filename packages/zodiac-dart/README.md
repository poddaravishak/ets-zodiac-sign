# ets_zodiac

The official Dart and Flutter library for the [ETS Zodiac Sign](https://github.com/your-org/ets-zodiac) open-source SDK.

Provides robust, zero-dependency calculation of Western and Chinese Zodiac signs, complete with built-in localization and strict Lunar calendar boundary checking.

## Installation

Add this to your package's `pubspec.yaml` file:

```yaml
dependencies:
  ets_zodiac: ^0.1.0
```

## Usage

```dart
import 'package:ets_zodiac/zodiac.dart';

void main() {
  // Western Zodiac
  final western = getWesternSign(3, 21, options: WesternOptions(locale: 'es'));
  print(western.sign.name); // Aries
  print(western.localizedName); // Aries (Spanish)
  print(western.sign.element); // fire

  // Chinese Zodiac (Accurate Date Mapping)
  final date = DateTime(2024, 1, 1); // January 1, 2024 (Before CNY)
  final chinese = getChineseZodiacByDate(date, options: ChineseOptions(locale: 'zh-CN'));
  print(chinese.animal.name); // Rabbit (2023's animal)
  print(chinese.localizedName); // 兔
  print(chinese.element); // wood
  print(chinese.yinYang); // yin
}
```

## Features
* **Zero Dependencies**: Lightweight and framework agnostic (works in pure Dart or Flutter).
* **Accurate Chinese New Year Math**: Maps exact dates to Lunar Calendar year boundaries for 1900–2100.
* **Multi-Lingual**: Bundled translation for 11 languages (`en`, `zh-CN`, `es`, `hi`, `fr`, `ar`, `pt`, `ja`, `ru`, `de`, `bn`).
* **Icons**: Built-in SVG string generation or custom icon routing.

## Documentation
For complete API reference, please visit the main repository.
