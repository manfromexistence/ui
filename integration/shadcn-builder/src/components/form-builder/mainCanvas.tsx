"use client";

import { useFormBuilderStore } from "@/stores/form-builder-store";
import { useEffect, useRef, useMemo, memo } from "react";
import GenerateEditor from "./canvas/generate-editor";
import { Pre } from "@/components/ui/pre";
import { generateJsonSchema } from "./helpers/generate-json";
import { cn } from "@/lib/utils";
import { CardContent } from "../ui/card";
import { Card } from "../ui/card";

// Memoize static viewport styles
const viewportEditorStyles = {
  sm: "w-[370px]",
  md: "w-[818px]",
  lg: "w-[1074px]",
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
  const viewport = useFormBuilderStore((state) => state.viewport);
  const showJson = useFormBuilderStore((state) => state.showJson);
  const selectedComponent = useFormBuilderStore(
    (state) => state.selectedComponent
  );
  const selectRow = useFormBuilderStore((state) => state.selectRow);
  const selectComponent = useFormBuilderStore((state) => state.selectComponent);
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

  return (
    <div className="flex gap-4 h-full flex-col 3xl:flex-row">
      <div
        className={`h-full w-full`}
        onClick={() => {
          if (selectedComponent) {
            selectComponent(null);
            selectRow(null);
          }
        }}
      >
        <Card
          className={cn(
            'transition-all duration-300',
            `${viewportEditorStyles[viewport]}`,
            "mx-auto scrollbar-hide mt-6"
          )}
        >
          <CardContent className="@container">
            <GenerateEditor />
          </CardContent>
        </Card>
        
      </div>
      {showJson && <JsonPreview rows={rows} />}
    </div>
  );
}
