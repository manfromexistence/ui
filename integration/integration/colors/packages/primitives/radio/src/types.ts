import type { ReactNode } from 'react'

export type TRadioContext = {
  groupName: string,
  groupValue: string,
  setGroupValue: (arg: string) => void,
}

export type TRadioInput = {
  id?: string,
  value: string,
  accessibilityLabel?: string,
  accessibilityLabelBy?: string[],
  isDisabled?: boolean,
  isVisible?: boolean,
  children?: ReactNode,
}

export type TRadioGroup = {
  groupValue: string,
  groupName: string,
  onChange: (arg: string) => void,
  children: ReactNode,
}
