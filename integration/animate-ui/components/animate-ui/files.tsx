'use client';

import * as React from 'react';
import { AnimatePresence, type HTMLMotionProps, motion } from 'motion/react';
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionItemProps,
  AccordionTrigger,
  AccordionTriggerProps,
  useAccordionItem,
} from '@/registry/radix/radix-accordion';
import {
  MotionHighlight,
  MotionHighlightItem,
} from '@/registry/effects/motion-highlight';

interface FileButtonProps extends HTMLMotionProps<'div'> {
  icons?: {
    close: React.ReactNode;
    open: React.ReactNode;
  };
  icon?: React.ReactNode;
  open?: boolean;
  layoutId?: string;
}

const FileButton = React.forwardRef<HTMLDivElement, FileButtonProps>(
  ({ children, icons, icon, open, layoutId, ...props }, ref) => {
    return (
      <MotionHighlightItem className="size-full">
        <motion.div
          ref={ref}
          className="flex [&_svg]:size-4 items-center gap-2 p-2 h-10 relative z-10 rounded-lg w-full cursor-default"
          {...props}
          layoutId={layoutId}
        >
          {icon
            ? typeof icon !== 'string'
              ? icon
              : null
            : icons && (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={open ? 'open' : 'close'}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                  >
                    {open
                      ? typeof icons.open !== 'string'
                        ? icons.open
                        : null
                      : typeof icons.close !== 'string'
                        ? icons.close
                        : null}
                  </motion.span>
                </AnimatePresence>
              )}
          <motion.span className="text-sm block truncate">
            {children}
          </motion.span>
        </motion.div>
      </MotionHighlightItem>
    );
  },
);
FileButton.displayName = 'FileButton';

type FilesProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: string[];
  open?: string[];
  onOpenChange?: (open: string[]) => void;
};

const Files = React.forwardRef<HTMLDivElement, FilesProps>(
  ({ children, className, defaultOpen, open, onOpenChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative size-full rounded-xl border bg-background overflow-auto',
          className,
        )}
        {...props}
      >
        <MotionHighlight
          controlledItems
          mode="parent"
          hover
          className="bg-muted rounded-lg pointer-events-none"
        >
          <Accordion
            type="multiple"
            className="p-2"
            defaultValue={defaultOpen}
            value={open}
            onValueChange={onOpenChange}
          >
            {children}
          </Accordion>
        </MotionHighlight>
      </div>
    );
  },
);
Files.displayName = 'Files';

type FolderTriggerProps = AccordionTriggerProps & {
  layoutId?: string;
};

const FolderTrigger = React.forwardRef<HTMLButtonElement, FolderTriggerProps>(
  ({ children, layoutId, ...props }, ref) => {
    const { isOpen } = useAccordionItem();

    return (
      <AccordionTrigger
        ref={ref}
        className="h-auto py-0 hover:no-underline font-normal relative z-10"
        {...props}
        chevron={false}
      >
        <FileButton
          open={isOpen}
          icons={{ open: <FolderOpenIcon />, close: <FolderIcon /> }}
          layoutId={layoutId}
        >
          {children}
        </FileButton>
      </AccordionTrigger>
    );
  },
);
FolderTrigger.displayName = 'FolderTrigger';

type FolderProps = Omit<AccordionItemProps, 'value'> & {
  name: string;
  open?: string[];
  onOpenChange?: (open: string[]) => void;
  defaultOpen?: string[];
  layoutId?: string;
};

const Folder = React.forwardRef<HTMLDivElement, FolderProps>(
  (
    { children, name, open, defaultOpen, onOpenChange, layoutId, ...props },
    ref,
  ) => (
    <AccordionItem
      ref={ref}
      value={name}
      className="relative border-b-0"
      {...props}
    >
      <FolderTrigger layoutId={layoutId}>{name}</FolderTrigger>
      <AccordionContent className="relative pb-0 !ml-7 before:absolute before:-left-3 before:inset-y-0 before:w-px before:h-full before:bg-border">
        <Accordion
          type="multiple"
          defaultValue={defaultOpen}
          value={open}
          onValueChange={onOpenChange}
        >
          {children}
        </Accordion>
      </AccordionContent>
    </AccordionItem>
  ),
);
Folder.displayName = 'Folder';

type FileProps = Omit<HTMLMotionProps<'div'>, 'children'> & {
  name: string;
  layoutId?: string;
};

const File = React.forwardRef<HTMLDivElement, FileProps>(
  ({ name, layoutId, ...props }, ref) => (
    <FileButton ref={ref} icon={<FileIcon />} layoutId={layoutId} {...props}>
      {name}
    </FileButton>
  ),
);
File.displayName = 'File';

export { Files, Folder, File };
