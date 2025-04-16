"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Contributor {
  avatar_url: string;
  login: string;
}

interface Stats {
  stars: number;
  contributors: Contributor[];
}

function StarIcon({
  className,
  delay = 0,
  size = "default",
}: {
  className?: string;
  delay?: number;
  size?: "small" | "default";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.2, rotate: 20 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
        hover: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      className={className}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "text-yellow-400",
          size === "small" ? "w-4 h-4" : "w-8 h-8"
        )}
      >
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(size === "small" && "opacity-20")}
        />
      </svg>
    </motion.div>
  );
}

function StarsDecoration() {
  return (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
      <div className="flex gap-4">
        <StarIcon delay={0.2} />
        <StarIcon delay={0.3} />
        <StarIcon delay={0.4} />
      </div>
    </div>
  );
}

function ContributorAvatars({ contributors }: { contributors: Contributor[] }) {
  const displayedContributors = contributors.slice(0, 8);

  return (
    <div className="flex flex-wrap gap-2">
      {displayedContributors.map((contributor) => (
        <motion.div
          key={contributor.login}
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Image
            src={contributor.avatar_url}
            alt={`${contributor.login}'s avatar`}
            width={40}
            height={40}
            className="rounded-full border-2 border-background"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function GitHubStatsContent({ stars, contributors }: Stats) {
  return (
    <section className="container relative py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            Proudly open-source
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Our source code is available on GitHub - feel free to read, review,
            or contribute to it however you want!
          </p>
          <div className="mt-6">
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a
                href="https://github.com/Codehagen/Prismui"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.github className="h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      <Separator className="mb-16" />
      <div className="max-w-4xl mx-auto">
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center text-center"
          >
            <motion.a
              href="https://github.com/Codehagen/Prismui"
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <StarsDecoration />
              <div className="flex flex-col items-center mt-2">
                <div className="text-7xl font-bold">{stars}</div>
                <div className="text-xl text-muted-foreground mt-2">
                  Github Stars
                </div>
              </div>
            </motion.a>
          </motion.div>

          <Separator className="md:hidden" />

          <div className="hidden md:block absolute left-1/2 top-0 h-full">
            <Separator orientation="vertical" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-bold">
                  {contributors.length}+ Contributors
                </div>
                <div className="text-lg text-muted-foreground mt-2">
                  Join our growing community
                </div>
              </div>
              <a
                href="https://github.com/Codehagen/Prismui/graphs/contributors"
                target="_blank"
                rel="noreferrer"
                className="inline-block"
              >
                <div className="flex justify-center">
                  <ContributorAvatars contributors={contributors} />
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
