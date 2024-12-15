export type TAlign = 'start' | 'center' | 'end'
export type TDirection = 'left-to-right' | 'right-to-left'

export type TThemeableTextAlign = {
  align?: TAlign,
  direction?: TDirection,
}

export type TThemeTextAlign<InputProps> = (props: InputProps) => TThemeableTextAlign

export type TThemeableTextAligns<ComponentProps> = {
  [key in keyof ComponentProps]: TThemeTextAlign<ComponentProps[key]>
}

