import DemoComponent from "@/demo/demo-component";
import type { Metadata } from "next";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Input Components",
  description:
    "A collection of beautiful and accessible input components built with Tailwind CSS and Next.js.",
};

const inputDir = "inputs";
const inputFiles = [
  "input-01",
  "input-02",
  "input-03",
  "input-04",
  "input-05",
  "input-06",
  "input-07",
  "input-08",
  "input-09",
  "input-10",
  "input-11",
  "input-12",
  "input-13",
  "input-14",
  "input-15",
  "input-16",
  "input-17",
  "input-18",
  "input-19",
  "input-20",
  "input-21",
  "input-22",
  "input-23",
  "input-24",
  "input-25",
  "input-26",
  "input-27",
  "input-28",
  "input-29",
  "input-30",
  "input-31",
  "input-32",
  "input-33",
  "input-34",
  "input-35",
  "input-36",
  "input-37",
  "input-38",
  "input-39",
  "input-40",
  "input-41",
  "input-42",
  "input-43",
  "input-44",
  "input-45",
  "input-46",
  "input-47",
  "input-48",
  "input-49",
  "input-50",
  "input-51",
  "input-52",
  "input-53",
  "input-54",
  "input-55",
  "input-56",
  "input-57",
];

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
  "textarea-05",
  "textarea-06",
  "textarea-07",
  "textarea-08",
  "textarea-09",
  "textarea-10",
  "textarea-11",
  "textarea-12",
  "textarea-13",
  "textarea-14",
  "textarea-15",
  "textarea-16",
  "textarea-17",
  "textarea-18",
  "textarea-19",
];

const files = [...inputFiles, ...textareaFiles];

export default function Page() {
  return (
    <main>
      <div className="">
        <div className="mx-auto w-full">
          <PageHeader>
            <PageHeaderHeading>Button Varients</PageHeaderHeading>
            <PageHeaderDescription>
              A growing collection of {files.length} button components built with Next.js and
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
              <div className="grid w-full grid-cols-1 gap-2 overflow-hidden px-4 py-6 sm:grid-cols-3 sm:px-6 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                {inputFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      key={componentName}
                      directory={inputDir}
                      componentName={componentName}
                    />
                  );
                })}
                {textareaFiles.map((componentName) => {
                  return (
                    <DemoComponent
                      key={componentName}
                      directory={textareaDir}
                      componentName={componentName}
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
