import type { ReactNode } from 'react'
import type { TThemeableText } from '@themeables/text'
import type { TThemeableSpacer } from '@themeables/spacer'

export type THeading = {
  align?: 'start' | 'center' | 'end',
  direction?: 'left-to-right' | 'right-to-left',
  id?: string,
  shouldPreserveWhitespace?: boolean,
  shouldPreventWrap?: boolean,
  shouldPreventSelection?: boolean,
  shouldHideOverflow?: boolean,
  level?: number,
  children: ReactNode,
} & TThemeableText
  & TThemeableSpacer
