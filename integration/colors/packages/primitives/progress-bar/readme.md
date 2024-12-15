`ProgressBar` is a box that holds other components inside. It can be styled to some limited extent. The closest analogs are:

- `div` in Web
- `View` in Native

```ts
type TProgressBar<TStyles> = {
  id?: string,
  ariaValuemin?: number,
  ariaValuenow?: number,
  ariaValuemax?: number,
  children?: ReactNode,
  accessibilityLabel?: string,
  style?: TStyle,
}
```

> ⚠️`TStyles` differ on Native and Web given each one’s different environment-specific elements and document-models.