import React from 'react'
import { startWithType, mapHandlers, pureComponent, mapState, mapDebouncedHandlerTimeout, mapWithProps } from 'refun'
import { Switch } from '../switch'
import { SYMBOL_SWITCH } from '../../symbols'

export type TValueCheckboxProps = {
  propPath: readonly string[],
  checkedPropValue: any,
  propValue: any,
  propPossibleValues?: readonly any[],
  onChange: (propPath: readonly string[], propValue: any) => void,
}

const isDefined = (val: any): boolean => val !== false && val !== undefined

const hasBothTrueAndFalseValues = (propPossibleValues: readonly any[]): boolean => propPossibleValues.length === 2 && propPossibleValues.includes(true) && propPossibleValues.includes(false)

export const ValueCheckbox = pureComponent(
  startWithType<TValueCheckboxProps>(),
  mapWithProps(({ propPossibleValues, propValue }) => {
    const valueCanBeFalse = propPossibleValues && hasBothTrueAndFalseValues(propPossibleValues)

    return (
      {
        valueCanBeFalse,
        propValue: valueCanBeFalse && propValue === undefined ? true : propValue,
      }
    )
  }),
  mapState('isChecked', 'setIsChecked', ({ propValue }) => isDefined(propValue), ['propValue']),
  mapHandlers({
    onOptimisticWait: ({ propValue, isChecked, setIsChecked }) => () => {
      const validState = isDefined(propValue)

      if (validState !== isChecked) {
        setIsChecked(validState)
      }
    },
  }),
  mapDebouncedHandlerTimeout('onOptimisticWait', 500),
  mapHandlers({
    onChange: ({ propPath, checkedPropValue, onChange, isChecked, setIsChecked, onOptimisticWait, valueCanBeFalse }) => () => {
      setIsChecked(!isChecked)
      onOptimisticWait()

      let onChangeValue = checkedPropValue

      if (isChecked) {
        if (valueCanBeFalse) {
          onChangeValue = false
        } else {
          onChangeValue = undefined
        }
      }

      onChange(propPath, onChangeValue)
    },
  })
)(({ isChecked, onChange }) => (
  <Switch
    isChecked={isChecked}
    onToggle={onChange}
  />
))

ValueCheckbox.displayName = 'ValueCheckbox'
ValueCheckbox.componentSymbol = SYMBOL_SWITCH
