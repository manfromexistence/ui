"use client";

import { DndContext } from "@dnd-kit/core";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarLeft } from "@/components/form-builder/sidebar/sidebarLeft";
import { SidebarRight } from "@/components/form-builder/sidebar/sidebarRight";
import { MainCanvas } from "@/components/form-builder/mainCanvas";
import {
  EyeIcon,
  Monitor,
  Tablet,
  Smartphone,
  BlocksIcon,
  CodeIcon,
} from "lucide-react";
import { PencilRulerIcon } from "lucide-react";
import { useFormBuilderStore } from "@/stores/form-builder-store";
import { Button } from "@/components/ui/button";
import { ToggleGroupNav } from "@/components/form-builder/ui/toggle-group-nav";
import { useMemo, useState } from "react";
import {
  DependenciesImports,
  generateFormCode,
} from "@/components/form-builder/helpers/generate-react-code";
import { GenerateCodeDialog } from "@/components/form-builder/dialogs/generate-code-dialog";
import { MobileNotification } from "@/components/form-builder/ui/mobile-notification";
import { useIsMobile } from "@/hooks/use-mobile";
import SocialLinks from "@/components/form-builder/sidebar/socialLinks";
import { OpenJsonDialog } from "@/components/form-builder/dialogs/open-json-dialog";

export default function FormBuilderPage() {
  const isMobile = useIsMobile();
  // Split the store selectors to only subscribe to what we need
  const viewport = useFormBuilderStore((state) => state.viewport);
  const mode = useFormBuilderStore((state) => state.mode);
  const showJson = useFormBuilderStore((state) => state.showJson);
  const rows = useFormBuilderStore((state) => state.rows);
  const formTitle = useFormBuilderStore((state) => state.formTitle);
  const updateViewport = useFormBuilderStore((state) => state.updateViewport);
  const updateMode = useFormBuilderStore((state) => state.updateMode);
  const updateFormTitle = useFormBuilderStore((state) => state.updateFormTitle);
  const toggleJsonPreview = useFormBuilderStore(
    (state) => state.toggleJsonPreview
  );

  const selectRow = useFormBuilderStore((state) => state.selectRow);
  const selectComponent = useFormBuilderStore((state) => state.selectComponent);
  const [showCodeDialog, setShowCodeDialog] = useState(false);
  const [generatedCode, setGeneratedCode] = useState<{
    code: string;
    dependenciesImports: DependenciesImports;
  }>({ code: "", dependenciesImports: {} });

  // Memoize static values
  const viewportItems = useMemo(
    () => [
      { value: "lg", icon: Monitor },
      { value: "md", icon: Tablet },
      { value: "sm", icon: Smartphone },
    ],
    []
  );

  const modeItems = useMemo(
    () => [
      { value: "editor", icon: PencilRulerIcon },
      { value: "preview", icon: EyeIcon },
    ],
    []
  );

  const handleGenerateCode = async () => {
    const generatedCode = await generateFormCode(rows);
    setGeneratedCode(generatedCode);
    setShowCodeDialog(true);
  };

  return (
    <div>
      <div className="fixed top-0 w-full flex flex-row gap-2 justify-between bg-white border-b z-10">
        <div className="flex flex-row gap-2 items-center justify-center md:justify-start p-2 px-4 border-r w-full md:w-[300px]">
          <BlocksIcon className="h-6 w-6" strokeWidth={2} />
          <h2 className="text-lg font-semibold">
            shadcn/ui <span className="font-normal">Builder</span>
            <sup className="text-xs text-muted-foreground font-normal ml-1">
              Beta
            </sup>
          </h2>
        </div>
        <div className="p-2 flex-1 grid-cols-2 xl:grid-cols-3 hidden md:grid">
          <div className="hidden xl:block col-span-1">
            {process.env.NODE_ENV === "development" && <OpenJsonDialog />}
          </div>
          <div className="col-span-1 flex xl:justify-center">
            <div className=" text-center flex flex-row items-center justify-center gap-1 border rounded-md h-9 px-4">
              <div
                className="max-w-80 overflow-y-hidden whitespace-nowrap text-sm outline-none scrollbar-hide"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => updateFormTitle(e.target.innerText)}
              >
                {formTitle}
              </div>
              <span className="text-muted-foreground text-xs">.tsx</span>
            </div>
          </div>
          <div className="col-span-1 hidden md:flex justify-end gap-4 ">
            {process.env.NODE_ENV === "development" && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleJsonPreview}
                className={showJson ? "bg-slate-100" : ""}
              >
                <CodeIcon className="h-4 w-4" />
              </Button>
            )}
            <ToggleGroupNav
              items={viewportItems}
              defaultValue={viewport}
              onValueChange={(value) =>
                updateViewport(value as "sm" | "md" | "lg")
              }
            />
            <ToggleGroupNav
              items={modeItems}
              defaultValue={mode}
              onValueChange={(value) => {
                if (value === "preview") {
                  selectComponent(null);
                  selectRow(null);
                }
                updateMode(value as "editor" | "preview");
              }}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row gap-2 justify-between border-l py-2 px-4 w-[300px]">
          <Button
            variant="default"
            size="sm"
            className="w-full cursor-pointer"
            onClick={handleGenerateCode}
            disabled={rows.length === 0}
          >
            Generate Code
          </Button>
        </div>
      </div>

      {isMobile ? (
        <>
          <MobileNotification />
          <div className="fixed bottom-0 w-full p-4 border-t">
            <SocialLinks />
          </div>
        </>
      ) : (
        <>
          <SidebarProvider
            className="relative hidden md:block"
            style={{ "--sidebar-width": "300px" } as React.CSSProperties}
            open={mode === "editor"}
          >
            <DndContext>
              <div className="flex w-full h-screen justify-between">
                <SidebarLeft />
                <main className="flex-1 overflow-auto relative bg-slate-50 bg-dotted pt-14 scrollbar-hide">
                  <MainCanvas />
                </main>
                <SidebarRight />
              </div>
            </DndContext>
          </SidebarProvider>
          <GenerateCodeDialog
            open={showCodeDialog}
            onOpenChange={setShowCodeDialog}
            generatedCode={generatedCode}
          />
        </>
      )}
    </div>
  );
}
