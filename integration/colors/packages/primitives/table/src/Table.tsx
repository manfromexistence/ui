import React from 'react'
import type { ReactNode } from 'react'
import { startWithType, component, mapWithPropsMemo, mapDefaultProps } from 'refun'
import { normalizeWebStyle } from 'stili'
import type { TTableBorderStyle } from './types'

export type TTable = {
  id?: string,
  children?: ReactNode,
  backgroundColor?: string,
} & TTableBorderStyle

export const Table = component(
  startWithType<TTable>(),
  mapDefaultProps({
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
  }),
  mapWithPropsMemo(({ borderTopWidth, borderBottomWidth, borderLeftWidth, borderRightWidth, borderStyle, borderColor, backgroundColor }) => ({
    style: normalizeWebStyle({
      _webOnly: {
        width: '100%',
        tableLayout: 'fixed',
        borderCollapse: 'collapse',
      },
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      flexGrow: 1,
      flexShrink: 1,
      alignSelf: 'stretch',
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderColor,
      backgroundColor,
      borderStyle,
    }),
  }), ['borderTopWidth', 'borderLeftWidth', 'borderRightWidth', 'borderBottomWidth', 'borderStyle', 'borderColor', 'backgroundColor'])
)(({ id, children, style }) => (
  <table id={id} style={style}>
    {children}
  </table>
))

Table.displayName = 'Table'
