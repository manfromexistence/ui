import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { ComponentPreview } from '@/components/docs/component-preview';
import { ComponentInstallation } from '@/components/docs/component-installation';
import { ExternalLink } from '@/components/docs/external-link';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import { Footer } from '@/components/docs/footer';
import {
  CodeBlock,
  type CodeBlockProps,
  Pre,
} from '@/components/docs/codeblock';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      footer={{ component: <Footer /> }}
      tableOfContent={{ style: 'clerk' }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            ComponentPreview,
            ComponentInstallation,
            TypeTable,
            ExternalLink,
            Steps,
            Step,
            pre: (props: CodeBlockProps) => (
              <CodeBlock {...props} keepBackground={false} className="">
                <Pre>{props.children}</Pre>
              </CodeBlock>
            ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    authors: page.data?.author
      ? [
          {
            name: page.data.author.name,
            ...(page.data.author?.url && { url: page.data.author.url }),
          },
        ]
      : {
          name: 'imskyleen',
          url: 'https://github.com/imskyleen',
        },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: 'https://animate-ui.com',
      siteName: 'Animate UI',
      images: [
        {
          url: 'https://animate-ui.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Animate UI',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@animate_ui',
      title: page.data.title,
      description: page.data.description,
      images: [
        {
          url: 'https://animate-ui.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Animate UI',
        },
      ],
    },
  };
}
