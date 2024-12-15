# open-google-translator

![npm version](https://img.shields.io/npm/v/open-google-translator.svg) ![license](https://img.shields.io/npm/l/open-google-translator.svg)

A versatile and easy-to-use NPM package that leverages the power of the Google Translator API. With support for 104 languages, this package can seamlessly translate text in both web and Node.js environments.

## Installation

```bash
npm install open-google-translator
```

## Usage

### Node.js

```javascript
const translator = require("open-google-translator");

translator.supportedLanguages();

translator
  .TranslateLanguageData({
    listOfWordsToTranslate: ["hello here i am", "HI hello"],
    fromLanguage: "en",
    toLanguage: "hi",
  })
  .then((data) => {
    console.log(data);
  });
```

- `translator.supportedLanguages();` this method will provide pair of language iso639-1 language codes with respective language original names

  Example:

  ```json
  {
    af: "Afrikaans",
    sq: "Albanian",
    am: "Amharic",
    ar: "Arabic",
    hy: "Armenian",
    az: "Azerbaijani",
    eu: "Basque",......
  }
  ```

### Browser

1. Include the script in your HTML file:

```html
<script src="https://cdn.statically.io/gh/vidya-hub/open-google-translator/main/dist/bundle.js"></script>
```

2. Access the package methods using the `openGoogleTranslator` variable:

```javascript
openGoogleTranslator
  .TranslateLanguageData({
    listOfWordsToTranslate: ["hello here i am", "HI hello"],
    fromLanguage: "en",
    toLanguage: "te",
  })
  .then((data) => {
    console.log(data);
  });
```

## Inputs

- `listOfWordsToTranslate`: An array of sentences to be translated.
- `fromLanguage`: The language code of the original text (e.g., "en" for English).
- `toLanguage`: The language code of the target translation (e.g., "hi" for HIndi).

## Output

The output consists of an array of objects, each containing the original and translated sentences.

```js
[
  { original: "hello here i am", translation: "नमस्ते मैं यहाँ हूँ" },
  { original: "HI hello", translation: "हाय हैलो" },
];
```

## Features

- Supports translation for 104 languages.
- Works seamlessly in both Node.js and browser environments.
- Simple and intuitive API for easy integration.
- Fast and efficient unlimited translation using the free Google Translator API.

## Contributing

If you find any issues or have suggestions for improvement, feel free to open an [issue](https://github.com/vidya-hub/open-google-translator/issues) or submit a [pull request](https://github.com/vidya-hub/open-google-translator/pulls).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer 📝

Please be aware that this package is created exclusively for educational purposes. The token generation method employed in this package is based on the one utilized by https://translate.googleapis.com. It is important to note that for other types of usage (COMMERCIAL or PRODUCTION use), acquiring the official [Google Translator API](https://cloud.google.com/translate/) is recommended.
