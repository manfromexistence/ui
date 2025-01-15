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

export default function IconPage() {

    const [sizeValue, setSizeValue] = useState([24]);
    const [strokeWidthValue, setStrokeWidthValue] = useState([2]);

    return (
        <div className="flex h-screen w-full">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20}>
                    <ScrollArea className="h-full w-full p-4">
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
                        <Link href="/icons/materialSymbols" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Material Symbols</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">13715</span>
                        </Link>
                        <Link href="/icons/materialSymbolsLight" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Material Symbols Light</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">13781</span>
                        </Link>
                        <Link href="/icons/googleMaterialIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Google Material Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">10955</span>
                        </Link>
                        <Link href="/icons/materialDesignIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Material Design Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">7447</span>
                        </Link>
                        <Link href="/icons/materialDesignLight" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Material Design Light</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">284</span>
                        </Link>
                        <Link href="/icons/materialLineIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Material Line Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1087</span>
                        </Link>
                        <Link href="/icons/solar" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Solar</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">7401</span>
                        </Link>
                        <Link href="/icons/tablerIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Tabler Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">5790</span>
                        </Link>
                        <Link href="/icons/hugeIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Huge Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3929</span>
                        </Link>
                        <Link href="/icons/mingcuteIcon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">MingCute Icon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3040</span>
                        </Link>
                        <Link href="/icons/remixIcon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Remix Icon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3020</span>
                        </Link>
                        <Link href="/icons/mynaUiIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Myna UI Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2382</span>
                        </Link>
                        <Link href="/icons/iconamoon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IconaMoon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1781</span>
                        </Link>
                        <Link href="/icons/iconoir" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Iconoir</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1628</span>
                        </Link>
                        <Link href="/icons/lucide" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Lucide</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1544</span>
                        </Link>
                        <Link href="/icons/lucideLab" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Lucide Lab</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">373</span>
                        </Link>
                        <Link href="/icons/unicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Unicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1206</span>
                        </Link>
                        <Link href="/icons/tdesignIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">TDesign Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2114</span>
                        </Link>
                        <Link href="/icons/sargamIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Sargam Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">924</span>
                        </Link>
                        <Link href="/icons/boxicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">BoxIcons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">814</span>
                        </Link>
                        <Link href="/icons/boxiconsSolid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">BoxIcons Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">665</span>
                        </Link>
                        <Link href="/icons/majesticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Majesticons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">760</span>
                        </Link>
                        <Link href="/icons/css.gg" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">css.gg</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">704</span>
                        </Link>
                        <Link href="/icons/flowbiteIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Flowbite Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">585</span>
                        </Link>
                        <Link href="/icons/basil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Basil</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">493</span>
                        </Link>
                        <Link href="/icons/pixelarticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Pixelarticons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">486</span>
                        </Link>
                        <Link href="/icons/akarIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Akar Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">454</span>
                        </Link>
                        <Link href="/icons/coolicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">coolicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">442</span>
                        </Link>
                        <Link href="/icons/proicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">ProIcons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">474</span>
                        </Link>
                        <Link href="/icons/typicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Typicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">336</span>
                        </Link>
                        <Link href="/icons/meteorIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Meteor Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">321</span>
                        </Link>
                        <Link href="/icons/primeIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Prime Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">313</span>
                        </Link>
                        <Link href="/icons/circumIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Circum Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">288</span>
                        </Link>
                        <Link href="/icons/featherIcon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Feather Icon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">255</span>
                        </Link>
                        <Link href="/icons/eosIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">EOS Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">253</span>
                        </Link>
                        <Link href="/icons/bitcoinIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Bitcoin Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">250</span>
                        </Link>
                        <Link href="/icons/humbleicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Humbleicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">251</span>
                        </Link>
                        <Link href="/icons/uniconsMonochrome" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Unicons Monochrome</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">296</span>
                        </Link>
                        <Link href="/icons/uniconsThinLine" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Unicons Thin Line</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">214</span>
                        </Link>
                        <Link href="/icons/uniconsSolid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Unicons Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">189</span>
                        </Link>
                        <Link href="/icons/gridicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Gridicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">207</span>
                        </Link>
                        <Link href="/icons/monoIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Mono Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">180</span>
                        </Link>
                        <Link href="/icons/cuidaIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Cuida Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">164</span>
                        </Link>
                        <Link href="/icons/weuiIcon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">WeUI Icon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">162</span>
                        </Link>
                        <Link href="/icons/duoicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Duoicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">91</span>
                        </Link>
                        <Link href="/icons/svgSpinners" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">SVG Spinners</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">46</span>
                        </Link>
                        <Link href="/icons/letsIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Lets Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1528</span>
                        </Link>
                        <Link href="/icons/mageIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Mage Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1042</span>
                        </Link>
                        <Link href="/icons/stashIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Stash Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">982</span>
                        </Link>
                        <Link href="/icons/lineicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Lineicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">606</span>
                        </Link>
                        <Link href="/icons/iconparkOutline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IconPark Outline</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2658</span>
                        </Link>
                        <Link href="/icons/iconparkSolid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IconPark Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1947</span>
                        </Link>
                        <Link href="/icons/iconparkTwotone" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IconPark TwoTone</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1944</span>
                        </Link>
                        <Link href="/icons/jamIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Jam Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">940</span>
                        </Link>
                        <Link href="/icons/guidance" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Guidance</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">360</span>
                        </Link>
                        <Link href="/icons/carbon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Carbon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2265</span>
                        </Link>
                        <Link href="/icons/ionicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IonIcons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1356</span>
                        </Link>
                        <Link href="/icons/antDesignIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Ant Design Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">830</span>
                        </Link>
                        <Link href="/icons/lsicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Lsicon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">716</span>
                        </Link>
                        <Link href="/icons/gravityUiIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Gravity UI Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">677</span>
                        </Link>
                        <Link href="/icons/coreuiFree" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">CoreUI Free</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">554</span>
                        </Link>
                        <Link href="/icons/elementPlus" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Element Plus</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">293</span>
                        </Link>
                        <Link href="/icons/charmIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Charm Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">261</span>
                        </Link>
                        <Link href="/icons/quillIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Quill Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">140</span>
                        </Link>
                        <Link href="/icons/bytesizeIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Bytesize Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">101</span>
                        </Link>
                        <Link href="/icons/bootstrapIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Bootstrap Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2050</span>
                        </Link>
                        <Link href="/icons/rivetIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Rivet Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">210</span>
                        </Link>
                        <Link href="/icons/nimbus" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Nimbus</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">140</span>
                        </Link>
                        <Link href="/icons/formkitIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">FormKit Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">144</span>
                        </Link>
                        <Link href="/icons/fluentUiSystemIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent UI System Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">17169</span>
                        </Link>
                        <Link href="/icons/phosphor" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Phosphor</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">9072</span>
                        </Link>
                        <Link href="/icons/teenyicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Teenyicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1200</span>
                        </Link>
                        <Link href="/icons/clarity" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Clarity</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1103</span>
                        </Link>
                        <Link href="/icons/siemensIndustrialExperienceIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Siemens Industrial Experience Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">815</span>
                        </Link>
                        <Link href="/icons/octicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Octicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">645</span>
                        </Link>
                        <Link href="/icons/memoryIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Memory Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">651</span>
                        </Link>
                        <Link href="/icons/systemUicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">System UIcons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">430</span>
                        </Link>
                        <Link href="/icons/radixIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Radix Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">318</span>
                        </Link>
                        <Link href="/icons/zondicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Zondicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">297</span>
                        </Link>
                        <Link href="/icons/uiwIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">uiw icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">214</span>
                        </Link>
                        <Link href="/icons/maki" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Maki</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">214</span>
                        </Link>
                        <Link href="/icons/evilIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Evil Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">70</span>
                        </Link>
                        <Link href="/icons/heroicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">HeroIcons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1288</span>
                        </Link>
                        <Link href="/icons/pepiconsPop!" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Pepicons Pop!</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
                        </Link>
                        <Link href="/icons/pepiconsPrint" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Pepicons Print</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
                        </Link>
                        <Link href="/icons/pepiconsPencil" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Pepicons Pencil</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1275</span>
                        </Link>
                        <Link href="/icons/framework7Icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Framework7 Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1253</span>
                        </Link>
                        <Link href="/icons/gitlabSvgs" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Gitlab SVGs</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">385</span>
                        </Link>
                        <Link href="/icons/streamline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Streamline</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2000</span>
                        </Link>
                        <Link href="/icons/fontAwesomeSolid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1402</span>
                        </Link>
                        <Link href="/icons/fontAwesomeRegular" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome Regular</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">163</span>
                        </Link>
                        <Link href="/icons/ooui" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">OOUI</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">358</span>
                        </Link>
                        <Link href="/icons/opensearchUi" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">OpenSearch UI</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">402</span>
                        </Link>
                        <Link href="/icons/nrkCoreIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">NRK Core Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
                        </Link>
                        <Link href="/icons/qlementineIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Qlementine Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">437</span>
                        </Link>
                        <Link href="/icons/fluentUiSystemColorIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent UI System Color Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">370</span>
                        </Link>
                        <Link href="/icons/iconpark" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IconPark</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2658</span>
                        </Link>
                        <Link href="/icons/marketeq" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Marketeq</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">590</span>
                        </Link>
                        <Link href="/icons/vscodeIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">VSCode Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1322</span>
                        </Link>
                        <Link href="/icons/codicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Codicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">467</span>
                        </Link>
                        <Link href="/icons/fileIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">File Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">930</span>
                        </Link>
                        <Link href="/icons/devicon" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Devicon</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">834</span>
                        </Link>
                        <Link href="/icons/deviconPlain" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Devicon Plain</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">615</span>
                        </Link>
                        <Link href="/icons/catppuccinIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Catppuccin Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">539</span>
                        </Link>
                        <Link href="/icons/skillIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Skill Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">397</span>
                        </Link>
                        <Link href="/icons/unjsLogos" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">UnJS Logos</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">63</span>
                        </Link>
                        <Link href="/icons/simpleIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Simple Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3296</span>
                        </Link>
                        <Link href="/icons/svgLogos" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">SVG Logos</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1838</span>
                        </Link>
                        <Link href="/icons/coreuiBrands" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">CoreUI Brands</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">830</span>
                        </Link>
                        <Link href="/icons/fontAwesomeBrands" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome Brands</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">495</span>
                        </Link>
                        <Link href="/icons/boxiconsLogo" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">BoxIcons Logo</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">155</span>
                        </Link>
                        <Link href="/icons/nonicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Nonicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">69</span>
                        </Link>
                        <Link href="/icons/arcticons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Arcticons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">11680</span>
                        </Link>
                        <Link href="/icons/customBrandIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Custom Brand Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1300</span>
                        </Link>
                        <Link href="/icons/brandico" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Brandico</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">45</span>
                        </Link>
                        <Link href="/icons/entypo+Social" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Entypo+ Social</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">76</span>
                        </Link>
                        <Link href="/icons/web3Icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Web3 Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1745</span>
                        </Link>
                        <Link href="/icons/web3IconsBranded" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Web3 Icons Branded</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1935</span>
                        </Link>
                        <Link href="/icons/cryptocurrencyIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Cryptocurrency Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">483</span>
                        </Link>
                        <Link href="/icons/cryptocurrencyColorIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Cryptocurrency Color Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">483</span>
                        </Link>
                        <Link href="/icons/openmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">OpenMoji</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4174</span>
                        </Link>
                        <Link href="/icons/twitterEmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Twitter Emoji</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3668</span>
                        </Link>
                        <Link href="/icons/notoEmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Noto Emoji</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3562</span>
                        </Link>
                        <Link href="/icons/fluentEmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent Emoji</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3126</span>
                        </Link>
                        <Link href="/icons/fluentEmojiFlat" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent Emoji Flat</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">3145</span>
                        </Link>
                        <Link href="/icons/fluentEmojiHighContrast" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent Emoji High Contrast</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1595</span>
                        </Link>
                        <Link href="/icons/notoEmoji(v1)" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Noto Emoji (v1)</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">2162</span>
                        </Link>
                        <Link href="/icons/emojiOne(colored)" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Emoji One (Colored)</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1834</span>
                        </Link>
                        <Link href="/icons/emojiOne(monotone)" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Emoji One (Monotone)</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1403</span>
                        </Link>
                        <Link href="/icons/emojiOne(v1)" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Emoji One (v1)</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1262</span>
                        </Link>
                        <Link href="/icons/firefoxOsEmoji" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Firefox OS Emoji</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1034</span>
                        </Link>
                        <Link href="/icons/streamlineEmojis" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Streamline Emojis</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">787</span>
                        </Link>
                        <Link href="/icons/circleFlags" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Circle Flags</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">434</span>
                        </Link>
                        <Link href="/icons/flagIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Flag Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">540</span>
                        </Link>
                        <Link href="/icons/flagpack" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Flagpack</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">255</span>
                        </Link>
                        <Link href="/icons/coreuiFlags" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">CoreUI Flags</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">199</span>
                        </Link>
                        <Link href="/icons/fontGis" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font-GIS</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">365</span>
                        </Link>
                        <Link href="/icons/mapIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Map Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">167</span>
                        </Link>
                        <Link href="/icons/geoglyphs" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">GeoGlyphs</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">30</span>
                        </Link>
                        <Link href="/icons/gameIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Game Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">4102</span>
                        </Link>
                        <Link href="/icons/fontaudio" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">FontAudio</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">155</span>
                        </Link>
                        <Link href="/icons/academicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Academicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">158</span>
                        </Link>
                        <Link href="/icons/weatherIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Weather Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">219</span>
                        </Link>
                        <Link href="/icons/meteocons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Meteocons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">447</span>
                        </Link>
                        <Link href="/icons/healthIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Health Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1546</span>
                        </Link>
                        <Link href="/icons/medicalIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Medical Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">144</span>
                        </Link>
                        <Link href="/icons/covidIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Covid Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">142</span>
                        </Link>
                        <Link href="/icons/lineAwesome" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Line Awesome</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1544</span>
                        </Link>
                        <Link href="/icons/evaIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Eva Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">490</span>
                        </Link>
                        <Link href="/icons/dashicons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Dashicons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">342</span>
                        </Link>
                        <Link href="/icons/flatColorIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Flat Color Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">329</span>
                        </Link>
                        <Link href="/icons/entypo+" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Entypo+</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">321</span>
                        </Link>
                        <Link href="/icons/foundation" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Foundation</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">283</span>
                        </Link>
                        <Link href="/icons/raphael" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Raphael</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">266</span>
                        </Link>
                        <Link href="/icons/icons8Windows10Icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Icons8 Windows 10 Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">234</span>
                        </Link>
                        <Link href="/icons/innowatioFont" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Innowatio Font</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">105</span>
                        </Link>
                        <Link href="/icons/galaIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Gala Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">51</span>
                        </Link>
                        <Link href="/icons/heroiconsV1Outline" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">HeroIcons v1 Outline</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
                        </Link>
                        <Link href="/icons/heroiconsV1Solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">HeroIcons v1 Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">230</span>
                        </Link>
                        <Link href="/icons/fontAwesome5Solid" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome 5 Solid</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1001</span>
                        </Link>
                        <Link href="/icons/fontAwesome5Regular" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome 5 Regular</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">151</span>
                        </Link>
                        <Link href="/icons/fontAwesome5Brands" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome 5 Brands</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">457</span>
                        </Link>
                        <Link href="/icons/fontAwesome4" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Font Awesome 4</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">678</span>
                        </Link>
                        <Link href="/icons/fluentUiMdl2" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fluent UI MDL2</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">1735</span>
                        </Link>
                        <Link href="/icons/fontisto" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Fontisto</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">615</span>
                        </Link>
                        <Link href="/icons/icomoonFree" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">IcoMoon Free</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">491</span>
                        </Link>
                        <Link href="/icons/subwayIconSet" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Subway Icon Set</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">306</span>
                        </Link>
                        <Link href="/icons/openIconic" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Open Iconic</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">223</span>
                        </Link>
                        <Link href="/icons/icons8Windows8Icons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Icons8 Windows 8 Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">200</span>
                        </Link>
                        <Link href="/icons/simpleLineIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Simple line icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">189</span>
                        </Link>
                        <Link href="/icons/elegant" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Elegant</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">100</span>
                        </Link>
                        <Link href="/icons/elusiveIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Elusive Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">304</span>
                        </Link>
                        <Link href="/icons/vaadinIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Vaadin Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">636</span>
                        </Link>
                        <Link href="/icons/grommetIcons" className="flex h-[50px] w-full items-center justify-between rounded-md px-3 hover:bg-primary-foreground">
                            <span className="font-mono text-sm">Grommet Icons</span>
                            <span className="flex items-center justify-center rounded-full border p-2 font-mono text-xs">634</span>
                        </Link>
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle />
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
                        <div className="flex h-16 w-16 items-center justify-center rounded-md border">
                            <Plus className="h-5 w-5" />
                        </div>
                    </ScrollArea>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}