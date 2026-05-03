const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/candidates.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Find all candidate objects and add pastControversies: [] if missing
const candidatesArrayRegex = /export const CANDIDATES: Candidate\[] = \[([\s\S]+?)\];/;
const match = content.match(candidatesArrayRegex);
if (match) {
    let candidatesContent = match[1];
    // Split by candidates (roughly by looking for id: \d+)
    const candidateBlocks = candidatesContent.split(/{\s*id:/).filter(Boolean);
    const updatedBlocks = candidateBlocks.map(block => {
        if (!block.includes('pastControversies:')) {
            // Find a good place to insert - before performanceMetrics or careerHistory
            if (block.includes('performanceMetrics:')) {
                return block.replace('performanceMetrics:', 'pastControversies: [],\n    performanceMetrics:');
            } else if (block.includes('careerHistory:')) {
                return block.replace('careerHistory:', 'pastControversies: [],\n    careerHistory:');
            } else {
                // Just put it before the closing brace
                const lastBrace = block.lastIndexOf('}');
                return block.substring(0, lastBrace) + '    pastControversies: [],\n' + block.substring(lastBrace);
            }
        }
        return block;
    });
    
    const newCandidatesContent = updatedBlocks.join('  {id:');
    content = content.replace(candidatesContent, newCandidatesContent);
    fs.writeFileSync(filePath, content);
    console.log("Fixed missing pastControversies in src/data/candidates.ts");
}
