import { getAppPage } from 'foreal'

export async function renderApp(fixturePath: string) {
  try {
    return await getAppPage({
      entryPointPath: fixturePath,
    })
  } catch (error) {
    throw new Error(error)
  }
}
