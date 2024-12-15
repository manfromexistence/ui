/* eslint-disable import/no-extraneous-dependencies */
import type { TextStyle, ImageStyle } from 'react-native'
import type { TKeyOf } from 'tsfn'

export type TStyle = TextStyle | ImageStyle
export type TStyleKey = TKeyOf<TStyle>
