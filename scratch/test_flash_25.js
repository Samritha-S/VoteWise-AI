const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testFlash25() {
  const genAI = new GoogleGenerativeAI('AIzaSyCmxovgzaRp7f_MujGfORnH3DMfwWKJLyY');
  try {
    console.log('Testing gemini-2.5-flash...');
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
    const result = await model.generateContent('Hello');
    console.log('SUCCESS:', result.response.text());
  } catch (error) {
    console.error('FAILURE:', error.message);
  }
}

testFlash25();
