import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config: any) => {
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              dimensions: false,
              titleProp: true,
            },
          },
        ],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": ".",
    };

    config.resolve.alias["@radix-ui/react-use-effect-event"] = path.resolve(
      __dirname,
      "stubs/use-effect-event.js"
    );

    return config;
  },
};

export default nextConfig;
