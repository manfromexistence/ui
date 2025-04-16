'use client';

import { Button } from '@/components/ui/button';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@/registry/headless/headless-disclosure';
import { ChevronsUpDown } from 'lucide-react';

export const RadixCollapsibleDemo = () => {
  return (
    <Disclosure className="w-[350px]" as="div">
      <div className="space-y-2 mb-2">
        <div className="flex items-center justify-between space-x-4">
          <h4 className="text-sm font-semibold">
            @peduarte starred 3 repositories
          </h4>
          <DisclosureButton
            as={Button}
            variant="outline"
            size="sm"
            className="w-9 p-0"
          >
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </DisclosureButton>
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @headlessui/react
        </div>
      </div>
      <DisclosurePanel className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @headlessui/vue
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          @stitches/react
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
