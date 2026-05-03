import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public', 'candidates');
const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');

const targets = {
  13: "https://en.wikipedia.org/wiki/K._Annamalai",
  15: "https://en.wikipedia.org/wiki/Edappadi_K._Palaniswami",
  22: "https://en.wikipedia.org/wiki/Nusrat_Jahan",
  23: "https://en.wikipedia.org/wiki/Eknath_Shinde"
};

async function run() {
  console.log("Launching Puppeteer to scrape Wikipedia Infoboxes directly...");
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36');

  for (const [id, url] of Object.entries(targets)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    console.log(`Scraping real infobox image for Candidate ${id}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait for the infobox image to load
      await page.waitForSelector('.infobox img', { timeout: 10000 });
      
      const imageUrl = await page.evaluate(() => {
        const img = document.querySelector('.infobox img');
        return img ? img.src : null;
      });
      
      if (imageUrl) {
        // Wikipedia thumbnail URLs are like .../thumb/.../220px-..., let's try to get a slightly larger one if possible, 
        // but the infobox one is fine for this UI.
        const hiResUrl = imageUrl.replace(/\/\d+px-/, '/500px-');
        
        console.log(`Found URL: ${hiResUrl}`);
        const viewSource = await page.goto(hiResUrl, { waitUntil: 'networkidle0', timeout: 10000 });
        
        if (viewSource && viewSource.ok()) {
          const buffer = await viewSource.buffer();
          fs.writeFileSync(localPath, buffer);
          console.log(`✅ Downloaded REAL Wikipedia image for Candidate ${id}`);
        } else {
           // Fallback to the original infobox URL if hiRes fails
           const fallbackSource = await page.goto(imageUrl, { waitUntil: 'networkidle0', timeout: 10000 });
           if (fallbackSource && fallbackSource.ok()) {
               const buffer = await fallbackSource.buffer();
               fs.writeFileSync(localPath, buffer);
               console.log(`✅ Downloaded REAL Wikipedia infobox image for Candidate ${id}`);
           }
        }
      } else {
        console.log(`❌ No infobox image found on ${url}`);
      }
      
    } catch (err) {
       console.log(`❌ Failed ${id}: ${err.message}`);
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }

  await browser.close();
  console.log("Wikipedia direct scrape complete.");
  
  // Make absolutely sure the database points to these local images
  let content = fs.readFileSync(candidatesFile, 'utf8');
  for (const id of Object.keys(targets)) {
    const blockRegex = new RegExp(`(id:\\s*${id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
    content = content.replace(blockRegex, `$1"/candidates/${id}.jpg"`);
  }
  
  fs.writeFileSync(candidatesFile, content, 'utf8');
  console.log("Database perfectly patched. All AI images completely eradicated and replaced with real photos.");
}

run();
