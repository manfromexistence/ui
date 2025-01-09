export const demoSource = `"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import NumberFlow, { type Format } from "@number-flow/react";
import { Bookmark, ChartBarIcon, Heart, Repeat2, Share } from "lucide-react";
import { useState } from "react";

const format: Format = {
  notation: "compact",
  compactDisplay: "short",
  roundingMode: "trunc",
};

interface SocialCardProps {
  className?: string;
  initialLikes?: number;
  initialReposts?: number;
  initialViews?: number;
  initialBookmarks?: number;
}

export function SocialCard({
  className,
  initialLikes = 1420,
  initialReposts = 234,
  initialViews = 28900,
  initialBookmarks = 89,
}: SocialCardProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [reposts, setReposts] = useState(initialReposts);
  const [views] = useState(initialViews);
  const [bookmarks, setBookmarks] = useState(initialBookmarks);
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRepost = () => {
    setReposted(!reposted);
    setReposts(reposted ? reposts - 1 : reposts + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    setBookmarks(bookmarked ? bookmarks - 1 : bookmarks + 1);
  };

  return (
    <Card className={cn("p-6", className)}>
      <div className="mb-6 space-y-4">
        <h3 className="text-lg font-semibold">Interactive Social Card</h3>
        <p className="text-sm text-muted-foreground">
          A demo of NumberFlow with social media interactions. Click the buttons
          to see smooth number transitions.
        </p>
      </div>

      <div className="flex w-full select-none items-center text-zinc-600 dark:text-zinc-300">
        <div className="flex flex-1 items-center gap-1.5">
          <ChartBarIcon className="h-4 w-4" />
          <NumberFlow willChange continuous value={views} format={format} />
        </div>

        <div className="flex-1">
          <button
            className={cn(
              "group flex items-center gap-1.5 pr-1.5 transition-colors hover:text-emerald-500",
              reposted && "text-emerald-500"
            )}
            onClick={handleRepost}
          >
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full transition-colors group-hover:bg-emerald-500/10" />
              <Repeat2 className="h-4 w-4 transition-transform group-active:scale-85" />
            </div>
            <NumberFlow willChange continuous value={reposts} format={format} />
          </button>
        </div>

        <div className="flex-1">
          <button
            className={cn(
              "group flex items-center gap-1.5 pr-1.5 transition-colors hover:text-pink-500",
              liked && "text-pink-500"
            )}
            onClick={handleLike}
          >
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full transition-colors group-hover:bg-pink-500/10" />
              <Heart
                className={cn(
                  "h-4 w-4 transition-transform group-active:scale-85",
                  liked && "fill-current"
                )}
              />
            </div>
            <NumberFlow willChange continuous value={likes} format={format} />
          </button>
        </div>

        <div className="flex flex-1 items-center gap-1.5">
          <button
            className={cn(
              "group flex items-center gap-1.5 pr-1.5 transition-colors hover:text-blue-500",
              bookmarked && "text-blue-500"
            )}
            onClick={handleBookmark}
          >
            <div className="relative">
              <div className="absolute -inset-2.5 rounded-full transition-colors group-hover:bg-blue-500/10" />
              <Bookmark
                className={cn(
                  "h-4 w-4 transition-transform group-active:scale-85",
                  bookmarked && "fill-current"
                )}
              />
            </div>
            <NumberFlow
              willChange
              continuous
              value={bookmarks}
              format={format}
            />
          </button>
        </div>

        <Share className="h-4 w-4 shrink-0" />
      </div>
    </Card>
  );
}

export default function NumberFlowDemo() {
  return (
    <div className="space-y-8">
      <SocialCard />
    </div>
  );
}`;
