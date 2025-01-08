const hljs = require("highlight.js");

const code = `
import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello(props) {
  return <h1>Hello World!</h1>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);

`;

const languageMap = {
  js: {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  cpp: {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  // Add more language mappings here
};

const index = () => {
  // Use highlight.js to auto-detect the language
  const highlighted = hljs.highlightAuto(code);

  const detectedLanguage = highlighted.language;

  // Look up the language name and icon from your map
  const languageInfo = languageMap[detectedLanguage] || {
    name: "Unknown",
    icon: "",
  };

  console.log(`Detected Language: ${languageInfo.name}`);
  console.log(`Icon: ${languageInfo.icon}`);
};

index();
