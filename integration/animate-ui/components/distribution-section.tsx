import { MotionEffect } from '@/registry/effects/motion-effect';
import { SectionWrapper } from './section-wrapper';
import { AnimatedSpan, Terminal, TypingAnimation } from './magicui/terminal';
import { useInView, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { File, Files, Folder } from '@/components/animate-ui/files';

export const DistributionSection = () => {
  const localRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(localRef, {
    once: true,
    margin: '50px',
  });

  const [openStructureFile, setOpenStructureFile] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => setOpenStructureFile(true), 6000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <MotionEffect
      slide={{
        offset: 200,
      }}
      fade
      inView
      delay={0.25}
      inViewMargin="-50px"
    >
      <SectionWrapper
        subtitle="Distribution"
        title={
          <>
            Not a library but a{' '}
            <span className="text-emerald-500">component distribution</span>
          </>
        }
        description="Animate UI is not a library, it's a component distribution system. You can use the components in your project simply by installing them with the shadcn/ui CLI, or by copying the code and pasting it into your project."
        color="text-emerald-500"
        backgroundColor="bg-emerald-500/10 hover:bg-emerald-500/20"
      >
        <div ref={localRef} className="flex lg:flex-row flex-col gap-4">
          {isInView && (
            <>
              <Terminal className="h-[418px] w-full lg:flex-1 max-w-none">
                <TypingAnimation>
                  &gt; pnpm dlx shadcn@latest add
                  &quot;https://animate-ui.com/r/counter&quot;
                </TypingAnimation>

                <AnimatedSpan delay={4000} className="text-green-500">
                  <span>✔ Checking registry.</span>
                </AnimatedSpan>
                <AnimatedSpan delay={4500} className="text-green-500">
                  <span>✔ Installing dependencies.</span>
                </AnimatedSpan>
                <AnimatedSpan delay={5000} className="text-green-500">
                  <span>✔ Created 1 file:</span>
                </AnimatedSpan>
                <AnimatedSpan delay={5500} className="text-green-500">
                  {!openStructureFile ? (
                    <motion.span layoutId="counter-file">
                      &nbsp;&nbsp;- components/animate-ui/counter.tsx
                    </motion.span>
                  ) : (
                    <span>&nbsp;&nbsp;- components/animate-ui/counter.tsx</span>
                  )}
                </AnimatedSpan>
              </Terminal>

              <Files
                defaultOpen={['components']}
                className="h-[418px] w-full flex-1"
              >
                <Folder name="app" defaultOpen={['(home)']}>
                  <File name="layout.tsx" />
                  <File name="page.tsx" />
                  <File name="global.css" />
                </Folder>
                <Folder name="components" defaultOpen={['animate-ui']}>
                  <Folder name="animate-ui">
                    <File name="cursor.tsx" />
                    <File name="tabs.tsx" />
                    {openStructureFile && (
                      <File name="counter.tsx" layoutId="counter-file" />
                    )}
                  </Folder>
                  <File name="button.tsx" />
                  <File name="tabs.tsx" />
                  <File name="dialog.tsx" />
                </Folder>
                <File name="package.json" />
              </Files>
            </>
          )}
        </div>
      </SectionWrapper>
    </MotionEffect>
  );
};
