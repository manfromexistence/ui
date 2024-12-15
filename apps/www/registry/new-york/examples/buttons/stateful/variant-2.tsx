import { StatefulButton_2 } from "@/registry/new-york/ui/button-stateful-variant-2"

export function StatefulButton_2_Demo() {
  return (
    <div className="flex items-center space-x-2">
      <StatefulButton_2 variant={"default"} />
      <StatefulButton_2 variant={"outline"} />
      <StatefulButton_2 variant={"secondary"} />
      <StatefulButton_2 variant={"ghost"} />
    </div>
  )
}
