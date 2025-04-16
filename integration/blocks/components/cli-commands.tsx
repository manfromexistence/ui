"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCopy } from "@/hooks/use-copy";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function CliCommands({ name }: { name: string }) {
  const [selectedPackageManager, setSelectedPackageManager] =
    useState<PackageManager>("pnpm");
  const [, copy] = useCopy();
  const [hasCopied, setHasCopied] = useState(false);

  const commands = {
    pnpm: `pnpm dlx shadcn@latest add https://blocks.so/r/${name}.json`,
    npm: `npx shadcn@latest add https://blocks.so/r/${name}.json`,
    yarn: `yarn dlx shadcn@latest add https://blocks.so/r/${name}.json`,
    bun: `bunx --bun shadcn@latest add https://blocks.so/r/${name}.json`,
  };

  type PackageManager = keyof typeof commands;

  const packageManagers = ["pnpm", "npm", "yarn", "bun"];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;
    if (hasCopied) {
      timeoutId = setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [hasCopied]);

  return (
    <div className="relative">
      <Tabs
        value={selectedPackageManager}
        onValueChange={(value) =>
          setSelectedPackageManager(value as PackageManager)
        }
        className="rounded-md bg-muted gap-0"
      >
        <div className="flex items-center justify-between px-2 py-1.5">
          <TabsList>
            {packageManagers.map((pkg) => (
              <TabsTrigger key={pkg} value={pkg}>
                {pkg}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button
            variant="outline"
            size="icon"
            className="h-7 w-7"
            data-umami-event="Copy Block Code"
            onClick={() => {
              copy(commands[selectedPackageManager]);
              setHasCopied(true);
            }}
          >
            {hasCopied ? (
              <Check className="h-3 w-3" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>

        {Object.entries(commands).map(([pkg, command]) => (
          <TabsContent className="m-0 border-t" key={pkg} value={pkg}>
            <pre className="overflow-auto p-4 font-mono text-xs text-foreground">
              {command}
            </pre>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
