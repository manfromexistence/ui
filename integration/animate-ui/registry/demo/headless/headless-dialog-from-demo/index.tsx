'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from '@/registry/headless/headless-dialog';

export const RadixDialogDemo = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogBackdrop />

        <DialogPanel from="left" className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
            <DialogDescription>
              Please read the following terms of service carefully.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, quos.
            </p>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Decline
            </Button>
            <Button type="submit" onClick={() => setIsOpen(false)}>
              Accept
            </Button>
          </DialogFooter>
        </DialogPanel>
      </Dialog>
    </div>
  );
};
