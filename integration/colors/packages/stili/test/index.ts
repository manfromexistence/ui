import test from 'tape'
import { normalizeWebStyle, normalizeNativeStyle } from '../src'

test('stili: normalizeStyle + web', (t) => {
  t.deepEqual(
    normalizeWebStyle({
      _webOnly: {
        userSelect: 'none',
        appearance: 'unset',
        textSizeAdjust: 'none',
        boxSizing: 'revert',
        textOverflow: 'clip',
        tapHighlightColor: 'transparent',
        fontSmoothing: 'antialiased',
      },
      fontSize: 16,
      lineHeight: 10,
      letterSpacing: 10,
      transform: [
        { perspective: 10 },
        { scale: 1 },
        { rotate: '90' },
      ],
    }),
    {
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
      WebkitAppearance: 'unset',
      MozAppearance: 'unset',
      appearance: 'unset',
      textSizeAdjust: 'none',
      boxSizing: 'revert',
      textOverflow: 'clip',
      WebkitTapHighlightColor: 'transparent',
      tapHighlightColor: 'transparent',
      WebkitFontSmoothing: 'antialised',
      MozOsxFontSmoothing: 'grayscale',
      fontSize: 16,
      lineHeight: '10px',
      letterSpacing: '10px',
      transform: 'perspective(10) scale(1) rotate(90)',
    },
    'should work'
  )

  t.end()
})

test('stili: normalizeStyle + native', (t) => {
  t.deepEqual(
    normalizeNativeStyle({
      fontWeight: 200,
      fontSize: 16,
    }),
    {
      fontWeight: '200',
      fontSize: 16,
    },
    'should work'
  )

  t.deepEqual(
    normalizeNativeStyle({
      fontWeight: undefined,
      fontSize: 16,
    }),
    {
      fontSize: 16,
    },
    'should skip undefined font weight'
  )

  t.end()
})
