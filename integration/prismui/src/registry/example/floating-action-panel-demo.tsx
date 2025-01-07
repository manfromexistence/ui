"use client";

import * as React from "react";
import { Plus, Upload, Palette, Share2, BookMarked } from "lucide-react";
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
  FloatingActionPanelForm,
  FloatingActionPanelTextarea,
} from "@/components/prismui/floating-action-panel";

export default function FloatingActionPanelDemo() {
  const handleNoteSubmit = (note: string) => {
    console.log("Submitted note:", note);
  };

  return (
    <div className="flex min-h-[450px] items-center justify-center gap-4 mb-8">
      <FloatingActionPanelRoot>
        {({ mode }) => (
          <>
            <div className="flex items-center space-x-4">
              {/* Action Panel */}
              <FloatingActionPanelTrigger
                title="Project Actions"
                mode="actions"
              >
                Actions
              </FloatingActionPanelTrigger>

              {/* Note Panel */}
              <FloatingActionPanelTrigger title="Add Project Note" mode="note">
                Add Note
              </FloatingActionPanelTrigger>
            </div>

            <FloatingActionPanelContent>
              {mode === "actions" ? (
                <div className="space-y-1 p-2">
                  <FloatingActionPanelButton
                    onClick={() => console.log("New Project")}
                  >
                    <Plus className="h-4 w-4" />
                    New Project
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton
                    onClick={() => console.log("Upload Assets")}
                  >
                    <Upload className="h-4 w-4" />
                    Upload Assets
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton
                    onClick={() => console.log("Theme Settings")}
                  >
                    <Palette className="h-4 w-4" />
                    Theme Settings
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton
                    onClick={() => console.log("Share")}
                  >
                    <Share2 className="h-4 w-4" />
                    Share Project
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton
                    onClick={() => console.log("Save Template")}
                  >
                    <BookMarked className="h-4 w-4" />
                    Save as Template
                  </FloatingActionPanelButton>
                </div>
              ) : (
                <FloatingActionPanelForm
                  onSubmit={handleNoteSubmit}
                  className="p-2"
                >
                  <FloatingActionPanelTextarea
                    className="mb-2 h-24"
                    id="project-note"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800"
                    >
                      Save Note
                    </button>
                  </div>
                </FloatingActionPanelForm>
              )}
            </FloatingActionPanelContent>
          </>
        )}
      </FloatingActionPanelRoot>
    </div>
  );
}

export const demoSource = `"use client"

import * as React from "react"
import {
  Plus,
  Upload,
  Palette,
  Share2,
  BookMarked,
} from "lucide-react"
import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
  FloatingActionPanelForm,
  FloatingActionPanelTextarea,
} from "@/components/prismui/floating-action-panel"

export default function FloatingActionPanelDemo() {
  const handleNoteSubmit = (note: string) => {
    console.log("Submitted note:", note)
  }

  return (
    <div className="flex min-h-[350px] items-center justify-center gap-4 mb-8">
      <FloatingActionPanelRoot>
        {({ mode }) => (
          <>
            <div className="flex items-center space-x-4">
              {/* Action Panel */}
              <FloatingActionPanelTrigger title="Project Actions" mode="actions">
                Actions
              </FloatingActionPanelTrigger>

              {/* Note Panel */}
              <FloatingActionPanelTrigger title="Add Project Note" mode="note">
                Add Note
              </FloatingActionPanelTrigger>
            </div>

            <FloatingActionPanelContent>
              {mode === "actions" ? (
                <div className="space-y-1 p-2">
                  <FloatingActionPanelButton onClick={() => console.log("New Project")}>
                    <Plus className="h-4 w-4" />
                    New Project
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton onClick={() => console.log("Upload Assets")}>
                    <Upload className="h-4 w-4" />
                    Upload Assets
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton onClick={() => console.log("Theme Settings")}>
                    <Palette className="h-4 w-4" />
                    Theme Settings
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton onClick={() => console.log("Share")}>
                    <Share2 className="h-4 w-4" />
                    Share Project
                  </FloatingActionPanelButton>
                  <FloatingActionPanelButton onClick={() => console.log("Save Template")}>
                    <BookMarked className="h-4 w-4" />
                    Save as Template
                  </FloatingActionPanelButton>
                </div>
              ) : (
                <FloatingActionPanelForm onSubmit={handleNoteSubmit} className="p-2">
                  <FloatingActionPanelTextarea 
                    className="mb-2 h-24" 
                    id="project-note"
                  />
                  <div className="flex justify-end">
                    <button type="submit" className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-900 hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800">
                      Save Note
                    </button>
                  </div>
                </FloatingActionPanelForm>
              )}
            </FloatingActionPanelContent>
          </>
        )}
      </FloatingActionPanelRoot>
    </div>
  )
}`;
