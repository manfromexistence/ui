import { Metadata } from "next"
import Link from "next/link"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Animations",
  description: "All animations.",
}

export default function AnimationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Manfromexistence Animations</PageHeaderHeading>
        <PageHeaderDescription>
          Beautiful animations for ease.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#animations">Browse Animations</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs/theming">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper h-full w-full">
        <div className="container py-6">
          <section id="animations" className="scroll-mt-20">
            {children}
          </section>
        </div>
      </div>
    </div>
  )
}
