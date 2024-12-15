import React from 'react'
import type { TCommonComponentConfig } from 'autoprops'
import type { TAnyObject } from 'tsfn'
import { component, startWithType, mapWithPropsMemo } from 'refun'
import { Layout, Layout_Item } from '../layout'
import { SYMBOL_COMPONENT_CONTROLS_BLOCK } from '../../symbols'
import { PropsItem } from './PropsItem'

export type TPropsBlock = {
  componentConfig: TCommonComponentConfig,
  componentPropsChildrenMap: Readonly<TAnyObject>,
  propPath: readonly string[],
  propKeys: readonly string[],
  onChange: (propPath: readonly string[], propValue: any) => void,
}

export const PropsBlock = component(
  startWithType<TPropsBlock>(),
  mapWithPropsMemo(({ propPath, propKeys }) => ({
    propPaths: propKeys.map((key) => [...propPath, key]),
  }), ['propPath', 'propKeys'])
)(({
  componentConfig,
  componentPropsChildrenMap,
  propPaths,
  propKeys,
  onChange,
}) => (
  <Layout direction="vertical" vPadding={10}>
    {propKeys.map((propName, rowIndex) => (
      <Layout_Item key={rowIndex} height={40}>
        <PropsItem
          name={propName}
          propPath={propPaths[rowIndex]}
          possibleValues={componentConfig.props[propName]!}
          value={componentPropsChildrenMap[propName]}
          isRequired={Boolean(componentConfig.required?.includes(propName))}
          onChange={onChange}
        />
      </Layout_Item>
    ))}
  </Layout>
))

PropsBlock.displayName = 'PropsBlock'
PropsBlock.componentSymbol = SYMBOL_COMPONENT_CONTROLS_BLOCK
