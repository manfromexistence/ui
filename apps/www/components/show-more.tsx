"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"
import Link from "next/link"

const ShowMore = React.forwardRef<any, any>(
    (
        { className, orientation = "horizontal",componentName = "component", componentHref = "component", decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "relative my-10 shrink-0 bg-border",
                orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
                className
            )}
            {...props}
        >
            <div className="absolute left-1/2 top-1/2 flex w-full translate-x-[-50%] translate-y-[-50%] items-center justify-center py-2">
                <Link className="rounded-full border bg-background px-4 py-2 text-sm hover:bg-primary-foreground hover:text-primary" href={`/varients/${componentHref}`}>Show more {componentName} Varients</Link>
            </div>
        </SeparatorPrimitive.Root>
    )
)
ShowMore.displayName = SeparatorPrimitive.Root.displayName

export { ShowMore }
