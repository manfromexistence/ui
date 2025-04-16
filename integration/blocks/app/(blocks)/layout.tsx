import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";

export default function BlockLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="max-w-screen-xl px-8 mx-auto border-border border-dotted border-r-1 border-l-1 flex-1 w-full">
          <div className="pt-10 pb-20 min-h-[calc(100%-2rem)] w-full">
            {children}
          </div>
        </div>
      </div>
      <Footer />

      {process.env.NODE_ENV === "production" && (
        <Script
          async
          src="https://analytics.duncan.land/script.js"
          data-website-id="1671be23-4bb0-43b1-9632-962a463265e8"
        />
      )}
    </div>
  );
}
