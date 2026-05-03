const fs = require('fs');
const path = require('path');

const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

let content = fs.readFileSync(candidatesFile, 'utf8');

// Update database to point to the newly generated local images
const updates = {
  22: '"/candidates/22.jpg"',
  23: '"/candidates/23.jpg"'
};

for (const [id, url] of Object.entries(updates)) {
  const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
  content = content.replace(blockRegex, `$1${url}`);
}

fs.writeFileSync(candidatesFile, content, 'utf8');
console.log("Database updated for Nusrat Jahan and Eknath Shinde.");
