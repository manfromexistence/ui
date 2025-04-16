"use client";

import WordReveal from "@/components/prismui/word-reveal";

export default function WordRevealHeroExample() {
  return (
    <div className="p-8 rounded-lg bg-gradient-to-br from-primary to-primary/50">
      <WordReveal
        text="Slower animation with custom delay"
        delay={0.3}
        className="text-primary-foreground"
      />
    </div>
  );
}

export const demoSource = `"use client";

import WordReveal from "@/components/prismui/word-reveal";

export default function WordRevealHeroExample() {
  return (
    <div className="p-8 rounded-lg bg-gradient-to-br from-primary to-primary/50">
      <WordReveal
        text="Slower animation with custom delay"
        delay={0.3}
        className="text-primary-foreground"
      />
    </div>
  );
}`;
