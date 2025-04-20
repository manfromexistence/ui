'use client';

import { motion } from 'motion/react';

import { Logo } from '@/components/logo';
import GithubIcon from '@/components/icons/github-icon';
import XIcon from '@/components/icons/x-icon';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';
import { ThemeSwitcher } from './theme-switcher';

const LOGO_WRAPPER_VARIANTS = {
  center: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
  },
  topLeft: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 'auto',
    height: 'auto',
  },
};

const logoVariants = (isScroll: boolean, isMobile: boolean) => ({
  center: {
    top: '50%',
    left: '50%',
    x: '-50%',
    y: '-50%',
    scale: 1,
  },
  topLeft: {
    top: isScroll ? (isMobile ? 4 : 0) : 20,
    left: isScroll ? (isMobile ? -36 : -61) : isMobile ? -36 : -43,
    x: 0,
    y: 0,
    scale: isScroll ? (isMobile ? 0.6 : 0.5) : 0.6,
  },
});

export const Header = ({ transition }: { transition: boolean }) => {
  const isMobile = useIsMobile();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      variants={LOGO_WRAPPER_VARIANTS}
      initial="center"
      animate={transition ? 'topLeft' : 'center'}
      transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      className="fixed z-40 flex items-center justify-center"
    >
      <motion.div className="absolute inset-x-0 top-0 h-14 z-100 w-full bg-background/70 backdrop-blur-md" />
      <div className="relative max-w-7xl size-full">
        <motion.div
          className="absolute z-110"
          variants={logoVariants(isScroll, isMobile)}
          initial="center"
          animate={transition ? 'topLeft' : 'center'}
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        >
          <Logo size={isMobile ? 'lg' : 'xl'} draw betaTag />
        </motion.div>

        <motion.div
          initial={{
            top: isScroll ? (isMobile ? 12 : 7.5) : 28,
            right: -43,
            opacity: 0,
          }}
          animate={
            transition
              ? {
                  top: isScroll ? (isMobile ? 12 : 7.5) : 28,
                  right: 20,
                  opacity: 1,
                }
              : {
                  top: isScroll ? (isMobile ? 12 : 7.5) : 28,
                  right: -43,
                  opacity: 0,
                }
          }
          transition={{ type: 'spring', stiffness: 200, damping: 30 }}
          className="absolute z-110 flex items-center gap-x-4"
        >
          <div className="hidden xs:flex items-center gap-x-1">
            <a
              href="https://github.com/animate-ui/animate-ui"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex sm:mt-1 items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground sm:[&_svg]:size-5.5"
              data-active="false"
            >
              <GithubIcon />
            </a>
            <a
              href="https://x.com/animate_ui"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex sm:mt-1 items-center justify-center rounded-md text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 hover:bg-fd-accent hover:text-fd-accent-foreground p-1.5 [&_svg]:size-5 text-fd-muted-foreground sm:[&_svg]:size-5.5"
              data-active="false"
            >
              <XIcon />
            </a>
          </div>

          <ThemeSwitcher className="mt-1 xs:mt-0 sm:mt-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};
