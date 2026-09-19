# ETS Zodiac Sign

A cross-platform, open-source Zodiac SDK providing canonical **Western Zodiac** and **Chinese Zodiac** data, strict date calculations, localization, and optional icons.

This repository is a monorepo that houses the canonical dataset (`core-data/`) alongside framework-specific libraries:

* [**ets-zodiac**](packages/zodiac-js/README.md) - The JavaScript / TypeScript library (NPM).
* [**ets_zodiac**](packages/zodiac-dart/README.md) - The Dart / Flutter library (pub.dev).

## Architecture

This project is built on the philosophy of a **Single Source of Truth**. All zodiac dates, translation strings, and cycle math constants live as pure JSON in `core-data/`. Build scripts compile this canonical data directly into the platform packages, ensuring that both TypeScript and Dart implementations behave identically and have **zero runtime dependencies**.

## Features

* **Western Zodiac**: Calculates the correct sign, element, and modality.
* **Chinese Zodiac**: Mathematically maps Gregorian dates to the exact Lunar Calendar bounds (1900–2100) using a bundled mapping. Provides animal, element, yin/yang, and cycle position.
* **Localization**: Bundled translations in 11 languages (English, Chinese, Spanish, Hindi, French, Arabic, Portuguese, Japanese, Russian, German, Bengali).
* **Icons**: Centralized SVG and PNG icons, cleanly integrated into the APIs.
* **Strict Validation**: Guardrails against impossible dates.
* **Open Source**: MIT Licensed.

## Getting Started

Choose your platform:
* [NPM / JavaScript / TypeScript](packages/zodiac-js/README.md)
* [pub.dev / Dart / Flutter](packages/zodiac-dart/README.md)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md).

## License

MIT License.
