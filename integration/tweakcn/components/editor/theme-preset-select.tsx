import React, { useCallback, useMemo, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ThemePreset } from "../../types/theme";
import { useEditorStore } from "../../store/editor-store";
import { getPresetThemeStyles } from "../../utils/theme-presets";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Moon,
  Search,
  Shuffle,
  Sun,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "../ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

interface ThemePresetSelectProps {
  presets: Record<string, ThemePreset>;
  currentPreset: string | null;
  onPresetChange: (preset: string) => void;
}

const ColorBox = ({ color }: { color: string }) => {
  return (
    <div
      className="h-3 w-3 rounded-sm border border-muted"
      style={{ backgroundColor: color }}
    />
  );
};

const isThemeNew = (preset: ThemePreset) => {
  if (!preset.createdAt) return false;
  const createdAt = new Date(preset.createdAt);
  const timePeriod = new Date();
  timePeriod.setDate(timePeriod.getDate() - 5);
  return createdAt > timePeriod;
};

const ThemePresetSelect: React.FC<ThemePresetSelectProps> = ({
  presets,
  currentPreset,
  onPresetChange,
}) => {
  const { themeState } = useEditorStore();
  const { hasChangedThemeFromDefault } = useEditorStore();
  const { theme, toggleTheme } = useTheme();
  const mode = themeState.currentMode;
  const [search, setSearch] = useState("");

  const presetNames = useMemo(
    () => ["default", ...Object.keys(presets)],
    [presets]
  );
  const value = presetNames?.find((name) => name === currentPreset);
  const currentIndex =
    useMemo(
      () => presetNames.indexOf(value || "default"),
      [presetNames, value]
    ) ?? 0;

  const randomize = useCallback(() => {
    const random = Math.floor(Math.random() * presetNames.length);
    onPresetChange(presetNames[random]);
  }, [onPresetChange, presetNames]);

  const cycleTheme = useCallback(
    (direction: "prev" | "next") => {
      const newIndex =
        direction === "next"
          ? (currentIndex + 1) % presetNames.length
          : (currentIndex - 1 + presetNames.length) % presetNames.length;
      onPresetChange(presetNames[newIndex]);
    },
    [currentIndex, presetNames, onPresetChange]
  );

  const filteredPresets = useMemo(() => {
    const filteredList =
      search.trim() === ""
        ? presetNames
        : presetNames.filter((name) =>
            name.toLowerCase().includes(search.toLowerCase())
          );

    return filteredList.sort((a, b) => {
      // Sort alphabetically
      const labelA = presets[a]?.label || a;
      const labelB = presets[b]?.label || b;
      return labelA.localeCompare(labelB);
    });
  }, [presetNames, search, presets]);

  const handleThemeToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX: x, clientY: y } = event;
    toggleTheme({ x, y });
  };

  return (
    <div className="flex items-center">
      <TooltipProvider>
        <Popover>
          <PopoverTrigger className="bg-muted/10" asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full md:min-w-56 min-h-14 rounded-none justify-between group relative",
                (!value || value === "default") &&
                  !hasChangedThemeFromDefault &&
                  "bg-muted/30 animate-pulse"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-0.5">
                  <ColorBox
                    color={
                      getPresetThemeStyles(value || "default")[mode].primary
                    }
                  />
                  <ColorBox
                    color={
                      getPresetThemeStyles(value || "default")[mode].accent
                    }
                  />
                  <ColorBox
                    color={
                      getPresetThemeStyles(value || "default")[mode].secondary
                    }
                  />
                  <ColorBox
                    color={
                      getPresetThemeStyles(value || "default")[mode].border
                    }
                  />
                </div>
                <span className="capitalize font-medium">
                  {presets[value || "default"]?.label || "default"}
                </span>
              </div>
              <ChevronDown className="size-4 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 w-[300px] ml-4" align="center">
            <Command className="rounded-lg border shadow-md w-full">
              <div className="flex items-center w-full">
                <div className="flex items-center w-full border-b px-3 py-1">
                  <Search className="size-4 shrink-0 opacity-50" />
                  <Input
                    placeholder="Search themes..."
                    className="shadow-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <div className="text-xs text-muted-foreground">
                  {filteredPresets.length} theme
                  {filteredPresets.length !== 1 ? "s" : ""}
                </div>
                <div className="flex gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={handleThemeToggle}
                      >
                        {theme === "light" ? (
                          <Sun className="h-3.5 w-3.5" />
                        ) : (
                          <Moon className="h-3.5 w-3.5" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="text-xs">Toggle theme</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 w-7 p-0"
                        onClick={randomize}
                      >
                        <Shuffle className="h-3.5 w-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p className="text-xs">Random theme</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>
              <Separator />
              <ScrollArea className="h-[500px] max-h-[70vh]">
                <CommandEmpty>No themes found.</CommandEmpty>
                <CommandGroup>
                  {filteredPresets.map((presetName) => (
                    <CommandItem
                      key={presetName}
                      onSelect={() => {
                        onPresetChange(presetName);
                        setSearch("");
                      }}
                      className="flex items-center gap-2 py-2 hover:bg-secondary/50"
                    >
                      <div className="flex gap-0.5 mr-2">
                        <ColorBox
                          color={getPresetThemeStyles(presetName)[mode].primary}
                        />
                        <ColorBox
                          color={getPresetThemeStyles(presetName)[mode].accent}
                        />
                        <ColorBox
                          color={
                            getPresetThemeStyles(presetName)[mode].secondary
                          }
                        />
                        <ColorBox
                          color={getPresetThemeStyles(presetName)[mode].border}
                        />
                      </div>
                      <div className="flex items-center gap-2 flex-1">
                        <span className="capitalize text-sm font-medium">
                          {presets[presetName]?.label || presetName}
                        </span>
                        {presets[presetName] &&
                          isThemeNew(presets[presetName]) && (
                            <Badge
                              variant="secondary"
                              className="text-xs rounded-full"
                            >
                              New
                            </Badge>
                          )}
                      </div>
                      {presetName === value && (
                        <Check className="h-4 w-4 shrink-0 opacity-70" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </ScrollArea>
            </Command>
          </PopoverContent>
        </Popover>
      </TooltipProvider>

      <Separator orientation="vertical" className="h-8" />

      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="size-14 shrink-0 rounded-none bg-muted/10"
            onClick={() => cycleTheme("prev")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Previous theme</TooltipContent>
      </Tooltip>

      <Separator orientation="vertical" className="h-8" />

      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            className="size-14 shrink-0 rounded-none bg-muted/10"
            onClick={() => cycleTheme("next")}
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Next theme</TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ThemePresetSelect;
