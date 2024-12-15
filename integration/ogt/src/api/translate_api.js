const generateFinalToken = require("../utils/token_gen");

function constructTranslationUrl({
  translateFrom,
  translateTo,
  generatedToken,
}) {
  const baseUrl = "https://translate.googleapis.com/translate_a/t";
  const queryParams = new URLSearchParams({
    client: "te",
    v: "1.0",
    sl: translateFrom,
    tl: translateTo,
    tk: generatedToken,
  });

  return `${baseUrl}?${queryParams.toString()}`;
}

function getHeaders() {
  const headers = new Headers();
  headers.append("accept", "*/*");
  headers.append("Content-Type", "application/x-www-form-urlencoded");
  return headers;
}

function getEncodedBody({ phrases }) {
  const urlencodedBody = new URLSearchParams();
  phrases.forEach((phrase) => urlencodedBody.append("q", phrase));
  return urlencodedBody;
}
async function translateText({
  listOfWordsToTranslate,
  translateFrom = "en",
  translateTo = "en",
}) {
  var _result = listOfWordsToTranslate.map((originalPhrase, index) => ({
    original: originalPhrase,
    translation: originalPhrase,
  }));
  if (translateFrom === translateTo) {
    return _result;
  }
  var generatedToken = generateFinalToken(listOfWordsToTranslate);

  const url = constructTranslationUrl({
    generatedToken: generatedToken,
    translateFrom: translateFrom,
    translateTo: translateTo,
  });

  const headers = getHeaders();
  const urlencodedBody = getEncodedBody({
    phrases: listOfWordsToTranslate,
  });
  // Create requestOptions
  const requestOptions = {
    method: "POST",
    headers: headers,
    body: urlencodedBody,
    redirect: "follow",
  };

  // try {
  //   const response = await fetch(url, requestOptions);
  //   var result = await response.json();
  //   const translatedPhrase = result[0] || listOfWordsToTranslate[0]; // Handle cases where result[0] might be empty
  //   return translatedPhrase;
  // } catch (error) {
  //   console.error("Error:", error);
  //   return null; // Or any default value you prefer in case of errors
  // }
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
  
    // Capitalize the first letter of each word in the translated phrase
    const capitalizedPhrase = result[0].split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
    return capitalizedPhrase;
  } catch (error) {
    console.error("Error:", error);
    return null; // Or any default value you prefer in case of errors
  }
}

module.exports = translateText;
