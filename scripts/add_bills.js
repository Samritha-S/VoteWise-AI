const fs = require('fs');
const path = require('path');

const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

let content = fs.readFileSync(candidatesFile, 'utf8');

// Use regex to find keyAchievements and append billDetails if not already present
content = content.replace(/(keyAchievements:\s*\[[\s\S]*?\])(?!\s*,\s*billDetails)/g, '$1,\n      billDetails: [\n        "The State Infrastructure Development Bill, 2022",\n        "The Primary Education Reform Act, 2023"\n      ]');

fs.writeFileSync(candidatesFile, content, 'utf8');
console.log("Added bill details for everyone.");
