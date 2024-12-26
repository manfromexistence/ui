# @themeables/text

> What is a _themeable_? You can find more in the [`@themeables` readme](..)

Properties that the theme function for the `@themeables/text-align` should return:

```ts
export type TAlign = 'start' | 'center' | 'end'
export type TDirection = 'left-to-right' | 'right-to-left'

type TThemeableTextAlign = {
  align?: TAlign,
  direction?: TDirection,
}
```

You can see a full example usage in [the meta file](meta.tsx)
