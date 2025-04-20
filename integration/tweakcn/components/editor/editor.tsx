"use client";

import React from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  EditorConfig,
  BaseEditorState,
  ThemeEditorState,
} from "@/types/editor";
import { ThemeStyles } from "@/types/theme";
import { Sliders } from "lucide-react";
import { useEditorStore } from "@/store/editor-store";

interface EditorProps {
  config: EditorConfig;
  initialState?: BaseEditorState;
}

const isThemeStyles = (styles: unknown): styles is ThemeStyles => {
  return (
    !!styles &&
    typeof styles === "object" &&
    styles !== null &&
    "light" in styles &&
    "dark" in styles
  );
};

const Editor: React.FC<EditorProps> = ({ config }) => {
  const { themeState, setThemeState } = useEditorStore();
  const Controls = config.controls;
  const Preview = config.preview;

  const handleStyleChange = (newStyles: ThemeStyles) => {
    setThemeState({ ...themeState, styles: newStyles });
  };

  // Ensure we have valid theme styles
  const styles = !isThemeStyles(themeState.styles)
    ? (config.defaultState as ThemeEditorState).styles
    : themeState.styles;

  return (
    <div className="h-full overflow-hidden">
      {/* Desktop Layout */}
      <div className="h-full hidden md:block">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
            <div className="h-full flex flex-col">
              <Controls
                styles={styles}
                onChange={handleStyleChange}
                currentMode={themeState.currentMode}
              />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={70} minSize={20}>
            <div className="h-full flex flex-col">
              <div className="flex-1 min-h-0 flex flex-col">
                <Preview styles={styles} currentMode={themeState.currentMode} />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Mobile Layout */}
      <div className="h-full md:hidden">
        <Tabs defaultValue="controls" className="h-full">
          <TabsList className="w-full rounded-none">
            <TabsTrigger value="controls" className="flex-1">
              <Sliders className="h-4 w-4 mr-2" />
              Controls
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex-1">
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="controls" className="h-[calc(100%-2.5rem)] mt-0">
            <div className="h-full flex flex-col">
              <Controls
                styles={styles}
                onChange={handleStyleChange}
                currentMode={themeState.currentMode}
              />
            </div>
          </TabsContent>
          <TabsContent value="preview" className="h-[calc(100%-2.5rem)] mt-0">
            <div className="h-full flex flex-col">
              <Preview styles={styles} currentMode={themeState.currentMode} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Editor;
