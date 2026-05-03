async function check() {
  const apiKey = "AIzaSyDdj0BDoUH9ZM4JfKCQuXpIeqCkBg0EdUU";
  const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("AVAILABLE MODELS:", JSON.stringify(data, null, 2));
  } catch (e) {
    console.error("FETCH FAILED:", e.message);
  }
}

check();
