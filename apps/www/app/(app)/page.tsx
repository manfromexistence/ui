"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { AlarmClock, Apple, Axe, Beer, Bell, BookMarked, BookOpenText, Box, Braces, Brain, Brush, Bug, Cable, Calendar, Carrot, CircleDashed, CircleSlash2, Citrus, Clapperboard, CloudSnow, CodeXml, Cog, Command, Copy, LayoutGrid, List, PartyPopper, PawPrint, ShieldEllipsis, UserPlus } from "lucide-react"

export default function IndexPage() {

  const PlusIcon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        {...rest}
        className={cn("absolute size-6 text-black dark:text-white", className)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    )
  }

  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>A Ui space for everyone.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed Ui blocks that you can copy and paste into your
          apps. Made with Ant Design, Shadcn Ui, Tailwind CSS and Framer Motion. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="sm" variant="ghost">
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
            >
              GitHub
            </Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper h-full w-full">
        <div className="homepage-container grid sm:grid-cols-1 md:grid-cols-2 lg:h-[500px] lg:grid-cols-3">
          <Link href="/docs/components/dock" className="flex h-full w-full flex-col items-start justify-between border-b p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:border-r sm:p-9">
            <div className="w-full space-y-2 sm:h-24">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:space-x-2">
                <div className="flex w-full items-center justify-between rounded-md border bg-primary-foreground p-3">
                  <span className="w-24 truncate text-sm md:w-32 lg:w-24 xl:w-48 2xl:w-full">$ npx manfromexistence-ui init</span>
                  <Copy className="h-4 w-4" />
                </div>
                <div className="flex w-full flex-1 items-center justify-center rounded-md border bg-primary-foreground p-3 text-sm">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Collabrators
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:space-x-2">
                <div className="flex rounded-md border bg-primary-foreground p-3">
                  <ShieldEllipsis className="h-5 w-5" />
                </div>
                <div className="flex rounded-md border p-1.5">
                  <div className="flex items-center justify-center rounded-md border bg-secondary p-1.5">
                    <LayoutGrid className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-center rounded-md p-1.5">
                    <List className="h-5 w-5" />
                  </div>
                </div>
                <div className="flex h-12 w-full rounded-md border bg-primary-foreground text-sm">
                  <span className="flex h-full items-center justify-center rounded-l-md bg-secondary px-3">
                    Label
                  </span>
                  <span className="flex h-full w-full flex-1 items-center border-l p-3">
                    Value
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Components</h1>
              <span className="text-muted-foreground">Building Blocks for your software.</span>
            </div>
          </Link>
          <Link href="/icons" className="flex h-full w-full flex-col justify-between border-b p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:border-r sm:p-9">
            <div className="grid w-full grid-cols-4 grid-rows-5 place-content-center place-items-center items-center justify-center gap-8 pt-[4px] text-sm sm:h-24 sm:grid-cols-8 sm:grid-rows-3">
              <PartyPopper />
              <PawPrint />
              <AlarmClock />
              <Apple />
              <Axe />
              <Bell />
              <Beer />
              <BookOpenText />
              <Braces />
              <Box />
              <BookMarked />
              <Brush />
              <Bug />
              <Calendar />
              <Cable />
              <Carrot />
              <CircleDashed />
              <Citrus />
              <Clapperboard />
              <CircleSlash2 />
              <CloudSnow />
              <Cog />
              <Command />
              <CodeXml />
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Icons</h1>
              <span className="text-muted-foreground">Icons for everyone.</span>
            </div>
          </Link>
          <Link href="/animations" className="flex h-full w-full  flex-col justify-between border-b p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:p-9 md:border-r lg:border-r-0">
            <div className="flex w-full flex-col items-center justify-center gap-2 space-x-0 sm:h-24 sm:flex-row sm:justify-between ">
              <div className="h-24 w-24 rounded-full border bg-secondary"></div>
              <div className="h-24 w-24 rounded-full border bg-secondary"></div>
              <div className="h-24 w-24 rounded-full border bg-secondary"></div>
              <div className="hidden h-24 w-24 rounded-full border bg-secondary sm:inline md:hidden 2xl:block"></div>
              <div className="hidden h-24 w-24 rounded-full border bg-secondary sm:inline lg:hidden"></div>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Animations</h1>
              <span className="text-muted-foreground">Animations for everyone.</span>
            </div>
          </Link>
          <Link href="/docs/systems/grid" className="flex h-full w-full flex-col items-start justify-between border-b p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:p-9 md:border-r-0 lg:border-b-0 lg:border-r">
            <div className="relative grid h-24 w-full grid-cols-9 border ">
              <PlusIcon className="absolute -left-5 -top-5 h-10 w-10" />
              <PlusIcon className="absolute -bottom-5 -right-5 h-10 w-10" />

              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b border-r"></span>
              <span className="h-full w-full border-b"></span>

              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full border-r"></span>
              <span className="h-full w-full"></span>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Systems</h1>
              <span className="text-muted-foreground">Make it yours.</span>
            </div>
          </Link>
          <Link href="/fonts" className="flex h-full w-full flex-col justify-between border-b p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:border-r sm:p-9 md:border-b-0">
            <div className="flex w-full flex-col rounded-md border border-dashed sm:h-24 sm:flex-row">
              <span className="flex h-24 w-full items-center justify-center border-b border-dashed text-2xl font-bold italic sm:border-r">Fonts Sans</span>
              <span className="flex h-24 w-full items-center justify-center text-2xl font-bold">Fonts Mono</span>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Fonts</h1>
              <span className="text-muted-foreground">Fonts for everyone.</span>
            </div>
          </Link>
          <Link href="/colors" className="flex h-full w-full flex-col justify-between p-4 text-muted-foreground hover:bg-primary-foreground hover:text-primary sm:p-9">
            <div className="flex w-full flex-col justify-between space-y-2 sm:h-24 sm:flex-row sm:space-y-0">
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">

                <div className="h-2 w-full rounded-full bg-red-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-green-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-yellow-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-teal-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-purple-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-fuchsia-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-blue-500 sm:h-full sm:w-2" />
              </div>
              <div className="flex h-full w-full items-center justify-center rounded-full border p-3 sm:w-8">
                <div className="h-2 w-full rounded-full bg-orange-500 sm:h-full sm:w-2" />
              </div>
            </div>
            <div className="mt-6 md:mt-4 lg:mt-0">
              <h1 className="text-primary">Colors</h1>
              <span className="text-muted-foreground">Colors for everyone.</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
