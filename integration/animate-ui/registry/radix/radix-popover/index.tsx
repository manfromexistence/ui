'use client';

import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';

import { cn } from '@/lib/utils';

interface PopoverContextType {
  isOpen: boolean;
}
const PopoverContext = React.createContext<PopoverContextType>({
  isOpen: false,
});

const usePopover = (): PopoverContextType => {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error('usePopover must be used within a Popover');
  }
  return context;
};

type PopoverProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Root
>;

const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = React.useState(
    props?.open ?? props?.defaultOpen ?? false,
  );

  React.useEffect(() => {
    if (props?.open !== undefined) setIsOpen(props.open);
  }, [props?.open]);

  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      setIsOpen(open);
      props.onOpenChange?.(open);
    },
    [props],
  );

  return (
    <PopoverContext.Provider value={{ isOpen }}>
      <PopoverPrimitive.Root {...props} onOpenChange={handleOpenChange}>
        {children}
      </PopoverPrimitive.Root>
    </PopoverContext.Provider>
  );
};

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
>;

const PopoverTrigger = PopoverPrimitive.Trigger;

const getInitialPosition = (side: 'top' | 'bottom' | 'left' | 'right') => {
  switch (side) {
    case 'top':
      return { y: 15 };
    case 'bottom':
      return { y: -15 };
    case 'left':
      return { x: 15 };
    case 'right':
      return { x: -15 };
  }
};

type PopoverContentProps = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
> &
  HTMLMotionProps<'div'> & {
    transition?: Transition;
  };

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = 'center',
      side = 'bottom',
      sideOffset = 4,
      transition = { type: 'spring', stiffness: 300, damping: 25 },
      children,
      ...props
    },
    ref,
  ) => {
    const { isOpen } = usePopover();
    const initialPosition = getInitialPosition(side);

    return (
      <AnimatePresence>
        {isOpen && (
          <PopoverPrimitive.Portal forceMount>
            <PopoverPrimitive.Content
              forceMount
              align={align}
              sideOffset={sideOffset}
              ref={ref}
              className="z-50"
              {...props}
            >
              <motion.div
                key="popover"
                initial={{ opacity: 0, scale: 0.5, ...initialPosition }}
                animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, ...initialPosition }}
                transition={transition}
                className={cn(
                  'w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none',
                  className,
                )}
                {...props}
              >
                {children}
              </motion.div>
            </PopoverPrimitive.Content>
          </PopoverPrimitive.Portal>
        )}
      </AnimatePresence>
    );
  },
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  usePopover,
  type PopoverContextType,
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverContentProps,
};
