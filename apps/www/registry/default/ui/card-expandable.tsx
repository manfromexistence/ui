"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

export function ExpandableCard({
  /**
   * The height of the card when it is collapsed.
   */
  height = "8rem",
  /**
   * The class name to apply to the root container.
   */
  className = "",
  children,
  /**
   * Whether the button should be full width or not.
   */
  wide = false,
}: {
  height: string
  wide?: boolean
  className?: string
  children: React.ReactNode
}) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [contentHeight, setContentHeight] = React.useState(0)
  const contentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight)
    }
  }, [])
  return (
    <div
      className={cn(
        "w-full rounded-lg border bg-white from-white px-4 pb-3 pt-8 shadow dark:bg-zinc-950 dark:from-zinc-950",
        className
      )}
    >
      <div className="relative overflow-hidden bg-inherit dark:bg-inherit">
        <div
          ref={contentRef}
          id="expandable-content"
          className="transition-all duration-300 ease-in-out"
          style={{ height: isExpanded ? `${contentHeight}px` : height }}
        >
          <>{children}</>
        </div>
        <div
          data-expanded={isExpanded}
          className="dark:from-inherit/50 pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-inherit to-transparent transition-opacity duration-300 ease-in-out data-[expanded=true]:opacity-0"
          aria-hidden={isExpanded ? "true" : "false"}
        />
        <div
          className={cn(
            "mx-auto bg-inherit dark:bg-inherit",
            wide ? "w-full" : "w-fit",
            isExpanded ? "pt-2" : "absolute inset-x-0 bottom-4"
          )}
        >
          <Button
            variant="outline"
            className="w-full rounded-lg bg-inherit dark:bg-inherit"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="expandable-content"
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>
      </div>
    </div>
  )
}
