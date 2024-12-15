import { FaPlus } from "react-icons/fa6"

import { Separators } from "@/registry/new-york/ui/separators"

export default function SeparatorsDemo() {
  return (
    <div className="flex-col-center min-w-full gap-12 pt-6">
      <Separators gradient />
      <Separators />
      <Separators label={<span className="px-2">Section</span>} gradient />
      <Separators label={<span className="px-2">Section</span>} />
      <Separators
        label={
          <div className="rounded-full border border-dashed px-4 py-1">
            Section
          </div>
        }
        gradient
      />
      <Separators
        label={<div className="rounded-full border px-4 py-1">Section</div>}
      />
      <Separators
        label={
          <div className="rounded-full border px-12 py-2">
            <FaPlus />
          </div>
        }
        gradient
      />
    </div>
  )
}
