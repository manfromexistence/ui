import { IoSend } from "react-icons/io5"

import { cn } from "@/lib/utils"
import {
  Button,
  type ButtonProps as BaseButtonProps,
} from "@/registry/default/ui/button"

type ButtonProps = {
  children: React.ReactNode
} & BaseButtonProps

//======================================Neubrutalism
export const Button_v1 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "rounded-sm border-[0.5px] bg-transparent duration-200",
        // light mode
        "border-zinc-800 text-zinc-800 shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:bg-zinc-50 active:shadow-none",
        // dark mode
        "dark:border-zinc-600 dark:bg-zinc-950 dark:text-zinc-50 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] active:dark:shadow-none",
        rest.className
      )}
    >
      {children}
    </Button>
  )
}

//======================================Shine
export const Button_v2 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "group relative overflow-hidden ease-in-out hover:scale-105 hover:shadow-lg",
        // light mode
        "bg-gradient-to-tr from-zinc-900 to-zinc-700 text-zinc-50 hover:shadow-zinc-500/30",
        // dark mode
        "dark:bg-gradient-to-tr dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-900 dark:hover:shadow-zinc-700/30",
        rest.className
      )}
    >
      <span>{children}</span>
      <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
        <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
      </span>
    </Button>
  )
}

//======================================
export const Button_v3 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "group relative overflow-hidden ease-out hover:bg-gradient-to-r hover:ring-2 hover:ring-offset-2",
        // light mode
        "bg-zinc-900 text-zinc-50 hover:from-zinc-800 hover:to-zinc-700 hover:ring-zinc-900",
        // dark mode
        "dark:bg-zinc-50 dark:text-zinc-800 dark:ring-offset-black dark:hover:from-zinc-50 dark:hover:to-zinc-100 dark:hover:ring-white",
        rest.className
      )}
    >
      <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-60 dark:bg-zinc-900"></span>
      <span className="relative">{children}</span>
    </Button>
  )
}

//======================================
export const Button_v4 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gradient-to-tr duration-300 ease-in-out active:translate-y-0.5 active:scale-100",
        // light mode
        "from-zinc-800 to-zinc-700 text-white shadow-[0px_3px_0px_rgba(82,82,91,0.9)] active:shadow-none",
        // dark mode
        "dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-800 dark:shadow-[0px_3px_0px_rgba(161,161,170,0.9)] dark:active:shadow-none",
        rest.className
      )}
    >
      <span className="absolute size-0 rounded-lg bg-white opacity-10 transition-all duration-300 ease-out group-hover:size-full dark:bg-black"></span>
      <span className="relative">{children}</span>
    </Button>
  )
}

//======================================
export const Button_v5 = ({
  children,
  Icon = <IoSend size="20" />,
  ...rest
}: ButtonProps & { Icon: React.ReactNode }) => {
  return (
    <Button
      {...rest}
      className={cn(
        "group relative overflow-hidden border shadow",
        // light mode
        "border-zinc-300 bg-zinc-50 text-zinc-800",
        // dark mode
        "dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100",
        rest.className
      )}
    >
      <span className="duration-&lsqb;600ms&rsqb; ease-&lsqb;cubic-bezier(0.50,0.20,0,1)&rsqb; absolute inset-0 flex size-full -translate-x-full items-center justify-center  rounded-sm bg-zinc-800 text-zinc-100 group-hover:translate-x-0 dark:bg-zinc-100 dark:text-zinc-800">
        {Icon}
      </span>
      <span className="ease absolute flex h-full w-full items-center justify-center transition-all duration-500 group-hover:translate-x-full">
        {children}
      </span>
      <span className="invisible relative">{children}</span>
    </Button>
  )
}

//======================================
export const Button_v6 = ({ children, ...rest }: ButtonProps) => {
  return (
    <div className="group rounded-sm border border-zinc-600 dark:border-zinc-200">
      <Button
        {...rest}
        className={cn(
          "w-full scale-x-[0.97] scale-y-[.88] rounded-sm bg-zinc-950 font-semibold text-zinc-100 transition duration-300 group-hover:m-0 group-hover:scale-100 dark:bg-zinc-50 dark:text-zinc-800",
          rest.className
        )}
      >
        {children}
      </Button>
    </div>
  )
}

//======================================
export const Button_v7 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      variant="link"
      {...rest}
      className={cn(
        "hover:no-underline",
        "relative px-[1px] pb-0 ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 after:dark:bg-zinc-50",
        rest.className
      )}
    >
      {children}
    </Button>
  )
}

//======================================
export const Button_v8 = ({ children, ...rest }: ButtonProps) => {
  return (
    <Button
      {...rest}
      className={cn(
        "shadow-embossed bg-zinc-50 text-zinc-900 ease-out hover:scale-100 hover:shadow-none dark:bg-[#121212] dark:text-[#999999]",
        rest.className
      )}
    >
      {children}
    </Button>
  )
}
