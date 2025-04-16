'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

import { ScrollProgress } from '@/registry/components/scroll-progress';

export const ScrollProgressDemo = () => {
  return (
    <div className="absolute inset-0">
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <ScrollProgress progressProps={{ className: 'absolute' }}>
          <div className="size-full flex items-center justify-center dark:bg-neutral-950 bg-white">
            <p className="flex items-center gap-2 font-medium">
              Scroll down to see the progress bar{' '}
              <motion.span
                animate={{ y: [3, -3, 3] }}
                transition={{
                  duration: 1.25,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  type: 'keyframes',
                }}
              >
                <ArrowDown className="size-5" />
              </motion.span>
            </p>
          </div>
          <div className="size-full dark:bg-neutral-900 bg-neutral-100" />
          <div className="size-full dark:bg-neutral-950 bg-white" />
          <div className="size-full dark:bg-neutral-900 bg-neutral-100" />
          <div className="size-full dark:bg-neutral-950 bg-white" />
        </ScrollProgress>
      </div>
    </div>
  );
};
