import DemoComponent from "@/demo/demo-component";
import type { Metadata } from "next";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Button Components",
  description:
    "A collection of beautiful and accessible button components built with Tailwind CSS and Next.js.",
};

const directory = "buttons";
const files = [
  "button-01",
  "button-02",
  "button-03",
  "button-04",
  "button-05",
  "button-06",
  "button-07",
  "button-08",
  "button-09",
  "button-10",
  "button-11",
  "button-12",
  "button-13",
  "button-14",
  "button-15",
  "button-16",
  "button-17",
  "button-18",
  "button-19",
  "button-20",
  "button-21",
  "button-22",
  "button-23",
  "button-24",
  "button-25",
  "button-26",
  "button-27",
  "button-28",
  "button-29",
  "button-30",
  "button-31",
  "button-32",
  "button-33",
  "button-34",
  "button-35",
  "button-36",
  "button-37",
  "button-38",
  "button-39",
  "button-40",
  "button-41",
  "button-42",
  "button-43",
  "button-44",
  "button-45",
  "button-46",
  "button-47",
  "button-48",
  "button-49",
  "button-50",
  "button-51",
];

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
                {files.map((componentName) => {
                  return (
                    <DemoComponent
                      key={componentName}
                      directory={directory}
                      componentName={componentName}
                      className="flex items-center justify-center text-center"
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
