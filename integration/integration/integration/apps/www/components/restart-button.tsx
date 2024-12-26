import { RotateCcw } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

export default function RestartButton({ className, ...props }: any) {
  return (
    <Button
      size="icon"
      variant="outline"
      className={cn(
        "z-10 h-7 w-7 text-foreground opacity-100 hover:bg-muted hover:text-foreground ",
        className
      )}
    >
      <RotateCcw className="h-3 w-3" />
      <span className="sr-only">Restart</span>
    </Button>
  )
}
