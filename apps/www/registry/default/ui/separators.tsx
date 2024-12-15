import { FaPlus } from "react-icons/fa"

import { cn } from "@/lib/utils"

/**
 * 
 * USAGE EXAMPLES
 * 
 * const Usage = () => (
  <div>
    <Separator gradient />
    <Separator />
    <Separator label={<span className="px-2">Section</span>} gradient />
    <Separator label={<span className="px-2">Section</span>} />
    <Separator
      label={
        <div className="border px-4 py-1 rounded-full border-dashed">
          Section
        </div>
      }
      gradient
    />
    <Separator
      label={<div className="border px-4 py-1 rounded-full">Section</div>}
    />
    <Separator
      label={
        <div className="border px-12 py-2 rounded-full">
          <FaPlus />
        </div>
      }
      gradient
    />
  </div>
);
 */
type SeparatorProps = {
  /**
   * @default ""
   */
  label?: React.ReactNode
  /**
   * @default false
   */
  gradient?: boolean
  className?: string
}
//======================================
export const Separators = ({
  label,
  gradient = false,
  className = "",
}: SeparatorProps) => {
  if (label) {
    return (
      <div className="flex w-full items-center">
        <div
          className={cn(
            "h-[1px] w-full rounded-full",
            gradient
              ? "bg-gradient-to-r from-transparent to-zinc-500 dark:from-zinc-800 dark:to-zinc-400"
              : "bg-zinc-300 dark:bg-zinc-800",
            className
          )}
        ></div>
        <div className="w-fit text-nowrap uppercase text-gray-600 dark:text-gray-300">
          {label}
        </div>
        <div
          className={cn(
            "h-[1px] w-full rounded-full",
            gradient
              ? "bg-gradient-to-r from-zinc-500 to-transparent dark:from-zinc-200 dark:to-zinc-700"
              : "bg-zinc-300 dark:bg-zinc-800",
            className
          )}
        ></div>
      </div>
    )
  }
  return (
    <div
      className={cn(
        "h-[1px] w-full rounded-full",
        gradient
          ? "bg-gradient-to-r from-transparent via-zinc-500 to-transparent dark:from-zinc-800 dark:via-zinc-200 dark:to-zinc-700"
          : "bg-zinc-300 dark:bg-zinc-800",
        className
      )}
    />
  )
}
