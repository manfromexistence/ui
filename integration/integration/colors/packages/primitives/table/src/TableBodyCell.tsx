import React from 'react'
import type { ReactNode } from 'react'
import { normalizeWebStyle } from 'stili'
import { startWithType, component, mapDefaultProps, mapWithPropsMemo } from 'refun'
import type { TTableBorderStyle, TTableCellPosition } from './types'

export type TTableBodyCell = {
  id?: string,
  children?: ReactNode,
  backgroundColor?: string,
} & TTableBorderStyle
  & TTableCellPosition

export const TableBodyCell = component(
  startWithType<TTableBodyCell>(),
  mapDefaultProps({
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderStyle: 'solid',
  }),
  mapWithPropsMemo(({
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderStyle,
    borderColor,
    backgroundColor,
    position,
  }) => ({
    style: normalizeWebStyle({
      _webOnly: {
        position,
      },
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderColor,
      backgroundColor,
      borderStyle,
    }),
  }), [
    'borderTopWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderStyle',
    'borderColor',
    'backgroundColor',
    'position',
  ])
)(({ id, style, children }) => (
  <td id={id} style={style}>
    {children}
  </td>
))

TableBodyCell.displayName = 'TableBodyCell'
