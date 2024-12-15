import React from 'react'
import { component, startWithType } from 'refun'
import { Block } from '@primitives/block'
import type { TList } from './types'

export const List = component(
  startWithType<TList>()
)(({ children, id }) => (
  <Block
    style={{ flexDirection: 'column' }}
    id={id}
  >
    {children}
  </Block>
))

List.displayName = 'List'
