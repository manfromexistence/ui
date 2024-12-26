import test from 'tape'
import { renderApp } from '../../shared/test-utils'

type TFixtures = 'h1'

const renderHeading = (filename: TFixtures) => renderApp(require.resolve(`./fixtures/${filename}.tsx`))
const PACKAGE = '@primitives/heading'

test(`${PACKAGE} outputs children properly`, async (t) => {
  const page = await renderHeading('h1')
  const h1Content = await page.$eval('h1', (el: any) => el.textContent)

  t.equal(h1Content, 'Foo bar', 'strings match')

  await page.close()
})

test(`${PACKAGE} as h1 has proper level`, async (t) => {
  const page = await renderHeading('h1')
  const h1El = await page.$('h1')

  const a11ySnap = await page.accessibility.snapshot({ root: h1El })

  t.equal(a11ySnap.level, 1, 'H1 has role-level 1')

  await page.close()
})

test('Heading needs to have role="heading"', async (t) => {
  const page = await renderHeading('h1')
  const h1El = await page.$('h1')

  const a11ySnap = await page.accessibility.snapshot({ root: h1El })

  t.equal(a11ySnap.role, 'heading', 'H1 has role "heading"')

  await page.close()
})
