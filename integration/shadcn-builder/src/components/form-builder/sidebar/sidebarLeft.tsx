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
            <SidebarMenu className="gap-2">
              {typographyComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)} className="h-12 hover:bg-slate-100 cursor-pointer">
                    <div className="bg-slate-100 p-2 rounded-md text-slate-500">
                      <ComponentIcon
                        icon={component.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {component.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {component.label_info}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Input Fields</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {inputComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)} className="h-12 hover:bg-slate-100 cursor-pointer">
                    <div className="bg-slate-100 p-2 rounded-md text-slate-500">
                      <ComponentIcon
                        icon={component.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {component.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {component.label_info}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Selection Fields</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {selectionComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)} className="h-12 hover:bg-slate-100 cursor-pointer  ">
                    <div className="bg-slate-100 p-2 rounded-md text-slate-500">
                      <ComponentIcon
                        icon={component.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {component.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {component.label_info}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Date & Time</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {dateComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)} className="h-12 hover:bg-slate-100 cursor-pointer">
                    <div className="bg-slate-100 p-2 rounded-md text-slate-500">
                      <ComponentIcon
                        icon={component.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {component.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {component.label_info}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Buttons</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
              {buttonComponents.map((component) => (
                <SidebarMenuItem key={component.id}>
                  <SidebarMenuButton onClick={() => addRow(component)} className="h-12 hover:bg-slate-100 cursor-pointer">
                    <div className="bg-slate-100 p-2 rounded-md text-slate-500">
                      <ComponentIcon
                        icon={component.icon}
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-slate-800">
                        {component.label}
                      </span>
                      <span className="text-xs text-gray-500">
                        {component.label_info}
                      </span>
                    </div>
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
