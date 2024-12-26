import type { TComponents } from '@sandbox/ui'
/* eslint-disable import/no-extraneous-dependencies */
import * as Background from '@themeables/background/meta'
import * as Button from '@primitives/button/meta'
import * as Checkbox from '@primitives/checkbox/meta'
import * as Heading from '@primitives/heading/meta'
import * as Input from '@primitives/input/meta'
import * as LayoutThemeable from '@themeables/layout/meta'
import * as TextAlignThemeable from '@themeables/text-align/meta'
import * as Paragraph from '@primitives/paragraph/meta'
import * as Svg from '@primitives/svg/meta'
import * as Radio from '@primitives/radio/meta'
import * as Spacer from '@primitives/spacer/meta'
// import * as TestLottie from 'test-lottie/meta'
import * as VectorShape from '@primitives/vector-shape/meta'
import * as List from '@primitives/list/meta'
import * as Block from '@primitives/block/meta'
import * as ProgressBar from '@primitives/progress-bar/meta'

export const components: TComponents = {
  Background: () => Promise.resolve(Background),
  Button: () => Promise.resolve(Button),
  Checkbox: () => Promise.resolve(Checkbox),
  Heading: () => Promise.resolve(Heading),
  Input: () => Promise.resolve(Input),
  LayoutThemeable: () => Promise.resolve(LayoutThemeable),
  TextAlignThemeable: () => Promise.resolve(TextAlignThemeable),
  Paragraph: () => Promise.resolve(Paragraph),
  VectorShape: () => Promise.resolve(VectorShape),
  Svg: () => Promise.resolve(Svg),
  // TestLottie: () => Promise.resolve(TestLottie),
  Radio: () => Promise.resolve(Radio),
  Spacer: () => Promise.resolve(Spacer),
  List: () => Promise.resolve(List),
  Block: () => Promise.resolve(Block),
  ProgressBar: () => Promise.resolve(ProgressBar),
}
