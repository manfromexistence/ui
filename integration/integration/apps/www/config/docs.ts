import { MainNavItem, SidebarNavItem } from "types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
  chartsNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Renderers",
      href: "/renderers",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    {
      title: "Canvases",
      href: "/canvases",
    },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Varients",
      href: "/varients",
    },
    {
      title: "More",
      href: "/more",
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
          title: "Texts",
          href: "/docs/components/texts",
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

        {
          title: "Animated Number",
          href: "/docs/components/animated-number",
          items: [],
        },
        {
          title: "Bg Animate Button",
          href: "/docs/components/bg-animate-button",
          items: [],
        },
        {
          title: "Bg Media Hero",
          href: "/docs/components/bg-media",
          items: [],
        },
        {
          title: "Color Picker",
          href: "/docs/components/color-picker",
          items: [],
        },
        {
          title: "Direction Aware Tabs",
          href: "/docs/components/direction-aware-tabs",
          items: [],
        },
        {
          title: "Dynamic Island",
          href: "/docs/components/dynamic-island",
          items: [],
        },

        {
          title: "Expandable",
          href: "/docs/components/expandable",
          items: [],
          label: "new",
        },
        {
          title: "Family Button",
          href: "/docs/components/family-button",
          items: [],
        },
        {
          title: "Floating Panel",
          href: "/docs/components/floating-panel",
          items: [],
          label: "new",
        },
        {
          title: "Gradient Heading",
          href: "/docs/components/gradient-heading",
          items: [],
        },
        {
          title: "Minimal Card",
          href: "/docs/components/minimal-card",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
          label: "",
        },
        {
          title: "Popover Form",
          href: "/docs/components/popover-form",
          items: [],
          label: "new",
        },
        {
          title: "Shift Card",
          href: "/docs/components/shift-card",
          items: [],
        },
        {
          title: "Side Panel",
          href: "/docs/components/side-panel",
          items: [],
        },
        {
          title: "Sortable List",
          href: "/docs/components/sortable-list",
          items: [],
          label: "new",
        },
        {
          title: "Text Animate",
          href: "/docs/components/text-animate",
          items: [],
        },
        {
          title: "Texture Button",
          href: "/docs/components/texture-button",
          items: [],
        },
        {
          title: "Texture Card",
          href: "/docs/components/texture-card",
          items: [],
        },
        {
          title: "3D Carousel",
          href: "/docs/components/three-d-carousel",
          items: [],
        },
        {
          title: "LightBoard",
          href: "/docs/components/lightboard",
          items: [],
        },
        {
          title: "MacOS Dock",
          href: "/docs/components/dock",
          items: [],
        },
        {
          title: "Fractal Grid",
          href: "/docs/components/bg-animated-fractal-grid",
          items: [],
          label: "new",
        },
        {
          title: "Shader Lens Blur",
          href: "/docs/components/shader-lens-blur",
          items: [],
          label: "new",
        },
        {
          title: "Tweet Grid",
          href: "/docs/components/tweet-grid",
          items: [],
        },
        {
          title: "Typewriter",
          href: "/docs/components/typewriter",
          items: [],
        },
        
        // {
        //   title: "Sidebar",
        //   href: "/docs/components/sidebar",
        //   items: [],
        //   label: "New",
        // },
        // {
        //   title: "Accordion",
        //   href: "/docs/components/accordion",
        //   items: [],
        // },
        // {
        //   title: "Alert",
        //   href: "/docs/components/alert",
        //   items: [],
        // },
        // {
        //   title: "Alert Dialog",
        //   href: "/docs/components/alert-dialog",
        //   items: [],
        // },
        // {
        //   title: "Aspect Ratio",
        //   href: "/docs/components/aspect-ratio",
        //   items: [],
        // },
        // {
        //   title: "Avatar",
        //   href: "/docs/components/avatar",
        //   items: [],
        // },
        // {
        //   title: "Badge",
        //   href: "/docs/components/badge",
        //   items: [],
        // },
        // {
        //   title: "Breadcrumb",
        //   href: "/docs/components/breadcrumb",
        //   items: [],
        // },
        // {
        //   title: "Button",
        //   href: "/docs/components/button",
        //   items: [],
        // },
        // {
        //   title: "Calendar",
        //   href: "/docs/components/calendar",
        //   items: [],
        // },
        // {
        //   title: "Card",
        //   href: "/docs/components/card",
        //   items: [],
        // },
        // {
        //   title: "Carousel",
        //   href: "/docs/components/carousel",
        //   items: [],
        // },
        // {
        //   title: "Chart",
        //   href: "/docs/components/chart",
        //   items: [],
        // },
        // {
        //   title: "Checkbox",
        //   href: "/docs/components/checkbox",
        //   items: [],
        // },
        // {
        //   title: "Collapsible",
        //   href: "/docs/components/collapsible",
        //   items: [],
        // },
        // {
        //   title: "Combobox",
        //   href: "/docs/components/combobox",
        //   items: [],
        // },
        // {
        //   title: "Command",
        //   href: "/docs/components/command",
        //   items: [],
        // },
        // {
        //   title: "Context Menu",
        //   href: "/docs/components/context-menu",
        //   items: [],
        // },
        // {
        //   title: "Data Table",
        //   href: "/docs/components/data-table",
        //   items: [],
        // },
        // {
        //   title: "Date Picker",
        //   href: "/docs/components/date-picker",
        //   items: [],
        // },
        // {
        //   title: "Dialog",
        //   href: "/docs/components/dialog",
        //   items: [],
        // },
        // {
        //   title: "Drawer",
        //   href: "/docs/components/drawer",
        //   items: [],
        // },
        // {
        //   title: "Dropdown Menu",
        //   href: "/docs/components/dropdown-menu",
        //   items: [],
        // },
        // {
        //   title: "Form",
        //   href: "/docs/components/form",
        //   items: [],
        // },
        // {
        //   title: "Hover Card",
        //   href: "/docs/components/hover-card",
        //   items: [],
        // },
        // {
        //   title: "Input",
        //   href: "/docs/components/input",
        //   items: [],
        // },
        // {
        //   title: "Input OTP",
        //   href: "/docs/components/input-otp",
        //   items: [],
        // },
        // {
        //   title: "Label",
        //   href: "/docs/components/label",
        //   items: [],
        // },
        // {
        //   title: "Menubar",
        //   href: "/docs/components/menubar",
        //   items: [],
        // },
        // {
        //   title: "Navigation Menu",
        //   href: "/docs/components/navigation-menu",
        //   items: [],
        // },
        // {
        //   title: "Pagination",
        //   href: "/docs/components/pagination",
        //   items: [],
        // },
        // {
        //   title: "Popover",
        //   href: "/docs/components/popover",
        //   items: [],
        // },
        // {
        //   title: "Progress",
        //   href: "/docs/components/progress",
        //   items: [],
        // },
        // {
        //   title: "Radio Group",
        //   href: "/docs/components/radio-group",
        //   items: [],
        // },
        // {
        //   title: "Resizable",
        //   href: "/docs/components/resizable",
        //   items: [],
        // },
        // {
        //   title: "Scroll Area",
        //   href: "/docs/components/scroll-area",
        //   items: [],
        // },
        // {
        //   title: "Select",
        //   href: "/docs/components/select",
        //   items: [],
        // },
        // {
        //   title: "Separator",
        //   href: "/docs/components/separator",
        //   items: [],
        // },
        // {
        //   title: "Sheet",
        //   href: "/docs/components/sheet",
        //   items: [],
        // },
        // {
        //   title: "Skeleton",
        //   href: "/docs/components/skeleton",
        //   items: [],
        // },
        // {
        //   title: "Slider",
        //   href: "/docs/components/slider",
        //   items: [],
        // },
        // {
        //   title: "Sonner",
        //   href: "/docs/components/sonner",
        //   items: [],
        // },
        // {
        //   title: "Switch",
        //   href: "/docs/components/switch",
        //   items: [],
        // },
        // {
        //   title: "Table",
        //   href: "/docs/components/table",
        //   items: [],
        // },
        // {
        //   title: "Tabs",
        //   href: "/docs/components/tabs",
        //   items: [],
        // },
        // {
        //   title: "Textarea",
        //   href: "/docs/components/textarea",
        //   items: [],
        // },
        // {
        //   title: "Toast",
        //   href: "/docs/components/toast",
        //   items: [],
        // },
        // {
        //   title: "Toggle",
        //   href: "/docs/components/toggle",
        //   items: [],
        // },
        // {
        //   title: "Toggle Group",
        //   href: "/docs/components/toggle-group",
        //   items: [],
        // },
        // {
        //   title: "Tooltip",
        //   href: "/docs/components/tooltip",
        //   items: [],
        // },
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
