'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';
import { ChevronDown } from 'lucide-react';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@/registry/headless/headless-disclosure';
import { cn } from '@/lib/utils';

type AccordionProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => <div ref={ref} {...props} />,
);
Accordion.displayName = 'Accordion';

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof Disclosure>;
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, as = 'div', ...props }, ref) => {
    return (
      <Disclosure
        {...props}
        ref={ref}
        as={as}
        className={cn('border-b', className)}
      />
    );
  },
);
AccordionItem.displayName = 'AccordionItem';

type AccordionButtonProps = React.ComponentPropsWithoutRef<
  typeof DisclosureButton
> & {
  transition?: Transition;
  chevron?: boolean;
};
const AccordionButton = React.forwardRef<
  HTMLButtonElement,
  AccordionButtonProps
>(
  (
    {
      children,
      className,
      as = 'button',
      transition = { type: 'spring', stiffness: 150, damping: 17 },
      chevron = true,
      ...props
    },
    ref,
  ) => {
    return (
      <DisclosureButton
        {...props}
        className={cn(
          'flex w-full text-start flex-1 items-center justify-between py-4 font-medium hover:underline',
          className,
        )}
        as={as}
        ref={ref}
      >
        {(bag) => (
          <>
            {typeof children === 'function' ? children(bag) : children}

            {chevron && (
              <motion.div
                animate={{ rotate: bag.open ? 180 : 0 }}
                transition={transition}
              >
                <ChevronDown className="size-5 shrink-0" />
              </motion.div>
            )}
          </>
        )}
      </DisclosureButton>
    );
  },
);
AccordionButton.displayName = 'AccordionButton';

type AccordionPanelProps = React.ComponentPropsWithoutRef<
  typeof DisclosurePanel
>;
const AccordionPanel = React.forwardRef<HTMLDivElement, AccordionPanelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <DisclosurePanel {...props} ref={ref}>
        {(bag) => (
          <div className={cn('pb-4 pt-0 text-sm', className)}>
            {typeof children === 'function' ? children(bag) : children}
          </div>
        )}
      </DisclosurePanel>
    );
  },
);
AccordionPanel.displayName = 'AccordionPanel';

export {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  type AccordionProps,
  type AccordionItemProps,
  type AccordionButtonProps,
  type AccordionPanelProps,
};
