import { ModelOperations } from '@vscode/vscode-languagedetection';

const languageMap = {
  ts: {
    name: "TypeScript",
    icon: "https://img.icons8.com/color/48/000000/typescript.png",
  },
  rs: {
    name: "Rust",
    icon: "https://img.icons8.com/color/48/000000/rust.png",
  },
  js: {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/000000/javascript.png",
  },
  c: {
    name: "C",
    icon: "https://img.icons8.com/color/48/000000/c.png",
  },
  lua: {
    name: "Lua",
    icon: "https://img.icons8.com/color/48/000000/lua.png",
  },
  cpp: {
    name: "C++",
    icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
  },
  cs: {
    name: "C#",
    icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png",
  },
  mm: {
    name: "Objective-C",
    icon: "https://img.icons8.com/color/48/000000/objective-c.png",
  },
  html: {
    name: "HTML",
    icon: "https://img.icons8.com/color/48/000000/html-5.png",
  },
  sql: {
    name: "SQL",
    icon: "https://img.icons8.com/color/48/000000/sql.png",
  },
  swift: {
    name: "Swift",
    icon: "https://img.icons8.com/color/48/000000/swift.png",
  },
  pl: {
    name: "Prolog",
    icon: "https://img.icons8.com/color/48/000000/prolog.png",
  },
  md: {
    name: "Markdown",
    icon: "https://img.icons8.com/color/48/000000/markdown.png",
  },
  java: {
    name: "Java",
    icon: "https://img.icons8.com/color/48/000000/java.png",
  },
  ps1: {
    name: "PowerShell",
    icon: "https://img.icons8.com/color/48/000000/powershell.png",
  },
  php: {
    name: "PHP",
    icon: "https://img.icons8.com/color/48/000000/php.png",
  },
  go: {
    name: "Go",
    icon: "https://img.icons8.com/color/48/000000/go.png",
  },
  tex: {
    name: "LaTeX",
    icon: "https://img.icons8.com/color/48/000000/latex.png",
  },
  scala: {
    name: "Scala",
    icon: "https://img.icons8.com/color/48/000000/scala.png",
  },
  py: {
    name: "Python",
    icon: "https://img.icons8.com/color/48/000000/python.png",
  },
  r: {
    name: "R",
    icon: "https://img.icons8.com/color/48/000000/r.png",
  },
  matlab: {
    name: "MATLAB",
    icon: "https://img.icons8.com/color/48/000000/matlab.png",
  },
  css: {
    name: "CSS",
    icon: "https://img.icons8.com/color/48/000000/css3.png",
  },
  sh: {
    name: "Shell",
    icon: "https://img.icons8.com/color/48/000000/shell.png",
  },
  ipynb: {
    name: "Jupyter Notebook",
    icon: "https://img.icons8.com/color/48/000000/ipython.png",
  },
  bat: {
    name: "Batch File",
    icon: "https://img.icons8.com/color/48/000000/batch-file.png",
  },
  hs: {
    name: "Haskell",
    icon: "https://img.icons8.com/color/48/000000/haskell.png",
  },
  erl: {
    name: "Erlang",
    icon: "https://img.icons8.com/color/48/000000/erlang.png",
  },
  coffee: {
    name: "CoffeeScript",
    icon: "https://img.icons8.com/color/48/000000/coffeescript.png",
  },
  rb: {
    name: "Ruby",
    icon: "https://img.icons8.com/color/48/000000/ruby.png",
  },
};

export const LanguageDetection = async (code) => {
  const modulOperations = new ModelOperations();

  try {
    const result = await modulOperations.runModel(code);

    // Sort the result by confidence in descending order and pick the highest one
    const highestConfidence = result.sort(
      (a, b) => b.confidence - a.confidence
    )[0];

    // Get the language name and icon from the languageMap
    const language = languageMap[highestConfidence.languageId];
    if (language) {
      console.log("Language with the highest confidence:", language.name);
      console.log("Language Icon:", language.icon);
    } else {
      console.log("Language not found in map.");
    }
  } catch (error) {
    console.error("Error during language detection:", error);
  }
};
