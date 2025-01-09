export interface SidebarNavItem {
  title: string;
  href: string;
  disabled?: boolean;
  isNew?: boolean;
  isPro?: boolean;
  external?: boolean
  label?: string
}

export interface SidebarNavGroup {
  title?: string;
  items: SidebarNavItem[];
}

export type SidebarNav = SidebarNavGroup[];
