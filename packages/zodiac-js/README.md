# ets-zodiac

The official JavaScript and TypeScript library for the [ETS Zodiac Sign](https://github.com/your-org/ets-zodiac) open-source SDK.

Provides robust, zero-dependency calculation of Western and Chinese Zodiac signs, complete with built-in localization and strict Lunar calendar boundary checking.

## Installation

```bash
npm install ets-zodiac
# or
yarn add ets-zodiac
```

## Usage

```typescript
import { getWesternSign, getChineseZodiacByDate } from 'ets-zodiac';

// Western Zodiac
const western = getWesternSign(3, 21, { locale: 'es' });
console.log(western.sign.name); // Aries
console.log(western.localizedName); // Aries (Spanish)
console.log(western.sign.element); // fire

// Chinese Zodiac (Accurate Date Mapping)
const date = new Date(2024, 0, 1); // January 1, 2024 (Before CNY)
const chinese = getChineseZodiacByDate(date, { locale: 'zh-CN' });
console.log(chinese.animal.name); // Rabbit (2023's animal)
console.log(chinese.localizedName); // 兔
console.log(chinese.element); // wood
console.log(chinese.yinYang); // yin
```

## Features
* **Zero Dependencies**: Incredibly lightweight.
* **Accurate Chinese New Year Math**: Maps exact dates to Lunar Calendar year boundaries for 1900–2100.
* **Multi-Lingual**: Bundled translation for 11 languages (`en`, `zh-CN`, `es`, `hi`, `fr`, `ar`, `pt`, `ja`, `ru`, `de`, `bn`).
* **Icons**: Built-in SVG string generation or custom icon routing.

## Documentation
For complete API reference, please visit the main repository.
