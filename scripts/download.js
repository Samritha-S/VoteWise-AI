const https = require('https');
const fs = require('fs');
const path = require('path');

const candidates = [
  { id: 'modi', url: '/wikipedia/commons/thumb/c/c0/Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png/330px-Official_Photograph_of_Prime_Minister_Narendra_Modi_Portrait.png' },
  { id: 'rahul', url: '/wikipedia/commons/thumb/5/5b/Rahul_Gandhi_Profile.jpg/330px-Rahul_Gandhi_Profile.jpg' },
  { id: 'kejriwal', url: '/wikipedia/commons/thumb/f/f2/Arvind_Kejriwal_2022_Portrait.jpg/330px-Arvind_Kejriwal_2022_Portrait.jpg' },
  { id: 'mamata', url: '/wikipedia/commons/thumb/1/15/Mamata_Banerjee_2024.jpg/330px-Mamata_Banerjee_2024.jpg' },
  { id: 'shah', url: '/wikipedia/commons/thumb/c/cd/Amit_Shah_portrait_%28cropped%29.jpg/330px-Amit_Shah_portrait_%28cropped%29.jpg' },
  { id: 'akhilesh', url: '/wikipedia/commons/thumb/4/4b/Akhilesh_Yadav_%281%29.jpg/330px-Akhilesh_Yadav_%281%29.jpg' },
  { id: 'tharoor', url: '/wikipedia/commons/thumb/f/f9/Dr._Shashi_Tharoor_2019.jpg/330px-Dr._Shashi_Tharoor_2019.jpg' },
  { id: 'owaisi', url: '/wikipedia/commons/thumb/0/05/Asaduddin_Owaisi.jpg/330px-Asaduddin_Owaisi.jpg' },
  { id: 'gadkari', url: '/wikipedia/commons/thumb/6/69/Nitin_Gadkari_%28cropped%29.jpg/330px-Nitin_Gadkari_%28cropped%29.jpg' },
  { id: 'surya', url: '/wikipedia/commons/thumb/5/5a/Tejasvi_Surya.jpg/330px-Tejasvi_Surya.jpg' }
];

const dir = path.join(__dirname, 'public', 'candidates');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(candidate) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'upload.wikimedia.org',
      path: candidate.url,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' }
    };
    
    https.get(options, (res) => {
      if (res.statusCode === 200) {
        const file = fs.createWriteStream(path.join(dir, `${candidate.id}.jpg`));
        res.pipe(file);
        file.on('finish', () => {
          console.log(`Downloaded ${candidate.id}.jpg`);
          resolve();
        });
      } else {
        console.log(`Failed ${candidate.id}: ${res.statusCode}`);
        resolve(); // resolve anyway to continue the loop
      }
    }).on('error', err => {
      console.error(err);
      resolve();
    });
  });
}

async function run() {
  for (const c of candidates) {
    await downloadImage(c);
    // Wait 2 seconds between downloads to avoid 429
    await new Promise(r => setTimeout(r, 2000));
  }
}

run();
