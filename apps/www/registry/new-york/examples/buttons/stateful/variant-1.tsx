import { StatefulButton_1 } from "@/registry/default/ui/button-stateful-variant-1"

export function StatefulButton_1_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <StatefulButton_1 variant={"default"} />
      <StatefulButton_1 variant={"outline"} />
      <StatefulButton_1 variant={"secondary"} />
      <StatefulButton_1 variant={"ghost"} />
    </div>
  )
}
