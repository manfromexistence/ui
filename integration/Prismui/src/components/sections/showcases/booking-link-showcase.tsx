"use client";

import { ComponentShowcase } from "../component-showcase";

function BookingLink() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="h-16 w-16 rounded-full bg-primary/20" />
      <div className="space-y-2 text-center">
        <h3 className="font-medium">Christer Hagen</h3>
        <p className="text-sm text-muted-foreground">prismui.com/christer</p>
      </div>
    </div>
  );
}

export function BookingLinkShowcase() {
  return (
    <ComponentShowcase
      pill="Benefits"
      title="Stand out with a custom booking link"
      description="Customize your booking link so it's short and easy to remember for your bookers. No more long, complicated links one can easily forget."
      align="right"
    >
      <BookingLink />
    </ComponentShowcase>
  );
}
