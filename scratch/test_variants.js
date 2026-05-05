const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testVariants() {
  const genAI = new GoogleGenerativeAI('AIzaSyCmxovgzaRp7f_MujGfORnH3DMfwWKJLyY');
  const variants = ['gemini-1.5-flash-latest', 'gemini-1.5-flash', 'gemini-pro'];
  
  for (const variant of variants) {
    try {
      console.log(`Testing ${variant}...`);
      const model = genAI.getGenerativeModel({ model: variant });
      const result = await model.generateContent('Hello');
      console.log(`SUCCESS with ${variant}:`, result.response.text().substring(0, 50) + '...');
      break; // Exit loop on first success
    } catch (error) {
      console.error(`FAILURE with ${variant}:`, error.message);
    }
  }
}

testVariants();
