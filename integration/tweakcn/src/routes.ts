import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "pages/home.tsx"),
  route("/editor/theme", "pages/index.tsx"),
  route("*?", "pages/not-found.tsx"),
] satisfies RouteConfig;
