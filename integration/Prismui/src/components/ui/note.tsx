import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

interface NoteProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "warning" | "info" | "success";
}

const icons = {
  default: AlertCircle,
  warning: AlertCircle,
  info: Info,
  success: CheckCircle2,
};

export function Note({
  children,
  variant = "default",
  className,
  ...props
}: NoteProps) {
  const Icon = icons[variant];

  return (
    <div
      className={cn(
        "mt-6 flex gap-2 rounded-lg border border-border bg-muted/50 p-4",
        {
          "border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/50":
            variant === "warning",
          "border-blue-500/50 bg-blue-50 dark:bg-blue-950/50":
            variant === "info",
          "border-green-500/50 bg-green-50 dark:bg-green-950/50":
            variant === "success",
        },
        className
      )}
      {...props}
    >
      <Icon className="h-5 w-5 text-muted-foreground" />
      <div className="text-sm text-muted-foreground [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
