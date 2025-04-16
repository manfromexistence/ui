'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';
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

interface FileButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  icons?: {
    close: React.ReactNode;
    open: React.ReactNode;
  };
  icon?: React.ReactNode;
  open?: boolean;
  sideComponent?: React.ReactNode;
}

const FileButton = React.forwardRef<HTMLDivElement, FileButtonProps>(
  (
    { children, className, icons, icon, open, sideComponent, ...props },
    ref,
  ) => {
    return (
      <MotionHighlightItem className="size-full">
        <div
          ref={ref}
          className={cn(
            'flex items-center truncate gap-2 p-2 h-10 relative z-10 rounded-lg w-full cursor-default',
            className,
          )}
          {...props}
        >
          <span className="flex [&_svg]:size-4 [&_svg]:shrink-0 items-center gap-2 shrink-1 truncate">
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
            <span className="shrink-1 text-sm block truncate break-words">
              {children}
            </span>
          </span>
          {sideComponent}
        </div>
      </MotionHighlightItem>
    );
  },
);
FileButton.displayName = 'FileButton';

type FilesProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  activeClassName?: string;
  defaultOpen?: string[];
  open?: string[];
  onOpenChange?: (open: string[]) => void;
};

const Files = React.forwardRef<HTMLDivElement, FilesProps>(
  (
    {
      children,
      className,
      activeClassName,
      defaultOpen,
      open,
      onOpenChange,
      ...props
    },
    ref,
  ) => {
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
          className={cn(
            'bg-muted rounded-lg pointer-events-none',
            activeClassName,
          )}
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
  sideComponent?: React.ReactNode;
};

const FolderTrigger = React.forwardRef<HTMLButtonElement, FolderTriggerProps>(
  ({ children, className, sideComponent, ...props }, ref) => {
    const { isOpen } = useAccordionItem();

    return (
      <AccordionTrigger
        ref={ref}
        className="h-auto py-0 hover:no-underline font-normal relative z-10 max-w-full"
        {...props}
        chevron={false}
      >
        <FileButton
          open={isOpen}
          icons={{ open: <FolderOpenIcon />, close: <FolderIcon /> }}
          className={className}
          sideComponent={sideComponent}
        >
          {children}
        </FileButton>
      </AccordionTrigger>
    );
  },
);
FolderTrigger.displayName = 'FolderTrigger';

type FolderProps = Omit<
  AccordionItemProps,
  'value' | 'onValueChange' | 'defaultValue' | 'children'
> & {
  children?: React.ReactNode;
  name: string;
  open?: string[];
  onOpenChange?: (open: string[]) => void;
  defaultOpen?: string[];
  sideComponent?: React.ReactNode;
};

const Folder = React.forwardRef<HTMLDivElement, FolderProps>(
  (
    {
      children,
      className,
      name,
      open,
      defaultOpen,
      onOpenChange,
      sideComponent,
      ...props
    },
    ref,
  ) => (
    <AccordionItem
      ref={ref}
      value={name}
      className="relative border-b-0"
      {...props}
    >
      <FolderTrigger className={className} sideComponent={sideComponent}>
        {name}
      </FolderTrigger>
      {children && (
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
      )}
    </AccordionItem>
  ),
);
Folder.displayName = 'Folder';

type FileProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> & {
  name: string;
  sideComponent?: React.ReactNode;
};

const File = React.forwardRef<HTMLDivElement, FileProps>(
  ({ name, className, sideComponent, ...props }, ref) => (
    <FileButton
      ref={ref}
      icon={<FileIcon />}
      className={className}
      sideComponent={sideComponent}
      {...props}
    >
      {name}
    </FileButton>
  ),
);
File.displayName = 'File';

export {
  Files,
  Folder,
  File,
  type FilesProps,
  type FolderProps,
  type FileProps,
};
