# Architecture Overview

## High-Level Architecture

```
                         ZODIAC SDK
                              │
                    ┌─────────┴─────────┐
                    │                   │
              CORE DATA             ASSETS
                    │                   │
          ┌─────────┴─────────┐         │
          │                   │         │
       Western             Chinese      │
          │                   │         │
          └─────────┬─────────┘         │
                    │                   │
              CALCULATION               │
                    │                   │
              VALIDATION                │
                    │                   │
                MODELS                  │
                    │                   │
           ┌────────┴────────┐          │
           │                 │          │
       zodiac-js        zodiac-dart     │
           │                 │          │
         NPM              pub.dev       │
           │                 │          │
          Web             Flutter       │
           │                 │          │
           └────────┬────────┘          │
                    │                   │
             Localization       Optional Icons
```

## Design Principles

1. **Single Source of Truth** — `core-data/` contains all canonical Zodiac data
2. **Separation of Concerns** — Data → Calculation → Localization → Presentation
3. **Platform Independence** — Core logic has zero framework dependencies
4. **Optional Assets** — Icons are never required
5. **Stable IDs** — All entities use permanent, language-independent identifiers

## Data Flow

```
Input (month/day or year)
  ↓
Validation (type, range, format checks)
  ↓
Normalization (consistent internal format)
  ↓
Calculation (date-range lookup or cycle math)
  ↓
Data Lookup (sign/animal metadata)
  ↓
Result Model (structured, typed output)
  ↓
Optional Localization (locale-specific strings)
  ↓
Optional Icon (built-in SVG or custom asset)
```

## Package Structure

| Package | Platform | Registry | Dependencies |
|---------|----------|----------|-------------|
| `zodiac-js` | Web/Node.js | NPM | Zero runtime |
| `zodiac-dart` | Dart/Flutter | pub.dev | Zero runtime |

Both packages consume the same `core-data/` JSON definitions during build time.

## Detailed documentation

- [Western Zodiac Guide](../western/)
- [Chinese Zodiac Guide](../chinese/)
- [Icons Guide](../icons/)
- [Localization Guide](../localization/)
- [API Reference](../api/)
