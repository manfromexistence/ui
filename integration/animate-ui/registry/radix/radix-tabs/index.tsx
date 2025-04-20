'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { type HTMLMotionProps, type Transition, motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  MotionHighlight,
  MotionHighlightItem,
} from '@/registry/effects/motion-highlight';

type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>;

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, ...props }, ref) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      ref={ref}
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
});
Tabs.displayName = 'Tabs';

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & {
  activeClassName?: string;
  transition?: Transition;
};

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      children,
      className,
      activeClassName,
      transition = {
        type: 'spring',
        stiffness: 200,
        damping: 25,
      },
      ...props
    },
    ref,
  ) => {
    const localRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const [activeValue, setActiveValue] = React.useState<string | null>(null);

    const getActiveValue = React.useCallback(() => {
      if (!localRef.current) return;
      const activeTab = localRef.current.querySelector<HTMLElement>(
        '[data-state="active"]',
      );
      if (!activeTab) return;
      setActiveValue(activeTab.getAttribute('data-value') ?? null);
    }, []);

    React.useEffect(() => {
      getActiveValue();

      const observer = new MutationObserver(getActiveValue);

      if (localRef.current) {
        observer.observe(localRef.current, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }

      return () => {
        observer.disconnect();
      };
    }, [getActiveValue]);

    return (
      <MotionHighlight
        controlledItems
        className={cn('rounded-sm bg-background shadow-sm', activeClassName)}
        value={activeValue}
        transition={transition}
      >
        <TabsPrimitive.List
          ref={localRef}
          data-slot="tabs-list"
          className={cn(
            'bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-lg p-[4px]',
            className,
          )}
          {...props}
        >
          {children}
        </TabsPrimitive.List>
      </MotionHighlight>
    );
  },
);
TabsList.displayName = 'TabsList';

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(({ className, value, ...props }, ref) => {
  return (
    <MotionHighlightItem value={value} className="size-full">
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          'inline-flex cursor-pointer items-center size-full justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-[1]',
          className,
        )}
        value={value}
        {...props}
      />
    </MotionHighlightItem>
  );
});
TabsTrigger.displayName = 'TabsTrigger';

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content> &
  HTMLMotionProps<'div'> & {
    transition?: Transition;
  };

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  (
    {
      className,
      children,
      transition = {
        duration: 0.5,
        ease: 'easeInOut',
      },
      ...props
    },
    ref,
  ) => {
    return (
      <TabsPrimitive.Content
        asChild
        data-slot="tabs-content"
        className={cn('flex-1 outline-none', className)}
        {...props}
      >
        <motion.div
          ref={ref}
          layout
          initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          transition={transition}
          {...props}
        >
          {children}
        </motion.div>
      </TabsPrimitive.Content>
    );
  },
);
TabsContent.displayName = 'TabsContent';

type TabsContentsProps = {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
} & HTMLMotionProps<'div'>;

const TabsContents = React.forwardRef<HTMLDivElement, TabsContentsProps>(
  (
    {
      children,
      className,
      transition = { type: 'spring', stiffness: 200, damping: 25 },
    },
    ref,
  ) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    React.useImperativeHandle(
      ref,
      () => containerRef.current as HTMLDivElement,
    );

    const [height, setHeight] = React.useState(0);

    React.useEffect(() => {
      if (!containerRef.current) return;

      const resizeObserver = new ResizeObserver((entries) => {
        const newHeight = entries[0].contentRect.height;
        requestAnimationFrame(() => {
          setHeight(newHeight);
        });
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }, [children]);

    React.useLayoutEffect(() => {
      if (containerRef.current) {
        const initialHeight =
          containerRef.current.getBoundingClientRect().height;
        setHeight(initialHeight);
      }
    }, [children]);

    return (
      <motion.div
        layout
        animate={{ height: height }}
        transition={transition}
        className={className}
      >
        <div ref={containerRef}>{children}</div>
      </motion.div>
    );
  },
);
TabsContents.displayName = 'TabsContents';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentProps,
  type TabsContentsProps,
};
