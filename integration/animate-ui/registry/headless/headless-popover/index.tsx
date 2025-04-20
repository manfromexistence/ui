'use client';

import * as React from 'react';
import {
  Popover as PopoverPrimitive,
  PopoverButton as PopoverButtonPrimitive,
  PopoverPanel as PopoverPanelPrimitive,
  PopoverBackdrop as PopoverBackdropPrimitive,
  PopoverGroup as PopoverGroupPrimitive,
} from '@headlessui/react';
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

type PopoverProps = React.ComponentPropsWithoutRef<typeof PopoverPrimitive>;

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  ({ children, ...props }, ref) => {
    return (
      <PopoverPrimitive ref={ref} {...props}>
        {(bag) => (
          <PopoverContext.Provider value={{ isOpen: bag.open }}>
            {typeof children === 'function' ? children(bag) : children}
          </PopoverContext.Provider>
        )}
      </PopoverPrimitive>
    );
  },
);
Popover.displayName = PopoverPrimitive.displayName;

type PopoverButtonProps = React.ComponentPropsWithoutRef<
  typeof PopoverButtonPrimitive
>;
const PopoverButton = PopoverButtonPrimitive;

type PopoverBackdropProps = React.ComponentPropsWithoutRef<
  typeof PopoverBackdropPrimitive
>;
const PopoverBackdrop = PopoverBackdropPrimitive;

type PopoverGroupProps = React.ComponentPropsWithoutRef<
  typeof PopoverGroupPrimitive
>;
const PopoverGroup = PopoverGroupPrimitive;

type PopoverPanelProps = React.ComponentPropsWithoutRef<
  typeof PopoverPanelPrimitive<typeof motion.div>
> &
  Omit<HTMLMotionProps<'div'>, 'children'> & {
    transition?: Transition;
  };
const PopoverPanel = React.forwardRef<
  React.ElementRef<typeof PopoverPanelPrimitive>,
  PopoverPanelProps
>(
  (
    {
      children,
      className,
      transition = { type: 'spring', stiffness: 300, damping: 25 },
      anchor = {
        to: 'bottom',
        gap: 4,
      },
      as = motion.div,
      ...props
    },
    ref,
  ) => {
    const { isOpen } = usePopover();

    return (
      <AnimatePresence>
        {isOpen && (
          <PopoverPanelPrimitive
            key="popover"
            ref={ref}
            static
            as={as}
            initial={{ opacity: 0, scale: 0.5, transition }}
            animate={{ opacity: 1, scale: 1, transition }}
            exit={{ opacity: 0, scale: 0.5, transition }}
            className={cn(
              'w-72 rounded-lg border bg-popover p-4 text-popover-foreground shadow-md outline-none z-50',
              className,
            )}
            anchor={anchor}
            {...props}
          >
            {children}
          </PopoverPanelPrimitive>
        )}
      </AnimatePresence>
    );
  },
);
PopoverPanel.displayName = PopoverPanelPrimitive.displayName;

export {
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverBackdrop,
  PopoverGroup,
  type PopoverProps,
  type PopoverButtonProps,
  type PopoverPanelProps,
  type PopoverBackdropProps,
  type PopoverGroupProps,
};
