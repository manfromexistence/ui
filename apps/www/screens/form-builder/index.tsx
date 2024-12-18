'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'

import { FormFieldType } from '@/types'
import { defaultFieldConfig } from '@/constants'
import { useMediaQuery } from '@/hooks/use-media-query'
import If from '@/components/ui/if'
import SpecialComponentsNotice from '@/components/playground/special-component-notice'
import { FieldSelector } from '@/screens/field-selector'
import { FormFieldList } from '@/screens/form-field-list'
import { FormPreview } from '@/screens/form-preview'
import { EditFieldDialog } from '@/screens/edit-field-dialog'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/default/ui/resizable"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import EmptyListImage from '@/assets/oc-thinking.png'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'

export type FormFieldOrGroup = FormFieldType | FormFieldType[]

export default function FormBuilder() {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  const [formFields, setFormFields] = useState<FormFieldOrGroup[]>([])
  const [selectedField, setSelectedField] = useState<FormFieldType | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addFormField = (variant: string, index: number) => {
    const newFieldName = `name_${Math.random().toString().slice(-10)}`

    const { label, description, placeholder } = defaultFieldConfig[variant] || {
      label: '',
      description: '',
      placeholder: '',
    }

    const newField: FormFieldType = {
      checked: true,
      description: description || '',
      disabled: false,
      label: label || newFieldName,
      name: newFieldName,
      onChange: () => { },
      onSelect: () => { },
      placeholder: placeholder || 'Placeholder',
      required: true,
      rowIndex: index,
      setValue: () => { },
      type: '',
      value: '',
      variant,
    }
    setFormFields([...formFields, newField])
  }

  const findFieldPath = (
    fields: FormFieldOrGroup[],
    name: string,
  ): number[] | null => {
    const search = (
      currentFields: FormFieldOrGroup[],
      currentPath: number[],
    ): number[] | null => {
      for (let i = 0; i < currentFields.length; i++) {
        const field = currentFields[i]
        if (Array.isArray(field)) {
          const result = search(field, [...currentPath, i])
          if (result) return result
        } else if (field.name === name) {
          return [...currentPath, i]
        }
      }
      return null
    }
    return search(fields, [])
  }

  const updateFormField = (path: number[], updates: Partial<FormFieldType>) => {
    const updatedFields = JSON.parse(JSON.stringify(formFields)) // Deep clone
    let current: any = updatedFields
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]]
    }
    current[path[path.length - 1]] = {
      ...current[path[path.length - 1]],
      ...updates,
    }
    setFormFields(updatedFields)
  }

  const openEditDialog = (field: FormFieldType) => {
    setSelectedField(field)
    setIsDialogOpen(true)
  }

  const handleSaveField = (updatedField: FormFieldType) => {
    if (selectedField) {
      const path = findFieldPath(formFields, selectedField.name)
      if (path) {
        updateFormField(path, updatedField)
      }
    }
    setIsDialogOpen(false)
  }

  const FieldSelectorWithSeparator = ({
    addFormField,
  }: {
    addFormField: (variant: string, index?: number) => void
  }) => (
    <div className="flex-1">
      <FieldSelector addFormField={addFormField} />
    </div>
  )

  return (
    <section className="w-full">
      <If
        condition={formFields.length > 0}
        render={() => (
          <div className="container-wrapper h-full w-full">
            <div className="container">
              <ResizablePanelGroup
                direction="horizontal"
                className="min-h-[99vh] w-full"
              >
                <ResizablePanel defaultSize={30}>
                  <div className="h-full">
                    <FieldSelectorWithSeparator
                      addFormField={(variant: string, index: number = 0) =>
                        addFormField(variant, index)
                      }
                    />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full p-4">
                    <FormFieldList
                      formFields={formFields}
                      setFormFields={setFormFields}
                      updateFormField={updateFormField}
                      openEditDialog={openEditDialog}
                    />
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={45}>
                  <div className="flex h-full items-center p-4">
                    <div className="col-span-1 h-full w-full space-y-3">
                      {/* <SpecialComponentsNotice formFields={formFields} /> */}
                      <FormPreview formFields={formFields} />
                    </div>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>
        )}
        otherwise={() => (
          <div className="flex w-full flex-col">
            <PageHeader>
              <PageHeaderHeading>Renderers</PageHeaderHeading>
              <PageHeaderDescription>
                Quickly built your desired design that you can copy and paste into your
                apps. Made with Tailwind CSS. Open source.
              </PageHeaderDescription>
              <PageActions>
                <Button asChild size="sm">
                  <Link href="/docs">Documentations</Link>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <Link
                    target="_blank"
                    rel="noreferrer"
                    href="/docs/components"
                  >
                    Components
                  </Link>
                </Button>
              </PageActions>
            </PageHeader>
            <div className="container-wrapper h-full w-full">
              <div className="container py-4">
                <PageHeaderHeading className='flex w-full items-center justify-center'>Supported Items</PageHeaderHeading>
                {/* <PageHeaderDescription className='mt-2 flex min-w-full items-center justify-center'>
                  Click on any of this items to get started!
                </PageHeaderDescription> */}
                <div className="mb-10">
                  <FieldSelector addFormField={(variant: string, index: number = 0) =>
                    addFormField(variant, index)
                  } />
                </div>
              </div>
            </div>
            {/* <FieldSelectorWithSeparator
              addFormField={(variant: string, index: number = 0) =>
                addFormField(variant, index)
              }
            /> */}
            {/* <Image
              src={EmptyListImage}
              width={585}
              height={502}
              alt="Empty Image"
              className="mx-auto object-contain p-5 mix-blend-screen md:p-20"
            /> */}
          </div>
        )}
      />
      <EditFieldDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        field={selectedField}
        onSave={handleSaveField}
      />
    </section>
  )
}
