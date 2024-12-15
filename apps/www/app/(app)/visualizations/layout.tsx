/* eslint-disable react/no-unescaped-entities */
import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york/ui/button"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"

export const metadata: Metadata = {
  title: "Beautiful Visualizations",
  description:
    "Built using AntV. Copy and paste into your apps. Open Source.",
}

export default function VisualizationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Beautiful Visualizations</PageHeaderHeading>
        <PageHeaderDescription>
          Built using AntV. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#Visualizations">Browse Visualizations</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/components/chart">Documentation</Link>
          </Button>
        </PageActions>
        {/* <div className="top-1/2 h-24 w-1/2 translate-y-[-50%] border md:absolute md:right-10">
          <span className="w-full text-xl">There are 500+ blokcs of visualizations blocks!</span>
          <pre className="w-min rounded-md bg-primary-foreground p-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground">npx shadcn@latest add "https://manfromexistence-ui.vercel.app/r/spinner"</pre>
        </div> */}
      </PageHeader>
      <div className="container-wrapper h-full w-full">
        <div className="container py-6">
          <section id="Visualizations" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}
