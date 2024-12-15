import { cn } from "@/lib/utils"

export default function GridDemo() {
  const PlusIcon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={24}
        height={24}
        strokeWidth="1"
        stroke="currentColor"
        {...rest}
        className={cn("absolute size-6 text-black dark:text-white", className)}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    )
  }

  return (
    <div className="relative grid h-24 w-full grid-cols-9 border">
      <PlusIcon className="absolute -left-5 -top-5 h-10 w-10" />
      <PlusIcon className="absolute -bottom-5 -right-5 h-10 w-10" />

      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b border-r"></span>
      <span className="h-full w-full border-b"></span>

      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full border-r"></span>
      <span className="h-full w-full"></span>
    </div>
  )
}
