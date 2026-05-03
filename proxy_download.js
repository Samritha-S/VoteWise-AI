const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, 'public', 'candidates');

const directUrls = {
  1: "https://upload.wikimedia.org/wikipedia/commons/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg",
  2: "https://upload.wikimedia.org/wikipedia/commons/9/91/Rahul_Gandhi.png",
  3: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Arvind_Kejriwal_2022_Official_Portrail_%28AI_enhanced%29.jpg",
  4: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Mamata_Banerjee.jpg",
  5: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Shri_Amit_Shah_in_Raigad.jpg",
  6: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Akhilesh_Yadav_receiving_Padma_Vibhushan_on_the_behalf_of_his_late_father_Sh._Mulayam_Singh_Yadav_%28cropped%29.jpg",
  7: "https://upload.wikimedia.org/wikipedia/commons/0/05/Shashi_Tharoor_2025.jpg",
  8: "https://upload.wikimedia.org/wikipedia/commons/3/38/Asaduddin.jpg",
  9: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Nitin_Jairam_Gadkari.jpg",
  10: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Tejasvi_Surya.jpg",
  11: "https://upload.wikimedia.org/wikipedia/commons/9/9d/The_Chief_Minister_of_Tamil_Nadu%2C_Thiru_MK_Stalin.jpg",
  12: "https://upload.wikimedia.org/wikipedia/commons/0/07/Udhaya.jpg",
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

async function fixCorruptImages() {
  for (const [id, url] of Object.entries(directUrls)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    // Check if file is small (corrupt HTML)
    let isCorrupt = true;
    if (fs.existsSync(localPath)) {
      const stats = fs.statSync(localPath);
      if (stats.size > 10000) {
        isCorrupt = false;
      }
    }
    
    if (isCorrupt) {
      console.log(`Re-downloading using proxy for Candidate ${id}...`);
      try {
        // We use images.weserv.nl as a caching proxy to completely bypass Wikimedia's block on our IP
        // We also request the raw full-resolution image instead of the thumbnail endpoint
        const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=400&output=jpg`;
        execSync(`curl -sL "${proxyUrl}" -o "${localPath}"`);
        console.log(`✅ Recovered ${localFilename} via proxy`);
      } catch (e) {
        console.log(`❌ Failed for Candidate ${id}:`, e.message);
      }
    }
  }
  console.log("Proxy image recovery complete.");
}

fixCorruptImages();
