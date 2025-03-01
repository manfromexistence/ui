"use client"

import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/registry/new-york/ui/resizable"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, RotateCcw, Search, Settings2 } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import iconSets from "@/data/data.json"
import { usePathname } from 'next/navigation'

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sizeValue, setSizeValue] = useState(24);
  const [strokeWidthValue, setStrokeWidthValue] = useState(2);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const pathname = usePathname();

  // Check if we're on the main icons page or a specific icon set page
  const isMainIconsPage = pathname === '/icons';

  return (
    <>
      <SiteHeader />
      <div className="container-wrapper flex h-[calc(100vh-57px)] w-full">
        <ResizablePanelGroup className="homepage-container" direction="horizontal">
          <ResizablePanel defaultSize={20}>
            <ScrollArea className="h-full w-full border-r p-4">
              <div className="flex w-full flex-col space-y-4 rounded-md border p-4">
                <div className="flex w-full items-center justify-between">
                  <span className="font-mono text-xl font-bold">Customize</span>
                  <RotateCcw className="h-4 w-4" />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex w-full items-center justify-between font-mono text-sm">
                    <span>Size</span>
                    <span>{sizeValue}px</span>
                  </div>
                  <Slider
                    defaultValue={[sizeValue]}
                    max={100}
                    step={1}
                    className={cn("w-full")}
                    onValueChange={(value) => {
                      setSizeValue(value[0]);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex w-full items-center justify-between font-mono text-sm">
                    <span>Stroke Width</span>
                    <span>{strokeWidthValue}px</span>
                  </div>
                  <Slider
                    defaultValue={[strokeWidthValue]}
                    max={100}
                    step={1}
                    className={cn("w-full")}
                    onValueChange={(value) => {
                      setStrokeWidthValue(value[0]);
                    }}
                  />
                </div>
              </div>
              
            </ScrollArea>
          </ResizablePanel>
          <ResizablePanel defaultSize={80}>
            <div className="relative h-16 w-full border-b">
              <Command className="rounded-lg border-none shadow-none  mb-4">
                <CommandInput 
                  placeholder={isMainIconsPage ? "Search icon sets..." : "Search icons..."}
                  className="h-16 rounded-none border-0 ring-0 placeholder:text-primary focus-visible:ring-0"
                  value={inputValue}
                  onValueChange={setInputValue}
                />
                {inputValue.length > 0 && (
                  <CommandList className="absolute top-full left-0 w-full z-50 rounded-t-none bg-background border-y rounded-b-lg">
                    <CommandEmpty>No results found.</CommandEmpty>
                    {isMainIconsPage ? (
                      <CommandGroup heading="">
                        {Object.entries(iconSets)
                          .filter(([_, set]) => 
                            set.name.toLowerCase().includes(inputValue.toLowerCase())
                          )
                          .map(([key, set]) => (
                            <CommandItem
                              key={key}
                              value={set.name}
                              onSelect={() => {
                                window.location.href = `/icons/${key}`;
                              }}
                            >
                              <div className="flex items-center">
                                <span>{set.name}</span>
                                <span className="ml-2 text-xs text-muted-foreground">
                                  ({set.total} icons)
                                </span>
                              </div>
                            </CommandItem>
                          ))}
                      </CommandGroup>
                    ) : (
                      <CommandGroup heading="Icons">
                        {/* This will be replaced with icon search logic for specific icon set */}
                        <CommandEmpty>Icon search to be implemented</CommandEmpty>
                      </CommandGroup>
                    )}
                  </CommandList>
                )}
              </Command>
              <div className="absolute right-3 top-1/2 flex translate-y-[-50%] space-x-2">
                <Select>
                  <SelectTrigger className="w-20 text-sm">
                    <SelectValue placeholder="Svg" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Copy Method</SelectLabel>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="vue">Vue</SelectItem>
                      <SelectItem value="gastby">Gastby</SelectItem>
                      <SelectItem value="nue">Nue</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="h-9">
                  <Settings2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <ScrollArea className="h-full w-full p-4">
              {children}
            </ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  )
}