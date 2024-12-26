import type { ReactNode, Ref } from 'react'
import type { TStyle } from 'stili'

export type TBlockRoles = 'main' | 'header' | 'footer' | 'navigation' | 'section' | 'secondary' | 'primary' | 'none'

export type TBlock = {
  id?: string,
  width?: number,
  height?: number,
  minWidth?: number,
  minHeight?: number,
  maxWidth?: number,
  maxHeight?: number,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
  opacity?: number,
  isFloating?: boolean,
  floatingIndex?: number,
  shouldIgnorePointerEvents?: boolean,
  shouldStretch?: boolean,
  shouldScroll?: boolean,
  shouldHideOverflow?: boolean,
  children?: ReactNode,
  role?: TBlockRoles,
  ref?: Ref<any>,
  style?: TStyle,
  onPointerEnter?: () => void,
  onPointerLeave?: () => void,
  onPointerDown?: () => void,
  onPointerUp?: () => void,
  onPointerMove?: () => void,
}
