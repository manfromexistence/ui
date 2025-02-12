"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import React from "react"
import { useTheme } from "next-themes"
import {
  AnimationStart,
  AnimationVariant,
  createAnimation,
} from "./theme-toggle-animations"

interface ThemeToggleAnimationProps {
  variant?: AnimationVariant
  start?: AnimationStart
  showLabel?: boolean
  url?: string
}

export default function Switchers({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme()

  const styleId = "theme-transition-styles"

  const updateStyles = React.useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return

    let styleElement = document.getElementById(styleId) as HTMLStyleElement

    console.log("style ELement", styleElement)
    console.log("name", name)

    if (!styleElement) {
      styleElement = document.createElement("style")
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }

    styleElement.textContent = css

    console.log("content updated")
  }, [])

  const toggleTheme = React.useCallback(() => {
    const animation = createAnimation(variant, start, url)

    updateStyles(animation.css, animation.name)

    if (typeof window === "undefined") return

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

    if (!document.startViewTransition) {
      switchTheme()
      return
    }

    document.startViewTransition(switchTheme)
  }, [variant, start, url, updateStyles, setTheme, theme])
  const [checked, setChecked] = useState<boolean>(true);


  return (
    // <Button
    //   onClick={toggleTheme}
    //   variant="ghost"
    //   size="icon"
    //   className="group relative h-8 w-8 p-0"
    //   name="Theme Toggle Button"
    // >
    //   <SunIcon className="size-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //   <MoonIcon className="absolute size-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //   <span className="sr-only">Theme Toggle </span>
    //   {showLabel && (
    //     <>
    //       <span className="absolute -top-10 hidden rounded-full border px-2 group-hover:block">
    //         {" "}
    //         variant = {variant}
    //       </span>
    //       <span className="absolute -bottom-10 hidden rounded-full border px-2 group-hover:block">
    //         {" "}
    //         start = {start}
    //       </span>
    //     </>
    //   )}
    // </Button>
    <>
      {/* <img className="absolute left-0 top-0 h-full w-full rounded-md mix-blend-multiply" alt="Thunder" src={"/thunder.gif"} /> */}
      <div
        onClick={toggleTheme}
        className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
        <Switch
          id="switch-12"
          checked={checked}
          onCheckedChange={setChecked}
          className="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
        />
        <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=checked]:text-muted-foreground/70">
          <Moon size={16} strokeWidth={2} aria-hidden="true" />
        </span>
        <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=unchecked]:text-muted-foreground/70">
          <Sun size={16} strokeWidth={2} aria-hidden="true" />
        </span>
      </div>
      <Label htmlFor="switch-12" className="sr-only">
        Labeled switch
      </Label>
    </>
  )
}


// export default function Switchers() {
//   const [checked, setChecked] = useState<boolean>(true);
//   return (
//     <div className="">
//       {/* <img className="absolute left-0 top-0 h-full w-full rounded-md mix-blend-multiply" alt="Thunder" src={"/thunder.gif"} /> */}
//       <div className="relative inline-grid h-9 grid-cols-[1fr_1fr] items-center text-sm font-medium">
//         <Switch
//           id="switch-12"
//           checked={checked}
//           onCheckedChange={setChecked}
//           className="peer absolute inset-0 h-[inherit] w-auto data-[state=checked]:bg-input/50 data-[state=unchecked]:bg-input/50 [&_span]:h-full [&_span]:w-1/2 [&_span]:transition-transform [&_span]:duration-300 [&_span]:[transition-timing-function:cubic-bezier(0.16,1,0.3,1)] data-[state=checked]:[&_span]:translate-x-full rtl:data-[state=checked]:[&_span]:-translate-x-full"
//         />
//         <span className="pointer-events-none relative ms-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=checked]:text-muted-foreground/70">
//           <Moon size={16} strokeWidth={2} aria-hidden="true" />
//         </span>
//         <span className="pointer-events-none relative me-0.5 flex min-w-8 items-center justify-center text-center peer-data-[state=unchecked]:text-muted-foreground/70">
//           <Sun size={16} strokeWidth={2} aria-hidden="true" />
//         </span>
//       </div>
//       <Label htmlFor="switch-12" className="sr-only">
//         Labeled switch
//       </Label>
//     </div>
//   );
// }
