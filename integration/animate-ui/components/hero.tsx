'use client';

import { ArrowRightIcon, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { HighlightText } from '@/registry/text/highlight-text';
import { motion } from 'motion/react';
import { Tabs, TabsList, TabsTrigger } from '@/registry/components/tabs';
import { Switch } from '@/registry/radix/radix-switch';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/registry/radix/radix-accordion';
import { RadixProgressDemo } from '@/registry/demo/radix/radix-progress-demo';
import { InstallTabs } from '@/registry/components/install-tabs';
import { Checkbox } from '@/registry/radix/radix-checkbox';
import { GitHubStarsButton } from '@/registry/buttons/github-stars-button';
import ReactIcon from './icons/react-icon';
import TSIcon from './icons/ts-icon';
import TailwindIcon from './icons/tailwind-icon';
import MotionIcon from './icons/motion-icon';
import ShadcnIcon from './icons/shadcn-icon';

const COMMANDS = {
  npm: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  pnpm: `pnpm dlx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  yarn: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  bun: `bun x --bun shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
};

const ACCORDION_ITEMS = [
  {
    value: 'item-1',
    title: 'What is Animate UI?',
    content:
      'Animate UI is an open-source distribution of React components built with TypeScript, Tailwind CSS, and Motion.',
  },
  {
    value: 'item-2',
    title: 'How is it different from other libraries?',
    content:
      'Instead of installing via NPM, you copy and paste the components directly. This gives you full control to modify or customize them as needed.',
  },
  {
    value: 'item-3',
    title: 'Is Animate UI free to use?',
    content:
      'Absolutely! Animate UI is fully open-source. You can use, modify, and adapt it to fit your needs.',
  },
];

export const Hero = () => {
  const { resolvedTheme: theme, setTheme } = useTheme();

  const [checkboxChecked, setCheckboxChecked] = useState<
    boolean | 'indeterminate'
  >(false);

  useEffect(() => {
    setTimeout(() => setCheckboxChecked(true), 1000);
  }, []);

  return (
    <div className="relative mx-auto max-w-7xl px-6 pt-8 w-full flex flex-col gap-10">
      <div className="lg:max-w-[50%] max-w-[700px] space-y-6 md:mt-20 mt-8">
        <h1 className="text-3xl md:text-4xl lg:text-[43px] sm:text-start text-center font-semibold text-neutral-800 dark:text-white !leading-relaxed lg:!leading-snug">
          Elevate your UI with fluid,{' '}
          <HighlightText
            transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
            inView
            text="animated components"
            className="from-blue-100 to-blue-100 dark:from-blue-500 dark:to-blue-500"
          />
        </h1>

        <p className="text-base sm:text-start text-center text-neutral-500 dark:text-neutral-400 max-w-2xl">
          A fully animated, open-source component distribution built with{' '}
          <strong>
            React, TypeScript, Tailwind CSS, Motion and Shadcn CLI
          </strong>
          . Browse a list of components you can install, modify, and use in your
          projects.
        </p>

        <div className="flex sm:flex-row flex-col sm:gap-5 gap-3 my-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full rounded-full pr-5 bg-blue-500 text-white hover:bg-blue-500/90"
              asChild
            >
              <Link href="/docs">
                Get Started <ArrowRightIcon className="!size-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full rounded-full"
              variant="neutral"
              asChild
            >
              <Link href="/docs/components">Browse Components</Link>
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center gap-4 justify-center sm:justify-start">
          <ReactIcon className="size-8" />
          <TSIcon className="size-8" />
          <TailwindIcon className="size-8" />
          <MotionIcon className="size-12" />
          <ShadcnIcon className="size-8" />
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="absolute top-10 right-8">
          <Tabs>
            <TabsList className="w-[250px]">
              <TabsTrigger className="w-full" value="code">
                Code
              </TabsTrigger>
              <TabsTrigger className="w-full" value="issues">
                Issues
              </TabsTrigger>
              <TabsTrigger className="w-full" value="docs">
                Docs
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="absolute top-28 right-4">
          <InstallTabs
            defaultValue="pnpm"
            className="max-w-[520px]"
            commands={COMMANDS}
          />
        </div>

        <div className="absolute top-62 right-37">
          <RadixProgressDemo />
        </div>

        <div className="absolute top-80 right-115">
          <Checkbox
            className="scale-125"
            checked={checkboxChecked}
            onCheckedChange={(checked) => setCheckboxChecked(checked)}
          />
        </div>

        <div className="absolute top-58 right-14">
          <Switch
            className="scale-125"
            leftIcon={<Sun />}
            rightIcon={<Moon />}
            checked={theme === 'dark'}
            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </div>

        <div className="absolute top-4 right-85">
          <GitHubStarsButton repo="animate-ui" username="animate-ui" />
        </div>

        <div className="absolute top-75 right-4">
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            className="w-[400px] rounded-xl border overflow-hidden"
          >
            {ACCORDION_ITEMS.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="last:border-b-0"
              >
                <AccordionTrigger className="text-sm px-4 py-3 bg-muted">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="p-4 border-t text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};
