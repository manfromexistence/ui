import fs from "fs";
import path from 'path'

const TEMPLATE_FILE_PATH = './public/README.md';

const registries = [
    {
        registry: 'default',
        description: `This registry contains the JavaScript variant of the default registry.`,
    },
    {
        registry: 'tailwind',
        description: 'This registry contains the JavaScript variant of the tailwind registry.',
    },
    {
        registry: 'ts/tailwind',
        description: 'This registry contains the TypeScript variant of the default registry.',
    },
    {
        registry: 'ts/default',
        description: 'This registry contains the TypeScript variant of the tailwind registry.',
    },
]

const templateFileContent = fs.readFileSync(TEMPLATE_FILE_PATH).toString();

for (const { registry, description } of registries ) {
    const dir = path.join('./public', registry);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    const dest = path.join(dir, 'README.md');

    const newContent = `${templateFileContent}\n\n${description}\n`

    console.info(`Writing ${dest}`)

    fs.writeFileSync(dest, newContent);
}

