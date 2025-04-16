'use client';

import { CodeBlock, Pre } from '@/components/docs/codeblock';
import type {
  HighlightOptionsCommon,
  HighlightOptionsThemes,
} from 'fumadocs-core/highlight';
import { useShiki } from 'fumadocs-core/highlight/client';
import { cn } from '@/lib/utils';

const getComponents = ({
  title,
  icon,
  onCopy,
}: {
  title?: string;
  icon?: React.ReactNode;
  onCopy?: () => void;
}) =>
  ({
    pre(props) {
      return (
        <CodeBlock
          {...props}
          title={title}
          icon={icon}
          onCopy={onCopy}
          className={cn('my-0', props.className)}
        >
          <Pre>{props.children}</Pre>
        </CodeBlock>
      );
    },
  }) satisfies HighlightOptionsCommon['components'];

export function DynamicCodeBlock({
  lang,
  code,
  options,
  title,
  icon,
  onCopy,
}: {
  lang: string;
  code: string;
  title?: string;
  icon?: React.ReactNode;
  onCopy?: () => void;
  options?: Omit<HighlightOptionsCommon, 'lang'> & HighlightOptionsThemes;
}) {
  const components = getComponents({ title, icon, onCopy });

  return useShiki(code, {
    lang,
    ...options,
    components: {
      ...components,
      ...options?.components,
    },
    withPrerenderScript: true,
  });
}
