'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  MotionHighlight,
  MotionHighlightItem,
} from '@/registry/effects/motion-highlight';

interface TabsContextType {
  activeValue: string;
  handleValueChange: (value: string) => void;
  registerTrigger: (value: string, node: HTMLElement | null) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

const useTabs = (): TabsContextType => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error('useTabs must be used within a TabsProvider');
  }
  return context;
};

type TabsProps =
  | {
      defaultValue?: string;
      children: React.ReactNode;
      className?: string;
      value?: never;
      onValueChange?: never;
    }
  | {
      value: string;
      onValueChange?: (value: string) => void;
      children: React.ReactNode;
      className?: string;
      defaultValue?: never;
    };

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    { defaultValue, value, onValueChange, children, className, ...props },
    ref,
  ) => {
    const [activeValue, setActiveValue] = React.useState(defaultValue);
    const triggersRef = React.useRef(new Map<string, HTMLElement>());
    const initialSet = React.useRef(false);
    const isControlled = value !== undefined;

    React.useEffect(() => {
      if (
        !isControlled &&
        activeValue === undefined &&
        triggersRef.current.size > 0 &&
        !initialSet.current
      ) {
        const firstTab = Array.from(triggersRef.current.keys())[0];
        setActiveValue(firstTab);
        initialSet.current = true;
      }
    }, [activeValue, isControlled]);

    const registerTrigger = (value: string, node: HTMLElement | null) => {
      if (node) {
        triggersRef.current.set(value, node);
        if (!isControlled && activeValue === undefined && !initialSet.current) {
          setActiveValue(value);
          initialSet.current = true;
        }
      } else {
        triggersRef.current.delete(value);
      }
    };

    const handleValueChange = (val: string) => {
      if (!isControlled) setActiveValue(val);
      else onValueChange?.(val);
    };

    return (
      <TabsContext.Provider
        value={{
          activeValue: (value ?? activeValue)!,
          handleValueChange,
          registerTrigger,
        }}
      >
        <div
          ref={ref}
          className={cn('flex flex-col gap-2', className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = 'Tabs';

interface TabsListProps {
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  transition?: Transition;
}

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
    },
    ref,
  ) => {
    const { activeValue } = useTabs();

    return (
      <MotionHighlight
        controlledItems
        className={cn('rounded-sm bg-background shadow-sm', activeClassName)}
        value={activeValue}
        transition={transition}
      >
        <div
          ref={ref}
          role="tablist"
          className={cn(
            'bg-muted text-muted-foreground inline-flex h-10 w-fit items-center justify-center rounded-lg p-[4px]',
            className,
          )}
        >
          {children}
        </div>
      </MotionHighlight>
    );
  },
);
TabsList.displayName = 'TabsList';

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value, children, className }, ref) => {
    const { activeValue, handleValueChange, registerTrigger } = useTabs();

    const localRef = React.useRef<HTMLButtonElement | null>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLButtonElement);

    React.useEffect(() => {
      registerTrigger(value, localRef.current);
      return () => registerTrigger(value, null);
    }, [value, registerTrigger]);

    return (
      <MotionHighlightItem value={value} className="size-full">
        <motion.button
          ref={localRef}
          role="tab"
          whileTap={{ scale: 0.95 }}
          onClick={() => handleValueChange(value)}
          data-state={activeValue === value ? 'active' : 'inactive'}
          className={cn(
            'inline-flex cursor-pointer items-center size-full justify-center whitespace-nowrap rounded-sm px-2 py-1 text-sm font-medium ring-offset-background transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground z-[1]',
            className,
          )}
        >
          {children}
        </motion.button>
      </MotionHighlightItem>
    );
  },
);
TabsTrigger.displayName = 'TabsTrigger';

interface TabsContentsProps {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
}

const TabsContents = React.forwardRef<HTMLDivElement, TabsContentsProps>(
  (
    {
      children,
      className,
      transition = {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        bounce: 0,
        restDelta: 0.01,
      },
    },
    ref,
  ) => {
    const { activeValue } = useTabs();
    const childrenArray = React.Children.toArray(children);
    const activeIndex = childrenArray.findIndex(
      (child): child is React.ReactElement<{ value: string }> =>
        React.isValidElement(child) &&
        typeof child.props === 'object' &&
        child.props !== null &&
        'value' in child.props &&
        child.props.value === activeValue,
    );

    return (
      <div ref={ref} className={cn('overflow-hidden', className)}>
        <motion.div
          className="flex -mx-2"
          animate={{ x: activeIndex * -100 + '%' }}
          transition={transition}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="w-full shrink-0 px-2">
              {child}
            </div>
          ))}
        </motion.div>
      </div>
    );
  },
);
TabsContents.displayName = 'TabsContents';

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, value, className }, ref) => {
    const { activeValue } = useTabs();
    const isActive = activeValue === value;
    return (
      <motion.div
        role="tabpanel"
        ref={ref}
        className={cn('overflow-hidden', className)}
        initial={{ filter: 'blur(0px)' }}
        animate={{ filter: isActive ? 'blur(0px)' : 'blur(4px)' }}
        exit={{ filter: 'blur(0px)' }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      >
        {children}
      </motion.div>
    );
  },
);
TabsContent.displayName = 'TabsContent';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
  useTabs,
  type TabsContextType,
  type TabsProps,
  type TabsListProps,
  type TabsTriggerProps,
  type TabsContentsProps,
  type TabsContentProps,
};
