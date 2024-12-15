import { forwardRef } from 'react'
import type { ForwardRefExoticComponent } from 'react'
import { PrimitiveBlock } from '../primitive-block'
import type { TPrimitiveBlock } from '../primitive-block'

export const PrimitiveBlockRef: ForwardRefExoticComponent<TPrimitiveBlock> = forwardRef<HTMLDivElement>((props, ref) => (
  PrimitiveBlock({ ...props, ref })
))

PrimitiveBlockRef.displayName = 'PrimitiveBlockRef'
