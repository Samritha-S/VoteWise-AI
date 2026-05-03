import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');

const targetUrl = "https://en.wikipedia.org/wiki/K._Annamalai_(BJP_politician)";
const localPath = path.join(publicDir, '13.jpg');

async function run() {
  console.log("Fetching exact Wikipedia infobox for K. Annamalai...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');

  try {
    await page.goto(targetUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    await page.waitForSelector('.infobox img', { timeout: 10000 });
    
    const imageUrl = await page.evaluate(() => {
      const img = document.querySelector('.infobox img');
      return img ? img.src : null;
    });
    
    if (imageUrl) {
      const hiResUrl = imageUrl.replace(/\/\d+px-/, '/500px-');
      console.log(`Found: ${hiResUrl}`);
      
      const viewSource = await page.goto(hiResUrl, { waitUntil: 'networkidle0' });
      if (viewSource && viewSource.ok()) {
        fs.writeFileSync(localPath, await viewSource.buffer());
        console.log("✅ Downloaded REAL K. Annamalai image.");
      } else {
         const fallback = await page.goto(imageUrl, { waitUntil: 'networkidle0' });
         fs.writeFileSync(localPath, await fallback.buffer());
         console.log("✅ Downloaded REAL K. Annamalai image (infobox size).");
      }
    }
  } catch (e) {
    console.log("❌ Failed:", e.message);
  }
  
  await browser.close();
}

run();
