"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComponentShowcaseProps {
  title: string;
  description: string;
  pill: string;
  children: React.ReactNode;
  align?: "left" | "right";
}

export function ComponentShowcase({
  title,
  description,
  pill,
  children,
  align = "left",
}: ComponentShowcaseProps) {
  return (
    <section className="container relative py-20">
      <div className="grid gap-8 items-center lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: align === "left" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className={cn(
            "flex flex-col gap-4",
            align === "right" && "lg:order-2"
          )}
        >
          <Button variant="outline" className="rounded-full self-start mb-4">
            {pill}
          </Button>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">{description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: align === "left" ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className={cn(
            "bg-muted/50 rounded-xl p-8",
            align === "right" && "lg:order-1"
          )}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
