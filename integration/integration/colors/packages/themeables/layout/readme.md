# @themeables/layout

> What is a _themeable_? You can find more in the [`@themeables` readme](..)

Properties that the theme function for the `@themeables/layout` should return:

```ts
type TThemeableLayout = {
  height?: number,
  width?: number,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  direction?: TLayoutDirection,
  vAlign?: TVAlign,
  hAlign?: THAlign,
}
```

You can see a full example usage in [the meta file](meta.tsx)
