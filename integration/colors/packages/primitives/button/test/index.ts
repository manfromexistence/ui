import test from 'tape'
import { renderApp } from '../../shared/test-utils'

type TFixtures = 'bare-bones' | 'disabled'
const renderButton = (filename: TFixtures) => renderApp(require.resolve(`./fixtures/${filename}.tsx`))

const PACKAGE = '@primitives/button'

test(`${PACKAGE} has proper role`, async (t) => {
  const page = await renderButton('bare-bones')
  const btnEl = await page.$('button')
  const a11ySnapBtn = await page.accessibility.snapshot({ interestingOnly: false, root: btnEl })

  t.equal(a11ySnapBtn.role, 'button', 'button role is `button`')
  await page.close()
})

test(`${PACKAGE} can be focused`, async (t) => {
  const page = await renderButton('bare-bones')
  const btnEl = await page.$('button')

  await page.focus('button')

  const a11ySnap = await page.accessibility.snapshot({ root: btnEl })

  t.ok(a11ySnap.focused, 'button can be focused')
  await page.close()
})

test(`${PACKAGE} can be disabled`, async (t) => {
  const page = await renderButton('disabled')
  const btnEl = await page.$('button')

  const a11ySnapBtn = await page.accessibility.snapshot({ root: btnEl })

  t.ok(a11ySnapBtn.disabled, 'button can be disabled')

  await page.close()
})
