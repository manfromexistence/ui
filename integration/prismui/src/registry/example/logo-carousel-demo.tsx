"use client";

import { LogoCarousel } from "@/components/prismui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function LogoCarouselDemo() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-3 text-lg font-medium">Two Columns</h3>
          <LogoCarousel columns={2} />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-3 text-lg font-medium">Three Columns</h3>
          <LogoCarousel columns={3} />
        </CardContent>
      </Card>
    </div>
  );
}

export const demoSource = `"use client";

import { LogoCarousel } from "@/components/prismui/logo-carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function LogoCarouselDemo() {
  return (
    <div className="grid gap-4">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-3 text-lg font-medium">Two Columns</h3>
          <LogoCarousel columns={2} />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-3 text-lg font-medium">Three Columns</h3>
          <LogoCarousel columns={3} />
        </CardContent>
      </Card>
    </div>
  );
}`;
