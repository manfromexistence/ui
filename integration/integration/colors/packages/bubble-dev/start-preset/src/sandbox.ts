import sequence from '@start/plugin-sequence'
import env from '@start/plugin-env'
import plugin from '@start/plugin'
import find from '@start/plugin-find'
import remove from '@start/plugin-remove'
import syncState from './plugins/sync-state'
import concurrent from './plugins/concurrent'

export type TSandbox = {
  entryPointPath: string,
  htmlTemplatePath: string,
  assetsPath?: string,
  fontsDir?: string,
}

export const Sandbox = ({ entryPointPath, htmlTemplatePath, assetsPath, fontsDir }: TSandbox) => (...args: string[]) => {
  const platforms = args.length > 0 ? args : ['web', 'ios', 'android']

  return sequence(
    env({ NODE_ENV: 'development' }),
    syncState,
    platforms.includes('web') && plugin('web', ({ logMessage }) => async () => {
      const { runWebApp } = await import('@rebox/web')

      await runWebApp({
        entryPointPath,
        htmlTemplatePath,
        assetsPath,
        isQuiet: true,
      })

      logMessage('http://localhost:3000/')
    }),
    concurrent(
      platforms.includes('ios') && plugin('ios', () => async () => {
        const { runIosApp } = await import('@rebox/ios')

        await runIosApp({
          entryPointPath,
          appId: 'org.bubble-dev.sandbox',
          appName: 'Sandbox',
          iPhoneModel: '12',
          iOSVersion: '14',
          fontsDir,
          dependencyNames: [
            'react-native-svg',
            'lottie-react-native',
          ],
        })
      }),
      platforms.includes('android') && plugin('android', () => async () => {
        const { runAndroidApp } = await import('@rebox/android')

        await runAndroidApp({
          entryPointPath,
          appId: 'org.bubble_dev.sandbox',
          appName: 'Sandbox',
          fontsDir,
          dependencyNames: [
            'react-native-svg',
            'lottie-react-native',
          ],
          portsToForward: [3001],
        })
      })
    )
  )
}

export const buildSandbox = () =>
  sequence(
    find('.rebox/Sandbox/'),
    remove,
    plugin('web', () => async () => {
      const { buildWebAppRelease } = await import('@rebox/web')

      await buildWebAppRelease({
        entryPointPath: './tasks/sandbox/index.tsx',
        outputPath: './.rebox/Sandbox',
        htmlTemplatePath: './tasks/sandbox/templates/build.html',
      })
    })
  )
