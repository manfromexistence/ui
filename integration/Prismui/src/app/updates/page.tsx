"use client";

import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import { Button } from "@/components/ui/button";

const DISCORD_INVITE_URL = "https://discord.gg/SAy7T2zy";

function DiscordButton() {
  return (
    <Button
      size="lg"
      className="w-full"
      variant="default"
      onClick={() => window.open(DISCORD_INVITE_URL, "_blank")}
    >
      Join Discord Server
    </Button>
  );
}

export default function UpdatesPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Quick Updates Page
              </h1>
              <p className="text-xl text-muted-foreground">
                Due to high demand for project updates, we&apos;ve created this
                temporary page. While we&apos;re working on a more comprehensive
                solution, join our Discord for the latest news and updates!
              </p>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Get instant updates in real-time
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Connect directly with the community
              </li>
              <li className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Be first to know about new features
              </li>
            </ul>
          </div>

          {/* Right side - Discord connect card */}
          <div className="relative">
            <div className="relative bg-background/80 backdrop-blur-xl rounded-lg border shadow-lg p-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold tracking-tight mb-2">
                  Join Our Discord
                </h2>
                <p className="text-muted-foreground">
                  While this page is being optimized, get all the latest updates
                  directly in our Discord community.
                </p>
              </div>
              <div className="space-y-4">
                <DiscordButton />
                <p className="text-sm text-center text-muted-foreground">
                  Join our active community at discord.gg/SAy7T2zy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
