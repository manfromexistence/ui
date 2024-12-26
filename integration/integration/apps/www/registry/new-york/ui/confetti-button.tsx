"use client"

import React from "react"
import confetti, {
  type GlobalOptions as ConfettiGlobalOptions,
  type Options as ConfettiOptions,
} from "canvas-confetti"

import { Button, ButtonProps } from "@/registry/default/ui/button"

interface ConfettiButtonProps extends ButtonProps {
  options?: ConfettiOptions &
    ConfettiGlobalOptions & { canvas?: HTMLCanvasElement }
  children?: React.ReactNode
}

export default function ConfettiButton({
  options,
  children,
  ...props
}: ConfettiButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    confetti({
      ...options,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight,
      },
    })
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
