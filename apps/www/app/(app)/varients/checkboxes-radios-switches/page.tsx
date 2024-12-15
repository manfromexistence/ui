import DemoComponent from "@/demo/demo-component";
import type { Metadata } from "next";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";
import { Separator } from "@/registry/default/ui/separator";

export const metadata: Metadata = {
  title: "Checkbox, Radio, and Switch Components",
  description:
    "A collection of beautiful and accessible checkbox, radio and switch components built with Tailwind CSS and Next.js.",
};

const checboxDir = "checkboxes";
const checboxFiles = [
  "checkbox-01",
  "checkbox-02",
  "checkbox-03",
  "checkbox-04",
  "checkbox-05",
  "checkbox-06",
  "checkbox-07",
  "checkbox-08",
  "checkbox-09",
  "checkbox-10",
  "checkbox-11",
  "checkbox-12",
  "checkbox-13",
  "checkbox-14",
  "checkbox-15",
  "checkbox-16",
  "checkbox-17",
  "checkbox-18",
];

const radioDir = "radios";
const radioFiles = [
  "radio-01",
  "radio-02",
  "radio-03",
  "radio-04",
  "radio-05",
  "radio-06",
  "radio-07",
  "radio-08",
  "radio-09",
  "radio-10",
  "radio-11",
  "radio-12",
  "radio-13",
  "radio-14",
  "radio-15",
  "radio-16",
  "radio-17",
  "radio-18",
  "radio-19",
];

const switchDir = "switches";
const switchFiles = [
  "switch-01",
  "switch-02",
  "switch-03",
  "switch-04",
  "switch-05",
  "switch-06",
  "switch-07",
  "switch-08",
  "switch-09",
  "switch-10",
  "switch-11",
  "switch-12",
  "switch-13",
  "switch-14",
  "switch-15",
  "switch-16",
  "switch-17",
];

const totalCheckboxes = checboxFiles.length;
const totalRadios = radioFiles.length;
const totalSwitches = switchFiles.length;
const totalComponents = totalCheckboxes + totalRadios + totalSwitches;

export default function Page() {
  return (
    <main>
      <div className="">
        <div className="mx-auto w-full">
          <PageHeader>
            <PageHeaderHeading>Checkbox, Radio and Switch Varients</PageHeaderHeading>
            <PageHeaderDescription>
              A growing collection of {totalComponents} checkbox, radio and switch components built with Next.js and
              TailwindCSS.
            </PageHeaderDescription>
            <PageActions>
              <Button asChild size="sm">
                <Link href="/varients">Browse Varients</Link>
              </Button>
              <Button asChild variant="ghost" size="sm">
                <Link href="/docs">Documentation</Link>
              </Button>
            </PageActions>
          </PageHeader>
          <div className="container-wrapper h-full w-full">
            <div className="container">
            <div className="grid w-full grid-cols-1 gap-2 overflow-hidden px-4 py-6 sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
            {checboxFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={checboxDir}
                  componentName={componentName}
                  className="flex items-center justify-center"
                />
              );
            })}

            <Separator />

            {radioFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={radioDir}
                  componentName={componentName}
                  className="flex items-center justify-center"
                />
              );
            })}

            <Separator />

            {switchFiles.map((componentName) => {
              return (
                <DemoComponent
                  key={componentName}
                  directory={switchDir}
                  componentName={componentName}
                  className="flex items-center justify-center"
                />
              );
            })}
          </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
