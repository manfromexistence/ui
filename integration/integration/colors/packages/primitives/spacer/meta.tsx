import React from 'react'
import type { TComponentConfig } from 'autoprops'
import { Layout, LayoutInFlow } from '@primitives/layout'
import { Text } from '@primitives/text'
import { Spacer } from './src'
import type { TSpacer } from './src'

export const config: TComponentConfig<TSpacer> = {
  props: {
    blockStart: [10, 40],
    blockEnd: [10, 40],
    inlineStart: [10, 40],
    inlineEnd: [10, 40],
  },
}

export const Component = (props: TSpacer) => (
  <Layout direction="vertical" hAlign="center">
    <LayoutInFlow>
      <Text>
        blockStart
      </Text>
    </LayoutInFlow>
    <LayoutInFlow>
      <Layout direction="horizontal" vAlign="center">
        <LayoutInFlow>
          <Text>
            inlineStart
          </Text>
        </LayoutInFlow>
        <LayoutInFlow>
          <Spacer {...props}/>
        </LayoutInFlow>
        <LayoutInFlow>
          <Text>
            inlineEnd
          </Text>
        </LayoutInFlow>
      </Layout>
    </LayoutInFlow>
    <LayoutInFlow>
      <Text>
        blockEnd
      </Text>
    </LayoutInFlow>
  </Layout>
)

export { default as packageJson } from './package.json'
