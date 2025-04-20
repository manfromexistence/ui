'use client';

import { index } from '@/__registry__';
import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContents,
} from '@/registry/radix/radix-tabs';
import { InstallTabs } from '@/registry/components/install-tabs';
import { ComponentManualInstallation } from './component-manual-installation';

interface ComponentInstallationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
}

export function ComponentInstallation({
  name,
  className,
  ...props
}: ComponentInstallationProps) {
  const component = index[name];

  const commands = {
    npm: `npx shadcn@latest add "${component.command}"`,
    pnpm: `pnpm dlx shadcn@latest add "${component.command}"`,
    yarn: `npx shadcn@latest add "${component.command}"`,
    bun: `bun x --bun shadcn@latest add "${component.command}"`,
  };

  return (
    <div
      className={cn(
        'relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]',
        className,
      )}
      {...props}
    >
      <Tabs defaultValue="cli" className="relative mr-auto w-full">
        <TabsList
          className="justify-start mb-2 rounded-xl h-10 bg-transparent p-0"
          activeClassName="bg-neutral-100 dark:bg-neutral-800 shadow-none rounded-lg"
        >
          <TabsTrigger
            value="cli"
            className="relative border-none rounded-lg px-4 py-2 h-full font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            CLI
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className="relative border-none rounded-lg px-4 py-2 h-full font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Manual
          </TabsTrigger>
        </TabsList>

        <TabsContents>
          <TabsContent value="cli">
            <InstallTabs commands={commands} />
          </TabsContent>
          <TabsContent value="manual">
            <ComponentManualInstallation
              name={name}
              dependencies={component.dependencies}
              devDependencies={component.devDependencies}
              registryDependencies={component.registryDependencies}
              code={component.files[0].content}
            />
          </TabsContent>
        </TabsContents>
      </Tabs>
    </div>
  );
}
