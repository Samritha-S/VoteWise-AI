const { GoogleGenerativeAI } = require("@google/generative-ai");

async function checkModels() {
  try {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=" + process.env.GEMINI_API_KEY);
    const data = await res.json();
    const names = data.models ? data.models.map(m => m.name) : data;
    console.log("Available models:", names);
  } catch(e) {
    console.error("Fetch error:", e);
  }
}
checkModels();
