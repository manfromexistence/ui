import React from 'react'
import { startWithType, mapHandlers, mapWithProps, pureComponent, mapState, mapWithPropsMemo, mapDebouncedHandlerTimeout } from 'refun'
import { Dropdown } from '../dropdown'
import { SYMBOL_DROPDOWN } from '../../symbols'
import type { TOption } from '../size-select'
import { printValue } from './print-value'

export type TValueDropdownProps = {
  propPath: readonly string[],
  propValue: any,
  propPossibleValues: readonly any[],
  isPropRequired: boolean,
  onChange: (propPath: readonly string[], selectedValue: any) => void,
}

export const ValueDropdown = pureComponent(
  startWithType<TValueDropdownProps>(),
  mapWithPropsMemo(({ propPossibleValues, isPropRequired }) => ({
    options: propPossibleValues.reduce((result: TOption[], value, i) => {
      if (i === 0 && !isPropRequired) {
        result.push({ label: printValue(undefined), value: '-' })
      }

      result.push({ label: printValue(value), value: String(i) })

      return result
    }, [] as TOption[]),
  }), ['propPossibleValues', 'isPropRequired']),
  mapWithProps(({ propPossibleValues, propValue }) => {
    const valueIndex = propPossibleValues.indexOf(propValue)

    return {
      stateValue: valueIndex >= 0 ? String(valueIndex) : '-',
    }
  }),
  mapState('value', 'setValue', ({ stateValue }) => stateValue, ['stateValue']),
  mapHandlers({
    onOptimisticWait: ({ stateValue, value, setValue }) => () => {
      if (stateValue !== value) {
        setValue(stateValue)
      }
    },
  }),
  mapDebouncedHandlerTimeout('onOptimisticWait', 500),
  mapHandlers({
    onChange: ({ propPath, propPossibleValues, setValue, onChange, onOptimisticWait }) => (value: string) => {
      setValue(value)
      onOptimisticWait()

      if (value === '-') {
        onChange(propPath, undefined)
      } else {
        onChange(propPath, propPossibleValues[Number(value)])
      }
    },
  })
)(({ options, value, onChange }) => (
  <Dropdown
    options={options}
    value={value}
    onChange={onChange}
  />
))

ValueDropdown.displayName = 'ValueDropdown'
ValueDropdown.componentSymbol = SYMBOL_DROPDOWN
