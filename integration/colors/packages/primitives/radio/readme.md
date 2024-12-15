`Radio` brings the equivalent of an `<input type="radio" />` to Native land.

## Handling changes

Context passes down a `groupValue` and a `groupName` together with a `setGroupValue` action to all its consumers. Both the value and the state are set by a `useState` hook within the consumer’s side, while `groupName` is a hardcoded `string` that marks the group name. And this is how the `checked` state is defined, since React Native does not offer a built-in solution similar to the radio input on Web.


## Basic usage

```jsx
import React, { useState } from 'react'
import { RadioGroup, RadioContext, RadioInput } from '@primitives/radio'
import PresentationComponent from './somewhere'

const RadioWrapper = ({
  groupName,
  isVisible = false,
  isDisabled = false
}) => {
  const [ groupValue, setGroupValue ] = useState('')

  return <RadioGroup
    groupName={groupName}
    groupValue={groupValue}
    onChange={setGroupValue}
  >
    <RadioInput
      value={value}
      isVisible={isVisible}
      isDisabled={isDisabled}
    />
    <RadioContext.Consumer>
      {({groupValue}) => (
        <PresentationComponent
          groupValue={groupValue}
        />
      )}
    </RadioContext.Consumer>
  </RadioGroup>
}
```
