"use client";

import { ComponentShowcase } from "../component-showcase";

function BufferSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Notice and buffers</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Minimum Notice</label>
            <select className="w-full rounded-md border bg-background px-3 py-2">
              <option>3 hours</option>
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Buffer before event</label>
              <select className="w-full rounded-md border bg-background px-3 py-2">
                <option>30 mins</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Buffer after event</label>
              <select className="w-full rounded-md border bg-background px-3 py-2">
                <option>30 mins</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BufferSettingsShowcase() {
  return (
    <ComponentShowcase
      pill="Benefits"
      title="Avoid meeting overload"
      description="Only get booked when you want to. Set daily, weekly or monthly limits and add buffers around your events to allow you to focus or take a break."
      align="right"
    >
      <BufferSettings />
    </ComponentShowcase>
  );
}
