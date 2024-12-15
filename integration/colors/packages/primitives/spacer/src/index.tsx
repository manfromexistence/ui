import React from 'react'
import type { FC } from 'react'
import { Block } from '@primitives/block'
import type { TThemeableSpacer } from '@themeables/spacer'

export type TSpacer = TThemeableSpacer

export const Spacer: FC<TSpacer> = ({ blockStart, blockEnd, inlineStart, inlineEnd }) => (
  <Block
    shouldIgnorePointerEvents
    top={0}
    right={0}
    bottom={0}
    left={0}
    style={{
      paddingTop: blockStart,
      paddingBottom: blockEnd,
      paddingLeft: inlineStart,
      paddingRight: inlineEnd,
    }}
  />
)

Spacer.displayName = 'Spacer'
