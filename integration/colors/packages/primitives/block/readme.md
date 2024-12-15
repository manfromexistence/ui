`Block` is a box that holds other components inside. It can be styled to some limited extent. The closest analogs are:

- `div` in Web
- `View` in Native

```ts
type TBlock<TRef, TStyles> = {
  ref?: Ref<TRef>,
  style?: TStyles,
  id?: string,
  width?: number,
  height?: number,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number,
  opacity?: number,
  isFloating?: boolean,
  shouldIgnorePointerEvents?: boolean,
  shouldStretch?: boolean,
  children?: ReactNode,
  onPointerEnter?: () => void,
  onPointerLeave?: () => void
}
```

> ⚠️`TStyles` and `TRef` differ on Native and Web given each one’s different environment-specific elements and document-models.