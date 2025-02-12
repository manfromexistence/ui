import { Announcement } from "@/components/announcement";
import { PageActions, PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Button } from "@/registry/new-york/ui/button"
import Link from "next/link";
import { Separator } from "@/registry/new-york/ui/separator"
import { VarientsNav } from "@/components/varients-nav";
import DemoComponent from "@/demo/demo-component";
import { ShowMore } from "@/components/show-more";
import Switchers from "@/components/switchers";
import Cursors from "@/components/cursors";
import Fluids from "@/components/fluids";

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
];

const textareaDir = "textareas";
const textareaFiles = [
  "textarea-01",
  "textarea-02",
  "textarea-03",
  "textarea-04",
];
const buttonDir = "buttons";
const buttonFiles = [
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
];

const selectDir = "selects";
const selectFiles = [
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
];

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
];

const alertDir = "alerts";
const alertFiles = [
  "alert-01",
  "alert-02",
  "alert-03",
  "alert-04",
  "alert-05",
  "alert-06",
  "alert-07",
  "alert-08",
];

const notificationDir = "notifications";
const notificationFiles = [
  "notification-01",
  "notification-02",
  "notification-03",
  "notification-04",
  "notification-05",
  "notification-06",
  "notification-07",
  "notification-08",
];

const bannerDir = "banners";
const bannerFiles = [
  "banner-01",
  "banner-02",
  "banner-03",
  "banner-04",
  "banner-05",
  "banner-06",
  "banner-07",
  "banner-08",
];

const dialogDir = "dialogs";
const dialogFiles = [
  "dialog-01",
  "dialog-02",
  "dialog-03",
  "dialog-04",
  "dialog-05",
  "dialog-06",
  "dialog-07",
  "dialog-08",
];


export default function IndexPage() {
  return (
    <div className="relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Beautiful Varients</PageHeaderHeading>
        <PageHeaderDescription>
          Explore some varients. Copy and paste into your apps. Open Source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm">
            <a href="#varients">Browse Varients</a>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/docs">Documentation</Link>
          </Button>
        </PageActions>
      </PageHeader>
      <div className="container-wrapper h-full w-full">
        <div className="container">
          <section id="varients" className="scroll-mt-20">
            <div className="grid">
              <VarientsNav className="[&>a:first-child]:bg-muted [&>a:first-child]:font-medium [&>a:first-child]:text-primary" />
              <div id="switchers" className="relative mt-3 flex h-[500px] w-full items-center justify-center rounded-md border">
                <Switchers variant="gif" start="top-left" url="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s" />
              </div>
              <ShowMore componentName="Switchers" componentHref="switchers" />

              <div id="fluids" className="relative h-[500px] w-full rounded-md border">
                <Fluids />
              </div>
              <ShowMore componentName="Fluids" componentHref="fluids" />

              <div id="cursors" className="flex h-[500px] w-full items-center justify-center rounded-md border">
                <Cursors />
              </div>
              <ShowMore componentName="Cursors" componentHref="cursors" />

              <div className="px-1">
                <div id="buttons" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {buttonFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={buttonDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Button" componentHref="buttons" />

                <div id="inputs" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
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

                <ShowMore componentName="Input" componentHref="inputs" />

                <div id="selects" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {selectFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={selectDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Select" componentHref="selects" />

                <div id="checkboxes" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {checboxFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={checboxDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Checkbox" componentHref="checkboxes-radios-switches" />

                <div id="radios" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {radioFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={radioDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Radio" componentHref="checkboxes-radios-switches" />


                <div id="switches" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {switchFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={switchDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Switch" componentHref="checkboxes-radios-switches" />

                <div id="alerts" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {alertFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={alertDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Alert" componentHref="alerts-notifications-banners" />

                <div id="notifications" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {notificationFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={notificationDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Notification" componentHref="alerts-notifications-banners" />

                <div id="banners" className="grid w-full grid-cols-1 gap-2 overflow-hidden [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {bannerFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={bannerDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Banner" componentHref="alerts-notifications-banners" />

                <div id="dialogs" className="grid w-full grid-cols-1 gap-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-4 [&>*]:relative [&>*]:px-1 [&>*]:py-12 [&>*]:before:absolute [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] sm:[&>*]:px-8 xl:[&>*]:px-12">
                  {dialogFiles.map((componentName) => {
                    return (
                      <DemoComponent
                        className="flex items-center justify-center"
                        key={componentName}
                        directory={dialogDir}
                        componentName={componentName}
                      />
                    );
                  })}
                </div>

                <ShowMore componentName="Dialog" componentHref="dialogs" />

              </div>
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}
