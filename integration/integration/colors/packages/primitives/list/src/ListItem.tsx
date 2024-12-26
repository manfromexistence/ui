import React from 'react'
import { component, startWithType } from 'refun'
import type { TListItem } from './types'

export const ListItem = component(
  startWithType<TListItem>()
)(({ id, children }) => (
  <li id={id}>{children}</li>
))

ListItem.displayName = 'ListItem'
