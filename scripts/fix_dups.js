const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /,\s*currentPosition:\s*"[^"]+",\s*yearsInPolitics:\s*\d+,\s*statusBadge:\s*"[^"]+"(?:,\s*performanceMetrics:\s*\{[\s\S]*?\})?\s*(?=\})/g;

const matches = content.match(regex);
console.log(`Found ${matches ? matches.length : 0} duplicate trailing sections.`);
// console.log(matches);

content = content.replace(regex, '');

fs.writeFileSync(file, content, 'utf8');
console.log("Cleaned up duplicates.");
