const fs = require('fs');
const translator = require("@/ogt/src");
const path = require('path');

translator.supportedLanguages();

function findMetaJsonFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const filePath = path.join(dir, file.name);

        if (file.isDirectory()) {
            findMetaJsonFiles(filePath);
        } else if (file.name === 'meta.json') {
            console.log(filePath);
            const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            for (const demo of jsonData.demos) {
                translator
                    .TranslateLanguageData({
                        listOfWordsToTranslate: [demo.title],
                        fromLanguage: "zh-CN",
                        toLanguage: "en",
                    })
                    .then((data) => {
                        console.log(data);
                        demo.title = data;
                        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2));
                    });
            }
        }
    }
}

const rootDir = './';
findMetaJsonFiles(rootDir);
