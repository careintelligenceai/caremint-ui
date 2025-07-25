<div style="margin-top:20px;">
  <input type="text" id="prompt" placeholder="Ask CARE..." />
  <button onclick="sendPrompt()">Submit</button>
  <p id="care-response"></p>
</div>

<script>
  async function sendPrompt() {
    const prompt = document.getElementById("prompt").value;
    const res = await fetch("/care", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    document.getElementById("care-response").innerText = data.response;
  }
</script>
