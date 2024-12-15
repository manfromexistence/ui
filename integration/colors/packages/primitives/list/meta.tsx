import React from 'react'
import { Text } from '@primitives/text'
import type { TComponentConfig } from 'autoprops'
import { ListItem } from './src'
import type { TList } from './src'

export const config: TComponentConfig<TList> = {
  props: {
    id: ['list'],
    type: ['orderedList', 'unorderedList'],
    children: [<ListItem key="first"><Text>I am a listItem</Text></ListItem>],
  },
}

export { List as Component } from './src'
export { default as packageJson } from './package.json'
