import React from 'react'
import { RadioContext } from './Context'
import type { TRadioGroup } from './types'

const RadioGroup = ({
  groupName,
  groupValue,
  onChange,
  children,
}: TRadioGroup) => (
  <RadioContext.Provider value={{ groupName, groupValue, setGroupValue: onChange }}>
    {children}
  </RadioContext.Provider>
)

RadioGroup.displayName = 'RadioGroup'

export { RadioGroup }
