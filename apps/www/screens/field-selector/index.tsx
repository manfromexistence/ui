import React from 'react'

import { fieldTypes } from '@/constants'
import { Button } from '@/components/ui/button'
import If from '@/components/ui/if'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from "@/registry/default/ui/scroll-area"

type FieldSelectorProps = {
  addFormField: (variant: string, index?: number) => void
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  addFormField,
}) => {
  return (
    <ScrollArea className="flex min-w-full flex-col p-2">
      {fieldTypes.map((variant) => (
        <div className="mt-2 flex items-center justify-center" key={variant.name}>
          <Button
            key={variant.name}
            variant="outline"
            onClick={() => addFormField(variant.name, variant.index)}
            className="rounded-full"
            size="sm"
          >
            {variant.name}
            <If
              condition={variant.isNew}
              render={() => (
                <Badge variant={'new'} className='ml-1 p-1 text-[10px] md:hidden'>
                  New
                </Badge>
              )}
            />
          </Button>
          {/* <If
            condition={variant.isNew}
            render={() => (
              <Badge variant={'new'} className='ml-1 hidden p-1 text-[10px] md:block'>
                New
              </Badge>
            )}
          /> */}
        </div>
      ))}
      <Link className='flex items-center justify-center' href="https://shadcnform.featurebase.app/" target="_blank">
        <Button className="mx-auto mt-2 rounded-full" size="sm">
          Request
        </Button>
      </Link>
    </ScrollArea >
  )
}
