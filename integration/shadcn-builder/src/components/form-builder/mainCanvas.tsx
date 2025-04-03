"use client";

import { useFormBuilderStore } from "@/stores/form-builder-store";
import { useEffect, useRef, useMemo, memo } from "react";
import GenerateEditorMode from "./canvas/generate-editor-mode";
import { IFrame } from "./helpers/iframe";
import { Pre } from "@/components/ui/pre";
import { generateJsonSchema } from "./helpers/generate-json";
import { cn } from "@/lib/utils";

// Memoize static viewport styles
const viewportEditorStyles = {
  sm: "w-[418px]",
  md: "w-[866px]",
  lg: "w-[1134px]",
} as const;

const viewportPreviewStyles = {
  sm: "w-[320px]",
  md: "w-[768px]",
  lg: "w-[1024px]",
} as const;

// Memoize the JSON preview component
const JsonPreview = memo(({ rows }: { rows: any[] }) => {
  const jsonString = useMemo(
    () => JSON.stringify(generateJsonSchema(rows), null, 2),
    [rows]
  );

  return (
    <div className={`h-full overflow-scroll w-full`}>
      <Pre language="json" code={jsonString} />
    </div>
  );
});

JsonPreview.displayName = "JsonPreview";

export function MainCanvas() {
  // Split store selectors to minimize re-renders
  const rows = useFormBuilderStore((state) => state.rows);
  const mode = useFormBuilderStore((state) => state.mode);
  const viewport = useFormBuilderStore((state) => state.viewport);
  const showJson = useFormBuilderStore((state) => state.showJson);
  const selectedComponent = useFormBuilderStore(
    (state) => state.selectedComponent
  );

  const previewIframeRef = useRef<HTMLIFrameElement>(null);
  const editorIframeRef = useRef<HTMLIFrameElement>(null);

  // Add effect to scroll to selected component
  useEffect(() => {
    if (selectedComponent && editorIframeRef.current) {
      const iframeDoc =
        editorIframeRef.current.contentDocument ||
        editorIframeRef.current.contentWindow?.document;
      if (iframeDoc) {
        const element = iframeDoc.querySelector(
          `[data-component-id="${selectedComponent.id}"]`
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  }, [selectedComponent]);

  useEffect(() => {
    if (previewIframeRef.current) {
      previewIframeRef.current.src = previewIframeRef.current.src;
    }
  }, [rows]);

  const tabsTriggerClass =
    "relative flex items-center gap-2 cursor-pointer rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none";

  return (
    <div className="flex gap-4 h-full flex-col 3xl:flex-row">
      <div
        className={`h-full w-full ${mode === "editor" ? "block" : "hidden"}`}
      >
        <IFrame
          ref={editorIframeRef}
          className={cn(`${viewportEditorStyles[viewport]}`, "mx-auto")}
        >
          <GenerateEditorMode />
        </IFrame>
      </div>
      <div
        className={`h-full mx-auto ${mode === "preview" ? "block" : "hidden"}`}
      >
        <iframe
          ref={previewIframeRef}
          src="/canvas/preview"
          className={`h-full border-0 mx-auto ${viewportPreviewStyles[viewport]}`}
          title="Form Canvas"
        />
      </div>
      {showJson && <JsonPreview rows={rows} />}
    </div>
  );
}
