import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Canvases",
      href: "/canvases",
    },
    {
      title: "Switchers",
      href: "/switchers",
    },
    {
      title: "Visualizations",
      href: "/visualizations",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "components.json",
          href: "/docs/components-json",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/theming",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "CLI",
          href: "/docs/cli",
          items: [],
        },
        {
          title: "Typography",
          href: "/docs/components/typography",
          items: [],
        },
        {
          title: "Open in v0",
          href: "/docs/v0",
          items: [],
        },
        {
          title: "Figma",
          href: "/docs/figma",
          items: [],
        },
        {
          title: "Changelog",
          href: "/docs/changelog",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Remix",
          href: "/docs/installation/remix",
          items: [],
        },
        {
          title: "Astro",
          href: "/docs/installation/astro",
          items: [],
        },
        {
          title: "Laravel",
          href: "/docs/installation/laravel",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
        {
          title: "Manual",
          href: "/docs/installation/manual",
          items: [],
        },
      ],
    },
    // {
    //   title: "Button",
    //   items: [
    //     {
    //       title: "Default",
    //       href: "/docs/installation/default",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Text",
    //   items: [
    //     {
    //       title: "Default",
    //       href: "/docs/installation/default",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Card",
    //   items: [
    //     {
    //       title: "Default",
    //       href: "/docs/installation/default",
    //       items: [],
    //     },
    //   ],
    // },
    // {
    //   title: "Background",
    //   items: [
    //     {
    //       title: "Default",
    //       href: "/docs/installation/default",
    //       items: [],
    //     },
    //   ],
    // },
    {
      title: "Components",
      items: [
        // Will make the dock from accertinity and magic ui more like mac dock
        {
          title: "Dock",
          href: "/docs/components/dock",
          items: [],
        },
        {
          title: "Video",
          href: "/docs/components/video",
          items: [],
        },
        {
          title: "Audio",
          href: "/docs/components/audio",
          items: [],
        },
        {
          title: "3d",
          href: "/docs/components/3d",
          items: [],
        },
        {
          title: "AR",
          href: "/docs/components/ar",
          items: [],
        },
        {
          title: "VR",
          href: "/docs/components/vr",
          items: [],
        },
        {
          title: "Tag",
          href: "/docs/components/tag",
          items: [],
        },
        {
          title: "Color Picker",
          href: "/docs/components/color-picker",
          items: [],
        },
        {
          title: "Feedback",
          href: "/docs/components/feedback",
          items: [],
        },
        {
          title: "Notification",
          href: "/docs/components/notification",
          items: [],
        },
        {
          title: "Navbar",
          href: "/docs/components/navbar",
          items: [],
        },
        {
          title: "Bottombar",
          href: "/docs/components/bottombar",
          items: [],
        },
        {
          title: "Footer",
          href: "/docs/components/footer",
          items: [],
        },
        {
          title: "Feedback",
          href: "/docs/components/feedback",
          items: [],
        },
        {
          title: "Speed Dial",
          href: "/docs/components/speed-dial",
          items: [],
        },
        {
          title: "Language Picker",
          href: "/docs/components/language-picker",
          items: [],
        },
        {
          title: "Location Picker",
          href: "/docs/components/location-picker",
          items: [],
        },
        {
          title: "Emoji Picker",
          href: "/docs/components/emoji-picker",
          items: [],
        },
        {
          title: "GIF Picker",
          href: "/docs/components/gif-picker",
          items: [],
        },
        {
          title: "Popdelete",
          href: "/docs/components/popdelete",
          items: [],
        },
        {
          title: "Double Popover",
          href: "/docs/components/double-popover",
          items: [],
        },
        {
          title: "Two Step Popover",
          href: "/docs/components/two-step-popover",
          items: [],
        },
        {
          title: "File Upload",
          href: "/docs/components/file-upload",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
        {
          title: "Tablist",
          href: "/docs/components/tablist",
          items: [],
        },
        {
          title: "Confetti",
          href: "/docs/components/confetti",
          items: [],
        },
        {
          title: "Cool Mode",
          href: "/docs/components/cool-mode",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Background",
          href: "/docs/components/background",
          items: [],
        },
        {
          title: "Text",
          href: "/docs/components/text",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
      ],
    },
  ],
  chartsNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/charts",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/charts/installation",
          items: [],
        },
        {
          title: "Theming",
          href: "/docs/charts/theming",
          items: [],
        },
      ],
    },
    {
      title: "Charts",
      items: [
        {
          title: "Area Chart",
          href: "/docs/charts/area",
          items: [],
        },
        {
          title: "Bar Chart",
          href: "/docs/charts/bar",
          items: [],
        },
        {
          title: "Line Chart",
          href: "/docs/charts/line",
          items: [],
        },
        {
          title: "Pie Chart",
          href: "/docs/charts/pie",
          items: [],
        },
        {
          title: "Radar Chart",
          href: "/docs/charts/radar",
          items: [],
        },
        {
          title: "Radial Chart",
          href: "/docs/charts/radial",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Tooltip",
          href: "/docs/charts/tooltip",
          items: [],
        },
        {
          title: "Legend",
          href: "/docs/charts/legend",
          items: [],
        },
      ],
    },
  ],
}
