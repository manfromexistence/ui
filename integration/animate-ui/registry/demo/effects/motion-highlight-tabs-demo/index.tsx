import { MotionHighlight } from '@/registry/effects/motion-highlight';

const TABS = [
  {
    value: 'tab-1',
    title: 'Tab 1',
    description: 'Tab 1 description',
  },
  {
    value: 'tab-2',
    title: 'Tab 2',
    description: 'Tab 2 description',
  },
  {
    value: 'tab-3',
    title: 'Tab 3',
    description: 'Tab 3 description',
  },
];

export const MotionHighlightTabsDemo = () => {
  return (
    <div className="flex border rounded-full p-1">
      <MotionHighlight defaultValue={TABS[0].value} className="rounded-full">
        {TABS.map((tab) => (
          <div
            key={tab.value}
            data-value={tab.value}
            className="px-3 h-8 flex items-center cursor-pointer justify-center rounded-full text-sm data-[active=true]:text-current data-[active=true]:font-medium text-muted-foreground transition-all duration-300"
          >
            {tab.title}
          </div>
        ))}
      </MotionHighlight>
    </div>
  );
};
