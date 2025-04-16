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

export const MotionHighlightTabsHoverParentDemo = () => {
  return (
    <MotionHighlight
      hover
      mode="parent"
      containerClassName="flex border rounded-full p-1"
      className="rounded-full"
      boundsOffset={{ top: -1, left: -1 }} // we have to add an offset of the same size as the border when we set a border
    >
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
  );
};
