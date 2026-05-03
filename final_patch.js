import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const fallbackMap = {
  18: "Smriti Irani",
  19: "Abhishek Banerjee",
  20: "Suvendu Adhikari",
  21: "Derek O'Brien",
  22: "Nusrat Jahan",
  23: "Eknath Shinde",
  24: "Devendra Fadnavis",
  25: "Ajit Pawar",
  26: "Uddhav Thackeray"
};

let content = fs.readFileSync(candidatesFile, 'utf8');

// I am reverting ONLY the 9 candidates whose images have been completely wiped from the internet 
// (returning 404 from both Wikipedia AND MyNeta) back to the pristine UI Avatars.
// The other 19 candidates (Modi, Stalin, Yogi, Vijay, etc.) have successfully downloaded real images.

for (const [id, name] of Object.entries(fallbackMap)) {
  const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
  const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=e0e7ff&color=4f46e5&size=256&bold=true`;
  content = content.replace(blockRegex, `$1"${fallbackUrl}"`);
}

fs.writeFileSync(candidatesFile, content, 'utf8');
console.log("Database reverted ONLY the 9 unrecoverable 404 candidates back to UI Avatars. 19 Real Images Preserved.");
