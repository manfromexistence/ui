const data = [
    {
        name: "animated-beam-multiple-outputs",
        type: "registry:example",
        registryDependencies: ["animated-beam"],
        files: ["example/animated-beam-multiple-outputs.tsx"],
      },
      {
        name: "animated-list-demo",
        type: "registry:example",
        registryDependencies: ["animated-list"],
        files: ["example/animated-list-demo.tsx"],
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
        files: ["example/bento-demo.tsx"],
      },
      {
        name: "confetti-demo",
        type: "registry:example",
        files: ["example/confetti-demo.tsx"],
      },
      {
        name: "confetti-basic-cannon",
        type: "registry:example",
        files: ["example/confetti-basic-cannon.tsx"],
      },
      {
        name: "confetti-random-direction",
        type: "registry:example",
        files: ["example/confetti-random-direction.tsx"],
      },
      {
        name: "confetti-fireworks",
        type: "registry:example",
        files: ["example/confetti-fireworks.tsx"],
      },
      {
        name: "confetti-stars",
        type: "registry:example",
        files: ["example/confetti-stars.tsx"],
      },
      {
        name: "confetti-side-cannons",
        type: "registry:example",
        files: ["example/confetti-side-cannons.tsx"],
      },
      {
        name: "confetti-custom-shapes",
        type: "registry:example",
        files: ["example/confetti-custom-shapes.tsx"],
      },
      {
        name: "confetti-emoji",
        type: "registry:example",
        files: ["example/confetti-emoji.tsx"],
      },
      {
        name: "context-menu-demo",
        type: "registry:example",
        registryDependencies: ["context-menu"],
        files: ["example/context-menu-demo.tsx"],
      },
      {
        name: "cool-mode-demo",
        type: "registry:example",
        files: ["example/cool-mode-demo.tsx"],
      },
      {
        name: "cool-mode-custom",
        type: "registry:example",
        files: ["example/cool-mode-custom.tsx"],
      },
      {
        name: "feedback-demo",
        type: "registry:example",
        registryDependencies: ["feedback"],
        files: ["example/feedback-demo.tsx"],
      },
      {
        name: "spinner-demo",
        type: "registry:example",
        registryDependencies: ["spinner"],
        files: ["example/spinner-demo.tsx"],
      },
      {
        name: "spinner-round",
        type: "registry:example",
        registryDependencies: ["spinner"],
        files: ["example/spinner-round.tsx"],
      },
];

data.forEach(item => {
    item.files = [{
        path: item.files[0],
        type: 'registry:example'
    }];
});

console.dir(data, { depth: null });