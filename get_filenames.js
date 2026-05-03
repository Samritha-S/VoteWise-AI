const https = require('https');

const candidates = [
  { name: 'Rahul Gandhi', title: 'Rahul_Gandhi' },
  { name: 'Arvind Kejriwal', title: 'Arvind_Kejriwal' },
  { name: 'Mamata Banerjee', title: 'Mamata_Banerjee' },
  { name: 'Amit Shah', title: 'Amit_Shah' },
  { name: 'Akhilesh Yadav', title: 'Akhilesh_Yadav' },
  { name: 'Shashi Tharoor', title: 'Shashi_Tharoor' },
  { name: 'Asaduddin Owaisi', title: 'Asaduddin_Owaisi' },
  { name: 'Nitin Gadkari', title: 'Nitin_Gadkari' }
];

candidates.forEach(c => {
  const options = {
    hostname: 'en.wikipedia.org',
    path: `/w/api.php?action=query&titles=${c.title}&prop=pageimages&format=json&pithumbsize=400`,
    headers: { 'User-Agent': 'VoteWiseApp/1.0 (contact@example.com)' }
  };
  https.get(options, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const parsed = JSON.parse(data);
      const pages = parsed.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pages[pageId].pageimage) {
        console.log(`${c.name}: ${pages[pageId].pageimage}`);
      } else {
        console.log(`${c.name}: NO IMAGE`);
      }
    });
  });
});
