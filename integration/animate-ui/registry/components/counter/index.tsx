'use client';

import * as React from 'react';
import { type HTMLMotionProps, type Transition, motion } from 'motion/react';

import {
  SlidingNumber,
  type SlidingNumberProps,
} from '@/registry/text/sliding-number';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CounterProps extends HTMLMotionProps<'div'> {
  number: number;
  setNumber: (number: number) => void;
  slidingNumberProps?: Omit<SlidingNumberProps, 'number'>;
  buttonProps?: Omit<React.ComponentProps<typeof Button>, 'onClick'>;
  transition?: Transition;
}

const Counter = React.forwardRef<HTMLDivElement, CounterProps>(
  (
    {
      number,
      setNumber,
      className,
      slidingNumberProps,
      buttonProps,
      transition = { type: 'spring', bounce: 0, stiffness: 300, damping: 30 },
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        layout
        transition={transition}
        className={cn(
          'flex items-center gap-x-2 p-1 rounded-xl bg-neutral-100 dark:bg-neutral-800',
          className,
        )}
        {...props}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="icon"
            {...buttonProps}
            onClick={() => setNumber(number - 1)}
            className={cn(
              'bg-white dark:bg-neutral-950 hover:bg-white/70 dark:hover:bg-neutral-950/70 text-neutral-950 dark:text-white text-2xl font-light pb-[3px]',
              buttonProps?.className,
            )}
          >
            -
          </Button>
        </motion.div>

        <SlidingNumber
          number={number}
          {...slidingNumberProps}
          className={cn('text-lg', slidingNumberProps?.className)}
        />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            size="icon"
            {...buttonProps}
            onClick={() => setNumber(number + 1)}
            className={cn(
              'bg-white dark:bg-neutral-950 hover:bg-white/70 dark:hover:bg-neutral-950/70 text-neutral-950 dark:text-white text-2xl font-light pb-[3px]',
              buttonProps?.className,
            )}
          >
            +
          </Button>
        </motion.div>
      </motion.div>
    );
  },
);
Counter.displayName = 'Counter';

export { Counter, type CounterProps };
