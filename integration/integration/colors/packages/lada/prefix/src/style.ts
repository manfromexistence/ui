import type { CSSProperties } from 'react'
import type { TKeyOf } from 'tsfn'

export type TStyle = {
  fontSmoothing?: string,
  tapHighlightColor?: string,
} & CSSProperties
export type TStyleKey = TKeyOf<TStyle>
