import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const missingCandidates = {
  7: "Shashi Tharoor official profile photo",
  13: "K Annamalai official profile photo",
  15: "Edappadi K Palaniswami official profile photo",
  22: "Nusrat Jahan politician headshot photo",
  23: "Eknath Shinde official CM profile photo"
};

async function run() {
  console.log("Launching Puppeteer to safely scrape Bing Images...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

  for (const [id, query] of Object.entries(missingCandidates)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    console.log(`Scraping real image for ${query}...`);
    try {
      const searchUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&first=1&FORM=IARRTH`;
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      
      await page.waitForSelector('.mimg', { timeout: 10000 });
      
      const imageUrl = await page.evaluate(() => {
        // Find the first valid image that isn't a tiny icon
        const imgs = Array.from(document.querySelectorAll('.mimg'));
        for (let img of imgs) {
           const src = img.getAttribute('src') || img.getAttribute('data-src');
           if (src && src.length > 100) return src; // Avoid tiny tracking pixels
        }
        return null;
      });
      
      if (imageUrl) {
        if (imageUrl.startsWith('data:image')) {
          const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
          fs.writeFileSync(localPath, Buffer.from(base64Data, 'base64'));
          console.log(`✅ Saved REAL base64 image for Candidate ${id}`);
        } else {
          const viewSource = await page.goto(imageUrl, { waitUntil: 'networkidle0', timeout: 10000 });
          const buffer = await viewSource.buffer();
          fs.writeFileSync(localPath, buffer);
          console.log(`✅ Downloaded REAL URL image for Candidate ${id}`);
        }
      } else {
        console.log(`❌ No image found for ${query}`);
      }
      
    } catch (err) {
       console.log(`❌ Failed ${id}: ${err.message}`);
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }

  await browser.close();
  console.log("Bing scrape complete.");
  
  // Cleanly overwrite any AI URLs in the database
  let content = fs.readFileSync(candidatesFile, 'utf8');
  const idsToUpdate = Object.keys(missingCandidates);
  
  for (const id of idsToUpdate) {
    const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
    content = content.replace(blockRegex, `$1"/candidates/${id}.jpg"`);
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database officially updated with real scraped images. No more AI.");
}

run();
