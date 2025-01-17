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

export default function IconsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [sizeValue, setSizeValue] = useState([24]);
  const [strokeWidthValue, setStrokeWidthValue] = useState([2]);

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
                    defaultValue={sizeValue}
                    max={100}
                    step={1}
                    className={cn("w-full")}
                    onValueChange={(value) => {
                      setSizeValue(value);
                    }}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="flex w-full items-center justify-between font-mono text-sm">
                    <span>Stroke Width</span>
                    <span>{strokeWidthValue}px</span>
                  </div>
                  <Slider
                    defaultValue={strokeWidthValue}
                    max={100}
                    step={1}
                    className={cn("w-full")}
                    onValueChange={(value) => {
                      setStrokeWidthValue(value);
                    }}
                  />
                </div>

              </div>
              <Link href="/icons/academicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Academicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">158</span>
              </Link>
              <Link href="/icons/akar-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Akar Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">454</span>
              </Link>
              <Link href="/icons/ant-design" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Ant Design Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">830</span>
              </Link>
              <Link href="/icons/arcticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Arcticons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">12053</span>
              </Link>
              <Link href="/icons/basil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Basil</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">493</span>
              </Link>
              <Link href="/icons/bi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Bootstrap Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2050</span>
              </Link>
              <Link href="/icons/bitcoin-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Bitcoin Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">250</span>
              </Link>
              <Link href="/icons/bpmn" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">BPMN</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">112</span>
              </Link>
              <Link href="/icons/brandico" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Brandico</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">45</span>
              </Link>
              <Link href="/icons/bx" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">BoxIcons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">814</span>
              </Link>
              <Link href="/icons/bxl" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">BoxIcons Logo</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">155</span>
              </Link>
              <Link href="/icons/bxs" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">BoxIcons Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">665</span>
              </Link>
              <Link href="/icons/bytesize" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Bytesize Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">101</span>
              </Link>
              <Link href="/icons/carbon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Carbon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2265</span>
              </Link>
              <Link href="/icons/catppuccin" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Catppuccin Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">539</span>
              </Link>
              <Link href="/icons/cbi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Custom Brand Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1300</span>
              </Link>
              <Link href="/icons/charm" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Charm Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">261</span>
              </Link>
              <Link href="/icons/ci" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">coolicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">442</span>
              </Link>
              <Link href="/icons/cib" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">CoreUI Brands</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">830</span>
              </Link>
              <Link href="/icons/cif" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">CoreUI Flags</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">199</span>
              </Link>
              <Link href="/icons/cil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">CoreUI Free</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">554</span>
              </Link>
              <Link href="/icons/circle-flags" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Circle Flags</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">434</span>
              </Link>
              <Link href="/icons/circum" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Circum Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">288</span>
              </Link>
              <Link href="/icons/clarity" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Clarity</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1103</span>
              </Link>
              <Link href="/icons/codex" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">CodeX Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">78</span>
              </Link>
              <Link href="/icons/codicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Codicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">467</span>
              </Link>
              <Link href="/icons/covid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Covid Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">142</span>
              </Link>
              <Link href="/icons/cryptocurrency" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Cryptocurrency Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">483</span>
              </Link>
              <Link href="/icons/cryptocurrency-color" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Cryptocurrency Color Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">483</span>
              </Link>
              <Link href="/icons/cuida" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Cuida Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">164</span>
              </Link>
              <Link href="/icons/dashicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Dashicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">342</span>
              </Link>
              <Link href="/icons/devicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Devicon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">849</span>
              </Link>
              <Link href="/icons/devicon-plain" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Devicon Plain</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">623</span>
              </Link>
              <Link href="/icons/duo-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Duoicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">91</span>
              </Link>
              <Link href="/icons/ei" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Evil Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">70</span>
              </Link>
              <Link href="/icons/el" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Elusive Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">304</span>
              </Link>
              <Link href="/icons/emojione" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Emoji One (Colored)</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1834</span>
              </Link>
              <Link href="/icons/emojione-monotone" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Emoji One (Monotone)</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1403</span>
              </Link>
              <Link href="/icons/emojione-v1" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Emoji One (v1)</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1262</span>
              </Link>
              <Link href="/icons/entypo" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Entypo+</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">321</span>
              </Link>
              <Link href="/icons/entypo-social" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Entypo+ Social</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">76</span>
              </Link>
              <Link href="/icons/eos-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">EOS Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">253</span>
              </Link>
              <Link href="/icons/ep" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Element Plus</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">293</span>
              </Link>
              <Link href="/icons/et" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Elegant</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">100</span>
              </Link>
              <Link href="/icons/eva" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Eva Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">490</span>
              </Link>
              <Link href="/icons/f7" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Framework7 Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1253</span>
              </Link>
              <Link href="/icons/fa" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome 4</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">678</span>
              </Link>
              <Link href="/icons/fa-brands" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome 5 Brands</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">457</span>
              </Link>
              <Link href="/icons/fa-regular" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome 5 Regular</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">151</span>
              </Link>
              <Link href="/icons/fa-solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome 5 Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1001</span>
              </Link>
              <Link href="/icons/fa6-brands" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome Brands</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">495</span>
              </Link>
              <Link href="/icons/fa6-regular" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome Regular</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">163</span>
              </Link>
              <Link href="/icons/fa6-solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font Awesome Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1402</span>
              </Link>
              <Link href="/icons/fad" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">FontAudio</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">155</span>
              </Link>
              <Link href="/icons/famicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Famicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1342</span>
              </Link>
              <Link href="/icons/fe" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Feather Icon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">255</span>
              </Link>
              <Link href="/icons/feather" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Feather Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">286</span>
              </Link>
              <Link href="/icons/file-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">File Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">930</span>
              </Link>
              <Link href="/icons/flag" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Flag Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">540</span>
              </Link>
              <Link href="/icons/flagpack" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Flagpack</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">255</span>
              </Link>
              <Link href="/icons/flat-color-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Flat Color Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">329</span>
              </Link>
              <Link href="/icons/flat-ui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Flat UI Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">100</span>
              </Link>
              <Link href="/icons/flowbite" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Flowbite Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">654</span>
              </Link>
              <Link href="/icons/fluent" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent UI System Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">17169</span>
              </Link>
              <Link href="/icons/fluent-color" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent UI System Color Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">370</span>
              </Link>
              <Link href="/icons/fluent-emoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent Emoji</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3126</span>
              </Link>
              <Link href="/icons/fluent-emoji-flat" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent Emoji Flat</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3145</span>
              </Link>
              <Link href="/icons/fluent-emoji-high-contrast" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent Emoji High Contrast</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1595</span>
              </Link>
              <Link href="/icons/fluent-mdl2" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fluent UI MDL2</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1735</span>
              </Link>
              <Link href="/icons/fontelico" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fontelico</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">34</span>
              </Link>
              <Link href="/icons/fontisto" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Fontisto</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">615</span>
              </Link>
              <Link href="/icons/formkit" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">FormKit Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">144</span>
              </Link>
              <Link href="/icons/foundation" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Foundation</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">283</span>
              </Link>
              <Link href="/icons/fxemoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Firefox OS Emoji</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1034</span>
              </Link>
              <Link href="/icons/gala" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Gala Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">51</span>
              </Link>
              <Link href="/icons/game-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Game Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4102</span>
              </Link>
              <Link href="/icons/garden" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Garden SVG Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">987</span>
              </Link>
              <Link href="/icons/geo" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">GeoGlyphs</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">30</span>
              </Link>
              <Link href="/icons/gg" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">css.gg</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">704</span>
              </Link>
              <Link href="/icons/gis" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Font-GIS</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">367</span>
              </Link>
              <Link href="/icons/gravity-ui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Gravity UI Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">677</span>
              </Link>
              <Link href="/icons/gridicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Gridicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">207</span>
              </Link>
              <Link href="/icons/grommet-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Grommet Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">634</span>
              </Link>
              <Link href="/icons/guidance" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Guidance</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">360</span>
              </Link>
              <Link href="/icons/healthicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Health Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1774</span>
              </Link>
              <Link href="/icons/heroicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">HeroIcons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1288</span>
              </Link>
              <Link href="/icons/heroicons-outline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">HeroIcons v1 Outline</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
              </Link>
              <Link href="/icons/heroicons-solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">HeroIcons v1 Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
              </Link>
              <Link href="/icons/hugeicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Huge Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4151</span>
              </Link>
              <Link href="/icons/humbleicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Humbleicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">252</span>
              </Link>
              <Link href="/icons/ic" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Google Material Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">10955</span>
              </Link>
              <Link href="/icons/icomoon-free" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IcoMoon Free</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">491</span>
              </Link>
              <Link href="/icons/icon-park" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IconPark</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2658</span>
              </Link>
              <Link href="/icons/icon-park-outline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IconPark Outline</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2658</span>
              </Link>
              <Link href="/icons/icon-park-solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IconPark Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1947</span>
              </Link>
              <Link href="/icons/icon-park-twotone" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IconPark TwoTone</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1944</span>
              </Link>
              <Link href="/icons/iconamoon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IconaMoon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1781</span>
              </Link>
              <Link href="/icons/iconoir" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Iconoir</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1671</span>
              </Link>
              <Link href="/icons/icons8" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Icons8 Windows 10 Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">234</span>
              </Link>
              <Link href="/icons/il" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Icalicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">84</span>
              </Link>
              <Link href="/icons/ion" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">IonIcons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1356</span>
              </Link>
              <Link href="/icons/iwwa" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Innowatio Font</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">105</span>
              </Link>
              <Link href="/icons/ix" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Siemens Industrial Experience Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">815</span>
              </Link>
              <Link href="/icons/jam" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Jam Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">940</span>
              </Link>
              <Link href="/icons/la" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Line Awesome</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1544</span>
              </Link>
              <Link href="/icons/lets-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Lets Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1528</span>
              </Link>
              <Link href="/icons/line-md" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Line Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1089</span>
              </Link>
              <Link href="/icons/lineicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Lineicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">606</span>
              </Link>
              <Link href="/icons/logos" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">SVG Logos</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1838</span>
              </Link>
              <Link href="/icons/ls" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Ligature Symbols</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">348</span>
              </Link>
              <Link href="/icons/lsicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Lsicon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">716</span>
              </Link>
              <Link href="/icons/lucide" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Lucide</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1546</span>
              </Link>
              <Link href="/icons/lucide-lab" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Lucide Lab</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">373</span>
              </Link>
              <Link href="/icons/mage" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Mage Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1042</span>
              </Link>
              <Link href="/icons/majesticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Majesticons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">760</span>
              </Link>
              <Link href="/icons/maki" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Maki</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">214</span>
              </Link>
              <Link href="/icons/map" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Map Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">167</span>
              </Link>
              <Link href="/icons/marketeq" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Marketeq</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">590</span>
              </Link>
              <Link href="/icons/material-symbols" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Symbols</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">13715</span>
              </Link>
              <Link href="/icons/material-symbols-light" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Symbols Light</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">13781</span>
              </Link>
              <Link href="/icons/mdi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Design Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">7447</span>
              </Link>
              <Link href="/icons/mdi-light" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Design Light</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">284</span>
              </Link>
              <Link href="/icons/medical-icon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Medical Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">144</span>
              </Link>
              <Link href="/icons/memory" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Memory Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">651</span>
              </Link>
              <Link href="/icons/meteocons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Meteocons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">447</span>
              </Link>
              <Link href="/icons/meteor-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Meteor Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">321</span>
              </Link>
              <Link href="/icons/mi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Mono Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">180</span>
              </Link>
              <Link href="/icons/mingcute" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">MingCute Icon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3098</span>
              </Link>
              <Link href="/icons/mono-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Mono Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">180</span>
              </Link>
              <Link href="/icons/mynaui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Myna UI Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2382</span>
              </Link>
              <Link href="/icons/nimbus" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Nimbus</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">140</span>
              </Link>
              <Link href="/icons/nonicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Nonicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">69</span>
              </Link>
              <Link href="/icons/noto" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Noto Emoji</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3562</span>
              </Link>
              <Link href="/icons/noto-v1" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Noto Emoji (v1)</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2162</span>
              </Link>
              <Link href="/icons/nrk" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">NRK Core Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
              </Link>
              <Link href="/icons/octicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Octicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">645</span>
              </Link>
              <Link href="/icons/oi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Open Iconic</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">223</span>
              </Link>
              <Link href="/icons/ooui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">OOUI</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">360</span>
              </Link>
              <Link href="/icons/openmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">OpenMoji</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4174</span>
              </Link>
              <Link href="/icons/oui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">OpenSearch UI</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">402</span>
              </Link>
              <Link href="/icons/pajamas" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Gitlab SVGs</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">385</span>
              </Link>
              <Link href="/icons/pepicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Pepicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">428</span>
              </Link>
              <Link href="/icons/pepicons-pencil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Pepicons Pencil</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
              </Link>
              <Link href="/icons/pepicons-pop" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Pepicons Pop!</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
              </Link>
              <Link href="/icons/pepicons-print" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Pepicons Print</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
              </Link>
              <Link href="/icons/ph" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Phosphor</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">9072</span>
              </Link>
              <Link href="/icons/pixelarticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Pixelarticons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">486</span>
              </Link>
              <Link href="/icons/prime" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Prime Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">313</span>
              </Link>
              <Link href="/icons/proicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">ProIcons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">473</span>
              </Link>
              <Link href="/icons/ps" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">PrestaShop Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">479</span>
              </Link>
              <Link href="/icons/qlementine-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Qlementine Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">437</span>
              </Link>
              <Link href="/icons/quill" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Quill Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">140</span>
              </Link>
              <Link href="/icons/radix-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Radix Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">318</span>
              </Link>
              <Link href="/icons/raphael" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Raphael</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">266</span>
              </Link>
              <Link href="/icons/ri" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Remix Icon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3058</span>
              </Link>
              <Link href="/icons/rivet-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Rivet Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">210</span>
              </Link>
              <Link href="/icons/si" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Sargam Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">924</span>
              </Link>
              <Link href="/icons/si-glyph" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">SmartIcons Glyph</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">799</span>
              </Link>
              <Link href="/icons/simple-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Simple Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3253</span>
              </Link>
              <Link href="/icons/simple-line-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Simple line icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">189</span>
              </Link>
              <Link href="/icons/skill-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Skill Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">397</span>
              </Link>
              <Link href="/icons/solar" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Solar</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">7401</span>
              </Link>
              <Link href="/icons/stash" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Stash Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">982</span>
              </Link>
              <Link href="/icons/streamline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Streamline</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2000</span>
              </Link>
              <Link href="/icons/streamline-emojis" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Streamline Emojis</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">787</span>
              </Link>
              <Link href="/icons/subway" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Subway Icon Set</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">306</span>
              </Link>
              <Link href="/icons/svg-spinners" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">SVG Spinners</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">46</span>
              </Link>
              <Link href="/icons/system-uicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">System UIcons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">430</span>
              </Link>
              <Link href="/icons/tabler" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Tabler Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">5826</span>
              </Link>
              <Link href="/icons/tdesign" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">TDesign Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2116</span>
              </Link>
              <Link href="/icons/teenyicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Teenyicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1200</span>
              </Link>
              <Link href="/icons/token" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Web3 Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1773</span>
              </Link>
              <Link href="/icons/token-branded" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Web3 Icons Branded</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1962</span>
              </Link>
              <Link href="/icons/topcoat" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">TopCoat Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">89</span>
              </Link>
              <Link href="/icons/twemoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Twitter Emoji</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3668</span>
              </Link>
              <Link href="/icons/typcn" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Typicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">336</span>
              </Link>
              <Link href="/icons/uil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Unicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1215</span>
              </Link>
              <Link href="/icons/uim" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Unicons Monochrome</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">298</span>
              </Link>
              <Link href="/icons/uis" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Unicons Solid</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">190</span>
              </Link>
              <Link href="/icons/uit" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Unicons Thin Line</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">216</span>
              </Link>
              <Link href="/icons/uiw" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">uiw icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">214</span>
              </Link>
              <Link href="/icons/unjs" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">UnJS Logos</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">63</span>
              </Link>
              <Link href="/icons/vaadin" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Vaadin Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">636</span>
              </Link>
              <Link href="/icons/vs" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Vesper Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">159</span>
              </Link>
              <Link href="/icons/vscode-icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">VSCode Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1331</span>
              </Link>
              <Link href="/icons/websymbol" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Web Symbols Liga</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">85</span>
              </Link>
              <Link href="/icons/weui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">WeUI Icon</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">162</span>
              </Link>
              <Link href="/icons/whh" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">WebHostingHub Glyphs</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2125</span>
              </Link>
              <Link href="/icons/wi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Weather Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">219</span>
              </Link>
              <Link href="/icons/wpf" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Icons8 Windows 8 Icons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">200</span>
              </Link>
              <Link href="/icons/zmdi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Material Design Iconic Font</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">777</span>
              </Link>
              <Link href="/icons/zondicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                <span className="font-mono text-sm">Zondicons</span>
                <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">297</span>
              </Link>
            </ScrollArea>
          </ResizablePanel>
          {/* <ResizableHandle /> */}
          <ResizablePanel defaultSize={80}>
            <div className="relative h-16 w-full border-b">
              <Search className="absolute left-3 top-1/2 h-4 w-4 translate-y-[-50%]" />
              <Input type="text" placeholder="Search Icons" className="ml-6 h-full w-full rounded-none border-0 ring-0 placeholder:text-primary focus-visible:ring-0" />
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
                {/* <Select>
                                <SelectTrigger className="w-32 text-sm">
                                    <SelectValue placeholder="Lucide Icons" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Search In</SelectLabel>
                                        <SelectItem value="lucide-icons">Lucide Icons</SelectItem>
                                        <SelectItem value="angular">Angular</SelectItem>
                                        <SelectItem value="vue">Vue</SelectItem>
                                        <SelectItem value="gastby">Gastby</SelectItem>
                                        <SelectItem value="nue">Nue</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select> */}
                <Button variant="outline" className="h-9"><Settings2 className="h-4 w-4" /></Button>
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