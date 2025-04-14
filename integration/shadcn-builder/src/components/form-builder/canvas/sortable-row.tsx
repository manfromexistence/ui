import { UseFormReturn } from "react-hook-form";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from "@dnd-kit/sortable";
import { GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn, generateTWClassesForAllViewports } from "@/lib/utils";
import { RenderEditorComponent } from "../helpers/render-editor-component";
import { DropdownComponents } from "../helpers/dropdown-components";
import { useFormBuilderStore } from "@/stores/form-builder-store";
import { closestCenter, DndContext } from "@dnd-kit/core";
import { FormRow, Viewports } from "@/types/form-builder.types";
import { FormComponentModel } from "@/models/FormComponent";
import { memo, useCallback, useEffect, useMemo } from "react";

interface SortableRowProps {
  row: FormRow;
  index: number;
  form: UseFormReturn<any>;
}

// Memoize the row dropzone component
const RowDropzone = memo(
  ({
    newRow,
    position,
    rowId,
  }: {
    newRow?: boolean;
    position?: "before" | "after";
    rowId: number;
  }) => (
    <div className="flex items-center justify-center absolute mx-8 group-hover/row:opacity-100 opacity-0 border-t border-indigo-200 -bottom-3 -left-2 -right-2">
      <DropdownComponents
        newRow={newRow}
        {...(position === "before" ? { before: rowId } : { after: rowId })}
        className="z-10 absolute bg-indigo-200 rounded-full"
      />
    </div>
  )
);

RowDropzone.displayName = "RowDropzone";

// Memoize the draggable button component
const DraggableButton = memo(({ attributes, listeners }: any) => (
  <div
    className="h-6 w-6 cursor-grab active:cursor-grabbing self-center group-hover/row:opacity-100 opacity-0 flex items-center justify-center"
    {...attributes}
    {...listeners}
  >
    <GripVertical className="h-4 w-4 text-slate-400" />
  </div>
));

DraggableButton.displayName = "DraggableButton";

// Memoize the row column component
const RowColumn = memo(
  ({
    component,
    index,
    row,
    form,
    isLast,
  }: {
    component: FormComponentModel;
    index: number;
    viewport: Viewports;
    row: FormRow;
    form: UseFormReturn<any>;
    isLast: boolean;
  }) => {
    const {
      attributes: columnAttributes,
      listeners: columnListeners,
      setNodeRef,
      transform: columnTransform,
      transition: columnTransition,
      isDragging: columnIsDragging,
    } = useSortable({
      id: component.id,
    });

    const selectedComponent = useFormBuilderStore(
      (state) => state.selectedComponent
    );
    const selectComponent = useFormBuilderStore(
      (state) => state.selectComponent
    );
    const selectRow = useFormBuilderStore((state) => state.selectRow);
    const mode = useFormBuilderStore((state) => state.mode);
    const columnStyle = useMemo(
      () => ({
        transform: columnTransform
          ? `translate3d(${columnTransform.x}px, 0, 0)`
          : undefined,
        transition: columnTransition,
        zIndex: columnIsDragging ? 30 : 1,
        backgroundColor: "white",
        ...(selectedComponent?.id === component.id
          ? { zIndex: 30 }
          : undefined),
      }),
      [
        columnTransform,
        columnTransition,
        columnIsDragging,
        selectedComponent,
        component,
      ]
    );

    const colSpanClasses = useMemo(
      () => generateTWClassesForAllViewports(component, "colSpan", row),
      [component, row]
    );

    const colStartClasses = useMemo(
      () => generateTWClassesForAllViewports(component, "colStart", row),
      [component, row]
    );

    const handleClick = useCallback(
      (e: React.MouseEvent) => {
        if (mode === "editor") {
          e.stopPropagation();
          selectRow(row);
          selectComponent(component);
        }
      },
      [component, selectComponent, selectRow, row, mode]
    );

    return (
      <div
        ref={setNodeRef}
        className={cn(
          "relative group cursor-pointer ",
          colSpanClasses,
          colStartClasses
        )}
        style={columnStyle}
        key={component.id}
        onClick={handleClick}
        data-component-id={component.id}
      >
        <RenderEditorComponent
          key={component.id}
          index={index}
          isLast={isLast}
          row={row}
          component={component}
          form={form}
          dndAttributes={columnAttributes}
          dndListeners={columnListeners}
        />
      </div>
    );
  }
);

RowColumn.displayName = "RowColumn";

export const SortableRow = memo(({ row, form, index }: SortableRowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useSortable({ id: row.id });

  // Split store selectors
  const updateRow = useFormBuilderStore((state) => state.updateRow);
  const selectedRow = useFormBuilderStore((state) => state.selectedRow);
  const viewport = useFormBuilderStore((state) => state.viewport);
  const selectedComponent = useFormBuilderStore(
    (state) => state.selectedComponent
  );
  const mode = useFormBuilderStore((state) => state.mode);

  const style = useMemo(
    () => ({
      transform: transform ? `translate3d(0, ${transform.y}px, 0)` : undefined,
      zIndex: isDragging ? 100 : selectedRow?.id === row.id ? 100 : 0,
      ...(isDragging ? { zIndex: 20 } : undefined),
    }),
    [transform, isDragging, selectedRow?.id, row.id]
  );

  const handleColumnDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;
      if (active.id !== over.id) {
        const oldIndex = row.components.findIndex(
          (component) => component.id === active.id
        );
        const newIndex = row.components.findIndex(
          (component) => component.id === over.id
        );
        const newComponents = arrayMove(row.components, oldIndex, newIndex);
        const newRow = { ...row, components: newComponents };
        updateRow(newRow);
      }
    },
    [row, updateRow]
  );

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        mode === "editor" && !selectedComponent && "group/row",
        mode === "editor" && "-mx-6",
        " bg-white relative"
      )}
      key={row.id}
    >
      <div className="flex">
        {mode === "editor" && (
          <DraggableButton attributes={attributes} listeners={listeners} />
        )}
        <div className={cn("form-row flex-1 grid grid-cols-12 gap-4")}>
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleColumnDragEnd}
          >
            <SortableContext
              items={row.components.map((component) => component.id)}
              strategy={horizontalListSortingStrategy}
            >
              {row.components.map((component, index) => (
                <RowColumn
                  key={component.id}
                  component={component}
                  index={index}
                  viewport={viewport}
                  row={row}
                  form={form}
                  isLast={index === row.components.length - 1}
                />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        {mode === "editor" && (
          <div className="w-6 border-l border-indigo-200 flex items-center justify-center translate-x-1/2 group-hover/row:opacity-100 opacity-0">
            <DropdownComponents
              rowId={row.id}
              className={cn(
                "z-10 bg-indigo-200 rounded-full absolute -left-[9px]",
                isDragging && "hidden"
              )}
            />
          </div>
        )}
      </div>
      {mode === "editor" && !isDragging && (
        <RowDropzone newRow rowId={row.id} position="after" />
      )}
    </div>
  );
});

SortableRow.displayName = "SortableRow";
