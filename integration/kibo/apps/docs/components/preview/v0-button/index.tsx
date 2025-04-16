'use client';

import { Button } from '@repo/shadcn-ui/components/ui/button';
import Image from 'next/image';
import Logo from './logo.svg';

export const V0Button = ({ name }: { name: string }) => {
  const registryUrl = new URL(
    `/registry/${name}.json`,
    'https://www.kibo-ui.com/'
  );
  const v0Url = new URL('https://v0.dev/chat/api/open');

  v0Url.searchParams.set('url', registryUrl.toString());

  return (
    <div className="absolute top-0 right-0 p-2">
      <Button
        size="sm"
        variant="outline"
        className="h-7 gap-1 text-foreground"
        asChild
      >
        <a href={v0Url.toString()} target="_blank" rel="noopener noreferrer">
          <span>Edit in</span>
          <Image
            src={Logo}
            alt="v0"
            width={16}
            height={16}
            className="dark:invert"
          />
        </a>
      </Button>
    </div>
  );
};
