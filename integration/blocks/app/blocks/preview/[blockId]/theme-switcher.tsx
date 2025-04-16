"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { useEffect, useState } from "react";
export default function PreviewThemeSwitcher() {
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsInIframe(window.self !== window.top);
    }
  }, []);

  return (
    <div className="absolute bottom-4 right-4">
      {!isInIframe && <ThemeSwitcher />}
    </div>
  );
}
