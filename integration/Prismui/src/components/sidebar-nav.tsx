"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarNav as SidebarNavType,
  SidebarNavGroup,
  SidebarNavItem,
} from "@/types/nav";
import { Badge } from "@/components/ui/badge";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface DocsSidebarNavProps {
  items: SidebarNavType;
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        {items.map((item: SidebarNavGroup, index: number) => (
          <SidebarGroup key={index}>
            {item.title && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items?.map((item: SidebarNavItem) => {
                  const isActive = pathname === item.href;

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        data-active={isActive}
                        className={`${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/50"
                        }`}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center justify-between w-full gap-2"
                        >
                          <span>{item.title}</span>
                          <div className="flex items-center gap-1.5">
                            {item.isNew && <Badge variant="new">New</Badge>}
                            {item.isPro && <Badge variant="pro">Pro</Badge>}
                          </div>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
