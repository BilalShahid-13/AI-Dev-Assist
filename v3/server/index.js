const express = require("express");
const { ModelOperations } = require("@vscode/vscode-languagedetection");
const { LanguageMap } = require("./constants");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.post("/detect-language", async (req, res) => {
  const { code } = req.body;

  const modelOperations = new ModelOperations();

  try {
    const result = await modelOperations.runModel(code);

    // Sort the result by confidence in descending order
    const highestConfidence = result.sort(
      (a, b) => b.confidence - a.confidence
    )[0];

    const languageInfo = LanguageMap[highestConfidence.languageId] || {
      name: "Unknown Language",
      icon: "default-icon.png",
    };
    res.json({ highestConfidence, result, languageInfo }).status(200);
  } catch (error) {
    res.status(500).json({ error: "Error during language detection" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
