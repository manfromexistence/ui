import { cn } from "@/lib/utils";
import { readComponentSource } from "./read-component-source";
import { CopyButton } from "@/components/copy-button";
import { Suspense, lazy } from 'react';

export default function DemoComponent({
  directory,
  componentName,
  className,
}: {
  directory: string;
  componentName: string;
  className?: string;
}) {
  const source = readComponentSource(directory, componentName); // Removed await here

  const DynamicComponent = lazy(() => 
    import(`@/components/${directory}/${componentName}`) 
  );

  return (
    <div className={cn("relative min-h-[200px] w-full rounded-md border", className)}>
      <CopyButton className="absolute right-2 top-2 transition-opacity" value={source || ""} />
      <Suspense fallback={<div>Loading...</div>}> 
        <DynamicComponent /> 
      </Suspense>
    </div>
  );
}