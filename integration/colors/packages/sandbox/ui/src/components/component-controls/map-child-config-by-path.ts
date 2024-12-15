import { isChildrenMap } from 'autoprops'
import type { TCommonComponentConfig } from 'autoprops'
import { isUndefined } from 'tsfn'
import type { TAnyObject } from 'tsfn'
import { pipe } from '@psxcode/compose'
import { startWithType, mapWithProps } from 'refun'
import { getComponentName, getElementPath } from '../../utils'
import { mapMetaStoreState } from '../../store-meta'

export type TMapChildConfigByPathResult = {
  childConfig: TCommonComponentConfig | null,
  childDisplayName: string,
  childPropsChildrenMap: Readonly<TAnyObject>,
  childPath: readonly string[],
}

export const mapChildConfigByPath = <P>() => pipe(
  startWithType<P>(),
  mapMetaStoreState(({ componentConfig, componentPropsChildrenMap, selectedElementPath }) => ({
    componentConfig,
    componentPropsChildrenMap,
    selectedElementPath,
  }), ['componentConfig', 'componentPropsChildrenMap', 'selectedElementPath']),
  mapWithProps(({ componentConfig, componentPropsChildrenMap, selectedElementPath }): TMapChildConfigByPathResult => {
    if (componentConfig === null) {
      return {
        childConfig: null,
        childDisplayName: '',
        childPropsChildrenMap: {},
        childPath: [],
      }
    }

    let childDisplayName = 'RootComponent'
    let childConfig = componentConfig
    let childPropsChildrenMap = componentPropsChildrenMap
    const childPath = getElementPath(selectedElementPath)

    for (const name of childPath) {
      if (isUndefined(childConfig.children)) {
        throw new Error(`Path contains name '${name}', but '${childDisplayName}' config.children is undefined`)
      }

      const childMeta = childConfig.children[name]

      if (isUndefined(childMeta)) {
        throw new Error(`Path contains name '${name}', but '${childDisplayName}' config.children[${name}] is undefined`)
      }

      if (!isChildrenMap(childPropsChildrenMap.children)) {
        throw new Error(`childrenMap is invalid for "${name}", path "${selectedElementPath}"`)
      }

      if (isUndefined(childPropsChildrenMap.children[name])) {
        throw new Error(`childrenMap does not contain "${name}", path "${selectedElementPath}"`)
      }

      childDisplayName = getComponentName(childMeta.Component)
      childConfig = childMeta.config
      childPropsChildrenMap = childPropsChildrenMap.children[name]! // undefined checked
    }

    return {
      childConfig,
      childPropsChildrenMap,
      childDisplayName,
      childPath,
    }
  })
)
