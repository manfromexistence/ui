# tailwind-color

[![npm package](https://badgen.net/npm/v/manfromexistence/tailwind-color)](https://npmjs.com/package/manfromexistence/tailwind-color)

A fork of material-color-utilities for algorithms and utilities that power the Material Design 3 (M3) color system,
including choosing theme colors from images and creating tones of colors; all in
a new color space.
Mostly about adding this color power to tailwind and much more.

See the main
[README](https://github.com/manfromexistence/ui#readme)
for more information.

## Getting started

`npm i tailwind-color` or `yarn add tailwind-color`

```typescript
import { Hct } from "tailwind-color";

// Simple demonstration of HCT.
const color = Hct.fromInt(0xff4285f4);
console.log(`Hue: ${color.hue}`);
console.log(`Chrome: ${color.chroma}`);
console.log(`Tone: ${color.tone}`);

```

### Theming

```typescript
import { argbFromHex, themeFromSourceColor, applyTheme } from "tailwind-color";

// Get the theme from a hex color
const theme = themeFromSourceColor(argbFromHex('#f82506'), [
  {
    name: "custom-1",
    value: argbFromHex("#ff0000"),
    blend: true,
  },
]);

// Print out the theme as JSON
console.log(JSON.stringify(theme, null, 2));

// Check if the user has dark mode turned on
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply the theme to the body by updating custom properties for material tokens
applyTheme(theme, {target: document.body, dark: systemDark});

```

## Contributing

This repo is not accepting external contributions, but feature requests and bug
reports are welcome on
[GitHub](https://github.com/manfromexistence/tailwind-color/issues).
