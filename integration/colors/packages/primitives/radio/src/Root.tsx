import React from 'react'
import { normalizeWebStyle } from 'stili'
import { component, startWithType, mapContext, mapDefaultProps, mapHandlers } from 'refun'
import type { TRadioInput } from './types'
import { RadioContext } from './Context'

const visibleStyles = normalizeWebStyle({
  backgroundColor: 'rgba(0, 0, 0, 0)',
  borderWidth: 0,
  minWidth: 0,
  _webOnly: {
    boxSizing: 'border-box',
  },
})

const invisibleStyles = normalizeWebStyle({
  opacity: 0,
  position: 'absolute',
  top: 0,
  zIndex: -1,
})

export const RadioInput = component(
  startWithType<TRadioInput>(),
  mapDefaultProps({
    isDisabled: false,
    accessibilityLabelBy: [],
    isVisible: false,
  }),
  mapContext(RadioContext),
  mapHandlers({
    onChange: ({ setGroupValue, value }) => () => setGroupValue(value),
  })
)(({
  id,
  children,
  groupName,
  groupValue,
  onChange,
  accessibilityLabelBy,
  accessibilityLabel,
  value,
  isDisabled,
  isVisible,
}) => {
  const labelledBy = accessibilityLabelBy.length > 0 ? accessibilityLabelBy.join(' ') : undefined
  const isChecked = groupValue === value

  return (
    <label>
      {children}
      <input
        type="radio"
        id={id}
        name={groupName}
        checked={isChecked}
        value={value}
        aria-labelledby={labelledBy}
        aria-label={accessibilityLabel}
        disabled={isDisabled}
        style={isVisible ? visibleStyles : invisibleStyles}
        onChange={onChange}
      />
    </label>
  )
})

RadioInput.displayName = 'RadioInput'
