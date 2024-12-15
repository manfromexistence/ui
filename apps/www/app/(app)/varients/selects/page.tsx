import DemoComponent from "@/demo/demo-component";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import type { Metadata } from "next";
import { Button } from "@/registry/default/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Select Components",
  description:
    "A collection of beautiful and accessible select components built with Tailwind CSS and Next.js.",
};

const directory = "selects";
const files = [
  "select-01",
  "select-02",
  "select-03",
  "select-04",
  "select-05",
  "select-06",
  "select-07",
  "select-08",
  "select-09",
  "select-10",
  "select-11",
  "select-12",
  "select-13",
  "select-14",
  "select-15",
  "select-16",
  "select-17",
  "select-18",
  "select-19",
  "select-20",
  "select-21",
  "select-22",
  "select-23",
  "select-24",
  "select-25",
  "select-26",
  "select-27",
  "select-28",
  "select-29",
  "select-30",
  "select-31",
  "select-32",
  "select-33",
  "select-34",
  "select-35",
  "select-36",
  "select-37",
  "select-38",
  "select-39",
  "select-40",
  "select-41",
  "select-42",
  "select-43",
  "select-44",
  "select-45",
  "select-46",
  "select-47",
  "select-48",
  "select-49",
  "select-50",
  "select-51",
];

export default function Page() {
  return (
    <main>
      <div className="">
        <div className="mx-auto w-full">
          <PageHeader>
            <PageHeaderHeading>Select Varients</PageHeaderHeading>
            <PageHeaderDescription>
              A growing collection of {files.length} select components built with Next.js and
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
