import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import Link from 'next/link';
import { motion } from 'motion/react';

export const SectionWrapper = ({
  title,
  subtitle,
  description,
  color = 'text-blue-500',
  backgroundColor = 'bg-blue-500/10 hover:bg-blue-500/20',
  children,
}: {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="mt-30">
      <p className={cn('text-base font-medium mb-4', color)}>{subtitle}</p>
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      <p className="mt-4 text-muted-foreground max-w-3xl">{description}</p>
      <motion.div className="my-8 w-fit" whileTap={{ scale: 0.95 }}>
        <Button
          asChild
          className={cn('rounded-full transition-colors', backgroundColor)}
        >
          <Link href="/docs">
            <span className={color}>Get Started</span>
          </Link>
        </Button>
      </motion.div>
      {children}
    </section>
  );
};
