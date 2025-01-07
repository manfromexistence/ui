"use client";

import * as React from "react";
import { Plus, Upload } from "lucide-react";
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/prismui/floating-action-panel";

export default function FloatingActionPanelBasic() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <FloatingActionPanelRoot>
        {({ mode }) => (
          <>
            <FloatingActionPanelTrigger title="Quick Actions" mode="actions">
              Quick Actions
            </FloatingActionPanelTrigger>

            <FloatingActionPanelContent>
              <div className="space-y-1 p-2">
                <FloatingActionPanelButton
                  onClick={() => console.log("New File")}
                >
                  <Plus className="h-4 w-4" />
                  New File
                </FloatingActionPanelButton>
                <FloatingActionPanelButton
                  onClick={() => console.log("Upload")}
                >
                  <Upload className="h-4 w-4" />
                  Upload File
                </FloatingActionPanelButton>
              </div>
            </FloatingActionPanelContent>
          </>
        )}
      </FloatingActionPanelRoot>
    </div>
  );
}

export const demoSource = `"use client"

import * as React from "react"
import { Plus, Upload } from "lucide-react"
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/prismui/floating-action-panel"

export default function FloatingActionPanelBasic() {
  return (
    <div className="flex items-center gap-4 mb-8">
      <FloatingActionPanelRoot>
        {({ mode }) => (
          <>
            <FloatingActionPanelTrigger title="Quick Actions" mode="actions">
              Quick Actions
            </FloatingActionPanelTrigger>

            <FloatingActionPanelContent>
              <div className="space-y-1 p-2">
                <FloatingActionPanelButton onClick={() => console.log("New File")}>
                  <Plus className="h-4 w-4" />
                  New File
                </FloatingActionPanelButton>
                <FloatingActionPanelButton onClick={() => console.log("Upload")}>
                  <Upload className="h-4 w-4" />
                  Upload File
                </FloatingActionPanelButton>
              </div>
            </FloatingActionPanelContent>
          </>
        )}
      </FloatingActionPanelRoot>
    </div>
  )
}`;
