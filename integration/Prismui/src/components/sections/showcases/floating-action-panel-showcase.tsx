"use client";

import {
  FloatingActionPanelRoot,
  FloatingActionPanelTrigger,
  FloatingActionPanelContent,
  FloatingActionPanelButton,
} from "@/components/prismui/floating-action-panel";
import { Plus, Upload, Palette, Share2, BookMarked } from "lucide-react";
import { ComponentShowcase } from "../component-showcase";

function FloatingActionPanelDemo() {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <FloatingActionPanelRoot>
        {(context) => (
          <>
            <FloatingActionPanelTrigger title="Actions" mode="actions">
              <Plus className="mr-2 h-4 w-4" />
              <span>Add new item</span>
            </FloatingActionPanelTrigger>

            <FloatingActionPanelContent className="w-[240px]">
              <div className="p-2 space-y-1">
                <FloatingActionPanelButton>
                  <Upload className="h-4 w-4" />
                  Upload files
                </FloatingActionPanelButton>
                <FloatingActionPanelButton>
                  <Palette className="h-4 w-4" />
                  Change theme
                </FloatingActionPanelButton>
                <FloatingActionPanelButton>
                  <Share2 className="h-4 w-4" />
                  Share project
                </FloatingActionPanelButton>
                <FloatingActionPanelButton>
                  <BookMarked className="h-4 w-4" />
                  Add to bookmarks
                </FloatingActionPanelButton>
              </div>
            </FloatingActionPanelContent>
          </>
        )}
      </FloatingActionPanelRoot>
    </div>
  );
}

export function FloatingActionPanelShowcase() {
  return (
    <ComponentShowcase
      pill="Components"
      title="Floating Action Panel"
      description="A beautiful floating panel that appears from any trigger element. Perfect for contextual actions, quick forms, and more."
    >
      <FloatingActionPanelDemo />
    </ComponentShowcase>
  );
}
