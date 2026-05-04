const { GoogleGenerativeAI } = require("@google/generative-ai");

async function check() {
  const apiKey = "AIzaSyAjLhd1MoBi-1I_dvgfExmJpJKAInkWZ7Y";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  try {
    console.log("Listing models...");
    // The SDK might not have a direct listModels, we might need to use fetch or a different method
    // But let's try gemini-1.0-pro as a fallback
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("Hello?");
    console.log("SUCCESS WITH gemini-2.5-flash:", result.response.text());
  } catch (e) {
    console.error("FAILED gemini-pro:", e.message);
  }
}

check();
