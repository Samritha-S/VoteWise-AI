const fs = require('fs');
const path = require('path');

const candidatesFile = path.join(__dirname, 'src', 'data', 'candidates.ts');
const publicDir = path.join(__dirname, 'public', 'candidates');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function downloadImages() {
  let content = fs.readFileSync(candidatesFile, 'utf8');
  
  // Regex to match candidate id and photo url
  // Example: id: 1, \n name: ... \n ... photo: "URL"
  // This is tricky with regex. Let's parse the file by blocks or just replace URLs.
  
  // A better way: match the whole candidate block to associate ID with URL
  const candidateRegex = /id:\s*(\d+),[\s\S]*?photo:\s*"([^"]+)"/g;
  let matches;
  const updates = [];
  
  while ((matches = candidateRegex.exec(content)) !== null) {
    const id = matches[1];
    const url = matches[2];
    updates.push({ id, url });
  }
  
  console.log(`Found ${updates.length} candidates. Downloading images...`);
  
  for (const item of updates) {
    if (item.url.startsWith('/candidates/')) {
      console.log(`Candidate ${item.id} already has local image.`);
      continue;
    }
    
    console.log(`Downloading for Candidate ${item.id} from ${item.url}...`);
    try {
      const response = await fetch(item.url, {
        headers: {
          'User-Agent': 'VoteWiseAI/1.0 (https://github.com; local dev)'
        },
        redirect: 'follow'
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      // Save locally
      const localFilename = `${item.id}.jpg`;
      const localPath = path.join(publicDir, localFilename);
      fs.writeFileSync(localPath, buffer);
      
      // Add to updates list
      item.localUrl = `/candidates/${localFilename}`;
      console.log(`✅ Saved ${localFilename}`);
    } catch (e) {
      console.log(`❌ Failed to download for Candidate ${item.id}:`, e.message);
      // Let's use a reliable fallback from a known source if Wikipedia totally fails
      item.localUrl = `https://ui-avatars.com/api/?name=Candidate+${item.id}&background=random`;
    }
  }
  
  // Now replace all URLs in the content
  let newContent = content;
  for (const item of updates) {
    if (item.localUrl) {
      // Find the specific block for this candidate and replace its photo
      const blockRegex = new RegExp(`(id:\\s*${item.id},[\\s\\S]*?photo:\\s*)"([^"]+)"`);
      newContent = newContent.replace(blockRegex, `$1"${item.localUrl}"`);
    }
  }
  
  fs.writeFileSync(candidatesFile, newContent, 'utf8');
  console.log("Database updated with local image paths.");
}

downloadImages();
