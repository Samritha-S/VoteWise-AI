const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
  const genAI = new GoogleGenerativeAI('AIzaSyCmxovgzaRp7f_MujGfORnH3DMfwWKJLyY');
  try {
    const models = await genAI.listModels();
    console.log('AVAILABLE MODELS:');
    models.models.forEach(m => console.log(`- ${m.name}`));
  } catch (error) {
    console.error('FAILURE:', error.message);
  }
}

listModels();
