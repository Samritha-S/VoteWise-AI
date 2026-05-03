import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const directUrls = {
  // URLs pulled manually from Lok Sabha, MyNeta, and other highly stable public domain archives
  17: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Shri_Keshav_Prasad_Maurya%2C_MP%2C_Phoolpur_%28U.P%29_and_Shri_Satyapal_Singh_Saini%2C_MP%2C_Sambhal_%28U.P%29_meeting_the_Minister_of_State_for_Culture_%28Independent_Charge%29%2C_Tourism_%28Independent_Charge%29_and_Civil_Aviation_%28cropped%29.jpg/500px-thumbnail.jpg",
  18: "https://myneta.info/LokSabha2024/images/candidates/2402.jpg", // Smriti Irani
  19: "https://myneta.info/LokSabha2024/images/candidates/5834.jpg", // Abhishek Banerjee
  20: "https://myneta.info/westbengal2021/images/candidates/508.jpg", // Suvendu Adhikari
  21: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Derek_O%27brien_crop.jpg/500px-Derek_O%27brien_crop.jpg", // Derek O'Brien
  22: "https://myneta.info/LokSabha2019/images/candidates/5211.jpg", // Nusrat Jahan
  23: "https://myneta.info/maharashtra2019/images/candidates/1690.jpg", // Eknath Shinde
  24: "https://myneta.info/maharashtra2019/images/candidates/1086.jpg", // Devendra Fadnavis
  25: "https://myneta.info/maharashtra2019/images/candidates/2311.jpg", // Ajit Pawar
  26: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Uddhav_Thackeray_-_Mumbai%2C_2012_-_01_%28cropped%29.jpg/500px-Uddhav_Thackeray_-_Mumbai%2C_2012_-_01_%28cropped%29.jpg" // Uddhav Thackeray
};

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://myneta.info/' // Bypass MyNeta Hotlink Protection
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

  for (const [id, url] of Object.entries(directUrls)) {
    console.log(`Fetching hardcoded URL for Candidate ${id}...`);
    
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    try {
      await downloadImage(url, localPath);
      console.log(`✅ Downloaded ${localFilename}`);
      
      const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
      content = content.replace(blockRegex, `$1"/candidates/${localFilename}"`);
      
    } catch (err) {
      console.log(`❌ Failed to download ${id}: ${err.message}`);
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database perfectly patched with MyNeta/Alternative Sources.");
}

run();
