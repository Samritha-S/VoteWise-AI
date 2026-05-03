import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const missingCandidates = {
  18: "Smriti Irani politician portrait",
  19: "Abhishek Banerjee politician portrait",
  20: "Suvendu Adhikari politician portrait",
  21: "Derek O'Brien politician portrait",
  22: "Nusrat Jahan politician portrait",
  23: "Eknath Shinde politician portrait",
  24: "Devendra Fadnavis politician portrait",
  25: "Ajit Pawar politician portrait",
  26: "Uddhav Thackeray politician portrait"
};

async function run() {
  console.log("Launching Puppeteer to scrape Bing Images...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

  for (const [id, query] of Object.entries(missingCandidates)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    console.log(`Scraping image for ${query}...`);
    try {
      // Go to Bing Images search
      const searchUrl = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}&first=1&FORM=IARRTH`;
      await page.goto(searchUrl, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for the first image result
      await page.waitForSelector('.mimg', { timeout: 5000 });
      
      // Extract the image source (Bing often uses murl or src)
      const imageUrl = await page.evaluate(() => {
        const img = document.querySelector('.mimg');
        return img ? (img.getAttribute('src') || img.getAttribute('data-src')) : null;
      });
      
      if (imageUrl) {
        if (imageUrl.startsWith('data:image')) {
          // It's a base64 image
          const base64Data = imageUrl.replace(/^data:image\/\w+;base64,/, "");
          fs.writeFileSync(localPath, Buffer.from(base64Data, 'base64'));
          console.log(`✅ Saved base64 image for Candidate ${id}`);
        } else {
          // It's a URL, navigate to it and download
          const viewSource = await page.goto(imageUrl, { waitUntil: 'networkidle0', timeout: 10000 });
          const buffer = await viewSource.buffer();
          fs.writeFileSync(localPath, buffer);
          console.log(`✅ Downloaded URL image for Candidate ${id}`);
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
  
  // Update candidates.ts to strictly point to the newly downloaded local images
  let content = fs.readFileSync(candidatesFile, 'utf8');
  const idsToUpdate = Object.keys(missingCandidates);
  
  for (const id of idsToUpdate) {
    const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
    content = content.replace(blockRegex, `$1"/candidates/${id}.jpg"`);
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database officially updated with real scraped images.");
}

run();
