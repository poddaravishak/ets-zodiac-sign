# Contributing to ETS-Zodiac-Sign

Thank you for your interest in contributing! This guide will help you get started.

---

## 📋 Code of Conduct

Please be respectful and constructive in all interactions.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x (for zodiac-js)
- **Dart SDK** >= 3.0.0 (for zodiac-dart)
- **Git**

### Clone the Repository

```bash
git clone https://github.com/your-org/ets-zodiac-sign.git
cd ets-zodiac-sign
```

### Setup zodiac-js

```bash
cd packages/zodiac-js
npm install
npm test
```

### Setup zodiac-dart

```bash
cd packages/zodiac-dart
dart pub get
dart test
```

---

## 🌿 Branching Strategy

- `main` — Stable release branch
- `develop` — Integration branch
- `feature/*` — Feature branches
- `fix/*` — Bug fix branches

### Workflow

1. Fork the repository
2. Create a feature branch from `develop`
3. Make your changes
4. Write/update tests
5. Submit a pull request to `develop`

---

## 📝 Commit Messages

Use clear, descriptive commit messages:

```
feat(western): add boundary date handling for Capricorn
fix(chinese): correct CNY date for 2025
docs: update localization guide
test(validation): add tests for invalid month input
chore: update dev dependencies
```

---

## ✅ Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows existing style conventions
- [ ] All tests pass (`npm test` / `dart test`)
- [ ] TypeScript strict mode passes (zero errors)
- [ ] Dart analyzer passes (zero warnings)
- [ ] New features include tests
- [ ] Documentation is updated if needed
- [ ] CHANGELOG.md is updated

---

## 🧪 Testing

### Running Tests

```bash
# JavaScript/TypeScript
cd packages/zodiac-js
npm test

# Dart
cd packages/zodiac-dart
dart test
```

### Test Coverage

- All calculation boundary dates must be tested
- All 12 Western signs and 12 Chinese animals must have tests
- All 11 locales must be verified
- Invalid input handling must be tested

---

## 🌐 Localization Contributions

When adding or updating translations:

1. Edit the appropriate file in `core-data/localization/`
2. Ensure all keys from `en.json` are present
3. Use native script for the target language
4. Run the data validation script to verify

---

## 📦 Core Data Changes

The `core-data/` directory is the single source of truth. When modifying:

1. Update the JSON files
2. Run `node scripts/validation/validate-core-data.ts`
3. Ensure both JS and Dart packages still pass tests

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.
