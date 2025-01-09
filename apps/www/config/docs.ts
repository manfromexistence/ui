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
      title: "Varients",
      href: "/varients",
    },
    {
      title: "Blocks",
      href: "/blocks",
    },
    // {
    //   title: "Visualizations",
    //   href: "/visualizations",
    // },
    {
      title: "Themes",
      href: "/themes",
    },
    {
      title: "Renderers",
      href: "/renderers",
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
      title: "Systems",
      items: [
        {
          title: "Grid",
          href: "/docs/systems/grid",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Calendars",
          href: "/docs/components/calendars",
          items: [],
        },
        {
          title: "Gantts",
          href: "/docs/components/gantts",
          items: [],
        },
        {
          title: "Kanbans",
          href: "/docs/components/kanbans",
          items: [],
        },
        {
          title: "Lists",
          href: "/docs/components/lists",
          items: [],
        },
        {
          title: "Tables",
          href: "/docs/components/Tables",
          items: [],
        },
        {
          title: "Separators",
          href: "/docs/components/separators",
          items: [],
        },
        // {
        //   title: "Cards",
        //   href: "/docs/components/cards",
        //   items: [],
        // },
        {
          title: "Bento",
          href: "/docs/components/bento",
          items: [],
        },
        {
          title: "Spinner",
          href: "/docs/components/spinner",
          items: [],
        },
        {
          title: "Buttons",
          href: "/docs/components/buttons",
          items: [],
        },
        // {
        //   title: "Sintature Input",
        //   href: "/docs/components/signature-input",
        //   items: [],
        //   label: "new",
        // },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
        {
          title: "Color Picker",
          href: "/docs/components/color-picker",
          items: [],
        },
        {
          title: "Mention",
          href: "/docs/components/mention",
          items: [],
        },
        {
          title: "Autocomplete",
          href: "/docs/components/autocomplete",
          items: [],
        },
        {
          title: "Anchor",
          href: "/docs/components/Anchor",
          items: [],
        },
        {
          title: "Cascader",
          href: "/docs/components/cascader",
          items: [],
        },
        {
          title: "Description",
          href: "/docs/components/description",
          items: [],
        },
        {
          title: "Float Button",
          href: "/docs/components/float-button",
          items: [],
        },
        {
          title: "Input Number",
          href: "/docs/components/input-number",
          items: [],
        },
        {
          title: "Qr Code",
          href: "/docs/components/qr-code",
          items: [],
        },
        {
          title: "Rate",
          href: "/docs/components/rate",
          items: [],
        },
        {
          title: "Steps",
          href: "/docs/components/steps",
          items: [],
        },
        {
          title: "Timeline",
          href: "/docs/components/timeline",
          items: [],
        },
        {
          title: "Time Picker",
          href: "/docs/components/time-picker",
          items: [],
        },
        {
          title: "Tour",
          href: "/docs/components/tour",
          items: [],
        },
        {
          title: "Transfer",
          href: "/docs/components/transfer",
          items: [],
        },
        {
          title: "Tree",
          href: "/docs/components/tree",
          items: [],
        },
        {
          title: "Transfer",
          href: "/docs/components/transfer",
          items: [],
        },
        {
          title: "Tree Select",
          href: "/docs/components/tree-select",
          items: [],
        },
        {
          title: "Dock",
          href: "/docs/components/dock",
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
          title: "Backgrounds",
          href: "/docs/components/backgrounds",
          items: [],
        },
        {
          title: "Tablist",
          href: "/docs/components/tablist",
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
          title: "Fractal Grid",
          href: "/docs/components/bg-animated-fractal-grid",
          items: [],
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
    {
      title: "Shadcnui",
      items: [
        {
          title: "Accordion",
          href: "/docs/shadcnui/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/shadcnui/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/shadcnui/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/shadcnui/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/shadcnui/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/shadcnui/badge",
          items: [],
        },
        {
          title: "Breadcrumb",
          href: "/docs/shadcnui/breadcrumb",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/shadcnui/button",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/shadcnui/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/shadcnui/card",
          items: [],
        },
        {
          title: "Carousel",
          href: "/docs/shadcnui/carousel",
          items: [],
        },
        {
          title: "Chart",
          href: "/docs/shadcnui/chart",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/shadcnui/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/shadcnui/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/shadcnui/combobox",
          items: [],
        },
        {
          title: "Command",
          href: "/docs/shadcnui/command",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/shadcnui/context-menu",
          items: [],
        },
        {
          title: "Data Table",
          href: "/docs/shadcnui/data-table",
          items: [],
        },
        {
          title: "Date Picker",
          href: "/docs/shadcnui/date-picker",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/shadcnui/dialog",
          items: [],
        },
        {
          title: "Drawer",
          href: "/docs/shadcnui/drawer",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/shadcnui/dropdown-menu",
          items: [],
        },
        {
          title: "Form",
          href: "/docs/shadcnui/form",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/shadcnui/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/shadcnui/input",
          items: [],
        },
        {
          title: "Input OTP",
          href: "/docs/shadcnui/input-otp",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/shadcnui/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/shadcnui/menubar",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/docs/shadcnui/navigation-menu",
          items: [],
        },
        {
          title: "Pagination",
          href: "/docs/shadcnui/pagination",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/shadcnui/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/shadcnui/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/shadcnui/radio-group",
          items: [],
        },
        {
          title: "Resizable",
          href: "/docs/shadcnui/resizable",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/shadcnui/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/shadcnui/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/shadcnui/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/shadcnui/sheet",
          items: [],
        },
        {
          title: "Sidebar",
          href: "/docs/shadcnui/sidebar",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/shadcnui/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/shadcnui/slider",
          items: [],
        },
        {
          title: "Sonner",
          href: "/docs/shadcnui/sonner",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/shadcnui/switch",
          items: [],
        },
        {
          title: "Table",
          href: "/docs/shadcnui/table",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/shadcnui/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/shadcnui/textarea",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/shadcnui/toast",
          items: [],
        },
        {
          title: "Toggle",
          href: "/docs/shadcnui/toggle",
          items: [],
        },
        {
          title: "Toggle Group",
          href: "/docs/shadcnui/toggle-group",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/shadcnui/tooltip",
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
