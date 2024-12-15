import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/registry/default/ui/button"

//======================================
export const EyeCatchingButton_v1 = ({ ...props }: ButtonProps) => {
  return (
    <div className="group relative overflow-hidden rounded-full border border-zinc-400 bg-white p-0.5 shadow dark:border-zinc-800 dark:bg-zinc-900">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)]" />
      <Button
        {...props}
        className={cn(
          "h-10 w-full rounded-full bg-zinc-50 px-8 font-semibold text-zinc-800 backdrop-blur-xl dark:bg-zinc-900 dark:text-zinc-200",
          props.className
        )}
      />
    </div>
  )
}

//======================================Shiny Background
export const EyeCatchingButton_v2 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine rounded-lg border-[1px] bg-[length:200%_100%] tracking-wide shadow",
        "dark:border-zinc-800 dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200",
        "border-zinc-300 bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800",
        props.className
      )}
    />
  )
}

//======================================Shiny Text
export const EyeCatchingButton_v3 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine rounded-lg border-[1px] bg-[length:250%_100%] bg-clip-text font-bold tracking-wide text-transparent shadow dark:text-transparent",
        "dark:border-zinc-800 dark:bg-[linear-gradient(110deg,#D4D4D8,45%,#27272A,55%,#D4D4D8)]",
        "border-zinc-300 bg-[linear-gradient(110deg,#09090B,45%,#fff,55%,#09090B)]",
        props.className
      )}
    />
  )
}

//======================================Animated Gradient border
export const EyeCatchingButton_v4 = ({ ...props }: ButtonProps) => {
  return (
    <div className="group relative inline-block overflow-hidden rounded-xl p-[1.3px]">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#52525B_0%,#D4D4D8_50%,#52525B_100%)] group-hover:animate-none dark:bg-[conic-gradient(from_90deg_at_50%_50%,#FAFAFA_0%,#52525B_50%,#E4E4E7_100%)]" />
      <Button
        {...props}
        className={cn(
          "rounded-xl bg-white text-lg font-medium text-zinc-800 backdrop-blur-2xl group-hover:scale-100 dark:bg-zinc-950 dark:text-zinc-400",
          props.className
        )}
      />
    </div>
  )
}

//======================================Animated Text Gradient
export const EyeCatchingButton_v5 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outline"
      className={cn(
        "animate-text-gradient rounded-xl bg-gradient-to-l bg-[length:300%] bg-clip-text text-lg font-bold tracking-wide text-transparent dark:bg-zinc-50 dark:text-transparent",
        "from-zinc-500 via-zinc-950 to-zinc-600",
        "dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600",
        props.className
      )}
    />
  )
}
