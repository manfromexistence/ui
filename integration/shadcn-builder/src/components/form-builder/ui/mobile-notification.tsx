import { AlertCircle } from "lucide-react";

export function MobileNotification() {
  return (
    <div className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center space-y-4">
        <div className="flex flex-row gap-2 justify-center">
          <AlertCircle className="h-8 w-8 text-primary" />
          <h2 className="text-lg font-semibold">Desktop Version Required</h2>
        </div>
        <p className="text-muted-foreground">
          Please use the desktop version of the application for the best
          experience. The form builder is optimized for larger screens.
        </p>
      </div>
    </div>
  );
}
