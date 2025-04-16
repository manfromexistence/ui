"use client";

import { FormRow } from "@/types/form-builder.types";
import { useFormBuilderStore } from "@/stores/form-builder-store";

import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";
import {
  FormField,
  FormItem,
  FormControl,
  FormDescription,
  FormLabel,
} from "@/components/ui/form";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { cn } from "@/lib/utils";
import { getComponentViews } from "@/config/available-components";
import { FormComponentModel } from "@/models/FormComponent";
import { FormWysiwygEditor } from "../form-components/wysiwyg/form-wysiwyg-editor";

export interface FormComponentProps {
  row: FormRow;
  index: number;
  isLast: boolean;
  form: UseFormReturn<FieldValues, undefined>;
  component: FormComponentModel;
}

export function RenderEditorComponent({
  form,
  component,
  row,
  dndAttributes,
  dndListeners,
}: FormComponentProps & { dndAttributes: any; dndListeners: any }) {
  const { removeComponent, selectedComponent, viewport, updateComponent } =
    useFormBuilderStore();
  const mode = useFormBuilderStore((state) => state.mode);
  const componentViews = getComponentViews(component);

  return (
    <div
      className={cn(
        "relative flex h-full",
        selectedComponent && "opacity-30",
        selectedComponent?.id === component.id &&
          "opacity-100 outline-2 outline-offset-6 outline-slate-400 rounded-xs"
      )}
      key={component.id}
    >
      <div className="relative flex-1">
        {component.category === "form" ? (
          <>
            <FormField
              control={form.control}
              name={component.id}
              render={({ field }) => (
                <FormItem className={cn(mode === "editor" && "group/component")}>
                  <div className="flex items-center select-none">
                    {mode === "editor" && (
                      <Icons.GripVertical
                        className="h-4 w-4 text-slate-400 cursor-grab active:cursor-grabbing focus:outline-none"
                        {...dndAttributes}
                        {...dndListeners}
                      />
                    )}
                    <FormLabel
                      className={cn(
                        "shrink-0 flex items-center gap-2 ",
                        mode === "editor" && "cursor-pointer"
                      )}
                      htmlFor={component.id}
                    >
                      {component.getField(
                        "properties.style.showLabel",
                        viewport
                      ) === "yes" && component.getField("label", viewport)}

                      {mode === "editor" && (
                        <span
                          className={cn(
                            "text-xs text-slate-400",
                            component.getField(
                              "properties.style.showLabel",
                              viewport
                            ) === "no"
                              ? "opacity-100"
                              : "group-hover/component:opacity-100 opacity-0"
                          )}
                        >
                          {component.getField("type")}
                        </span>
                      )}
                    </FormLabel>
                  </div>
                  {mode === "editor" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "h-8 w-8 absolute right-0 -top-2 m-0! text-red-500 group-hover/component:opacity-100 opacity-0",
                        component.id === selectedComponent?.id && "opacity-100"
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeComponent(row.id, component.id);
                      }}
                    >
                      <Icons.Trash2Icon className="h-4 w-4" />
                    </Button>
                  )}
                  <FormControl>{componentViews?.render}</FormControl>
                  {component.description && (
                    <FormDescription>{component.description}</FormDescription>
                  )}
                </FormItem>
              )}
            />
          </>
        ) : (
          <div className={cn("relative", mode === "editor" && "group/component")}>
            {mode === "editor" && (
                <div className="flex items-center select-none">
                  <Icons.GripVertical
                    className="h-4 w-4 text-slate-400 cursor-grab active:cursor-grabbing"
                    {...dndAttributes}
                    {...dndListeners}
                  />
                  <FormLabel
                    className={cn(
                      "shrink-0 flex items-center gap-2 cursor-pointer",
                      component.id === selectedComponent?.id && "font-bold"
                    )}
                  >
                    <span className="text-xs text-slate-400">
                      {component.getField("type")}
                    </span>
                  </FormLabel>
                </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "h-8 w-8 absolute right-0 -top-2 m-0! text-red-500 group-hover/component:opacity-100 opacity-0",
                component.id === selectedComponent?.id && mode === "editor" && "opacity-100"
              )}
              onClick={(e) => {
                e.stopPropagation();
                removeComponent(row.id, component.id);
              }}
            >
              <Icons.Trash2Icon className="h-4 w-4" />
            </Button>
            <FormWysiwygEditor
              value={component.content || ""}
              onChange={(content) => {
                updateComponent(component.id, "content", content, true);
              }}
              isEditable={
                selectedComponent?.id === component.id && mode === "editor"
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
