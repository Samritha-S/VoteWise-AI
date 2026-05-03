import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const missing = {
  22: "https://upload.wikimedia.org/wikipedia/commons/0/07/Nusrat_Jahan_2019.jpg",
  23: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Eknath_Shinde.jpg"
};

function downloadImageProxy(url, dest) {
  return new Promise((resolve, reject) => {
    // Weserv Proxy completely bypasses Wikimedia IP bans and CORS
    const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=400&output=jpg`;
    
    https.get(proxyUrl, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        downloadImageProxy(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => resolve());
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function run() {
  let content = fs.readFileSync(candidatesFile, 'utf8');

  for (const [id, url] of Object.entries(missing)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    console.log(`Downloading ${id}.jpg via Proxy...`);
    try {
      await downloadImageProxy(url, localPath);
      console.log(`✅ Saved ${localFilename}`);
      
      const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
      content = content.replace(blockRegex, `$1"/candidates/${localFilename}"`);
    } catch (err) {
      console.log(`❌ Failed ${id}: ${err.message}`);
    }
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database updated with final 2 images.");
}

run();
