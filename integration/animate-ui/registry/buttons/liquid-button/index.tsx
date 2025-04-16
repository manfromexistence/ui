'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

import { cn } from '@/lib/utils';

type LiquidButtonProps = HTMLMotionProps<'button'>;

const LiquidButton = React.forwardRef<HTMLButtonElement, LiquidButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={cn(
          'relative h-10 px-4 py-2 text-sm font-medium text-primary hover:text-primary-foreground !bg-muted [--liquid-button-color:var(--primary)] rounded-lg cursor-pointer overflow-hidden [background:_linear-gradient(var(--liquid-button-color)_0_0)_no-repeat_calc(200%-var(--liquid-button-fill,0%))_100%/200%_var(--liquid-button-fill,0.2em)] hover:[--liquid-button-fill:100%] hover:[--liquid-button-delay:0.3s] [transition:_background_0.3s_var(--liquid-button-delay,0s),_color_0.3s_var(--liquid-button-delay,0s),_background-position_0.3s_calc(0.3s_-_var(--liquid-button-delay,0s))] focus:outline-none',
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

LiquidButton.displayName = 'LiquidButton';

export { LiquidButton, type LiquidButtonProps };
