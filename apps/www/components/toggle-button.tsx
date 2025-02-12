"use client"

import React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

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

export function ThemeToggleButton({
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

        if (typeof document !== 'undefined' && (document as any).startViewTransition) {
            (document as any).startViewTransition(switchTheme)
        } else {
            switchTheme()
        }
    }, [variant, start, url, updateStyles, setTheme, theme])

    return (
        <Button
            onClick={toggleTheme}
            variant="ghost"
            size="icon"
            className="group relative h-8 w-8 p-0"
            name="Theme Toggle Button"
        >
            <SunIcon className="size-[1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute size-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Theme Toggle </span>
        </Button>
    )
}