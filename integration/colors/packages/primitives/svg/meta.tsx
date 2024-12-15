import React from 'react'
import type { TComponentConfig } from 'autoprops'
import {
  Defs,
  Ellipse,
  Group,
  LinearGradient,
  Rect,
  Shape,
  Stop,
  Surface,
} from './src'

export const config: TComponentConfig<{}> = {
  props: {},
}

export const Component = () => (
  <Surface height="450" width="300">
    <Defs>
      <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
        <Stop offset="0" stopColor="#FFD080" stopOpacity="1"/>
        <Stop offset="1" stopColor="red" stopOpacity="1"/>
      </LinearGradient>
    </Defs>

    <Ellipse cx="100" cy="175" rx="85" ry="55" fill="url(#grad)"/>

    <Group y={30}>
      <Rect
        x="20"
        y="200"
        width="100"
        height="50"
        fill="url(#grad)"
      />
      <Group y={230}>
        <Shape
          d="M0,0 L0,40 L40,0 L0,0 Z"
          fill="#ff0000"
        />
      </Group>
    </Group>
  </Surface>
)

export { default as packageJson } from './package.json'
