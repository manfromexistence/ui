"use client";

import { useFormBuilderStore } from "@/stores/form-builder-store";
import { AVAILABLE_COMPONENTS } from "@/config/available-components";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { ComponentIcon } from "../helpers/component-icon";
import SocialLinks from "./socialLinks";

export function SidebarLeft() {
  const { addRow } = useFormBuilderStore();

  // Group components by purpose
  const typographyComponents = AVAILABLE_COMPONENTS.filter(
    (comp) => comp.category === "content"
  );
  const inputComponents = AVAILABLE_COMPONENTS.filter((comp) =>
    [
      "input",
      "textarea",
      "number",
      "email",
      "password",
      "tel",
      "url",
      "file",
    ].includes(comp.type)
  );
  const selectionComponents = AVAILABLE_COMPONENTS.filter((comp) =>
    ["select", "checkbox", "checkbox-group", "radio", "switch"].includes(
      comp.type
    )
  );
  const dateComponents = AVAILABLE_COMPONENTS.filter((comp) =>
    ["date"].includes(comp.type)
  );
  const buttonComponents = AVAILABLE_COMPONENTS.filter((comp) =>
    ["button"].includes(comp.type)
  );

  return (
    <Sidebar className="bg-white top-14 bottom-14">
      <div className="flex flex-col h-[calc(100%-56px)]">
        <SidebarContent className="gap-0">
          <SidebarGroup>
            <SidebarGroupLabel>Typography</SidebarGroupLabel>
            <SidebarMenu>
              {typographyComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)}>
                    <ComponentIcon icon={component.icon} />
                    <span>{component.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Input Fields</SidebarGroupLabel>
            <SidebarMenu>
              {inputComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)}>
                    <ComponentIcon icon={component.icon} />
                    <span>{component.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Selection Fields</SidebarGroupLabel>
            <SidebarMenu>
              {selectionComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)}>
                    <ComponentIcon icon={component.icon} />
                    <span>{component.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Date & Time</SidebarGroupLabel>
            <SidebarMenu>
              {dateComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)}>
                    <ComponentIcon icon={component.icon} />
                    <span>{component.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Buttons</SidebarGroupLabel>
            <SidebarMenu>
              {buttonComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)}>
                    <ComponentIcon icon={component.icon} />
                    <span>{component.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="border-t">
          <SocialLinks />
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
