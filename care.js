const CARE = {
  init: function () {
    document.getElementById("care-status").innerText = "CARE AI Twin active and learning.";
  },
  ask: async function () {
    const prompt = document.getElementById("user-prompt").value;
    const responseElem = document.getElementById("care-response");

    responseElem.innerText = "Thinking...";

    try {
      const res = await fetch("/api/care", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      responseElem.innerText = data.response || "No response from CARE.";
    } catch (err) {
      responseElem.innerText = "Error contacting CARE.";
    }
  }
};