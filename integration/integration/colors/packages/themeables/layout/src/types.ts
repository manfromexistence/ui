import type { TLayoutDirection, TVAlign, THAlign } from '@primitives/layout'

export type TThemeableLayout = {
  height?: number,
  width?: number,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  direction?: TLayoutDirection,
  vAlign?: TVAlign,
  hAlign?: THAlign,
}

export type TThemeLayout<InputProps> = (props: InputProps) => TThemeableLayout

export type TThemeableLayouts<ComponentProps> = {
  [key in keyof ComponentProps]: TThemeLayout<ComponentProps[key]>
}

