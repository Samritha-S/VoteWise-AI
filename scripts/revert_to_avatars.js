const fs = require('fs');
const path = require('path');
const https = require('https');

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

let content = fs.readFileSync(candidatesFile, 'utf8');

// I am rewriting the database to use generic UI Avatars for the 21 blocked users so the UI DOES NOT BREAK
// while keeping the 7 successfully downloaded images intact.
const fallbackMap = {
  3: "Arvind Kejriwal",
  4: "Mamata Banerjee",
  5: "Amit Shah",
  6: "Akhilesh Yadav",
  7: "Shashi Tharoor",
  13: "K. Annamalai",
  14: "Kanimozhi Karunanidhi",
  15: "Edappadi K. Palaniswami",
  16: "Yogi Adityanath",
  17: "Keshav Prasad Maurya",
  18: "Smriti Irani",
  19: "Abhishek Banerjee",
  20: "Suvendu Adhikari",
  21: "Derek O'Brien",
  22: "Nusrat Jahan",
  23: "Eknath Shinde",
  24: "Devendra Fadnavis",
  25: "Ajit Pawar",
  26: "Uddhav Thackeray",
  27: "Sharad Pawar",
  28: "Joseph Vijay"
};

let newContent = content;
for (const [id, name] of Object.entries(fallbackMap)) {
  const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
  // Use a beautifully stylized UI Avatar as the hardcoded fallback
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e0e7ff&color=4f46e5&size=256&bold=true`;
  newContent = newContent.replace(blockRegex, `$1"${fallbackUrl}"`);
}

fs.writeFileSync(candidatesFile, newContent, 'utf8');
console.log("Database reverted to pristine UI Avatars for blocked users.");
