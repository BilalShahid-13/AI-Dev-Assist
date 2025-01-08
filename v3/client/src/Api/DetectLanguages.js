import axios from "axios";

export const DetectLanguages = async (inputValue) => {
  try {
    const { data } = await axios.post("http://localhost:5000/detect-language", {
      code: inputValue,
    });
    return data;
  } catch (error) {
    console.error("Language Detection Error", error);
  }
};
