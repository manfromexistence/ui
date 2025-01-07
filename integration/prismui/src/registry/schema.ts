import { type ReactNode } from "react";
import { z } from "zod";

export interface CliCommands {
  npm: string;
  pnpm: string;
  yarn: string;
  bun: string;
}

export const registryItemTypeSchema = z.enum([
  "registry:ui",
  "registry:lib",
  "registry:hook",
  "registry:theme",
  "registry:block",
  "registry:page",
  "registry:style",
  "components",
  "examples",
  "hooks",
  "utils",
  "blocks",
  "themes",
  "sections",
]);

export type RegistryItemType = z.infer<typeof registryItemTypeSchema>;

export interface RegistryFile {
  path: string;
  type: string;
  content?: string;
  target?: string;
}

export interface RegistryItem {
  name: string;
  type: RegistryItemType;
  component?: React.ComponentType;
  code?: string;
  cli?: string | CliCommands;
  files?: Array<string | RegistryFile>;
  dependencies?: string[];
  registryDependencies?: string[];
  category?: string;
  subcategory?: string;
  cssVars?: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
}

export interface RegistryEntry extends Omit<RegistryItem, "files"> {
  files?: RegistryFile[];
  tailwind?: {
    config: {
      plugins: string[];
    };
  };
}

export const registryEntrySchema = z.object({
  name: z.string(),
  type: registryItemTypeSchema,
  component: z.any().optional(),
  code: z.string().optional(),
  files: z
    .array(
      z.object({
        path: z.string(),
        type: z.string(),
        content: z.string().optional(),
        target: z.string().optional(),
      })
    )
    .optional(),
  registryDependencies: z.array(z.string()).optional(),
  dependencies: z.array(z.string()).optional(),
  category: z.string().optional(),
  subcategory: z.string().optional(),
  cssVars: z
    .object({
      light: z.record(z.string()),
      dark: z.record(z.string()),
    })
    .optional(),
  tailwind: z
    .object({
      config: z.object({
        plugins: z.array(z.string()),
      }),
    })
    .optional(),
});

export type Registry = RegistryItem[];

export const registrySchema = z.array(registryEntrySchema);
