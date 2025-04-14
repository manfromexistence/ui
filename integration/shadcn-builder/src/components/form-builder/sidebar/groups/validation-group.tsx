import { useFormBuilderStore } from "@/stores/form-builder-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ToggleGroupNav } from "../../ui/toggle-group-nav";
import { useEffect, useCallback } from "react";


export function ValidationGroup() {
  const { updateComponent, selectedComponent, viewport } =
    useFormBuilderStore();


  const validations = selectedComponent?.getField("validations");

  const required = validations?.required || "no";
  const minLength = validations?.minLength || undefined;
  const maxLength = validations?.maxLength || undefined;
  const min = validations?.min || undefined;
  const max = validations?.max || undefined;

  const handleChange = useCallback((field: string, value: any) => {
    if (selectedComponent) {
      updateComponent(selectedComponent.id, field, value, true);
    }
  }, [selectedComponent, updateComponent]);

  const showMinMax = selectedComponent?.type === "number";
  const showMinLengthMaxLength = selectedComponent?.type === "input";

  // Force required to "yes" if any min/max validations are present
  useEffect(() => {
    if (selectedComponent && required === "no" && (min !== undefined || max !== undefined || minLength !== undefined || maxLength !== undefined)) {
      handleChange("validations.required", "yes");
    }
  }, [min, max, minLength, maxLength, required, selectedComponent, handleChange]);

  if (!selectedComponent) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-2 items-center">
        <Label className="text-xs text-gray-400 flex-1 inline-block">
          Required
        </Label>
        <div className="flex flex-row items-center gap-2">
          <ToggleGroupNav
            items={[
              { value: "yes", label: "yes" },
              { value: "no", label: "no" },
            ]}
            defaultValue={required}
            className="w-full"
            onValueChange={(value) =>
              handleChange("validations.required", value)
            }
          />
        </div>
      </div>
      {showMinMax && (
        <>
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <Label className="text-xs text-gray-400">Min</Label>
            <Input
              type="number"
              defaultValue={min}
              onChange={(e) => {
                handleChange("validations.min", e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <Label className="text-xs text-gray-400">Max</Label>
            <Input
              type="number"
              defaultValue={max}
              onChange={(e) => {
                handleChange("validations.max", e.target.value);
              }}
            />
          </div>
        </>
      )}
      {showMinLengthMaxLength && (
        <>
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <Label className="text-xs text-gray-400">Min Length</Label>
            <Input
              type="number"
              defaultValue={minLength}
              onChange={(e) => {
                handleChange("validations.minLength", e.target.value);
              }}
            />
          </div>
          <div className="grid grid-cols-2 gap-2 items-center justify-between">
            <Label className="text-xs text-gray-400">Max Length</Label>
            <Input
              type="number"
              defaultValue={maxLength}
              onChange={(e) => {
                handleChange("validations.maxLength", e.target.value);
              }}
            />
          </div>
        </>
      )}
    </>
  );
}
