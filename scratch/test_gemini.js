const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const path = require('path');

function getApiKey() {
    try {
        const envContent = fs.readFileSync(path.join(__dirname, '../.env.local'), 'utf8');
        const match = envContent.match(/GEMINI_API_KEY=(.*)/);
        return match ? match[1].trim() : null;
    } catch (e) {
        return null;
    }
}

async function listModels() {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.error("GEMINI_API_KEY not found in .env.local");
    return;
  }
  console.log("Using API Key:", apiKey.substring(0, 5) + "...");
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const testModels = ["gemini-1.5-flash", "gemini-1.5-pro", "gemini-pro"];
  
  for (const modelName of testModels) {
    console.log(`Checking ${modelName}...`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("Hello");
      console.log(`Success with ${modelName}:`, result.response.text().substring(0, 20) + "...");
      return; // Stop after first success
    } catch (e) {
      console.error(`Error with ${modelName}:`, e.message);
    }
  }
}

listModels();
