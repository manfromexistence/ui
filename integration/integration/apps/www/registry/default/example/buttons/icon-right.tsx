import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/registry/default/ui/buttons"

export default function ButtonIconRight() {
  return (
    <Button variant="expandIcon" Icon={ArrowRightIcon} iconPlacement="right">
      Icon Right
    </Button>
  )
}
