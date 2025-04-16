import fs from "fs";
import path from "path";
import process from "process";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: npm run generate:component <ComponentType> <ComponentName>");
  process.exit(1);
}

const [componentType, componentName] = args;
const componentNameLower = componentName.charAt(0).toLowerCase() + componentName.slice(1);

const paths = {
  content: path.join(__dirname, "../src/content", componentType, componentName),
  tailwind: path.join(__dirname, "../src/tailwind", componentType, componentName),
  ts: path.join(__dirname, "../src/ts-default", componentType, componentName),
  tsTailwind: path.join(__dirname, "../src/ts-tailwind", componentType, componentName),
  demo: path.join(__dirname, "../src/demo", componentType),
  constants: path.join(__dirname, "../src/constants/code", componentType),
};

Object.values(paths).forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const files = [
  path.join(paths.content, `${componentName}.jsx`),
  path.join(paths.content, `${componentName}.css`),
  path.join(paths.tailwind, `${componentName}.jsx`),
  path.join(paths.ts, `${componentName}.tsx`),
  path.join(paths.ts, `${componentName}.css`),
  path.join(paths.tsTailwind, `${componentName}.tsx`),
  path.join(paths.demo, `${componentName}Demo.jsx`),
  path.join(paths.constants, `${componentNameLower}Code.js`),
];

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, "");
  }
});

console.log(`Component "${componentName}" structure created successfully under "${componentType}".`);
