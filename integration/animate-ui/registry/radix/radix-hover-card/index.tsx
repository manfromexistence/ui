'use client';

import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { AnimatePresence, motion, type Transition } from 'motion/react';

import { cn } from '@/lib/utils';

interface HoverCardContextType {
  isOpen: boolean;
}
const HoverCardContext = React.createContext<HoverCardContextType>({
  isOpen: false,
});

const useHoverCard = (): HoverCardContextType => {
  const context = React.useContext(HoverCardContext);
  if (!context) {
    throw new Error('useHoverCard must be used within a HoverCard');
  }
  return context;
};

type HoverCardProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Root
>;

const HoverCard: React.FC<HoverCardProps> = ({ children, ...props }) => {
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
    <HoverCardContext.Provider value={{ isOpen }}>
      <HoverCardPrimitive.Root {...props} onOpenChange={handleOpenChange}>
        {children}
      </HoverCardPrimitive.Root>
    </HoverCardContext.Provider>
  );
};

type HoverCardTriggerProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Trigger
>;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

type HoverCardContentProps = React.ComponentPropsWithoutRef<
  typeof HoverCardPrimitive.Content
> & {
  transition?: Transition;
};

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentProps
>(
  (
    {
      className,
      align = 'center',
      sideOffset = 4,
      transition = { type: 'spring', stiffness: 300, damping: 25 },
      children,
      ...props
    },
    ref,
  ) => {
    const { isOpen } = useHoverCard();

    return (
      <AnimatePresence>
        {isOpen && (
          <HoverCardPrimitive.Portal forceMount>
            <HoverCardPrimitive.Content
              forceMount
              align={align}
              sideOffset={sideOffset}
              className="z-50"
              ref={ref}
              {...props}
            >
              <motion.div
                key="hover-card"
                initial={{ opacity: 0, scale: 0.5, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 25 }}
                transition={transition}
                className={cn(
                  'w-64 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none',
                  className,
                )}
              >
                {children}
              </motion.div>
            </HoverCardPrimitive.Content>
          </HoverCardPrimitive.Portal>
        )}
      </AnimatePresence>
    );
  },
);
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  useHoverCard,
  type HoverCardContextType,
  type HoverCardProps,
  type HoverCardTriggerProps,
  type HoverCardContentProps,
};
