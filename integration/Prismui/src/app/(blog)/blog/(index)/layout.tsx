import type { ReactNode } from "react";
import { Suspense } from "react";

import BlogLayoutHero from "@/components/blog/blog-layout-hero";
import MaxWidthWrapper from "@/components/blog/max-width-wrapper";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default async function BlogLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <BlogLayoutHero />
        <div className="border-t border-border bg-muted/50 backdrop-blur-lg">
          <MaxWidthWrapper className="grid grid-cols-1 gap-8 py-10 md:grid-cols-2">
            {children}
          </MaxWidthWrapper>
        </div>
      </main>
      <Footer />
    </div>
  );
}
