'use client';

import * as React from 'react';
import {
  motion,
  useInView,
  type HTMLMotionProps,
  type Transition,
  type UseInViewOptions,
} from 'motion/react';

import { cn } from '@/lib/utils';

interface HighlightTextProps extends HTMLMotionProps<'span'> {
  text: string;
  inView?: boolean;
  inViewMargin?: UseInViewOptions['margin'];
  inViewOnce?: boolean;
  transition?: Transition;
}

const animation = { backgroundSize: '100% 100%' };

const HighlightText = React.forwardRef<HTMLSpanElement, HighlightTextProps>(
  (
    {
      text,
      className,
      inView = false,
      inViewMargin = '0px',
      transition = { duration: 2, ease: 'easeInOut' },
      ...props
    },
    ref,
  ) => {
    const localRef = React.useRef<HTMLSpanElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLSpanElement);

    const inViewResult = useInView(localRef, {
      once: true,
      margin: inViewMargin,
    });
    const isInView = !inView || inViewResult;

    return (
      <motion.span
        ref={localRef}
        initial={{
          backgroundSize: '0% 100%',
        }}
        animate={isInView ? animation : undefined}
        transition={transition}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          display: 'inline',
        }}
        className={cn(
          `relative inline-block px-2 py-1 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-500`,
          className,
        )}
        {...props}
      >
        {text}
      </motion.span>
    );
  },
);
HighlightText.displayName = 'HighlightText';

export { HighlightText, type HighlightTextProps };
