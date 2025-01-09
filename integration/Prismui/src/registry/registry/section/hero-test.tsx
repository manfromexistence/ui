"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WordReveal from "@/components/prismui/word-reveal";

interface HeroProps {
  className?: string;
  children?: React.ReactNode;
}

export function HeroTest({ className, children }: HeroProps) {
  return (
    <div
      className={cn(
        "relative min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-black pt-32",
        className
      )}
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black via-zinc-900/50 to-black" />

      {/* Animated Gradient Blob */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <WordReveal
            text="Linear is a better way to build products"
            className="mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.5 }}
            className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            Meet the new standard for modern software development. Streamline
            issues, sprints, and product roadmaps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-white hover:bg-zinc-800 transition-colors"
            >
              View Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* 3D Card Animation */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden border border-zinc-800">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10"
              animate={{
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            {children}
          </div>

          {/* Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
