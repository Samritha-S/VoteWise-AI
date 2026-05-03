import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const directUrls = {
  3: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Arvind_Kejriwal_2022_Official_Portrail_%28AI_enhanced%29.jpg",
  4: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Mamata_Banerjee.jpg",
  5: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Shri_Amit_Shah_in_Raigad.jpg",
  6: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Akhilesh_Yadav_receiving_Padma_Vibhushan_on_the_behalf_of_his_late_father_Sh._Mulayam_Singh_Yadav_%28cropped%29.jpg",
  7: "https://upload.wikimedia.org/wikipedia/commons/0/05/Shashi_Tharoor_2025.jpg",
  13: "https://upload.wikimedia.org/wikipedia/commons/1/1a/K_Annamalai_in_2024.jpg",
  14: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Kanimozhi_in_a_public_function_in_chennai_2.jpg",
  15: "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Chief_Minister_of_Tamil_Nadu%2C_Shri_Edappadi_K._Palaniswami.jpg",
  16: "https://upload.wikimedia.org/wikipedia/commons/6/69/Yogi_Adityanath_%28cropped%29.jpg",
  17: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Keshav_Prasad_Maurya_2016.jpg",
  18: "https://upload.wikimedia.org/wikipedia/commons/6/69/Smriti_Irani_in_2022.jpg",
  19: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Abhishek_Banerjee%2C_MP.jpg",
  20: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Suvendu_Adhikari_at_a_rally_in_Kolkata_in_2022.jpg",
  21: "https://upload.wikimedia.org/wikipedia/commons/3/30/Derek_O%27Brien%2C_MP.jpg",
  22: "https://upload.wikimedia.org/wikipedia/commons/0/07/Nusrat_Jahan_2019.jpg",
  23: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Eknath_Shinde.jpg",
  24: "https://upload.wikimedia.org/wikipedia/commons/1/12/Devendra_Fadnavis_official_portrait.jpg",
  25: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Ajit_Pawar.jpg",
  26: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uddhav_Thackeray_in_2022.jpg",
  27: "https://upload.wikimedia.org/wikipedia/commons/8/87/Sharad_Pawar.jpg",
  28: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Vijay_at_the_Leo_Success_Meet.jpg"
};

async function run() {
  console.log("Launching headless browser to bypass Wikipedia blocks...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

  for (const [id, url] of Object.entries(directUrls)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    // Only process if the file is tiny (corrupt)
    let isCorrupt = true;
    if (fs.existsSync(localPath)) {
      const stats = fs.statSync(localPath);
      if (stats.size > 10000) isCorrupt = false;
    }
    
    if (isCorrupt) {
      console.log(`Using Puppeteer to download Candidate ${id}...`);
      try {
        const viewSource = await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
        if (viewSource && viewSource.ok()) {
          const buffer = await viewSource.buffer();
          fs.writeFileSync(localPath, buffer);
          console.log(`✅ Saved ${localFilename} perfectly.`);
        } else {
          console.log(`❌ Failed ${id}: Status ${viewSource ? viewSource.status() : 'Unknown'}`);
        }
      } catch (err) {
         console.log(`❌ Failed ${id}: ${err.message}`);
      }
      
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  await browser.close();
  console.log("Puppeteer download complete.");
  
  // Now, strictly update candidates.ts to firmly point to the local server
  let content = fs.readFileSync(candidatesFile, 'utf8');
  const idsToUpdate = [...Object.keys(directUrls), "1", "2", "8", "9", "10", "11", "12"];
  
  for (const id of idsToUpdate) {
    const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
    content = content.replace(blockRegex, `$1"/candidates/${id}.jpg"`);
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database officially updated to use LOCAL images only.");
}

run();
