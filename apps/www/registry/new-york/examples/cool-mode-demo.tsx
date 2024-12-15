import { Button } from "@/registry/new-york/ui/button"
import { CoolMode } from "@/registry/new-york/ui/cool-mode"

export default function CoolModeDemo() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button>Click Me!</Button>
      </CoolMode>
    </div>
  )
}
