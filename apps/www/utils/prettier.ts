import type { BuiltInParserName } from 'prettier'
import { isElectron } from '../src/env'

export async function prettierCode(code: string, parser: BuiltInParserName) {
  if (!isElectron)
    return code
  try {
    const format = await import('prettier').then(r => r.format)
    return format(code, {
      parser,
      semi: false,
      singleQuote: true,
    })
  }
  catch {
    return code
  }
}
