"use client"

import { useQuery } from "@tanstack/react-query"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

// Version with styles
export function GitHubStars({ className }: { className?: string }) {
  const { data: stars, isLoading } = useQuery({
    queryKey: ["github-stars"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/repos/serafimcloud/21st")
      const data = await res.json()
      return data.stargazers_count as number
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })

  return (
    <span className="relative ms-3 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium text-muted-foreground before:absolute before:inset-0 before:left-0 before:w-px before:bg-input">
      {isLoading ? <Skeleton className="h-4 w-4" /> : stars}
    </span>
  )
}

// Version without styles using cn
export function GitHubStarsBasic({ className }: { className?: string }) {
  const { data: stars, isLoading } = useQuery({
    queryKey: ["github-stars"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/repos/serafimcloud/21st")
      const data = await res.json()
      return data.stargazers_count as number
    },
    staleTime: 1000 * 60 * 5,
    retry: 2,
  })

  return (
    <span className={cn("inline-flex items-center", className)}>
      {isLoading ? <Skeleton className="h-4 w-4" /> : stars}
    </span>
  )
}
