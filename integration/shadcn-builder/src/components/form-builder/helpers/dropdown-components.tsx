import { useFormBuilderStore } from "@/stores/form-builder-store";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ComponentIcon } from "./component-icon";
import { AVAILABLE_COMPONENTS } from "@/config/available-components";
import { FormComponentModel } from "@/models/FormComponent";

export const DropdownComponents = ({
    rowId = 0,
    newRow = false,
    after,
    before,
    className,
  }: {
    rowId?: number;
    newRow?: boolean;
    after?: number;
    before?: number;
    className?: string;
  }) => {
    const { addComponent, addRow } = useFormBuilderStore();
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className={cn(
              "h-4 w-4 cursor-pointer active:cursor-grabbing self-center hover:bg-indigo-400 rounded-full flex items-center justify-center group/dropdown",
              className
            )}
          >
            <PlusIcon className="h-3 w-3 text-indigo-400 group-hover/dropdown:text-white" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {AVAILABLE_COMPONENTS.map((component) => (
            <DropdownMenuItem
              key={component.id}
              onClick={() =>
                newRow
                  ? addRow(component, after, before)
                  : addComponent(rowId, component)
              }
            >
              <ComponentIcon icon={component.icon} />
              {component.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
