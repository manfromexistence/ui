import { Registry } from "@/registry/schema"

export const examples: Registry = [
  {
    name: "animated-beam-multiple-outputs",
    type: "registry:example",
    registryDependencies: ["animated-beam"],
    files: [
      {
        path: "example/animated-beam-multiple-outputs.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "animated-list-demo",
    type: "registry:example",
    registryDependencies: ["animated-list"],
    files: [
      {
        path: "example/animated-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bento-demo",
    type: "registry:example",
    registryDependencies: [
      "bento-grid",
      "marquee",
      "animated-list-demo",
      "animated-beam-multiple-outputs",
      "shadcn:command",
      "shadcn:calendar",
    ],
    dependencies: ["@radix-ui/react-icons"],
    files: [{ path: "example/bento-demo.tsx", type: "registry:example" }],
  },
  {
    name: "confetti-demo",
    type: "registry:example",
    files: [{ path: "example/confetti-demo.tsx", type: "registry:example" }],
  },
  {
    name: "confetti-basic-cannon",
    type: "registry:example",
    files: [
      {
        path: "example/confetti-basic-cannon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "confetti-random-direction",
    type: "registry:example",
    files: [
      {
        path: "example/confetti-random-direction.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "confetti-fireworks",
    type: "registry:example",
    files: [
      {
        path: "example/confetti-fireworks.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "confetti-stars",
    type: "registry:example",
    files: [{ path: "example/confetti-stars.tsx", type: "registry:example" }],
  },
  {
    name: "confetti-side-cannons",
    type: "registry:example",
    files: [
      {
        path: "example/confetti-side-cannons.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "confetti-custom-shapes",
    type: "registry:example",
    files: [
      {
        path: "example/confetti-custom-shapes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "confetti-emoji",
    type: "registry:example",
    files: [{ path: "example/confetti-emoji.tsx", type: "registry:example" }],
  },
  {
    name: "cool-mode-demo",
    type: "registry:example",
    files: [{ path: "example/cool-mode-demo.tsx", type: "registry:example" }],
  },
  {
    name: "cool-mode-custom",
    type: "registry:example",
    files: [
      {
        path: "example/cool-mode-custom.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "feedback-demo",
    type: "registry:example",
    registryDependencies: ["feedback"],
    files: [{ path: "example/feedback-demo.tsx", type: "registry:example" }],
  },
  {
    name: "spinner-demo",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [{ path: "example/spinner-demo.tsx", type: "registry:example" }],
  },
  {
    name: "spinner-round",
    type: "registry:example",
    registryDependencies: ["spinner"],
    files: [{ path: "example/spinner-round.tsx", type: "registry:example" }],
  },
  {
    name: "button-icon-right",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/icon-right.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon-left",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/icon-left.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-gooey-right",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/gooey-right.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-gooey-left",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/gooey-left.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-shine",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [{ path: "example/buttons/shine.tsx", type: "registry:example" }],
  },
  {
    name: "button-ring-hover",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/ring-hover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link-hover-1",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/link-hover-1.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link-hover-2",
    type: "registry:example",
    registryDependencies: ["buttons"],
    files: [
      {
        path: "example/buttons/link-hover-2.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "blur-in",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [{ path: "example/texts/blur-in.tsx", type: "registry:example" }],
  },
  {
    name: "rotate-text",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/rotate-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "fade-down-stagger",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/fade-down-stagger.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "fade-up-stagger",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/fade-up-stagger.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "letter-pull-up",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/letter-pull-up.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "multi-direction-slide",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/multi-direction-slide.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "staggered-fade-in",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/staggered-fade-in.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typing-effect",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/typing-effect.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "velocity-scroll",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/velocity-scroll.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "word-pull-up",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/word-pull-up.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separate-away",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/separate-away.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "gradual-spacing",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/gradual-spacing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slight-flip",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [
      {
        path: "example/texts/slight-flip.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wavy-text",
    type: "registry:example",
    registryDependencies: ["text"],
    files: [{ path: "example/texts/wavy-text.tsx", type: "registry:example" }],
  },
  {
    name: "tags-input-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "tags-input-demo"],
    files: [{ path: "example/tags-input-demo.tsx", type: "registry:example" }],
  },
  {
    name: "password-input-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "password-input-demo"],
    files: [
      {
        path: "example/password-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "file-upload-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "file-upload-demo"],
    files: [
      {
        path: "example/file-upload-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "phone-input-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "phone-input-demo"],
    files: [
      {
        path: "example/phone-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "smart-date-time-picker-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "smart-date-time-picker-demo"],
    files: [
      {
        path: "example/smart-date-time-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "date-time-picker-demo",
    type: "registry:example",
    registryDependencies: ["button", "form", "date-time-picker-demo"],
    files: [
      {
        path: "example/date-time-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "multi-select-demo",
    type: "registry:example",
    registryDependencies: ["multi-select"],
    files: [
      {
        path: "example/multi-select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "location-input-demo",
    type: "registry:example",
    registryDependencies: ["location-input"],
    files: [
      {
        path: "example/location-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "text-animate-demo",
    type: "registry:example",
    registryDependencies: ["text-animate"],
    files: [
      {
        path: "example/text-animate-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "texture-button-demo",
    type: "registry:example",
    registryDependencies: ["texture-button"],
    files: [
      {
        path: "example/texture-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "texture-card-demo",
    type: "registry:example",
    registryDependencies: ["texture-card", "texture-button"],
    files: [
      {
        path: "example/texture-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "shift-card-demo",
    type: "registry:example",
    registryDependencies: ["shift-card", "texture-button"],
    files: [
      {
        path: "example/shift-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "minimal-card-demo",
    type: "registry:example",
    registryDependencies: ["minimal-card"],
    files: [
      {
        path: "example/minimal-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dynamic-island-demo",
    type: "registry:example",
    registryDependencies: ["dynamic-island"],
    files: [
      {
        path: "example/dynamic-island-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "direction-aware-tabs-demo",
    type: "registry:example",
    registryDependencies: ["direction-aware-tabs"],
    files: [
      {
        path: "example/direction-aware-tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bg-animate-button-demo",
    type: "registry:example",
    registryDependencies: ["bg-animate-button"],
    files: [
      {
        path: "example/bg-animate-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "family-button-demo",
    type: "registry:example",
    registryDependencies: ["family-button"],
    files: [
      {
        path: "example/family-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "side-panel-demo",
    type: "registry:example",
    registryDependencies: ["side-panel"],
    files: [
      {
        path: "example/side-panel-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "bg-media-demo",
    type: "registry:example",
    registryDependencies: ["bg-media"],
    files: [
      {
        path: "example/bg-media-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "three-d-carousel-demo",
    type: "registry:example",
    registryDependencies: ["three-d-carousel"],
    files: [
      {
        path: "example/three-d-carousel-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tweet-grid-demo",
    type: "registry:example",
    registryDependencies: ["tweet-grid", "gradient-heading"],
    files: [
      {
        path: "example/tweet-grid-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "gradient-heading-demo",
    type: "registry:example",
    registryDependencies: ["gradient-heading"],
    files: [
      {
        path: "example/gradient-heading-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typewriter-demo",
    type: "registry:example",
    registryDependencies: ["typewriter"],
    files: [
      {
        path: "example/typewriter-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "animated-number-demo",
    type: "registry:example",
    registryDependencies: ["animated-number"],
    files: [
      {
        path: "example/animated-number-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sortable-list-demo",
    type: "registry:example",
    registryDependencies: ["sortable-list"],
    files: [
      {
        path: "example/sortable-list-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dock-demo",
    type: "registry:example",
    registryDependencies: ["dock"],
    files: [
      {
        path: "example/dock-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dock-rainbow-demo",
    type: "registry:example",
    registryDependencies: ["dock"],
    files: [
      {
        path: "example/dock-rainbow-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "lightboard-demo",
    type: "registry:example",
    registryDependencies: ["lightboard"],
    files: [
      {
        path: "example/lightboard-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "canvas-fractal-grid-demo",
    type: "registry:example",
    registryDependencies: ["canvas-fractal-grid"],
    files: [
      {
        path: "example/canvas-fractal-grid-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "bg-animated-fractal-dot-grid-demo",
    type: "registry:example",
    registryDependencies: ["bg-animated-fractal-dot-grid"],
    files: [
      {
        path: "example/bg-animated-fractal-dot-grid-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "bg-animated-gradient-demo",
    type: "registry:example",
    registryDependencies: ["bg-animated-gradient"],
    files: [
      {
        path: "example/bg-animated-gradient-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["popover"],
    files: [
      {
        path: "example/popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "floating-panel-demo",
    type: "registry:example",
    registryDependencies: ["floating-panel"],
    files: [
      {
        path: "example/floating-panel-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "color-picker-demo",
    type: "registry:example",
    registryDependencies: ["color-picker"],
    files: [
      {
        path: "example/color-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "shader-lens-blur-demo",
    type: "registry:example",
    registryDependencies: ["shader-lens-blur", "color-picker"],
    files: [
      {
        path: "example/shader-lens-blur-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-form-demo",
    type: "registry:example",
    registryDependencies: ["popover-form"],
    files: [
      {
        path: "example/popover-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "expandable-demo",
    type: "registry:example",
    registryDependencies: ["expandable"],
    files: [
      {
        path: "example/expandable-demo.tsx",
        type: "registry:example",
      },
    ],
  },

  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "example/accordion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-demo",
    type: "registry:example",
    registryDependencies: ["alert"],
    files: [
      {
        path: "example/alert-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-destructive",
    type: "registry:example",
    registryDependencies: ["alert"],
    files: [
      {
        path: "example/alert-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-dialog-demo",
    type: "registry:example",
    registryDependencies: ["alert-dialog", "button"],
    files: [
      {
        path: "example/alert-dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "aspect-ratio-demo",
    type: "registry:example",
    registryDependencies: ["aspect-ratio"],
    files: [
      {
        path: "example/aspect-ratio-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "example/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "example/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-destructive",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "example/badge-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-outline",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "example/badge-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-secondary",
    type: "registry:example",
    registryDependencies: ["badge"],
    files: [
      {
        path: "example/badge-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-demo",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-separator",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-dropdown",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-dropdown.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-ellipsis",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-ellipsis.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-link",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "breadcrumb-responsive",
    type: "registry:example",
    registryDependencies: ["breadcrumb"],
    files: [
      {
        path: "example/breadcrumb-responsive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-secondary",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-secondary.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-destructive",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-outline",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-ghost",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-ghost.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-link",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-link.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-with-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-with-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-loading",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-loading.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-icon.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-as-child",
    type: "registry:example",
    registryDependencies: ["button"],
    files: [
      {
        path: "example/button-as-child.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-demo",
    type: "registry:example",
    registryDependencies: ["calendar"],
    files: [
      {
        path: "example/calendar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-form",
    type: "registry:example",
    registryDependencies: ["calendar", "form", "popover"],
    files: [
      {
        path: "example/calendar-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["card", "button", "switch"],
    files: [
      {
        path: "example/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-with-form",
    type: "registry:example",
    registryDependencies: ["button", "card", "input", "label", "select"],
    files: [
      {
        path: "example/card-with-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-demo",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-size",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-size.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-spacing",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-spacing.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-orientation",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-orientation.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-api",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-api.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-plugin",
    type: "registry:example",
    registryDependencies: ["carousel"],
    files: [
      {
        path: "example/carousel-plugin.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-demo",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "example/checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-disabled",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "example/checkbox-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-form-multiple",
    type: "registry:example",
    registryDependencies: ["checkbox", "form"],
    files: [
      {
        path: "example/checkbox-form-multiple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-form-single",
    type: "registry:example",
    registryDependencies: ["checkbox", "form"],
    files: [
      {
        path: "example/checkbox-form-single.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-with-text",
    type: "registry:example",
    registryDependencies: ["checkbox"],
    files: [
      {
        path: "example/checkbox-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "collapsible-demo",
    type: "registry:example",
    registryDependencies: ["collapsible"],
    files: [
      {
        path: "example/collapsible-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-demo",
    type: "registry:example",
    registryDependencies: ["command"],
    files: [
      {
        path: "example/combobox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-dropdown-menu",
    type: "registry:example",
    registryDependencies: ["command", "dropdown-menu", "button"],
    files: [
      {
        path: "example/combobox-dropdown-menu.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-form",
    type: "registry:example",
    registryDependencies: ["command", "form"],
    files: [
      {
        path: "example/combobox-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-popover",
    type: "registry:example",
    registryDependencies: ["combobox", "popover"],
    files: [
      {
        path: "example/combobox-popover.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "combobox-responsive",
    type: "registry:example",
    registryDependencies: ["combobox", "popover", "drawer"],
    files: [
      {
        path: "example/combobox-responsive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "command-demo",
    type: "registry:example",
    registryDependencies: ["command"],
    files: [
      {
        path: "example/command-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "command-dialog",
    type: "registry:example",
    registryDependencies: ["command", "dialog"],
    files: [
      {
        path: "example/command-dialog.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "context-menu-demo",
    type: "registry:example",
    registryDependencies: ["context-menu"],
    files: [
      {
        path: "example/context-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "data-table-demo",
    type: "registry:example",
    registryDependencies: ["data-table"],
    files: [
      {
        path: "example/data-table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "date-picker-demo",
    type: "registry:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: [
      {
        path: "example/date-picker-demo.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-form",
    type: "registry:example",
    registryDependencies: ["button", "calendar", "form", "popover"],
    files: [
      {
        path: "example/date-picker-form.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-presets",
    type: "registry:example",
    registryDependencies: ["button", "calendar", "popover", "select"],
    files: [
      {
        path: "example/date-picker-with-presets.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-range",
    type: "registry:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: [
      {
        path: "example/date-picker-with-range.tsx",
        type: "registry:example",
      },
    ],
    dependencies: ["date-fns"],
  },
  {
    name: "dialog-demo",
    type: "registry:example",
    registryDependencies: ["dialog"],
    files: [
      {
        path: "example/dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-close-button",
    type: "registry:example",
    registryDependencies: ["dialog", "button"],
    files: [
      {
        path: "example/dialog-close-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "drawer-demo",
    type: "registry:example",
    registryDependencies: ["drawer"],
    files: [
      {
        path: "example/drawer-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "drawer-dialog",
    type: "registry:example",
    registryDependencies: ["drawer", "dialog"],
    files: [
      {
        path: "example/drawer-dialog.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-demo",
    type: "registry:example",
    registryDependencies: ["dropdown-menu"],
    files: [
      {
        path: "example/dropdown-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-checkboxes",
    type: "registry:example",
    registryDependencies: ["dropdown-menu", "checkbox"],
    files: [
      {
        path: "example/dropdown-menu-checkboxes.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropdown-menu-radio-group",
    type: "registry:example",
    registryDependencies: ["dropdown-menu", "radio-group"],
    files: [
      {
        path: "example/dropdown-menu-radio-group.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "hover-card-demo",
    type: "registry:example",
    registryDependencies: ["hover-card"],
    files: [
      {
        path: "example/hover-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "example/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-disabled",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "example/input-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-file",
    type: "registry:example",
    registryDependencies: ["input"],
    files: [
      {
        path: "example/input-file.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-form",
    type: "registry:example",
    registryDependencies: ["input", "button", "form"],
    files: [
      {
        path: "example/input-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-button",
    type: "registry:example",
    registryDependencies: ["input", "button"],
    files: [
      {
        path: "example/input-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-label",
    type: "registry:example",
    registryDependencies: ["input", "button", "label"],
    files: [
      {
        path: "example/input-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-text",
    type: "registry:example",
    registryDependencies: ["input", "button", "label"],
    files: [
      {
        path: "example/input-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-demo",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "example/input-otp-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-pattern",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "example/input-otp-pattern.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-separator",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "example/input-otp-separator.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-controlled",
    type: "registry:example",
    registryDependencies: ["input-otp"],
    files: [
      {
        path: "example/input-otp-controlled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-form",
    type: "registry:example",
    registryDependencies: ["input-otp", "form"],
    files: [
      {
        path: "example/input-otp-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "label-demo",
    type: "registry:example",
    registryDependencies: ["label"],
    files: [
      {
        path: "example/label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menubar-demo",
    type: "registry:example",
    registryDependencies: ["menubar"],
    files: [
      {
        path: "example/menubar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "navigation-menu-demo",
    type: "registry:example",
    registryDependencies: ["navigation-menu"],
    files: [
      {
        path: "example/navigation-menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "pagination-demo",
    type: "registry:example",
    registryDependencies: ["pagination"],
    files: [
      {
        path: "example/pagination-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "progress-demo",
    type: "registry:example",
    registryDependencies: ["progress"],
    files: [
      {
        path: "example/progress-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-demo",
    type: "registry:example",
    registryDependencies: ["radio-group"],
    files: [
      {
        path: "example/radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-form",
    type: "registry:example",
    registryDependencies: ["radio-group", "form"],
    files: [
      {
        path: "example/radio-group-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-demo",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "example/resizable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-demo-with-handle",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "example/resizable-demo-with-handle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-vertical",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "example/resizable-vertical.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-handle",
    type: "registry:example",
    registryDependencies: ["resizable"],
    files: [
      {
        path: "example/resizable-handle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-demo",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "example/scroll-area-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-horizontal-demo",
    type: "registry:example",
    registryDependencies: ["scroll-area"],
    files: [
      {
        path: "example/scroll-area-horizontal-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "example/select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-scrollable",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "example/select-scrollable.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-form",
    type: "registry:example",
    registryDependencies: ["select"],
    files: [
      {
        path: "example/select-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["separator"],
    files: [
      {
        path: "example/separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sheet-demo",
    type: "registry:example",
    registryDependencies: ["sheet"],
    files: [
      {
        path: "example/sheet-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sheet-side",
    type: "registry:example",
    registryDependencies: ["sheet"],
    files: [
      {
        path: "example/sheet-side.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "skeleton-demo",
    type: "registry:example",
    registryDependencies: ["skeleton"],
    files: [
      {
        path: "example/skeleton-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "skeleton-card",
    type: "registry:example",
    registryDependencies: ["skeleton"],
    files: [
      {
        path: "example/skeleton-card.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["slider"],
    files: [
      {
        path: "example/slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sonner-demo",
    type: "registry:example",
    registryDependencies: ["sonner"],
    files: [
      {
        path: "example/sonner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["switch"],
    files: [
      {
        path: "example/switch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-form",
    type: "registry:example",
    registryDependencies: ["switch", "form"],
    files: [
      {
        path: "example/switch-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "table-demo",
    type: "registry:example",
    registryDependencies: ["table"],
    files: [
      {
        path: "example/table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: ["tabs"],
    files: [
      {
        path: "example/tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-demo",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "example/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-disabled",
    type: "registry:example",
    registryDependencies: ["textarea"],
    files: [
      {
        path: "example/textarea-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-form",
    type: "registry:example",
    registryDependencies: ["textarea", "form"],
    files: [
      {
        path: "example/textarea-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-button",
    type: "registry:example",
    registryDependencies: ["textarea", "button"],
    files: [
      {
        path: "example/textarea-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-label",
    type: "registry:example",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "example/textarea-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-text",
    type: "registry:example",
    registryDependencies: ["textarea", "label"],
    files: [
      {
        path: "example/textarea-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-demo",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "example/toast-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-destructive",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "example/toast-destructive.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-simple",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "example/toast-simple.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-with-action",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "example/toast-with-action.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-with-title",
    type: "registry:example",
    registryDependencies: ["toast"],
    files: [
      {
        path: "example/toast-with-title.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-demo",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-disabled",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-lg",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-lg.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-outline",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-sm",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-sm.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-single",
    type: "registry:example",
    registryDependencies: ["toggle-group"],
    files: [
      {
        path: "example/toggle-group-single.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-demo",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-disabled",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-lg",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-lg.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-outline",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-outline.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-sm",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-sm.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-with-text",
    type: "registry:example",
    registryDependencies: ["toggle"],
    files: [
      {
        path: "example/toggle-with-text.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["tooltip"],
    files: [
      {
        path: "example/tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-blockquote",
    type: "registry:example",
    files: [
      {
        path: "example/typography-blockquote.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-demo",
    type: "registry:example",
    files: [
      {
        path: "example/typography-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h1",
    type: "registry:example",
    files: [
      {
        path: "example/typography-h1.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h2",
    type: "registry:example",
    files: [
      {
        path: "example/typography-h2.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h3",
    type: "registry:example",
    files: [
      {
        path: "example/typography-h3.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-h4",
    type: "registry:example",
    files: [
      {
        path: "example/typography-h4.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-inline-code",
    type: "registry:example",
    files: [
      {
        path: "example/typography-inline-code.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-large",
    type: "registry:example",
    files: [
      {
        path: "example/typography-large.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-lead",
    type: "registry:example",
    files: [
      {
        path: "example/typography-lead.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-list",
    type: "registry:example",
    files: [
      {
        path: "example/typography-list.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-muted",
    type: "registry:example",
    files: [
      {
        path: "example/typography-muted.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-p",
    type: "registry:example",
    files: [
      {
        path: "example/typography-p.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-small",
    type: "registry:example",
    files: [
      {
        path: "example/typography-small.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "typography-table",
    type: "registry:example",
    files: [
      {
        path: "example/typography-table.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "mode-toggle",
    type: "registry:example",
    files: [
      {
        path: "example/mode-toggle.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo",
    type: "registry:example",
    files: [
      {
        path: "example/chart-bar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-grid",
    type: "registry:example",
    files: [
      {
        path: "example/chart-bar-demo-grid.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-axis",
    type: "registry:example",
    files: [
      {
        path: "example/chart-bar-demo-axis.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-tooltip",
    type: "registry:example",
    files: [
      {
        path: "example/chart-bar-demo-tooltip.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo-legend",
    type: "registry:example",
    files: [
      {
        path: "example/chart-bar-demo-legend.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-tooltip-demo",
    type: "registry:example",
    files: [
      {
        path: "example/chart-tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "demo-sidebar",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-header",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-header.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-footer",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-footer.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-group",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-group.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-group-collapsible",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-group-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-group-action",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-group-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-menu",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-menu.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-menu-action",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-menu-action.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-menu-sub",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-menu-sub.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-menu-collapsible",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-menu-collapsible.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-menu-badge",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-menu-badge.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-rsc",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-rsc.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "demo-sidebar-controlled",
    type: "registry:block",
    files: [
      {
        path: "block/demo-sidebar-controlled.tsx",
        type: "registry:component",
      },
    ],
  },
]
