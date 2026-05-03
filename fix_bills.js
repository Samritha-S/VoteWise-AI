const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'data', 'candidates.ts');
let content = fs.readFileSync(file, 'utf8');

// Remove trailing generic billDetails if there are two billDetails in a row
// or just remove the generic billDetails entirely since I can add it properly.
// The generic block is:
/*
      billDetails: [
        "The State Infrastructure Development Bill, 2022",
        "The Primary Education Reform Act, 2023"
      ]
*/

const genericBillsRegex = /,\s*billDetails:\s*\[\s*"The State Infrastructure Development Bill, 2022",\s*"The Primary Education Reform Act, 2023"\s*\]/g;

// remove ALL generic bills, then we can cleanly re-add them ONLY where billDetails is missing!
content = content.replace(genericBillsRegex, '');

fs.writeFileSync(file, content, 'utf8');
console.log("Removed duplicate generic bill details.");
