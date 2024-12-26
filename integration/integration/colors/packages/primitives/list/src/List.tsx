import React from 'react'
import type { TStyle } from 'stili'
import { normalizeWebStyle } from 'stili'
import { component, startWithType, mapWithProps } from 'refun'
import type { TList } from './types'

export const List = component(
  startWithType<TList>(),
  mapWithProps(() => {
    const style: TStyle = {
      _webOnly: { listStyleType: 'none' },
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    }

    return {
      style: normalizeWebStyle(style),
    }
  })
)(({ id, children, style, type }) => (
  type === 'orderedList' ?
    <ol id={id} style={style}>{children}</ol>
    :
    <ul id={id} style={style}>{children}</ul>
))

List.displayName = 'List'
