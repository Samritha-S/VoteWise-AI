import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const missingCandidates = {
  3: "Arvind_Kejriwal",
  4: "Mamata_Banerjee",
  5: "Amit_Shah",
  6: "Akhilesh_Yadav",
  7: "Shashi_Tharoor",
  13: "K._Annamalai",
  14: "Kanimozhi",
  15: "Edappadi_K._Palaniswami",
  16: "Yogi_Adityanath",
  17: "Keshav_Prasad_Maurya",
  18: "Smriti_Irani",
  19: "Abhishek_Banerjee_(politician)",
  20: "Suvendu_Adhikari",
  21: "Derek_O'Brien_(politician)",
  22: "Nusrat_Jahan",
  23: "Eknath_Shinde",
  24: "Devendra_Fadnavis",
  25: "Ajit_Pawar",
  26: "Uddhav_Thackeray",
  27: "Sharad_Pawar",
  28: "Vijay_(actor)"
};

function getWikipediaImageUrl(title) {
  return new Promise((resolve) => {
    // We use the MediaWiki API to get the exact, current main image thumbnail for the page
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=500`;
    
    https.get(url, { headers: { 'User-Agent': 'VoteWiseAI/1.0 (Mock Project)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].thumbnail && pages[pageId].thumbnail.source) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      }
    };
    https.get(url, options, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        downloadImage(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Status Code: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => reject(err));
      });
    }).on('error', reject);
  });
}

async function run() {
  let content = fs.readFileSync(candidatesFile, 'utf8');

  for (const [id, title] of Object.entries(missingCandidates)) {
    console.log(`Fetching official URL for ${title}...`);
    const imageUrl = await getWikipediaImageUrl(title);
    
    if (imageUrl) {
      console.log(`✅ Found URL: ${imageUrl}`);
      const localFilename = `${id}.jpg`;
      const localPath = path.join(publicDir, localFilename);
      
      try {
        await downloadImage(imageUrl, localPath);
        console.log(`✅ Downloaded ${localFilename}`);
        
        // Update database to use local image
        const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
        content = content.replace(blockRegex, `$1"/candidates/${localFilename}"`);
        
      } catch (err) {
        console.log(`❌ Failed to download ${title}: ${err.message}`);
      }
    } else {
      console.log(`❌ No image found via API for ${title}`);
    }
    
    // Wait 1 second to be polite to Wikipedia API
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database updated with real pictures!");
}

run();
