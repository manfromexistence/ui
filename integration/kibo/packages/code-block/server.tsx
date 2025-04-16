import {
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationFocus,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers';
import {
  type BundledLanguage,
  type CodeOptionsMultipleThemes,
  codeToHtml,
} from 'shiki';

export type CodeBlockContentProps = {
  themes?: CodeOptionsMultipleThemes['themes'];
  language?: BundledLanguage;
  children: string;
};

export const CodeBlockContent = async ({
  children,
  themes,
  language = 'typescript',
  ...props
}: CodeBlockContentProps) => {
  const html = await codeToHtml(children as string, {
    lang: language,
    themes: themes ?? {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    transformers: [
      transformerNotationDiff({
        matchAlgorithm: 'v3',
      }),
      transformerNotationHighlight({
        matchAlgorithm: 'v3',
      }),
      transformerNotationWordHighlight({
        matchAlgorithm: 'v3',
      }),
      transformerNotationFocus({
        matchAlgorithm: 'v3',
      }),
      transformerNotationErrorLevel({
        matchAlgorithm: 'v3',
      }),
    ],
  });

  return (
    <div
      // biome-ignore lint/security/noDangerouslySetInnerHtml: "Kinda how Shiki works"
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};
