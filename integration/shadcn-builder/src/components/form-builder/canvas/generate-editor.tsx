"use client";

import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
} from "@dnd-kit/core";
import { SortableRow } from "@/components/form-builder/canvas/sortable-row";
import {
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Form } from "@/components/ui/form";
import { SortableContext } from "@dnd-kit/sortable";
import { useFormBuilderStore } from "@/stores/form-builder-store";
import { useForm } from "react-hook-form";
import { useMemo, memo, useCallback, useEffect } from "react";
import { FormRow } from "@/types/form-builder.types";

// Memoize the empty state component
const EmptyState = memo(() => (
  <div className="p-6 text-center text-sm text-muted-foreground bg-black/5 rounded-lg max-w-md mx-auto border-dashed border-2 border-slate-300">
    Please add a component to the form
  </div>
));

EmptyState.displayName = "EmptyState";


// Memoize the sortable rows list
const SortableRowsList = memo(
  ({ rows, form }: { rows: FormRow[]; form: any }) => (
    <SortableContext
      items={rows.map((row) => row.id)}
      strategy={verticalListSortingStrategy}
    >
      {rows.map((row, index) => (
        <SortableRow key={row.id} row={row} index={index} form={form} />
      ))}
    </SortableContext>
  )
);

SortableRowsList.displayName = "SortableRowsList";

export default function GenerateEditor() {
  // Split store selectors to minimize re-renders
  const rows = useFormBuilderStore((state) => state.rows);
  const selectComponent = useFormBuilderStore((state) => state.selectComponent);
  const updateRows = useFormBuilderStore((state) => state.updateRows);
  const mode = useFormBuilderStore((state) => state.mode);
  const form = useForm();

  // Create sensors outside of callback
  const pointerSensor = useSensor(PointerSensor);
  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
  });

  // Memoize sensors array
  const sensors = useMemo(
    () => [pointerSensor, keyboardSensor],
    [pointerSensor, keyboardSensor]
  );

  // Memoize drag end handler
  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;

      if (active.id !== over.id) {
        const oldIndex = rows.findIndex((row) => row.id === active.id);
        const newIndex = rows.findIndex((row) => row.id === over.id);
        const newRows = arrayMove(rows, oldIndex, newIndex);
        updateRows(newRows);
      }
    },
    [rows, updateRows]
  );

  if (rows.length === 0) {
    return <EmptyState />;
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    selectComponent(null);
  };

  
  return (
    <div
      className={`[&>div]:my-6 [&>div:last-child]:mb-0 [&>div:first-child]:mt-0`}
      onClick={mode === "editor" ? handleClick : undefined}
    >
      <Form {...form}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableRowsList rows={rows} form={form} />
        </DndContext>
      </Form>
    </div>
  );
}
