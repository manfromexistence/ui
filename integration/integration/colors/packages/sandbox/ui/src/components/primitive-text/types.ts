import type { ReactNode } from 'react'
import type { TColor } from '../../colors'

export type TPrimitiveText = {
  id?: string,
  color?: TColor,
  fontFamily?: string,
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  fontSize?: number,
  lineHeight?: number,
  letterSpacing?: number,
  isUnderlined?: boolean,
  shouldPreserveWhitespace?: boolean,
  shouldPreventWrap?: boolean,
  shouldPreventSelection?: boolean,
  shouldHideOverflow?: boolean,
  children: ReactNode,
}
