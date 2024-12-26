The `<Border>` primitive is designed to circumvent a couple of issues that could be source of headaches developing on a broad cross-platform system.

## Usage

```jsx
import React from 'react'
import { Border } from '@primitives/border'
import { Block } from '@primitives/border'
import { Text } from '@primitives/text'

const HelloWorld = () => (
  <Block>
    <Border
      topWidth={2}
      rightWidth={2}
      bottomWidth={2}
      leftWidth={2}
      color={[240, 0, 230, 1]}
    />
    <Text>Hello World!!</Text>
  </Block>
)
```

## Properties

| Property          | Type     | Description                       | Required |
| ----------------- | -------- | --------------------------------- | -------- |
| Color             | `TColor` | \*                                | yes      |
| topLeftRadius     | `number` | `px` to top left radius           |          |
| topRightRadius    | `number` | `px` to top right radius          |          |
| bottomRightRadius | `number` | `px` to bottom right radius       |          |
| bottomLeftRadius  | `number` | `px` to bottom left radius        |          |
| topWidth          | `number` | `px` top width                    |          |
| rightWidth        | `number` | `px` right width                  |          |
| bottomWidth       | `number` | `px` bottom width                 |          |
| leftWidth         | `number` | `px` left width                   |          |
| overflowBottom    | `number` | `px` offset from bottom container |          |
| overflowLeft      | `number` | `px` offset from left container   |          |
| overflowRight     | `number` | `px` offset from right container  |          |
| overflowTop       | `number` | `px` offset from top container    |          |

*`TColor`: a tuple that will translate to `rgba` format, comes [Colorido](https://www.npmjs.com/package/colorido)

## Borders in Native vs Borders in the Web

CSS [box-model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) offers an alternative in the web which approximates the bounding area to the one designers are more used to think. So, for web it‘s now a widespread good practice to work with `box-sizing: border-box` set at the top of an application global styles.

Though in React Native it‘s a different story. There is no alternative and the box-model is always `content-box`. In addition, there aren‘t many display types, being `flex` the norm there.

This is likely to cause slight discrepancies in the layout that are perceivable to every user and could disrupt the experience when setting borders or using any of the popular border hacks (with wrapping elements).

