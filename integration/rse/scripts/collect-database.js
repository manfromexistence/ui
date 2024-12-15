/*
This script merges multiple "*.css" files into a single js file to serve as database for tests.
*/

/**
 * You can place any css files in the input folder.
 * A good sample can be found here: https://github.com/w3c/css-validator-testsuite
 *
 * IMPORTANT: The above repository contains 3 suites that are obscenely large (>200MB),
 * so you might want to remove them before running the script. They are:
 *      - properties/positive/background
 *      - properties/positive/background-position
 *      - properties/positive/border-color
 */
const INPUT_DIR = '../css-validator-testsuite-master/';
const OUTPUT_FILE = 'tests/database.js';

const path = require('path');
const fs = require('fs');

const output = [];

const fromDir = (startPath, filter) => {
    if (fs.existsSync(startPath)) {
        const fileNames = fs.readdirSync(startPath);
        for (const fileName of fileNames) {
            const filePath = path.join(startPath, fileName);
            const stat = fs.lstatSync(filePath);
            if (stat.isDirectory()) {
                fromDir(filePath, filter); // recursion
            } else if (fileName.toLowerCase().indexOf(filter) >= 0) {
                //-------------------------------------------------------------
                output.push(JSON.stringify(fs.readFileSync(filePath, 'utf8')));
                //-------------------------------------------------------------
            }
        }
    }
};

fromDir(INPUT_DIR, '.css');
if (fs.existsSync(OUTPUT_FILE)) {
    fs.unlinkSync(OUTPUT_FILE);
}
fs.writeFileSync(OUTPUT_FILE, `export default [\r\n${output.join(',\r\n')}];`);
