import React, { useState, useCallback } from 'react'
import { Reorder, AnimatePresence } from 'framer-motion'
import { FormFieldType } from '@/types'
import { FieldItem } from '@/screens/field-item'

import { LuRows2 } from 'react-icons/lu'
import { Badge } from '@/components/ui/badge'
import { GripVertical } from 'lucide-react'

export type FormFieldOrGroup = FormFieldType | FormFieldType[]

type FormFieldListProps = {
  formFields: FormFieldOrGroup[]
  setFormFields: React.Dispatch<React.SetStateAction<FormFieldOrGroup[]>>
  updateFormField: (path: number[], updates: Partial<FormFieldType>) => void
  openEditDialog: (field: FormFieldType) => void
}

export const FormFieldList: React.FC<FormFieldListProps> = ({
  formFields,
  setFormFields,
  updateFormField,
  openEditDialog,
}) => {
  const [rowTabs, setRowTabs] = useState<{ [key: number]: FormFieldType[] }>({})

  const handleHorizontalReorder = useCallback(
    (index: number, newOrder: FormFieldType[]) => {
      setRowTabs((prev) => ({ ...prev, [index]: newOrder }))

      // Delay setFormFields by 1 second
      setTimeout(() => {
        setFormFields((prevFields) => {
          const updatedFields = [...prevFields]
          updatedFields[index] = newOrder
          return updatedFields
        })
      }, 1000)
    },
    [setFormFields],
  )

  return (
    <div className="w-full">
      <Reorder.Group
        axis="y"
        onReorder={setFormFields}
        values={formFields}
        className="flex flex-col gap-1"
      >
        {formFields.map((item, index) => (
          <Reorder.Item
            key={
              Array.isArray(item)
                ? item.map((f) => f.name).join('-')
                : item.name
            }
            value={item}
            className="flex items-center gap-1"
            whileDrag={{ borderRadius: '12px', padding: "12px" }}
          >
            <GripVertical className="h-4 w-4 cursor-grab" />
            {Array.isArray(item) ? (
              <Reorder.Group
                as="ul"
                axis="x"
                onReorder={(newOrder) =>
                  handleHorizontalReorder(index, newOrder)
                }
                values={rowTabs[index] || item}
                className="grid w-full grid-cols-12 gap-1"
              >
                <AnimatePresence initial={false}>
                  {(rowTabs[index] || item).map((field, fieldIndex) => (
                    <FieldItem
                      key={field.name}
                      index={index}
                      subIndex={fieldIndex}
                      field={field}
                      formFields={formFields}
                      setFormFields={setFormFields}
                      updateFormField={updateFormField}
                      openEditDialog={openEditDialog}
                    />
                  ))}
                </AnimatePresence>
              </Reorder.Group>
            ) : (
              <FieldItem
                field={item}
                index={index}
                formFields={formFields}
                setFormFields={setFormFields}
                updateFormField={updateFormField}
                openEditDialog={openEditDialog}
              />
            )}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  )
}
