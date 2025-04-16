import { rehypePrettyCodeConfig } from "./rehype-pretty-code-config";
import rehypePrettyCode from "rehype-pretty-code";

export const mdxOptions = {
  rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeConfig]],
};
