'use client';

import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';

import { cn } from '@/lib/utils';

type RadioGroupProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> & {
  transition?: Transition;
};

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      className={cn('grid gap-2.5', className)}
      {...props}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

type RadioGroupIndicatorProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Indicator
> & {
  transition: Transition;
};

const RadioGroupIndicator = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Indicator>,
  RadioGroupIndicatorProps
>(({ className, transition, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Indicator
      ref={ref}
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <AnimatePresence>
        <motion.div
          key="radio-indicator"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={transition}
        >
          <Circle className="size-3 fill-current text-current" />
        </motion.div>
      </AnimatePresence>
    </RadioGroupPrimitive.Indicator>
  );
});
RadioGroupIndicator.displayName = RadioGroupPrimitive.Indicator.displayName;

type RadioGroupItemProps = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
> &
  HTMLMotionProps<'button'> & {
    transition?: Transition;
  };

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      transition = { type: 'spring', stiffness: 200, damping: 16 },
      ...props
    },
    ref,
  ) => {
    return (
      <RadioGroupPrimitive.Item ref={ref} asChild {...props}>
        <motion.button
          className={cn(
            'aspect-square size-5 rounded-full flex items-center justify-center border border-input text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          {...props}
        >
          <RadioGroupIndicator transition={transition} />
        </motion.button>
      </RadioGroupPrimitive.Item>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export {
  RadioGroup,
  RadioGroupItem,
  type RadioGroupProps,
  type RadioGroupItemProps,
};
