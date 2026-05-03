const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Regex to find all photo lines
const photoRegex = /photo:\s*"([^"]+)"/g;

let newContent = content.replace(photoRegex, (match, url) => {
  // If it's a Wikipedia thumbnail URL, extract the actual filename
  if (url.includes('wikipedia/commons/thumb/')) {
    // URL looks like: https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Filename.jpg/500px-Filename.jpg
    const parts = url.split('/');
    // The second to last part is the actual filename
    let filename = parts[parts.length - 2];
    
    // Some filenames might be URL encoded, let's make sure they are clean
    return `photo: "https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=400"`;
  } else if (url.includes('wikipedia/commons/') && !url.includes('Special:FilePath')) {
    // If it's a direct upload URL like: https://upload.wikimedia.org/wikipedia/commons/a/ab/Filename.jpg
    const parts = url.split('/');
    let filename = parts[parts.length - 1];
    return `photo: "https://commons.wikimedia.org/wiki/Special:FilePath/${filename}?width=400"`;
  }
  
  return match;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully fixed all photo URLs to use Special:FilePath!");
