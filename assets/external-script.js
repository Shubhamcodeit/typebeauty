// external-script.js
const script = document.createElement("script");
script.src = "https://cdn.live2.ai/assets/sdk/latest/live2ai-embed-sdk.js";
script.defer = true;

const utilsScript = document.createElement("script");
utilsScript.src = "https://cdn.live2.ai/assets/sdk/spfy/utils.js";
utilsScript.defer = true;
document.head.appendChild(utilsScript);

// Append the script element to the document's head
document.head.appendChild(script);


