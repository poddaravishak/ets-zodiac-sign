const fs = require('fs');
const path = require('path');

console.log('Validating Core Data...');

const coreDataDir = path.join(__dirname, '../../core-data');

function validateJsonFiles(dir, requiredKeys) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));
  let hasError = false;

  for (const file of files) {
    const filePath = path.join(dir, file);
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      // Basic check for required keys if data is an object and requiredKeys are provided
      if (requiredKeys && !Array.isArray(data)) {
        for (const key of requiredKeys) {
          if (data[key] === undefined) {
            console.error(`❌ Validation Error in ${file}: Missing required key "${key}"`);
            hasError = true;
          }
        }
      }
    } catch (e) {
      console.error(`❌ JSON Parse Error in ${file}:`, e.message);
      hasError = true;
    }
  }
  return !hasError;
}

// 1. Validate Western Data
console.log('Checking Western signs...');
const westernValid = validateJsonFiles(path.join(coreDataDir, 'western'), ['id', 'name', 'element', 'modality']);

// 2. Validate Chinese Data
console.log('Checking Chinese animals...');
const chineseValid = validateJsonFiles(path.join(coreDataDir, 'chinese'), []);

// 2.5 Validate Indian Data
console.log('Checking Indian rashis...');
const indianValid = validateJsonFiles(path.join(coreDataDir, 'indian'), ['id', 'name', 'sanskritName', 'westernEquivalent', 'dateRange']);

// 3. Check cycle boundaries (1900-2100)
console.log('Checking Chinese cycle boundaries...');
let cycleValid = true;
const cycleData = JSON.parse(fs.readFileSync(path.join(coreDataDir, 'chinese/cycle.json'), 'utf8'));
if (!cycleData.chineseNewYearDates) {
  console.error('❌ Cycle data is missing chineseNewYearDates map.');
  cycleValid = false;
} else {
  for (let year = 1900; year <= 2100; year++) {
    if (!cycleData.chineseNewYearDates[year.toString()]) {
      console.error(`❌ Cycle data missing Chinese New Year date for year ${year}`);
      cycleValid = false;
    }
  }
}

// 4. Validate Locales
console.log('Checking Locales...');
const localesDir = path.join(coreDataDir, 'localization');
const locales = fs.readdirSync(localesDir).filter(f => f.endsWith('.json'));
let localesValid = true;

const enData = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
const enKeys = Object.keys(enData);

for (const locale of locales) {
  if (locale === 'en.json') continue;
  
  const locData = JSON.parse(fs.readFileSync(path.join(localesDir, locale), 'utf8'));
  const locKeys = Object.keys(locData);
  
  // Check if any keys are missing compared to english
  const missingKeys = enKeys.filter(k => !locKeys.includes(k));
  if (missingKeys.length > 0) {
    console.warn(`⚠️ Locale ${locale} is missing ${missingKeys.length} keys (e.g. ${missingKeys[0]})`);
  }
}

if (westernValid && chineseValid && indianValid && cycleValid && localesValid) {
  console.log('✅ All core data is valid and properly formatted!');
  process.exit(0);
} else {
  console.error('❌ Core data validation failed.');
  process.exit(1);
}
