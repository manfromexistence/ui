import type { TThemeableText } from '@themeables/text'
import type { TThemeableSpacer } from '@themeables/spacer'

export type TInput = {
  accessibilityLabel?: string,
  id?: string,
  isDisabled?: boolean,
  onBlur?: () => void,
  onChange: (newValue: string) => void,
  onFocus?: () => void,
  onPressIn?: () => void,
  onPressOut?: () => void,
  onSubmit?: () => void,
  value: string,
} & TThemeableText
  & TThemeableSpacer
