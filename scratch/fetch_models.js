const https = require('https');

const apiKey = 'AIzaSyCmxovgzaRp7f_MujGfORnH3DMfwWKJLyY';
const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(JSON.stringify(JSON.parse(data), null, 2));
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
