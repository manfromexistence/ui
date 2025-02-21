"use client"

import { useEffect, useRef } from "react"
import { useAtom, atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { CircleX } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useClerkSupabaseClient } from "@/lib/clerk"

export const userPageSearchAtom = atom("")
export type UserComponentsTab = "components" | "demos" | "bookmarks"

export const userComponentsTabAtom = atomWithStorage<UserComponentsTab>(
  "user-components-tab",
  "components",
)

export const userTabAtom = atom<UserComponentsTab>("components")

function useUserComponentsCounts(userId: string) {
  const supabase = useClerkSupabaseClient()
  return useQuery({
    queryKey: ["user-components-counts", userId],
    queryFn: async () => {
      const { data, error } = await supabase.rpc("get_user_components_counts", {
        p_user_id: userId,
      })
      if (error) throw error
      return data as {
        published_count: number
        demos_count: number
        liked_count: number
      }
    },
    staleTime: 30 * 1000,
    retry: false,
  })
}

const useTrackSearchQueries = () => {
  const lastTrackedQuery = useRef<string | null>(null)
  const [searchQuery] = useAtom(userPageSearchAtom)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery && searchQuery !== lastTrackedQuery.current) {
        lastTrackedQuery.current = searchQuery
      }
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [searchQuery])
}

const useSearchHotkeys = (inputRef: React.RefObject<HTMLInputElement>) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "/" &&
        !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName || "")
      ) {
        event.preventDefault()
        inputRef.current?.focus()
      } else if (event.key === "Escape") {
        inputRef.current?.blur()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])
}

export function UserComponentsHeader({
  username,
  userId,
}: {
  username: string
  userId: string
}) {
  const [activeTab, setActiveTab] = useAtom(userTabAtom)
  const [searchQuery, setSearchQuery] = useAtom(userPageSearchAtom)
  const inputRef = useRef<HTMLInputElement>(null)
  const { data: counts, isLoading } = useUserComponentsCounts(userId)

  useTrackSearchQueries()
  useSearchHotkeys(inputRef as React.RefObject<HTMLInputElement>)

  const handleClearInput = () => {
    setSearchQuery("")
    inputRef.current?.focus()
  }

  const getSearchPlaceholder = () => {
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1200px)")
    if (isTablet) return "Search..."

    const tabLabels = {
      components: "components",
      demos: "use cases",
      bookmarks: "bookmarks",
    }
    return `${username}'s ${tabLabels[activeTab]}...`
  }

  const tabs = [
    {
      value: "components" as const,
      label: "Components",
      count: counts?.published_count ?? 0,
    },
    {
      value: "demos" as const,
      label: "Use Cases",
      count: counts?.demos_count ?? 0,
    },
    {
      value: "bookmarks" as const,
      label: "Bookmarks",
      count: counts?.liked_count ?? 0,
    },
  ]

  useEffect(() => {
    if (!isLoading && counts) {
      const currentTabCount =
        counts[`${activeTab}_count` as keyof typeof counts] ?? 0
      if (currentTabCount === 0) {
        const firstAvailableTab = tabs.find(
          (tab) => counts[`${tab.value}_count` as keyof typeof counts] > 0,
        )
        if (firstAvailableTab) {
          setActiveTab(firstAvailableTab.value)
        }
      }
    }
  }, [counts, isLoading, activeTab, setActiveTab])

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as UserComponentsTab)}
            className="w-full md:w-auto"
          >
            <TabsList className="w-full md:w-auto h-8 -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse">
              {tabs.map(({ value, label, count }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  disabled={!isLoading && count === 0 && value !== "bookmarks"}
                  className="flex-1 md:flex-initial relative overflow-hidden rounded-none border border-border h-8 px-4 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-2">
                    <span className="truncate">{label}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {isLoading ? "-" : count}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="flex items-center gap-2 md:w-auto min-w-0">
          <div className="relative flex-1 min-w-0 lg:min-w-[250px] md:min-w-[100px]">
            <Input
              ref={inputRef}
              type="text"
              placeholder={getSearchPlaceholder()}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-8 min-w-[100px] [&::placeholder]:pe-8 lg:[&::placeholder]:pe-16"
            />
            {searchQuery ? (
              <button
                className="absolute inset-y-0 end-0 flex h-full w-8 md:w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
                onClick={handleClearInput}
                aria-label="Clear search"
              >
                <CircleX size={16} strokeWidth={2} aria-hidden="true" />
              </button>
            ) : (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                <kbd className="hidden lg:inline-flex size-5 items-center justify-center rounded border bg-muted px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                  <span className="text-[11px] font-sans">/</span>
                </kbd>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
