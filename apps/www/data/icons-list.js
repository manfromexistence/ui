const fs = require('node:fs');

function convertToCamelCase(inputString) {
  if (typeof inputString !== 'string') {
    return ""; // Or throw an error, depending on your needs
  }

  const trimmedString = inputString.trim();

  if (trimmedString === "") {
    return "";
  }

  const camelCaseString = trimmedString
    .toLowerCase()
    .replace(/[-_\s]+(.)?/g, (match, chr) => {
      return chr ? chr.toUpperCase() : '';
    });

  return camelCaseString;
}

function json(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);

      if (!Array.isArray(jsonData)) {
        console.error('The file does not contain a valid JSON array.');
        return;
      }

      if (jsonData.length === 0) {
        console.log("The JSON array is empty.");
        return;
      }

      console.log('Values of the "name" key in each object of the JSON array:');

      jsonData.forEach((item, index) => {
        if (typeof item === 'object' && item !== null && item.hasOwnProperty('name')) {
          console.log(`<Link href="/icons/${convertToCamelCase(item.name)}" className="hover:bg-primary-foreground flex h-[50px] w-full items-center justify-between rounded-md px-3">
                    <span className="font-mono text-sm">${item.name}</span>
                    <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">${item.total}</span>
                  </Link>`);
        } else if (typeof item === 'object' && item !== null && !item.hasOwnProperty('name')) {
          console.log(`- Item ${index + 1}: "name" key not found`);
        } else {
          console.log(`- Item ${index + 1}: Not an object`);
        }
      });

    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  });
}

const filePath = 'data.json';
json(filePath);