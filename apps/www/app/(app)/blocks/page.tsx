import { BlockDisplay } from "@/components/block-display"

const FEATURED_BLOCKS = [
  "sidebar-01",
  "sidebar-02",
  "sidebar-03",
  "sidebar-04",
  "sidebar-05",
  "sidebar-06",
  "sidebar-07",
  "sidebar-08",
  "sidebar-09",
  "sidebar-10",
  "sidebar-11",
  "sidebar-12",
  "sidebar-13",
  "sidebar-14",
  "sidebar-15",
  "login-01",
  "login-02",
  "login-03",
  "login-04",
  "login-05"
]

export default async function BlocksPage() {
  return (
    <div>
      {FEATURED_BLOCKS.map((block) => (
        <div
          key={block}
          className="border-grid container border-b py-8 first:pt-6 last:border-b-0 md:py-12"
        >
          <BlockDisplay name={block} />
        </div>
      ))}
    </div>
  )
}
