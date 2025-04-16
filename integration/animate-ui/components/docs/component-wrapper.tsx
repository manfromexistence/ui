'use client';

import { OpenInV0Button } from '@/components/docs/open-in-v0-button';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Fullscreen, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import Iframe from './iframe';

interface ComponentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  iframe?: boolean;
  bigScreen?: boolean;
}

export const ComponentWrapper = ({
  className,
  children,
  name,
  iframe = false,
  bigScreen = false,
}: ComponentWrapperProps) => {
  const [key, setKey] = useState(0);

  return (
    <div
      className={cn(
        'max-w-screen relative rounded-xl border bg-background',
        bigScreen && 'overflow-hidden',
        className,
      )}
      key={key}
    >
      <div className="absolute top-3 right-3 z-10 bg-background flex items-center justify-end gap-2 p-1 rounded-[11px]">
        <OpenInV0Button url={`https://animate-ui.com/r/${name}.json`} />
        <Button
          onClick={() => setKey((prev) => prev + 1)}
          className="flex items-center rounded-lg"
          variant="neutral"
          size="icon-sm"
          asChild
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RotateCcw aria-label="restart-btn" size={14} />
          </motion.button>
        </Button>

        {iframe && (
          <Button
            onClick={() => window.open(`/examples/${name}`, '_blank')}
            className="flex items-center rounded-lg"
            variant="neutral"
            size="icon-sm"
            asChild
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Fullscreen aria-label="fullscreen-btn" size={14} />
            </motion.button>
          </Button>
        )}
      </div>

      {iframe ? (
        <Iframe name={name} bigScreen={bigScreen} />
      ) : (
        <div className="flex min-h-[400px] w-full items-center justify-center px-10 py-16">
          {children}
        </div>
      )}
    </div>
  );
};
