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
            const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            // console.log(filePath);
            // console.log(JSON.stringify(jsonData, null, 2))

            for (const demo of jsonData.demos) {

                const NameRegex = /\.jsx/g;
                const Name = demo.filename.replace(NameRegex, '');
                const PathRegex = /mobile\//g;
                const Path1Regex = /\/meta\.json/g;
                const Path2Regex = /\.jsx/g;

                const Path = filePath.replace(PathRegex, '');
                const Path1 = Path.replace(Path1Regex, '')
                const Path2 = demo.filename.replace(Path2Regex, '.tsx')

                console.log(`  {
                    name: "${Name}",
                    type: "registry:block",
                    registryDependencies: [],
                    dependencies: ["@antv/f2"],
                    files: [
                      {
                        path: "visualizations/${Path1}/${Path2}",
                        type: "registry:block",
                      },
                    ],
                    category: "Charts",
                    subcategory: "${demo.title}",
                  },`)
            }


        }
    }
}

const rootDir = './';
findMetaJsonFiles(rootDir);
