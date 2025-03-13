'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} variant="ghost" className="size-8 rounded-full">
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    )
}
