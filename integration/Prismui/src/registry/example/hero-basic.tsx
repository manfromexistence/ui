"use client";

import Hero from "@/components/prismui/hero";
import { Icons } from "@/components/icons";

export default function HeroBasic() {
  return (
    <Hero
      pill={{
        text: "New! PrismUI Components",
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
    />
  );
}

export const demoSource = `"use client";

import Hero from "@/components/prismui/hero";
import { Icons } from "@/components/icons";

export default function HeroBasic() {
  return (
    <Hero
      pill={{
        text: "New! PrismUI Components",
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
    />
  );
}`;
