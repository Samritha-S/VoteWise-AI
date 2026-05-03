const fs = require('fs');
const path = require('path');
const https = require('https');

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

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    // We MUST set an extremely specific, non-bot User-Agent to bypass Wikimedia
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'keep-alive'
      }
    };

    https.get(url, options, (res) => {
      // Handle redirects natively
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 308) {
        console.log(`Redirected to: ${res.headers.location}`);
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
    }).on('error', (err) => {
      reject(err);
    });
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
  for (const [id, url] of Object.entries(directUrls)) {
    const localFilename = `${id}.jpg`;
    const localPath = path.join(publicDir, localFilename);
    
    console.log(`Downloading pure image for Candidate ${id}...`);
    try {
      await downloadImage(url, localPath);
      console.log(`✅ Saved ${localFilename}`);
      // Wait a full 3 seconds between downloads to avoid tripping the 429 Rate Limit
      await sleep(3000);
    } catch (e) {
      console.log(`❌ Failed Candidate ${id}: ${e.message}`);
    }
  }
  console.log("All done.");
}

run();
