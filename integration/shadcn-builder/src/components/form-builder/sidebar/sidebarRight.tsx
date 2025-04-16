"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { useFormBuilderStore } from "@/stores/form-builder-store";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { getComponentViews } from "@/config/available-components";
import { ReactNode, useState } from "react";

interface PropertySectionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
}

function PropertySection({ title, children, isOpen }: PropertySectionProps) {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  return (
    <Collapsible className="border-b" defaultOpen={isOpenState}>
      <CollapsibleTrigger
        className="flex items-center justify-between w-full p-4 cursor-pointer"
        onClick={() => setIsOpenState(!isOpenState)}
      >
        <span className="font-normal text-sm">{title}</span>
        {isOpenState ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent className="p-4 pt-0 space-y-2">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

const PROPERTY_SECTIONS = [
  { key: "options", title: "Options", isOpen: true },
  { key: "input", title: "Input", isOpen: true },
  { key: "label", title: "Label", isOpen: true },
  { key: "grid", title: "Grid layout", isOpen: false },
  { key: "html", title: "HTML", isOpen: false },
  { key: "validation", title: "Validation", isOpen: false },
] as const;

export function SidebarRight() {
  const { selectedComponent } = useFormBuilderStore();

  let sidebarContent;

  if (!selectedComponent) {
    sidebarContent = (
      <div className="p-4">
        <p className="text-sm text-muted-foreground">
          Select a component to configure its properties
        </p>
      </div>
    );
  } else {
    const componentViews = getComponentViews(selectedComponent);

    if (!componentViews) {
      sidebarContent = (
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            No properties available for this component
          </p>
        </div>
      );
    } else {
      sidebarContent = (
        <div>
          {PROPERTY_SECTIONS.map(({ key, title, isOpen }) => {
            const content = componentViews.renderDesignProperties[key];
            if (!content) return null;

            return (
              <PropertySection key={key} title={title} isOpen={isOpen}>
                {content}
              </PropertySection>
            );
          })}
        </div>
      );
    }
  }

  return (
    <Sidebar side="right" className="border-l top-14">
      <SidebarContent>{sidebarContent}</SidebarContent>
    </Sidebar>
  );
}
