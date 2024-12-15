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
          title: "Next.js 15 + React 19",
          href: "/docs/react-19",
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
          title: "Bento Grid",
          href: "/docs/components/bento-grid",
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
          title: "Spinner",
          href: "/docs/components/spinner",
          items: [],
        },
        {
          title: "Feedback",
          href: "/docs/components/feedback",
          items: [],
        },
        {
          title: "Location Input",
          href: "/docs/components/location-input",
          items: [],
        },
        {
          title: "Multi Select",
          href: "/docs/components/multi-select",
          items: [],
        },
        {
          title: "Smart Date Time Picker",
          href: "/docs/components/smart-date-time-picker",
          items: [],
        },
        {
          title: "Date Time Picker",
          href: "/docs/components/date-time-picker",
          items: [],
        },
        {
          title: "Phone Input",
          href: "/docs/components/phone-input",
          items: [],
        },
        {
          title: "Password Input",
          href: "/docs/components/password-input",
          items: [],
        },

        {
          title: "Tags Input",
          href: "/docs/components/tags-input",
          items: [],
        },
        {
          title: "File Upload",
          href: "/docs/components/file-upload",
          items: [],
        },
        {
          title: "Text",
          href: "/docs/components/text",
          items: [],
        },
        {
          title: "Buttons",
          href: "/docs/components/buttons",
          items: [],
        },
        {
          title: "Background",
          href: "/docs/components/background",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Tablist",
          href: "/docs/components/tablist",
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
          title: "Color Picker",
          href: "/docs/components/color-picker",
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
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
        {
          title: "Searchbar",
          href: "/docs/components/searchbar",
          items: [],
        },
        {
          title: "Stage Manager",
          href: "/docs/components/stage-manager",
          items: [],
        },
        {
          title: "Dynamic Island",
          href: "/docs/components/dynamic-island",
          items: [],
        },
        {
          title: "Statusbar",
          href: "/docs/components/statusbar",
          items: [],
        },
        {
          title: "Image",
          href: "/docs/components/image",
          items: [],
        },
        {
          title: "List",
          href: "/docs/components/list",
          items: [],
        },
        {
          title: "Tour",
          href: "/docs/components/tour",
          items: [],
        },
        {
          title: "Statics",
          href: "/docs/components/statics",
          items: [],
        },
        {
          title: "Timeline",
          href: "/docs/components/timeline",
          items: [],
        },
        {
          title: "Description",
          href: "/docs/components/description",
          items: [],
        },
        {
          title: "Treeselect",
          href: "/docs/components/treeselect",
          items: [],
        },
        {
          title: "Number Input",
          href: "/docs/components/number-input",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/components/date-picker",
          items: [],
        },
        {
          title: "Time Picker",
          href: "/docs/components/time-picker",
          items: [],
        },
        {
          title: "Mention",
          href: "/docs/components/mention",
          items: [],
        },
        {
          title: "Transfer",
          href: "/docs/components/transfer",
          items: [],
        },
        {
          title: "Cascader",
          href: "/docs/components/cascader",
          items: [],
        },
        {
          title: "Autocomplete",
          href: "/docs/components/autocomplete",
          items: [],
        },
        {
          title: "Steps",
          href: "/docs/components/steps",
          items: [],
        },
        {
          title: "Anchor",
          href: "/docs/components/Anchor",
          items: [],
        },
        {
          title: "DND",
          href: "/docs/components/dnd",
          items: [],
        },
        {
          title: "Particles",
          href: "/docs/components/particles",
          items: [],
        },
        {
          title: "Power Mode",
          href: "/docs/components/power-mode",
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
