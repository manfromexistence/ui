'use client';

import * as React from 'react';
import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from 'motion/react';

import { cn } from '@/lib/utils';

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

interface FlipButtonProps extends HTMLMotionProps<'button'> {
  frontText: string;
  backText: string;
  transition?: Transition;
  frontClassName?: string;
  backClassName?: string;
  from?: FlipDirection;
}

const defaultSpanClassName =
  'absolute inset-0 flex items-center justify-center rounded-lg';

const FlipButton = React.forwardRef<HTMLButtonElement, FlipButtonProps>(
  (
    {
      frontText,
      backText,
      transition = { type: 'spring', stiffness: 280, damping: 20 },
      className,
      frontClassName,
      backClassName,
      from = 'top',
      ...props
    },
    ref,
  ) => {
    const isVertical = from === 'top' || from === 'bottom';
    const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

    const frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
    const backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';

    const buildVariant = (
      opacity: number,
      rotation: number,
      offset: string | null = null,
    ): Variant => ({
      opacity,
      [rotateAxis]: rotation,
      ...(isVertical && offset !== null ? { y: offset } : {}),
      ...(!isVertical && offset !== null ? { x: offset } : {}),
    });

    const frontVariants = {
      initial: buildVariant(1, 0, '0%'),
      hover: buildVariant(0, 90, frontOffset),
    };

    const backVariants = {
      initial: buildVariant(0, 90, backOffset),
      hover: buildVariant(1, 0, '0%'),
    };

    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className={cn(
          'relative inline-block h-10 px-4 py-2 text-sm font-medium cursor-pointer perspective-[1000px] focus:outline-none',
          className,
        )}
        {...props}
      >
        <motion.span
          variants={frontVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            'bg-muted text-black dark:text-white',
            frontClassName,
          )}
        >
          {frontText}
        </motion.span>
        <motion.span
          variants={backVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            'bg-primary text-primary-foreground',
            backClassName,
          )}
        >
          {backText}
        </motion.span>
        <span className="invisible">{frontText}</span>
      </motion.button>
    );
  },
);

FlipButton.displayName = 'FlipButton';

export { FlipButton, type FlipButtonProps, type FlipDirection };
