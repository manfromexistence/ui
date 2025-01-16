const fs = require('fs');

function sortJsonObjectKeysAlphabetically(filePath) {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      console.error('Error: File does not contain a valid JSON object.');
      return;
    }

    // Get the keys of the object and sort them alphabetically
    const sortedKeys = Object.keys(data).sort();

    // Create a new object with the sorted keys
    const sortedData = {};
    for (const key of sortedKeys) {
      sortedData[key] = data[key];
    }

    // Write the sorted data to a new file
    fs.writeFileSync(`${filePath}-alphabetical.json`, JSON.stringify(sortedData, null, 2));
    console.log(`Sorted data written to ${filePath}-alphabetical.json`);

  } catch (err) {
    console.error('Error processing JSON file:', err);
  }
}

const filePath = 'data.json';
sortJsonObjectKeysAlphabetically(filePath);