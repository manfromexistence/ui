"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface LoadMoreButtonProps {
  iconSetId: string;
  totalIcons: number;
  initialLoadedCount: number;
}

export default function LoadMoreButton({
  iconSetId,
  totalIcons,
  initialLoadedCount,
}: LoadMoreButtonProps) {
  const [loadedCount, setLoadedCount] = useState(initialLoadedCount);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const handleLoadMore = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/icons/${iconSetId}?skip=${loadedCount}&take=1000`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch icons");
      }

      const data = await response.json();

      // Update state based on API response
      setLoadedCount((prev) => prev + Object.keys(data.icons).length);
      setHasMore(data.metadata.hasMore);

      // Dispatch the custom event with the new icons (assuming a listener exists)
      const event = new CustomEvent("loadMoreIcons", {
        detail: data.icons,
      });
      window.dispatchEvent(event);

      // Show success toast
      toast.success("Icons loaded successfully", {
        description: `Loaded ${Object.keys(data.icons).length} more icons`,
      });
    } catch (error) {
      console.error("Error loading more icons:", error);
      toast.error("Failed to load more icons", {
        description: "Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!hasMore) {
    return null;
  }

  return (
    <div className="mt-8 flex items-center justify-center gap-4">
      <Button
        onClick={handleLoadMore}
        disabled={isLoading}
        variant="outline"
        size="lg"
        className="min-w-[200px]"
      >
        {isLoading ? (
          <>
            <LoadingSpinner className="mr-2 h-4 w-4 animate-spin" />
            Loading...
          </>
        ) : (
          `Load More (${loadedCount}/${totalIcons})`
        )}
      </Button>
    </div>
  );
}

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}