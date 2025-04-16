"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StepsProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Steps({ className, ...props }: StepsProps) {
  return (
    <div
      className={cn(
        "[&>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]",
        className
      )}
      {...props}
    />
  );
}

interface StepProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function Step({ className, ...props }: StepProps) {
  return (
    <h3
      className={cn(
        "font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}
