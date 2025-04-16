'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

import { Hero } from '@/components/hero';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Cards } from '@/components/cards';
import { ComponentsSection } from '@/components/components-section';
import { DistributionSection } from '@/components/distribution-section';
import { Footer } from '@/components/footer';

const CONTENT_VARIANTS = {
  hidden: {
    y: 2000,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 30 },
  },
};

export default function HomePage() {
  const [transition, setTransition] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTransition(true), 2000);
    const timer2 = setTimeout(() => setIsLoaded(true), 3000);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <main className={cn('relative h-dvh', !isLoaded && 'overflow-y-hidden')}>
      <Header transition={transition} />

      <div className="h-dvh w-full flex items-center">
        <motion.div
          variants={CONTENT_VARIANTS}
          initial="hidden"
          animate={transition ? 'visible' : 'hidden'}
          className="w-full"
        >
          <Hero key={String(transition)} />
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto pb-30 px-6">
        <Cards />

        <div className="relative overflow-hidden">
          <ComponentsSection />

          <DistributionSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
