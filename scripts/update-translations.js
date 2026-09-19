const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../core-data/localization');

function updateLocale(file, newKeys) {
  const filePath = path.join(localesDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  
  Object.assign(data, newKeys);
  
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// English translations
updateLocale('en.json', {
  "indian.mesha.name": "Mesha",
  "indian.vrishabha.name": "Vrishabha",
  "indian.mithuna.name": "Mithuna",
  "indian.karka.name": "Karka",
  "indian.simha.name": "Simha",
  "indian.kanya.name": "Kanya",
  "indian.tula.name": "Tula",
  "indian.vrischika.name": "Vrischika",
  "indian.dhanu.name": "Dhanu",
  "indian.makara.name": "Makara",
  "indian.kumbha.name": "Kumbha",
  "indian.meena.name": "Meena"
});

// Bengali translations
updateLocale('bn.json', {
  "indian.mesha.name": "মেষ",
  "indian.vrishabha.name": "বৃষ",
  "indian.mithuna.name": "মিথুন",
  "indian.karka.name": "কর্কট",
  "indian.simha.name": "সিংহ",
  "indian.kanya.name": "কন্যা",
  "indian.tula.name": "তুলা",
  "indian.vrischika.name": "বৃশ্চিক",
  "indian.dhanu.name": "ধনু",
  "indian.makara.name": "মকর",
  "indian.kumbha.name": "কুম্ভ",
  "indian.meena.name": "মীন"
});

console.log('Translations updated.');
