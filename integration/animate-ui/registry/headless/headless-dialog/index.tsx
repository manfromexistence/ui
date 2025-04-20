'use client';

import * as React from 'react';
import {
  Dialog as DialogPrimitive,
  DialogBackdrop as DialogBackdropPrimitive,
  DialogPanel as DialogPanelPrimitive,
  DialogTitle as DialogTitlePrimitive,
  Description as DialogDescriptionPrimitive,
  CloseButton,
} from '@headlessui/react';
import {
  motion,
  AnimatePresence,
  type Transition,
  type HTMLMotionProps,
} from 'motion/react';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

type DialogProps = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive<typeof motion.div>
>;
const Dialog = React.forwardRef<HTMLDivElement, DialogProps>(
  ({ className, ...props }, ref) => {
    return (
      <AnimatePresence>
        {props?.open && (
          <DialogPrimitive
            className={cn('relative z-50', className)}
            {...props}
            ref={ref}
            static
          />
        )}
      </AnimatePresence>
    );
  },
);
Dialog.displayName = DialogPrimitive.displayName;

type DialogBackdropProps = React.ComponentPropsWithoutRef<
  typeof DialogBackdropPrimitive<typeof motion.div>
>;
const DialogBackdrop = React.forwardRef<
  React.ElementRef<typeof DialogBackdropPrimitive>,
  DialogBackdropProps
>(({ className, as = motion.div, ...props }, ref) => (
  <DialogBackdropPrimitive
    key="dialog-backdrop"
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/80', className)}
    as={as}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    {...props}
  />
));
DialogBackdrop.displayName = DialogBackdropPrimitive.displayName;

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

type DialogPanelProps = React.ComponentPropsWithoutRef<
  typeof DialogPanelPrimitive<typeof motion.div>
> &
  Omit<HTMLMotionProps<'div'>, 'children'> & {
    from?: FlipDirection;
    transition?: Transition;
  };
const DialogPanel = React.forwardRef<
  React.ElementRef<typeof DialogPanelPrimitive>,
  DialogPanelProps
>(
  (
    {
      children,
      className,
      as = motion.div,
      from = 'top',
      transition = { type: 'spring', stiffness: 150, damping: 25 },
      ...props
    },
    ref,
  ) => {
    const initialRotation =
      from === 'top' || from === 'left' ? '20deg' : '-20deg';
    const isVertical = from === 'top' || from === 'bottom';
    const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

    return (
      <DialogPanelPrimitive
        key="dialog-panel"
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-[calc(100%-2rem)] max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg rounded-xl',
          className,
        )}
        as={as}
        initial={{
          opacity: 0,
          filter: 'blur(4px)',
          transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
          transition,
        }}
        animate={{
          opacity: 1,
          filter: 'blur(0px)',
          transform: `perspective(500px) ${rotateAxis}(0deg) scale(1)`,
          transition,
        }}
        exit={{
          opacity: 0,
          filter: 'blur(4px)',
          transform: `perspective(500px) ${rotateAxis}(${initialRotation}) scale(0.8)`,
          transition,
        }}
        {...props}
      >
        {(bag) => (
          <>
            {typeof children === 'function' ? children(bag) : children}

            <CloseButton className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </CloseButton>
          </>
        )}
      </DialogPanelPrimitive>
    );
  },
);
DialogPanel.displayName = DialogPanelPrimitive.displayName;

type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;
const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col space-y-1.5 text-center sm:text-left',
        className,
      )}
      {...props}
    />
  ),
);
DialogHeader.displayName = 'DialogHeader';

type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;
const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end gap-2',
        className,
      )}
      {...props}
    />
  ),
);
DialogFooter.displayName = 'DialogFooter';

type DialogTitleProps = React.ComponentPropsWithoutRef<
  typeof DialogTitlePrimitive
>;
const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogTitlePrimitive>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogTitlePrimitive
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogTitlePrimitive.displayName;

type DialogDescriptionProps = React.ComponentPropsWithoutRef<
  typeof DialogDescriptionPrimitive
>;
const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogDescriptionPrimitive>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogDescriptionPrimitive
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogDescriptionPrimitive.displayName;

export {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  type DialogProps,
  type DialogBackdropProps,
  type DialogPanelProps,
  type DialogTitleProps,
  type DialogDescriptionProps,
  type DialogHeaderProps,
  type DialogFooterProps,
};
