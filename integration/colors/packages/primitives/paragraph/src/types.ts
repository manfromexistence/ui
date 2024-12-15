import type { ReactNode } from 'react'
import type { TThemeableText } from '@themeables/text'
import type { TThemeableSpacer } from '@themeables/spacer'
import type { TThemeableTextAlign } from '@themeables/text-align'

export type TParagraph = {
  id?: string,
  shouldPreserveWhitespace?: boolean,
  shouldPreventWrap?: boolean,
  shouldPreventSelection?: boolean,
  shouldHideOverflow?: boolean,
  children: ReactNode,
} & TThemeableText
  & TThemeableSpacer
  & TThemeableTextAlign
