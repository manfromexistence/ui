"use client";

import { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";

interface IconData {
  body: string;
}

interface IconsGridProps {
  icons: { [key: string]: IconData };
  width?: number;
  height?: number;
}

export default function IconGrid({
  icons: initialIcons,
  width = 24,
  height = 24,
}: IconsGridProps) {
  const [icons, setIcons] = useState<{ [key: string]: IconData }>(initialIcons);

  useEffect(() => {
    const handleLoadMore = (event: CustomEvent<{ [key: string]: IconData }>) => {
      setIcons((prevIcons) => ({
        ...prevIcons,
        ...event.detail,
      }));
    };

    window.addEventListener("loadMoreIcons", handleLoadMore as EventListener);

    return () => {
      window.removeEventListener("loadMoreIcons", handleLoadMore as EventListener);
    };
  }, []);

  const handleCopyClick = async (iconName: string, icon: IconData) => {
    try {
      const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
              ${icon.body}
            </svg>`;

      await navigator.clipboard.writeText(svgContent);
      toast.success("Copied!", {
        description: `${iconName} SVG copied to clipboard`,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy", {
        description: "Could not copy SVG to clipboard",
      });
    }
  };

  return (
    <div className="grid-cols-17 grid gap-2">
      {Object.entries(icons).map(([iconName, icon]) => {
        const hasFill = !icon.body.includes('fill="none"');
        const hasStroke = icon.body.includes('stroke=');

        return (
          <TooltipProvider key={iconName} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className="group relative flex h-10 w-10 flex-col items-center justify-center rounded-lg transition-colors hover:bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  onClick={() => handleCopyClick(iconName, icon)}
                  aria-label={`Copy ${iconName} icon`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox={`0 0 ${width} ${height}`}
                    className="h-5 w-5 text-foreground"
                    style={{
                      fill: hasFill ? "currentColor" : "none",
                      stroke: hasStroke ? "currentColor" : "none",
                      strokeWidth: hasStroke ? "2" : undefined,
                    }}
                    dangerouslySetInnerHTML={{ __html: icon.body }}
                  />
                </button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[200px] text-center">
                <p className="text-sm">{iconName}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
}