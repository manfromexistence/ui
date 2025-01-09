"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import Image from "next/image";

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <Image height={13} width={17} className="invert dark:invert-0" alt="Logo" src="/ui.png" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/80"
          )}
        >
          Docs
        </Link>
        <Link
          href="/varients"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/variants") &&
              (!pathname?.startsWith("/variants/buttons") ||
                pathname?.startsWith("/variants/inputs") ||
                pathname?.startsWith("/variants/checkboxes-radios-switches") ||
                pathname?.startsWith("/variants/selects"))
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Varients
        </Link>
        <Link
          href="/blocks"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blocks")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Blocks
        </Link>
        {/* <Link
          href="/visualizations"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/canvas") ||
              pathname?.startsWith("/visualizations")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Visualizations
        </Link> */}
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Themes
        </Link>
        <Link
          href="/renderers"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/renderers")
              ? "text-foreground"
              : "text-foreground/80"
          )}
        >
          Renderers
        </Link>
      </nav>
    </div>
  )
}
