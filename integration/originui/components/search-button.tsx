"use client";

import { RiSearch2Line } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SearchButton() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        router.push("/search");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return (
    <Link
      href="/search"
      className="bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-ring/40 ring-ring/8 dark:ring-ring/12 inline-flex h-10 w-fit min-w-72 cursor-text rounded-full border px-4 py-2 text-sm focus:ring-[3px] focus:outline-hidden"
    >
      <span className="flex grow items-center gap-2">
        <RiSearch2Line className="text-muted-foreground -ms-1" size={20} aria-hidden="true" />
        <span className="font-normal text-zinc-400 dark:text-zinc-500">Quick search...</span>
        <div className="text-muted-foreground/80 pointer-events-none ml-auto flex items-center justify-center">
          <kbd className="text-muted-foreground inline-flex font-[inherit] text-xs font-medium">
            <span className="opacity-70">⌘</span>K
          </kbd>
        </div>
      </span>
    </Link>
  );
}
