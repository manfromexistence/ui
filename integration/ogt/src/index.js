const translateText = require("./api/translate_api");
const SUPPORTED_LANGUAGES = require("./utils/languages");

async function TranslateLanguageData({
  listOfWordsToTranslate,
  fromLanguage,
  toLanguage,
}) {
  var translatedData = await translateText({
    listOfWordsToTranslate: listOfWordsToTranslate,
    translateFrom: fromLanguage,
    translateTo: toLanguage,
  });
  return translatedData;
}
function supportedLanguages() {
  return SUPPORTED_LANGUAGES;
}
if (typeof window !== "undefined") {
  window.openGoogleTranslator = { TranslateLanguageData, supportedLanguages };
} else {
  module.exports = { TranslateLanguageData, supportedLanguages };
}
