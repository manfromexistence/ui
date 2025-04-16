import HeroBadge from "@/components/prismui/hero-badge";
import { Icons } from "@/components/icons";

export default function HeroBadgeBasic() {
  return (
    <div className="flex min-h-[350px] w-full items-center justify-center">
      <HeroBadge
        href="/docs"
        text="New! PrismUI Components"
        icon={<Icons.logo className="h-4 w-4" />}
        endIcon={<Icons.chevronRight className="h-4 w-4" />}
      />
    </div>
  );
}

export const demoSource = `import HeroBadge from "@/components/prismui/hero-badge"
import { Icons } from "@/components/icons"

export default function HeroBadgeBasic() {
  return (
    <div className="flex min-h-[350px] w-full items-center justify-center">
      <HeroBadge
        href="/docs"
        text="New! PrismUI Components"
        icon={<Icons.logo className="h-4 w-4" />}
        endIcon={<Icons.chevronRight className="h-4 w-4" />}
      />
    </div>
  )
}`;
