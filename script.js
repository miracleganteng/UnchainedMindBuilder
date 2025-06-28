function runCode() {
  const code = document.getElementById("editor").value;
  document.getElementById("preview").srcdoc = code;
}

async function sendToAI() {
  const prompt = document.getElementById("prompt").value;
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  document.getElementById("aiResponse").innerText =
    data.choices?.[0]?.message?.content || "No response";
}
