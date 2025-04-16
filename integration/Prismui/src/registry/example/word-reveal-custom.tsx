"use client";

import WordReveal from "@/components/prismui/word-reveal";

export default function WordRevealCustomExample() {
  return (
    <div className="p-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/50">
      <WordReveal
        text="Custom styled animation"
        className="text-2xl md:text-4xl font-light text-secondary-foreground"
      />
    </div>
  );
}

export const demoSource = `"use client";

import WordReveal from "@/components/prismui/word-reveal";

export default function WordRevealCustomExample() {
  return (
    <div className="p-8 rounded-lg bg-gradient-to-br from-secondary to-secondary/50">
      <WordReveal
        text="Custom styled animation"
        className="text-2xl md:text-4xl font-light text-secondary-foreground"
      />
    </div>
  );
}`;
