import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/registry/components/tabs';
import TextIcon from '@/components/icons/text-icon';
import PrimitivesIcon from './icons/primitives-icon';
import EffectsIcon from './icons/effects-icon';
import ComponentsIcon from './icons/components-icon';
import BackgroundIcon from './icons/background-icon';
import { CodeEditor } from '@/registry/components/code-editor';
import { useState } from 'react';
import { index } from '@/__registry__';
import { SectionWrapper } from './section-wrapper';
import { MotionEffect } from '@/registry/effects/motion-effect';

const TABS = [
  {
    value: 'effects',
    label: 'Effects',
    icon: EffectsIcon,
    name: 'motion-effect-image-grid-demo',
    code: index['motion-effect-image-grid-demo'].files[0].content,
    demo: index['motion-effect-image-grid-demo'].component,
  },
  {
    value: 'components',
    label: 'Components',
    icon: ComponentsIcon,
    name: 'cursor-demo',
    code: index['cursor-demo'].files[0].content,
    demo: index['cursor-demo'].component,
  },
  {
    value: 'primitives',
    label: 'Primitives',
    icon: PrimitivesIcon,
    name: 'radix-accordion-demo',
    code: index['radix-accordion-demo'].files[0].content,
    demo: index['radix-accordion-demo'].component,
  },
  {
    value: 'text',
    label: 'Text',
    icon: TextIcon,
    name: 'writing-text-demo',
    code: index['writing-text-demo'].files[0].content,
    demo: index['writing-text-demo'].component,
  },
  {
    value: 'background',
    label: 'Background',
    icon: BackgroundIcon,
    name: 'fireworks-background-demo',
    code: index['fireworks-background-demo'].files[0].content,
    demo: index['fireworks-background-demo'].component,
  },
];

export const ComponentsSection = () => {
  const [currentTab, setCurrentTab] = useState(TABS[0].value);

  return (
    <MotionEffect
      slide={{
        offset: 200,
      }}
      fade
      inView
      delay={0.25}
      inViewMargin="-50px"
    >
      <SectionWrapper
        subtitle="Components"
        title={
          <>
            Various <span className="text-blue-500">types</span> of animated
            components
          </>
        }
        description="Find all types of animated components on Animate UI. Dynamic backgrounds, primitive components animated with Motion and styled with Shadcn's style, animated text and effects to let you easily animate your own components."
      >
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList
            className="bg-transparent gap-10 mb-7 max-w-full h-30 pr-4 overflow-x-auto justify-start"
            activeClassName="bg-blue-500/10 shadow-none rounded-lg size-full h-16"
          >
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="relative aspect-square size-16 flex-col gap-y-4 text-neutral-400 dark:text-neutral-500 transition-colors duration-300 data-[state=active]:text-blue-500"
              >
                <tab.icon className="size-12" />
                <p className="absolute top-[calc(100%+12px)]">{tab.label}</p>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContents className="w-full">
            {TABS.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex flex-row gap-x-4 h-[450px]"
              >
                <div
                  key={currentTab}
                  className="relative flex-1 shrink-0 p-4 border rounded-xl h-full flex items-center justify-center"
                >
                  <tab.demo />
                </div>

                <CodeEditor
                  lang="tsx"
                  writing={false}
                  className="flex-1 w-auto hidden lg:block h-full"
                  title={`${tab.name}.tsx`}
                  copyButton
                >
                  {tab.code}
                </CodeEditor>
              </TabsContent>
            ))}

            <TabsContent value="text">TEST</TabsContent>
            <TabsContent value="background">TEST</TabsContent>
          </TabsContents>
        </Tabs>
      </SectionWrapper>
    </MotionEffect>
  );
};
