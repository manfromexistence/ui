import React from 'react'
import type { FC } from 'react'
import { TouchableWithoutFeedback, View } from 'react-native'
import type { TStyle } from 'stili'
import type { TButton } from './types'

const hitSlop = {
  bottom: 5,
  left: 5,
  right: 5,
  top: 5,
}

const style: TStyle = {
  alignSelf: 'stretch',
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 1,
}

export const Button: FC<TButton> = ({
  id,
  accessibilityLabel,
  isDisabled,
  onPress,
  onPressIn,
  onPressOut,
  children,
}) => (
  <TouchableWithoutFeedback
    testID={id}
    accessibilityLabel={accessibilityLabel}
    disabled={isDisabled}
    hitSlop={hitSlop}
    onPress={onPress}
    onPressIn={onPressIn}
    onPressOut={onPressOut}
  >
    <View style={style}>
      {children}
    </View>
  </TouchableWithoutFeedback>
)
