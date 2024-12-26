import React from 'react'
import type { CSSProperties } from 'react'
import { component, startWithType, mapDefaultProps, mapWithPropsMemo, mapContext } from 'refun'
import { colorToString } from '../../colors'
import { Text } from '../text'
import { SYMBOL_LINK } from '../../symbols'
import { SizeContent } from '../size-content'
import { TextThemeContext } from '../theme-context'
import type { TSizeLink } from './types'

export const SizeLink = component(
  startWithType<TSizeLink>(),
  mapDefaultProps({
    isUnderlined: false,
  }),
  mapContext(TextThemeContext),
  mapWithPropsMemo(({ isUnderlined, color }) => {
    const style: CSSProperties = {
      color: colorToString(color),
      textDecorationLine: isUnderlined ? 'underlined' : 'none',
    }

    return {
      style,
    }
  }, ['isUnderlined', 'color'])
)(({
  id,
  href,
  tabIndex,
  target,
  style,
  shouldHideOverflow,
  shouldPreventWrap,
  children,
  onBlur,
  onFocus,
  onPointerEnter,
  onPointerLeave,
  onPress,
  onPressIn,
  onPressOut,
}) => (
  <SizeContent>
    <a
      href={href}
      id={id}
      onBlur={onBlur}
      onClick={onPress}
      onFocus={onFocus}
      onMouseDown={onPressIn}
      onMouseEnter={onPointerEnter}
      onMouseLeave={onPointerLeave}
      onMouseUp={onPressOut}
      style={style}
      tabIndex={tabIndex}
      target={target}
    >
      <Text
        shouldHideOverflow={shouldHideOverflow}
        shouldPreventWrap={shouldPreventWrap}
      >
        {children}
      </Text>
    </a>
  </SizeContent>
))

SizeLink.displayName = 'Link'
SizeLink.componentSymbol = SYMBOL_LINK
