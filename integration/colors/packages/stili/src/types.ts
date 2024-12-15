import type { CSSProperties } from 'react'
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type TTransformValue = (
  { perspective: number } |
  { rotate: string } |
  { rotateX: string } |
  { rotateY: string } |
  { rotateZ: string } |
  { scale: number } |
  { scaleX: number } |
  { scaleY: number } |
  { skewX: string } |
  { skewY: string } |
  { translateX: number } |
  { translateY: number }
)[]

export type TWebStyle = CSSProperties & {
  fontSmoothing?: 'antialiased',
  tapHighlightColor?: string,
  listStyleType?: string,
}

export type TNativeStyle = {
  [k in (keyof TextStyle | keyof ImageStyle | keyof ViewStyle)]?:
  (k extends keyof ImageStyle ? ImageStyle[k] : never) |
  (k extends keyof TextStyle ? TextStyle[k] : never) |
  (k extends keyof ViewStyle ? ViewStyle[k] : never)
}

export type TStyle = {
  _nativeOnly?: TNativeStyle,
  _webOnly?: TWebStyle,
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around',
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline',
  backgroundColor?: string,
  borderBottomColor?: string,
  borderBottomLeftRadius?: number,
  borderBottomRightRadius?: number,
  borderBottomWidth?: number,
  borderColor?: string,
  borderLeftColor?: string,
  borderLeftWidth?: number,
  borderRadius?: number,
  borderRightColor?: string,
  borderRightWidth?: number,
  borderStyle?: 'solid' | 'dotted' | 'dashed',
  borderTopColor?: string,
  borderTopLeftRadius?: number,
  borderTopRightRadius?: number,
  borderTopWidth?: number,
  borderWidth?: number,
  bottom?: number,
  color?: string,
  display?: 'flex' | 'none',
  flexBasis?: number | 'auto',
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse',
  flexGrow?: number,
  flexShrink?: number,
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse',
  fontFamily?: string,
  fontSize?: number,
  fontStyle?: 'normal' | 'italic',
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
  height?: number | string,
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
  left?: number,
  letterSpacing?: number,
  lineHeight?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  marginTop?: number,
  maxHeight?: number,
  maxWidth?: number,
  minHeight?: number,
  minWidth?: number,
  opacity?: number,
  overflow?: 'visible' | 'hidden' | 'scroll',
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  paddingTop?: number,
  position?: 'absolute' | 'relative',
  right?: number,
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify',
  textDecorationLine?: string,
  top?: number,
  transform?: TTransformValue,
  width?: number | string,
  zIndex?: number,
}
