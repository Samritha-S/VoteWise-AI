const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, 'public', 'candidates');

const directUrls = {
  11: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/The_Chief_Minister_of_Tamil_Nadu%2C_Thiru_MK_Stalin.jpg/500px-The_Chief_Minister_of_Tamil_Nadu%2C_Thiru_MK_Stalin.jpg",
  12: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Udhaya.jpg/500px-Udhaya.jpg",
  13: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/K_Annamalai_in_2024.jpg/500px-K_Annamalai_in_2024.jpg",
  14: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kanimozhi_in_a_public_function_in_chennai_2.jpg/500px-Kanimozhi_in_a_public_function_in_chennai_2.jpg",
  15: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Chief_Minister_of_Tamil_Nadu%2C_Shri_Edappadi_K._Palaniswami.jpg/500px-The_Chief_Minister_of_Tamil_Nadu%2C_Shri_Edappadi_K._Palaniswami.jpg",
  16: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Yogi_Adityanath_%28cropped%29.jpg/500px-Yogi_Adityanath_%28cropped%29.jpg",
  17: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Keshav_Prasad_Maurya_2016.jpg/500px-Keshav_Prasad_Maurya_2016.jpg",
  18: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Smriti_Irani_in_2022.jpg/500px-Smriti_Irani_in_2022.jpg",
  19: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abhishek_Banerjee%2C_MP.jpg/500px-Abhishek_Banerjee%2C_MP.jpg",
  20: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Suvendu_Adhikari_at_a_rally_in_Kolkata_in_2022.jpg/500px-Suvendu_Adhikari_at_a_rally_in_Kolkata_in_2022.jpg",
  21: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Derek_O%27Brien%2C_MP.jpg/500px-Derek_O%27Brien%2C_MP.jpg",
  22: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nusrat_Jahan_2019.jpg/500px-Nusrat_Jahan_2019.jpg",
  23: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eknath_Shinde.jpg/500px-Eknath_Shinde.jpg",
  24: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Devendra_Fadnavis_official_portrait.jpg/500px-Devendra_Fadnavis_official_portrait.jpg",
  26: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uddhav_Thackeray_in_2022.jpg/500px-Uddhav_Thackeray_in_2022.jpg",
  28: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Vijay_at_the_Leo_Success_Meet.jpg/500px-Vijay_at_the_Leo_Success_Meet.jpg"
};

const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fixCorruptImages() {
  for (const [id, url] of Object.entries(directUrls)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    // Check if file is small (corrupt HTML)
    let isCorrupt = true;
    if (fs.existsSync(localPath)) {
      const stats = fs.statSync(localPath);
      if (stats.size > 10000) {
        isCorrupt = false; // File is large enough to be an image
      }
    }
    
    if (isCorrupt) {
      console.log(`Re-downloading missing/corrupt image for Candidate ${id}...`);
      try {
        execSync(`curl -sL -A "${userAgent}" "${url}" -o "${localPath}"`);
        console.log(`✅ Recovered ${localFilename}`);
        // Wait 2 seconds to avoid HTTP 429 Too Many Requests
        await sleep(2000);
      } catch (e) {
        console.log(`❌ Still failed for Candidate ${id}:`, e.message);
      }
    }
  }
  console.log("Image recovery complete.");
}

fixCorruptImages();
