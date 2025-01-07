"use client";

import { LogoCarousel } from "@/components/prismui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function LogoCarouselBasic() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-medium tracking-widest text-muted-foreground">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          <h2 className="text-[3.5rem] font-bold tracking-tight leading-none">
            The best are already here
          </h2>
        </div>
        <LogoCarousel />
      </CardContent>
    </Card>
  );
}

export const demoSource = `"use client";

import { LogoCarousel } from "@/components/prismui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function LogoCarouselBasic() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center space-y-4 mb-12">
          <p className="text-sm font-medium tracking-widest text-muted-foreground">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          <h2 className="text-[3.5rem] font-bold tracking-tight leading-none">
            The best are already here
          </h2>
        </div>
        <LogoCarousel />
      </CardContent>
    </Card>
  );
}`;
