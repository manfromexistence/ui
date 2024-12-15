# stili

Style normalizer for creating universal React/React Native components.

## Install

```sh
$ yarn add stili
```

## Usage

```ts
normalizeWebStyle(style: TStyle) => TCssWebProps
normalizeNativeStyle(style: TStyle) => TCssNativeProps
```

* `TStyle` – normalized styles
* `TCssWebProps` – web specific styles
* `TCssNativeProps` – native specific styles

In web file
```ts
import { normalizeWebStyle } from 'stili'

normalizeWebStyle({ lineHeight: 16 })
// field target: { lineHeight: '16px' }
```

In native file
```ts
import { normalizeNativeStyle } from 'stili'

normalizeNativeStyle({ lineHeight: 16 })
// field target: { lineHeight: 16 }
```
