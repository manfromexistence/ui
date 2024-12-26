import React, { useState } from 'react'
import type { TComponentConfig } from 'autoprops'
import { component, startWithType } from 'refun'
import { Block } from '@primitives/block'
import { Text } from '@primitives/text'
import type { TComponentControls } from '@revert/sandbox'
import { SYMBOL_CONTROL_SWITCH } from '@revert/sandbox'
import { RadioInput, RadioGroup } from './src'
import type { TRadioInput, TRadioGroup } from './src'
import { RadioContext } from './src/Context'

// This Component will be passed by the consumer,
// but without it, it's quite pointless to have
// RadioInput on Sandbox.
type TPresentationProps = {
  value: string,
  isDisabled?: boolean,
}

const PresentationElement = ({ isDisabled, value }: TPresentationProps) => (
  <RadioContext.Consumer>
    {({ groupValue }) => (
      <Block style={{
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: groupValue === value ? 800 : 400,
      }}
      >
        <Text
          fontWeight={groupValue === value ? 800 : 400}
          color={isDisabled ? [40, 40, 40, 1] : [197, 103, 134, 1]}
        >
          {value}
        </Text>
      </Block>
    )}
  </RadioContext.Consumer>
)

export const Component = component(
  startWithType<TRadioInput & TRadioGroup>()
)(({ value, groupName, ...radioInputProps }) => {
  const [groupValue, setGroupValue] = useState(value)

  return (
    <RadioGroup
      groupName={groupName}
      groupValue={groupValue}
      onChange={setGroupValue}
    >
      <Block style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
      }}
      >
        <RadioInput value={value} {...radioInputProps}>
          <PresentationElement value={value} {...radioInputProps}/>
        </RadioInput>
        <RadioInput {...radioInputProps} id="foo" value="test-foo">
          <PresentationElement {...radioInputProps} value="test-foo"/>
        </RadioInput>
      </Block>
    </RadioGroup>
  )
})

Component.displayName = 'RadioInput'

type TRadioMetaConfig = Pick<TRadioGroup & TRadioInput, 'value' | 'groupName' | 'id' | 'isDisabled' | 'isVisible'>

export const config: TComponentConfig<TRadioMetaConfig> = {
  props: {
    value: ['foobar'],
    groupName: ['test-group'],
    id: ['radio-test'],
    isDisabled: [true],
    isVisible: [true],
  },
  required: ['value', 'groupName'],
}

export { default as packageJson } from './package.json'

// @ts-ignore
export { default as readme } from './readme.md'

export const controls: TComponentControls<TRadioMetaConfig> = {
  isDisabled: SYMBOL_CONTROL_SWITCH,
  isVisible: SYMBOL_CONTROL_SWITCH,
}

