import { allDocs } from "content-collections";
import { compareDesc } from "date-fns";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import TechStack from "@/components/tech-stack";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import FluidSimulation from "../fluid-simulation";

export default async function Hero() {
  const post = allDocs
    .filter(
      (post) =>
        post.date && post.date <= new Date().toISOString() && post.published,
    )
    .sort((a, b) => {
      if (!a.date && !b.date) return 0; // Both dates are undefined, keep original order
      if (!a.date) return 1; // Move a to the end if date is undefined
      if (!b.date) return -1; // Move b to the end if date is undefined
      return compareDesc(new Date(a.date), new Date(b.date)); // Both dates are defined, proceed with comparison
    })[0];

  return (
    <section id="hero" className="relative h-screen select-none">
      <FluidSimulation />
      <div className="relative flex h-full items-center justify-center overflow-hidden">
        <div className="z-10 flex w-auto flex-col md:w-[675px]">
          <div className="grid grid-cols-1">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <Link
                href={post.slug}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "sm",
                  }),
                  "rounded-full",
                )}
              >
                🎉 <Separator className="mx-2 h-4" orientation="vertical" />
                Introducing {post.title}
                <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
              </Link>
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1
                  className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
                    "text-balance text-left font-semibold tracking-tighter md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
                  )}
                >
                  UI library for Design Engineers
                </h1>
              </div>

              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                50+ free and open-source animated components built with{" "}
                <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
                <b>Framer Motion</b>
                .
                <br />
                Perfect companion for <b>shadcn/ui</b>.
              </p>

              <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                  <Link
                    href="/components"
                    className={cn(
                      buttonVariants({
                        variant: "rainbow",
                        size: "lg",
                      }),
                      "w-full gap-2",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="https://pro.magicui.design"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "rainbow-outline",
                      }),
                      "w-full gap-2",
                    )}
                  >
                    Browse Templates
                    <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
            <TechStack
              className="mx-auto flex w-full items-center justify-between pt-4"
              technologies={[
                "react",
                "typescript",
                "tailwindcss",
                "framermotion",
                "shadcn",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
