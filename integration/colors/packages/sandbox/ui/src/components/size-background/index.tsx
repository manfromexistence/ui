import React from 'react'
import { startWithType, component } from 'refun'
import { PrimitiveBackground } from '../primitive-background'
import type { TPrimitiveBackground } from '../primitive-background'
import { AnimationColor } from '../animation'
import { SizeParentBlock } from '../size-parent-block'

export const SizeBackground = component(
  startWithType<TPrimitiveBackground>()
)((props) => (
  <SizeParentBlock>
    <AnimationColor toColor={props.color}>
      {(color) => (
        <PrimitiveBackground {...props} color={color}/>
      )}
    </AnimationColor>
  </SizeParentBlock>
))

SizeBackground.displayName = 'Background'
SizeBackground.componentSymbol = Symbol('BACKGROUND')
