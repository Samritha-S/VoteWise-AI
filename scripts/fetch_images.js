const fs = require('fs');
const path = require('path');
const https = require('https');

const filePath = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// A map to help the API find the exact Wikipedia page titles
const pageMap = {
  "M. K. Stalin": "M._K._Stalin",
  "Udhayanidhi Stalin": "Udhayanidhi_Stalin",
  "K. Annamalai": "K._Annamalai",
  "Kanimozhi Karunanidhi": "Kanimozhi",
  "Edappadi K. Palaniswami": "Edappadi_K._Palaniswami",
  "Yogi Adityanath": "Yogi_Adityanath",
  "Keshav Prasad Maurya": "Keshav_Prasad_Maurya",
  "Smriti Irani": "Smriti_Irani",
  "Abhishek Banerjee": "Abhishek_Banerjee_(politician)",
  "Suvendu Adhikari": "Suvendu_Adhikari",
  "Derek O'Brien": "Derek_O'Brien_(politician)",
  "Nusrat Jahan": "Nusrat_Jahan",
  "Eknath Shinde": "Eknath_Shinde",
  "Devendra Fadnavis": "Devendra_Fadnavis",
  "Ajit Pawar": "Ajit_Pawar",
  "Uddhav Thackeray": "Uddhav_Thackeray",
  "Sharad Pawar": "Sharad_Pawar",
  "Joseph Vijay (Thalapathy)": "Vijay_(actor)",
  "Narendra Modi": "Narendra_Modi",
  "Rahul Gandhi": "Rahul_Gandhi",
  "Arvind Kejriwal": "Arvind_Kejriwal",
  "Mamata Banerjee": "Mamata_Banerjee",
  "Amit Shah": "Amit_Shah",
  "Akhilesh Yadav": "Akhilesh_Yadav",
  "Shashi Tharoor": "Shashi_Tharoor",
  "Asaduddin Owaisi": "Asaduddin_Owaisi",
  "Nitin Gadkari": "Nitin_Gadkari",
  "Tejasvi Surya": "Tejasvi_Surya"
};

function fetchWikipediaImage(name) {
  return new Promise((resolve) => {
    const pageTitle = pageMap[name] || encodeURIComponent(name);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${pageTitle}`;
    
    https.get(url, { headers: { 'User-Agent': 'VoteWiseAI/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json && json.thumbnail && json.thumbnail.source) {
            // Replace the thumbnail size (usually 320px) with a larger one (e.g. 500px) for better quality
            const highRes = json.thumbnail.source.replace(/\/\d+px-/, '/500px-');
            resolve(highRes);
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

async function updateImages() {
  const candidateRegex = /name:\s*"([^"]+)",[\s\S]*?photo:\s*"([^"]+)"/g;
  let matches;
  let newContent = content;
  
  const updates = [];
  
  while ((matches = candidateRegex.exec(content)) !== null) {
    const name = matches[1];
    const oldPhotoUrl = matches[2];
    updates.push({ name, oldPhotoUrl });
  }
  
  console.log(`Found ${updates.length} candidates. Fetching official Wikipedia images...`);
  
  for (const item of updates) {
    const imageUrl = await fetchWikipediaImage(item.name);
    if (imageUrl) {
      console.log(`✅ Found image for ${item.name}: ${imageUrl}`);
      // Safely replace just this candidate's photo URL
      const blockRegex = new RegExp(`name:\\s*"${item.name.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}",([\\s\\S]*?)photo:\\s*"[^"]+"`);
      newContent = newContent.replace(blockRegex, `name: "${item.name}",$1photo: "${imageUrl}"`);
    } else {
      console.log(`❌ No image found on Wikipedia for ${item.name}. Keeping fallback.`);
    }
  }
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log("Finished updating images in database.");
}

updateImages();
