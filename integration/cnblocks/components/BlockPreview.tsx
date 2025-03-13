'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Check, Code2, Copy, Eye, Maximize, Terminal } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { Separator } from '@/components/ui/separator'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { useMedia } from 'use-media'
import { Button } from './ui/button'
import { cn, titleToNumber } from '@/lib/utils'
import CodeBlock from './code-block'
import Link from 'next/link'
import { OpenInV0Button } from './open-in-v0'

export interface BlockPreviewProps {
    code?: string
    preview: string
    title: string
    category: string
    previewOnly?: boolean
}

const radioItem = 'rounded-(--radius) duration-200 flex items-center justify-center h-8 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted'

const DEFAULTSIZE = 100
const SMSIZE = 30
const MDSIZE = 62
const LGSIZE = 82

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, preview, title, category, previewOnly }) => {
    const [width, setWidth] = useState(DEFAULTSIZE)
    const [mode, setMode] = useState<'preview' | 'code'>('preview')
    const [iframeHeight, setIframeHeight] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    const terminalCode = `pnpm dlx shadcn@canary add https://nsui.irung.me/r/${category}-${titleToNumber(title)}.json`

    const { copied, copy } = useCopyToClipboard({ code: code as string, title, category, eventName: 'block_copy' })
    const { copied: cliCopied, copy: cliCopy } = useCopyToClipboard({ code: terminalCode, title, category, eventName: 'block_cli_copy' })

    const ref = useRef<ImperativePanelGroupHandle>(null)
    const isLarge = useMedia('(min-width: 1024px)')

    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const iframe = iframeRef.current
        const handleLoad = () => {
            setIsLoading(false)
            const contentHeight = iframe!.contentWindow!.document.body.scrollHeight
            setIframeHeight(contentHeight)
        }

        iframe!.addEventListener('load', handleLoad)
        return () => {
            iframe!.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <section className="group mb-16 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="relative border-y">
                <div
                    aria-hidden
                    className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                    <div className="to-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                    <div className="to-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                </div>

                <div className="relative z-10 mx-auto flex max-w-7xl justify-between py-1.5 pl-8 pr-6 [--color-border:var(--color-zinc-200)] md:py-2 lg:pl-6 lg:pr-2 dark:[--color-border:var(--color-zinc-800)]">
                    <div className="-ml-3 flex items-center gap-3">
                        {code && (
                            <>
                                <RadioGroup.Root className="flex gap-0.5">
                                    <RadioGroup.Item
                                        onClick={() => setMode('preview')}
                                        aria-label="Block preview"
                                        value="100"
                                        checked={mode == 'preview'}
                                        className={radioItem}>
                                        <Eye className="size-3.5 sm:opacity-50" />
                                        <span className="hidden text-[13px] sm:block">Preview</span>
                                    </RadioGroup.Item>

                                    <RadioGroup.Item
                                        onClick={() => setMode('code')}
                                        aria-label="Code"
                                        value="0"
                                        checked={mode == 'code'}
                                        className={radioItem}>
                                        <Code2 className="size-3.5 sm:opacity-50" />
                                        <span className="hidden text-[13px] sm:block">Code</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>

                                <Separator
                                    orientation="vertical"
                                    className="hidden !h-4 lg:block"
                                />
                            </>
                        )}
                        {previewOnly && (
                            <>
                                {' '}
                                <span className="ml-2 text-sm capitalize">{title}</span>
                                <Separator
                                    orientation="vertical"
                                    className="!h-4"
                                />{' '}
                            </>
                        )}
                        <Button
                            asChild
                            variant="ghost"
                            size="sm"
                            className="size-8">
                            <Link
                                href={preview}
                                passHref
                                target="_blank">
                                <Maximize className="size-4" />
                            </Link>
                        </Button>
                        <Separator
                            orientation="vertical"
                            className="hidden !h-4 lg:block"
                        />
                        <span className="text-muted-foreground hidden text-sm lg:block">{width < MDSIZE ? 'Mobile' : width < LGSIZE ? 'Tablet' : 'Desktop'}</span>{' '}
                    </div>

                    <div className="flex items-center gap-2">
                        {code && (
                            <>
                                <Button
                                    onClick={cliCopy}
                                    size="sm"
                                    className="size-8 shadow-none md:w-fit"
                                    variant="outline"
                                    aria-label="copy code">
                                    {cliCopied ? <Check className="size-4" /> : <Terminal className="!size-3.5" />}
                                    <span className="hidden font-mono text-xs md:block">
                                        pnpm dlx shadcn@canary add {category}-{titleToNumber(title)}
                                    </span>
                                </Button>
                                <Separator
                                    className="!h-4"
                                    orientation="vertical"
                                />
                                <OpenInV0Button
                                    {...{ title, category }}
                                    block={`${category}-${titleToNumber(title)}`}
                                />
                                <Separator
                                    className="!h-4"
                                    orientation="vertical"
                                />

                                <Button
                                    onClick={copy}
                                    size="sm"
                                    variant="ghost"
                                    aria-label="copy code"
                                    className="size-8">
                                    {copied ? <Check className="size-4" /> : <Copy className="!size-3.5" />}
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative">
                <div
                    aria-hidden
                    className="absolute inset-x-4 -bottom-14 mx-auto h-14 max-w-7xl lg:inset-x-0">
                    <div className="from-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b"></div>
                    <div className="from-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
                    <div className={cn('bg-white dark:bg-transparent', mode == 'code' && 'hidden')}>
                        <PanelGroup
                            direction="horizontal"
                            tagName="div"
                            ref={ref}>
                            <Panel
                                id={`block-${title}`}
                                order={1}
                                onResize={(size) => {
                                    setWidth(Number(size))
                                }}
                                defaultSize={DEFAULTSIZE}
                                minSize={SMSIZE}
                                className="h-fit border-x">
                                <iframe
                                    key={`${category}-${title}-iframe`}
                                    loading="lazy"
                                    allowFullScreen
                                    ref={iframeRef}
                                    title={title}
                                    height={iframeHeight}
                                    className="h-(--iframe-height) @starting:opacity-0 @starting:blur-xl block min-h-56 w-full duration-200 will-change-auto"
                                    src={preview}
                                    id={`block-${title}`}
                                    style={{ '--iframe-height': `${iframeHeight}px` } as React.CSSProperties}
                                    {...{ fetchPriority: 'low' }}
                                />

                                {isLoading && (
                                    <div className="bg-background absolute inset-0 right-2 flex items-center justify-center border-x">
                                        <div className="border-primary size-6 animate-spin rounded-full border-2 border-t-transparent" />
                                    </div>
                                )}
                            </Panel>

                            {isLarge && (
                                <>
                                    <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400" />
                                    <Panel
                                        id={`code-${title}`}
                                        order={2}
                                        defaultSize={100 - DEFAULTSIZE}
                                        className="-mr-[0.5px] ml-px"></Panel>
                                </>
                            )}
                        </PanelGroup>
                    </div>

                    <div className="bg-white dark:bg-transparent">
                        {mode == 'code' && (
                            <CodeBlock
                                code={code as string}
                                lang="tsx"
                                maxHeight={iframeHeight}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlockPreview
