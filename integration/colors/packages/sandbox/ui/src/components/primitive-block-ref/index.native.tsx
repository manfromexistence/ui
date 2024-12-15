import { forwardRef } from 'react'
import type { ForwardRefExoticComponent } from 'react'
import type { View } from 'react-native'
import { PrimitiveBlock } from '../primitive-block/index.native'
import type { TPrimitiveBlock } from '../primitive-block/index.native'

export const PrimitiveBlockRef: ForwardRefExoticComponent<TPrimitiveBlock> = forwardRef<View>((props, ref) => (
  PrimitiveBlock({ ...props, ref })
))

PrimitiveBlockRef.displayName = 'PrimitiveBlockRef'
