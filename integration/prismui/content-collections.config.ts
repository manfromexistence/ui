import { defineConfig } from "@content-collections/core";
import { rehypePrettyCodeConfig } from "./src/lib/rehype-pretty-code-config";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  collections: {},
  markdown: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeConfig]],
  },
});
