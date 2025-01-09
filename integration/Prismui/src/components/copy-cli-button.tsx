"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { type CliCommands } from "@/registry/schema";

interface CopyCliButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  commands: string | CliCommands;
}

async function copyToClipboard(value: string) {
  await navigator.clipboard.writeText(value);
}

export function CopyCliButton({
  commands,
  className,
  ...props
}: CopyCliButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  if (typeof commands === "string") {
    return (
      <Button
        size="icon"
        variant="ghost"
        className={cn(
          "relative z-10 h-6 w-6 top-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
          className
        )}
        onClick={() => {
          copyToClipboard(commands);
          setHasCopied(true);
        }}
        {...props}
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? (
          <CheckIcon className="h-3 w-3" />
        ) : (
          <CopyIcon className="h-3 w-3" />
        )}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            "relative z-10 h-6 w-6 top-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50",
            className
          )}
        >
          {hasCopied ? (
            <CheckIcon className="h-3 w-3" />
          ) : (
            <CopyIcon className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            copyToClipboard(commands.npm);
            setHasCopied(true);
          }}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            copyToClipboard(commands.pnpm);
            setHasCopied(true);
          }}
        >
          pnpm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            copyToClipboard(commands.yarn);
            setHasCopied(true);
          }}
        >
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            copyToClipboard(commands.bun);
            setHasCopied(true);
          }}
        >
          bun
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
