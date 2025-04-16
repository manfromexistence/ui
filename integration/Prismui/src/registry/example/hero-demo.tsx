"use client";

import Hero from "@/components/prismui/hero";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { ComponentPreview } from "@/components/sections/component-preview";

export default function HeroDemo() {
  return (
    <div className="grid gap-4">
      {/* Example 1: With Preview */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-medium">With Preview</h3>
        <Hero
          pill={{
            text: "New! PrismUI Components",
            href: "/docs",
            icon: <Icons.logo className="h-4 w-4" />,
          }}
          content={{
            title: "The better way to",
            titleHighlight: "build apps fast",
            description:
              "A fully customizable component library built on top of shadcn/ui. Beautiful, accessible, and ready for production.",
            primaryAction: {
              href: "/docs",
              text: "Documentation",
              icon: <Icons.book className="h-4 w-4" />,
            },
            secondaryAction: {
              href: "/docs",
              text: "Components",
              icon: <Icons.component className="h-4 w-4" />,
            },
          }}
          preview={<ComponentPreview />}
        />
      </Card>
    </div>
  );
}

export const demoSource = `"use client";

import Hero from "@/components/prismui/hero";
import { Icons } from "@/components/icons";
import { Card } from "@/components/ui/card";
import { ComponentPreview } from "@/components/sections/component-preview";

export default function HeroDemo() {
  return (
    <div className="grid gap-4">
      {/* Example 1: With Preview */}
      <Card className="p-6">
        <h3 className="mb-4 text-lg font-medium">With Preview</h3>
        <Hero
          pill={{
            text: "New! PrismUI Components",
            href: "/docs",
            icon: <Icons.logo className="h-4 w-4" />,
          }}
          content={{
            title: "The better way to",
            titleHighlight: "build apps fast",
            description:
              "A fully customizable component library built on top of shadcn/ui. Beautiful, accessible, and ready for production.",
            primaryAction: {
              href: "/docs",
              text: "Documentation",
              icon: <Icons.book className="h-4 w-4" />,
            },
            secondaryAction: {
              href: "/docs",
              text: "Components",
              icon: <Icons.component className="h-4 w-4" />,
            },
          }}
          preview={<ComponentPreview />}
        />
      </Card>
    </div>
  );
}`;
