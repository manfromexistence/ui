import React from 'react'
import type { ReactNode } from 'react'
import { normalizeWebStyle } from 'stili'
import { startWithType, component, mapDefaultProps, mapWithPropsMemo } from 'refun'
import type { TTableBorderStyle, TTableCellPosition } from './types'

export type TTableHeadCell = {
  id?: string,
  children?: ReactNode,
  backgroundColor?: string,
  width?: number,
} & TTableBorderStyle
  & TTableCellPosition

export const TableHeadCell = component(
  startWithType<TTableHeadCell>(),
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
    width,
    position,
  }) => ({
    style: normalizeWebStyle({
      _webOnly: {
        position,
      },
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      borderColor,
      backgroundColor,
      borderTopWidth,
      borderBottomWidth,
      borderLeftWidth,
      borderRightWidth,
      borderStyle,
      width,
    }),
  }), [
    'borderTopWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderStyle',
    'borderColor',
    'backgroundColor',
    'width',
    'position',
  ])
)(({ id, style, children }) => (
  <th id={id} style={style}>
    {children}
  </th>
))

TableHeadCell.displayName = 'TableHeadCell'
