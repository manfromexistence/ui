import { InstallTabs } from '@/registry/components/install-tabs';

const COMMANDS = {
  npm: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  pnpm: `pnpm dlx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  yarn: `npx shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
  bun: `bun x --bun shadcn@latest add "https://animate-ui.com/r/install-tabs"`,
};

export const InstallTabsDemo = () => {
  return (
    <InstallTabs
      defaultValue="pnpm"
      className="max-w-[650px]"
      commands={COMMANDS}
    />
  );
};
