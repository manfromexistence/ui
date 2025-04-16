'use client';

import {
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
  useCallback,
  useRef,
  useState,
} from 'react';
import { cn } from '@/lib/utils';
import {
  ScrollArea,
  ScrollBar,
  ScrollViewport,
} from '@/components/ui/scroll-area';
import type { ScrollAreaViewportProps } from '@radix-ui/react-scroll-area';
import { CopyButton } from '@/registry/buttons/copy-button';

export type CodeBlockProps = HTMLAttributes<HTMLElement> & {
  icon?: ReactNode;
  allowCopy?: boolean;
  keepBackground?: boolean;
  viewportProps?: ScrollAreaViewportProps;
  onCopy?: () => void;
};

export const Pre = forwardRef<HTMLPreElement, HTMLAttributes<HTMLPreElement>>(
  ({ className, ...props }, ref) => {
    return (
      <pre
        ref={ref}
        className={cn('p-4 focus-visible:outline-none', className)}
        {...props}
      >
        {props.children}
      </pre>
    );
  },
);

Pre.displayName = 'Pre';

export const CodeBlock = forwardRef<HTMLElement, CodeBlockProps>(
  (
    {
      title,
      allowCopy = true,
      icon,
      viewportProps,
      onCopy: onCopyEvent,
      ...props
    },
    ref,
  ) => {
    const [isCopied, setIsCopied] = useState(false);
    const areaRef = useRef<HTMLDivElement>(null);

    const onCopy = useCallback(() => {
      const pre = areaRef.current?.getElementsByTagName('pre').item(0);

      if (!pre) return;

      const clone = pre.cloneNode(true) as HTMLElement;
      clone.querySelectorAll('.nd-copy-ignore').forEach((node) => {
        node.remove();
      });

      void navigator.clipboard.writeText(clone.textContent ?? '').then(() => {
        setIsCopied(true);
        onCopyEvent?.();
        setTimeout(() => setIsCopied(false), 3000);
      });
    }, [onCopyEvent]);

    return (
      <figure
        ref={ref}
        {...props}
        className={cn(
          'not-prose group fd-codeblock relative my-6 overflow-hidden rounded-xl border border-border bg-muted/50 text-sm',
          props.className?.replace(
            'shiki shiki-themes github-light github-dark',
            '',
          ),
        )}
      >
        {title ? (
          <div className="flex flex-row items-center gap-2 bg-muted border-b border-border/75 dark:border-border/50 px-4 h-10">
            {icon ? (
              <div
                className="text-muted-foreground [&_svg]:size-3.5"
                dangerouslySetInnerHTML={
                  typeof icon === 'string' ? { __html: icon } : undefined
                }
              >
                {typeof icon !== 'string' ? icon : null}
              </div>
            ) : null}
            <figcaption className="flex-1 truncate text-muted-foreground">
              {title}
            </figcaption>
            {allowCopy ? (
              <CopyButton
                size="sm"
                variant="ghost"
                className="-me-2 bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
                onClick={onCopy}
                isCopied={isCopied}
              />
            ) : null}
          </div>
        ) : (
          allowCopy && (
            <CopyButton
              size="sm"
              variant="ghost"
              className="absolute right-2 top-2 z-[2] backdrop-blur-md bg-transparent hover:bg-black/5 dark:hover:bg-white/10"
              onClick={onCopy}
              isCopied={isCopied}
            />
          )
        )}
        <ScrollArea ref={areaRef} dir="ltr">
          <ScrollViewport
            {...viewportProps}
            className={cn('max-h-[600px]', viewportProps?.className)}
          >
            {props.children}
          </ScrollViewport>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </figure>
    );
  },
);

CodeBlock.displayName = 'CodeBlock';
