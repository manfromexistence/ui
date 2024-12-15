```
---
title: Number
description: A Input for Numbers.
component: true
---

<ComponentPreview
  name="number-input-demo"
  description="A Number component."
/>

## Installation

<Tabs defaultValue="cli">

<TabsList>
  <TabsTrigger value="cli">CLI</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npx shadcn@latest add "https://manfromexistence-ui.vercel.app/r/number-input"
```

</TabsContent>

<TabsContent value="manual">

<Steps>

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource name="number-input" />

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</Tabs>

## Usage

```tsx
import { NumberInput } from "@/components/multi-select"
```

```tsx
<NumberInput
  values={field.values}
  onValuesChange={field.onChange}
  loop
  className="max-w-xs"
/>
```
```
```ts
// "use client"
// import React from 'react';
// import { Tooltip } from 'antd';

// export default function Component(): JSX.Element {
//   return (
//     <div>
//       <Tooltip title="prompt text">
//         <span>Tooltip will show on mouse enter.</span>
//       </Tooltip>
//     </div>
//   );
// }


// import { ChevronRight } from "lucide-react";
// import Link from "next/link";

// import TechStack from "@/components/tech-stack";
// import { buttonVariants } from "@/registry/default/ui/button";
// import { Separator } from "@/registry/default/ui/separator";
// import { cn } from "@/lib/utils";

// export default async function Hero() {

//   return (
//     <section id="hero">
//       <div className="relative flex items-center justify-center overflow-hidden py-5 md:py-14">
//         <div className="z-10 flex flex-col">
//           <div className="mt-10 grid grid-cols-1 md:mt-20">
//             <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
//               <Link
//                 href={"/docs"}
//                 className={cn(
//                   buttonVariants({
//                     variant: "outline",
//                     size: "sm",
//                   }),
//                   "rounded-full",
//                 )}
//               >
//                 🎉 <Separator className="mx-2 h-4" orientation="vertical" />
//                 Introducing manfromexistence/ui
//                 <ChevronRight className="ml-1 h-4 w-4 text-muted-foreground" />
//               </Link>
//               <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
//                 <h1
//                   className={cn(
//                     "text-black dark:text-white",
//                     "relative mx-0 max-w-[43.5rem]  pt-5  md:mx-auto md:px-4 md:py-2",
//                     "text-balance text-left font-semibold tracking-tighter md:text-center",
//                     "text-5xl sm:text-7xl md:text-7xl lg:text-7xl",
//                   )}
//                 >
//                   UI library for Everyone
//                 </h1>
//               </div>

//               <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
//                 Open-source animated components built with{" "}
//                 <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
//                 <b>Framer Motion</b>
//                 .
//                 <br />
//                 Perfect companion for <b>shadcn/ui</b>.
//               </p>

//               <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-1 sm:max-w-lg sm:flex-row md:mx-auto">
//                 <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
//                   <Link
//                     href="/components"
//                     className={cn(
//                       buttonVariants({
//                         variant: "rainbow",
//                         size: "lg",
//                       }),
//                       "w-full gap-2",
//                     )}
//                   >
//                     Browse Components
//                     <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
//                   </Link>
//                   <Link
//                     href="https://pro.magicui.design"
//                     className={cn(
//                       buttonVariants({
//                         size: "lg",
//                         variant: "rainbow-outline",
//                       }),
//                       "w-full gap-2",
//                     )}
//                   >
//                     Browse Templates
//                     <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
//             <TechStack
//               className="mx-auto flex w-full items-center justify-between"
//               technologies={[
//                 "react",
//                 "typescript",
//                 "tailwindcss",
//                 "framermotion",
//                 "shadcn",
//               ]}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
```
```ts
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import CardsNewYork from "@/registry/new-york/example/cards"
import { Button } from "@/registry/new-york/ui/button"

export default function IndexPage() {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
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
      <div className="container py-6">
        <ExamplesNav className="[&>a:first-child]:text-primary" />
        <section className="overflow-hidden rounded-lg border bg-background shadow-md md:hidden md:shadow-xl">
          <Image
            src="/examples/cards-light.png"
            width={1280}
            height={1214}
            alt="Cards"
            className="block dark:hidden"
          />
          <Image
            src="/examples/cards-dark.png"
            width={1280}
            height={1214}
            alt="Cards"
            className="hidden dark:block"
          />
        </section>
        <section className="hidden md:block [&>div]:p-0">
          <CardsNewYork />
        </section>
      </div>
    </div>
  )
}
```