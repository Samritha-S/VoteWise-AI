const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Map of highly reliable, direct Wikimedia thumbnail URLs for the missing candidates
const directUrls = {
  "K. Annamalai": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/K_Annamalai_in_2024.jpg/500px-K_Annamalai_in_2024.jpg",
  "Kanimozhi Karunanidhi": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Kanimozhi_in_a_public_function_in_chennai_2.jpg/500px-Kanimozhi_in_a_public_function_in_chennai_2.jpg",
  "Edappadi K. Palaniswami": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Chief_Minister_of_Tamil_Nadu%2C_Shri_Edappadi_K._Palaniswami.jpg/500px-The_Chief_Minister_of_Tamil_Nadu%2C_Shri_Edappadi_K._Palaniswami.jpg",
  "Yogi Adityanath": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Yogi_Adityanath_%28cropped%29.jpg/500px-Yogi_Adityanath_%28cropped%29.jpg",
  "Keshav Prasad Maurya": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Keshav_Prasad_Maurya_2016.jpg/500px-Keshav_Prasad_Maurya_2016.jpg",
  "Smriti Irani": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Smriti_Irani_in_2022.jpg/500px-Smriti_Irani_in_2022.jpg",
  "Abhishek Banerjee": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Abhishek_Banerjee%2C_MP.jpg/500px-Abhishek_Banerjee%2C_MP.jpg",
  "Suvendu Adhikari": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Suvendu_Adhikari_at_a_rally_in_Kolkata_in_2022.jpg/500px-Suvendu_Adhikari_at_a_rally_in_Kolkata_in_2022.jpg",
  "Derek O'Brien": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Derek_O%27Brien%2C_MP.jpg/500px-Derek_O%27Brien%2C_MP.jpg",
  "Nusrat Jahan": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Nusrat_Jahan_2019.jpg/500px-Nusrat_Jahan_2019.jpg",
  "Eknath Shinde": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eknath_Shinde.jpg/500px-Eknath_Shinde.jpg",
  "Devendra Fadnavis": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Devendra_Fadnavis_official_portrait.jpg/500px-Devendra_Fadnavis_official_portrait.jpg",
  "Ajit Pawar": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ajit_Pawar.jpg/500px-Ajit_Pawar.jpg",
  "Uddhav Thackeray": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Uddhav_Thackeray_in_2022.jpg/500px-Uddhav_Thackeray_in_2022.jpg",
  "Sharad Pawar": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sharad_Pawar.jpg/500px-Sharad_Pawar.jpg",
  "Joseph Vijay (Thalapathy)": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Vijay_at_the_Leo_Success_Meet.jpg/500px-Vijay_at_the_Leo_Success_Meet.jpg"
};

let newContent = content;

for (const [name, photoUrl] of Object.entries(directUrls)) {
  // Regex to safely replace the photo field for the specific candidate
  const blockRegex = new RegExp(`name:\\s*"${name.replace(/[.*+?^$\\{\\}()|[\\]\\\\]/g, '\\$&')}",([\\s\\S]*?)photo:\\s*"[^"]+"`);
  newContent = newContent.replace(blockRegex, `name: "${name}",$1photo: "${photoUrl}"`);
}

fs.writeFileSync(filePath, newContent, 'utf8');
console.log("Successfully hardcoded 16 missing high-res images.");
