#!/usr/bin/env node

const { execSync } = require('node:child_process');
const args = process.argv.slice(2);
const url = 'https://www.roadmap-ui.com';
const components = ['gantt', 'kanban', 'list', 'calendar', 'table'];

if (args.length !== 2 || args[0] !== 'add' || !args[1].trim()) {
  console.log('Usage: npx roadmap-ui add [name]');
  process.exit(1);
}

if (!components.includes(args[1].trim())) {
  console.log(`Available components: ${components.join(', ')}`);
  process.exit(1);
}

try {
  const component = args[1];

  execSync(`npx shadcn@latest add ${url}/${component}.json`, {
    stdio: 'inherit',
  });
} catch (error) {
  console.error('Failed to add component:', error.message);
  process.exit(1);
}
