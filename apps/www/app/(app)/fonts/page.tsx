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
import { Plus } from "lucide-react"

export default function IconPage() {
    return (
        // <div className="flex h-screen w-full">
        //     <ResizablePanelGroup direction="horizontal">
        //         <ResizablePanel defaultSize={20}>
        //             <ScrollArea className="h-full w-full p-4">
        //                 <div className="flex w-full justify-between rounded-md p-3 hover:bg-primary-foreground">
        //                     <span className="font-mono text-sm">Lucide Icons</span>
        //                 </div>
        //             </ScrollArea>
        //         </ResizablePanel>
        //         <ResizableHandle />
        //         <ResizablePanel defaultSize={80}>
        //             <div className="relative h-16 w-full border-b">
        //                 <Input type="text" placeholder="Search Icons" className="h-full w-full rounded-none border-0 ring-0 placeholder:text-primary focus-visible:ring-0" />
        //                 <div className="absolute right-3 top-1/2 flex translate-y-[-50%] space-x-2">
        //                     <Select>
        //                         <SelectTrigger className="w-20 text-sm">
        //                             <SelectValue placeholder="Svg" />
        //                         </SelectTrigger>
        //                         <SelectContent>
        //                             <SelectGroup>
        //                                 <SelectLabel>Copy Method</SelectLabel>
        //                                 <SelectItem value="react">React</SelectItem>
        //                                 <SelectItem value="angular">Angular</SelectItem>
        //                                 <SelectItem value="vue">Vue</SelectItem>
        //                                 <SelectItem value="gastby">Gastby</SelectItem>
        //                                 <SelectItem value="nue">Nue</SelectItem>
        //                             </SelectGroup>
        //                         </SelectContent>
        //                     </Select>
        //                     <Select>
        //                         <SelectTrigger className="w-32 text-sm">
        //                             <SelectValue placeholder="Lucide Icons" />
        //                         </SelectTrigger>
        //                         <SelectContent>
        //                             <SelectGroup>
        //                                 <SelectLabel>Search In</SelectLabel>
        //                                 <SelectItem value="lucide-icons">Lucide Icons</SelectItem>
        //                                 <SelectItem value="angular">Angular</SelectItem>
        //                                 <SelectItem value="vue">Vue</SelectItem>
        //                                 <SelectItem value="gastby">Gastby</SelectItem>
        //                                 <SelectItem value="nue">Nue</SelectItem>
        //                             </SelectGroup>
        //                         </SelectContent>
        //                     </Select>
        //                 </div>

        //             </div>
        //             <ScrollArea className="h-full w-full p-4">
        //                 <div className="flex h-16 w-16 items-center justify-center rounded-md border">
        //                     <Plus className="h-5 w-5" />
        //                 </div>
        //             </ScrollArea>
        //         </ResizablePanel>
        //     </ResizablePanelGroup>
        // </div>
        <div className="container-wrapper">
            <div className="container flex h-screen items-center justify-center text-lg">
                Fonts are coming...
            </div>
        </div>
    )
}