import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Block } from '@primitives/block'
import { Heading } from './src'
import type { THeading } from './src'

export const config: TComponentConfig<THeading> = {
  props: {
    align: ['start', 'center', 'end'],
    direction: ['right-to-left', 'left-to-right'],
    level: [1, 2, 3, 4, 5, 6],
    children: ['Heading', 'בוקר טוב'],
  },
  required: ['children'],
}

export const Component = (props: THeading) => (
  <Block width={300} style={{ flexDirection: 'column' }}>
    <Heading {...props}/>
  </Block>
)

Component.displayName = 'Heading'

export { default as packageJson } from './package.json'
