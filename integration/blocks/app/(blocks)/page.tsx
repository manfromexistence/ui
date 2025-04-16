import { blocksCategoriesMetadata } from "@/content/blocks-categories";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      <div className="mb-15">
        <h1 className="text-foreground mb-4 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
          Building Blocks for the Web
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          Clean, modern building blocks. Copy and paste into your apps. Works
          with all React frameworks. Open Source. Free forever.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-10 w-full">
        {blocksCategoriesMetadata.map((block) => (
          <Link key={`${block.id}-${block.name}`} href={`/${block.id}`}>
            <div className="space-y-3">
              <block.thumbnail className="w-full grayscale rounded-lg border border-border" />
              <div className="flex flex-col gap-1">
                <div className="font-medium text-base leading-none tracking-tight">
                  {block.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {block.count} blocks
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
