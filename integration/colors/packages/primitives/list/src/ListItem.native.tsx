import React from 'react'
import { component, startWithType } from 'refun'
import { Block } from '@primitives/block'
import type { TListItem } from './types'

export const ListItem = component(
  startWithType<TListItem>()
)(({ children, id }) => (
  <Block
    id={id}
  >
    {children}
  </Block>
))

ListItem.displayName = 'ListItem'
