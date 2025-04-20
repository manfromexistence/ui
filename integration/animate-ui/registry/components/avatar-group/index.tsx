'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  type TooltipProps,
  type TooltipContentProps,
} from '@/registry/components/tooltip';

interface AvatarProps extends TooltipProps {
  children: React.ReactNode;
  index: number;
  zIndex: number;
  transition: Transition;
  translate: string | number;
}

const Avatar: React.FC<AvatarProps> = ({
  children,
  index,
  zIndex,
  transition,
  translate,
  ...props
}: AvatarProps) => (
  <Tooltip {...props}>
    <TooltipTrigger>
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap="hover"
        className="relative"
        style={{ zIndex }}
      >
        <motion.div
          variants={{
            initial: { translateY: 0 },
            hover: { translateY: translate },
          }}
          transition={transition}
        >
          {children}
        </motion.div>
      </motion.div>
    </TooltipTrigger>
  </Tooltip>
);

type AvatarGroupTooltipProps = TooltipContentProps;

const AvatarGroupTooltip: React.FC<AvatarGroupTooltipProps> = ({
  children,
  ...props
}) => <TooltipContent {...props}>{children}</TooltipContent>;
AvatarGroupTooltip.displayName = 'AvatarGroupTooltip';

interface AvatarGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'translate'> {
  children: React.ReactElement[];
  transition?: Transition;
  invertOverlap?: boolean;
  translate?: string | number;
  tooltipProps?: Omit<TooltipProps, 'children'>;
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      className,
      transition = { type: 'spring', stiffness: 300, damping: 17 },
      invertOverlap = false,
      translate = '-30%',
      tooltipProps = { side: 'top', sideOffset: 20 },
      ...props
    },
    ref,
  ) => (
    <TooltipProvider openDelay={0} closeDelay={0}>
      <div
        ref={ref}
        className={cn('flex flex-row -space-x-2 items-center h-8', className)}
        {...props}
      >
        {children?.map((child, index) => (
          <Avatar
            key={index}
            index={index}
            zIndex={
              invertOverlap ? React.Children.count(children) - index : index
            }
            transition={transition}
            translate={translate}
            {...tooltipProps}
          >
            {child}
          </Avatar>
        ))}
      </div>
    </TooltipProvider>
  ),
);
AvatarGroup.displayName = 'AvatarGroup';

export {
  AvatarGroup,
  AvatarGroupTooltip,
  type AvatarGroupProps,
  type AvatarGroupTooltipProps,
};
