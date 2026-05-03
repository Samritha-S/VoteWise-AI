const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// First, convert ALL yearsInPolitics: [number] to yearsInPolitics: "[number] yrs"
content = content.replace(/yearsInPolitics:\s*(\d+)/g, (match, p1) => {
    return `yearsInPolitics: "${p1} yrs"`;
});

// Then apply the specific replacements from the user
const replacements = {
  "Abhishek Banerjee": "~10 yrs",
  "Ajit Pawar": "~35 yrs",
  "Akhilesh Yadav": "~25 yrs",
  "Amit Shah": "~40 yrs",
  "Arvind Kejriwal": "~12 yrs",
  "Asaduddin Owaisi": "~30 yrs",
  "Derek O’Brien": "~20 yrs",
  "Devendra Fadnavis": "~30 yrs",
  "Edappadi K. Palaniswami": "~35 yrs",
  "Eknath Shinde": "~30 yrs",
  "Joseph Vijay": "~1 yr",
  "K. Annamalai": "~4 yrs",
  "Kanimozhi Karunanidhi": "~15 yrs",
  "Keshav Prasad Maurya": "~20 yrs",
  "M. K. Stalin": "~45 yrs",
  "Mamata Banerjee": "~50 yrs",
  "Narendra Modi": "~45 yrs",
  "Nitin Gadkari": "~40 yrs",
  "Nusrat Jahan": "~5 yrs",
  "Rahul Gandhi": "~20 yrs",
  "Sharad Pawar": "~55 yrs",
  "Shashi Tharoor": "~15 yrs",
  "Smriti Irani": "~20 yrs",
  "Suvendu Adhikari": "~25 yrs",
  "Tejasvi Surya": "~10 yrs",
  "Uddhav Thackeray": "~20 yrs",
  "Udhayanidhi Stalin": "~5 yrs",
  "Yogi Adityanath": "~30 yrs"
};

for (const [name, years] of Object.entries(replacements)) {
    const nameRegex = new RegExp(`name:\\s*["']${name}["']`, 'g');
    let match;
    while ((match = nameRegex.exec(content)) !== null) {
        const searchFrom = match.index;
        const yearsRegex = /yearsInPolitics:\s*["'][^"']+["']/;
        const blockEnd = content.indexOf('},', searchFrom);
        const subContent = content.substring(searchFrom, blockEnd !== -1 ? blockEnd : content.length);
        
        const newSubContent = subContent.replace(yearsRegex, `yearsInPolitics: "${years}"`);
        content = content.substring(0, searchFrom) + newSubContent + content.substring(blockEnd !== -1 ? blockEnd : content.length);
    }
}

fs.writeFileSync(filePath, content);
console.log("Updated yearsInPolitics for all candidates and applied specific replacements.");
