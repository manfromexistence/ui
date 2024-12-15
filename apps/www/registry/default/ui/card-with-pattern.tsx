import { cn } from "@/lib/utils"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet elit consectetur adipisicing. Nostrum, hic ipsum! dolor, sit amet elit consectetur amete elite!",
}
export const CardBody = ({ className = "" }) => (
  <div className={cn("p-4 text-left md:p-6", className)}>
    <h3 className="mb-1 text-lg font-bold text-zinc-200">
      {cardContent.title}
    </h3>
    <p className="text-wrap text-sm text-zinc-500">{cardContent.description}</p>
  </div>
)

//======================================
export const CardWithEllipsis = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="w-full overflow-hidden rounded-md border border-zinc-900 bg-zinc-950 p-3">
    <div className="size-full bg-[url(/svg/ellipsis.svg)] bg-[length:30px_30px] bg-repeat">
      <div
        className={
          "size-full bg-gradient-to-tr from-zinc-950/90 via-zinc-950/40 to-zinc-950/10"
        }
      >
        {children}
      </div>
    </div>
  </div>
)

//======================================
export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="w-full overflow-hidden rounded-md border border-zinc-900 bg-zinc-950 p-1">
    <div className="size-full bg-[url(/svg/grid-ellipsis.svg)] bg-[length:25px_25px] bg-repeat">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
        {children}
      </div>
    </div>
  </div>
)

//======================================
export const CardWithCircleEllipsis = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="w-full overflow-hidden rounded-md border border-zinc-900 bg-zinc-950 p-1">
    <div
      className={`size-full bg-[url(/svg/circle-ellipsis.svg)] bg-[length:30px_30px] bg-repeat`}
    >
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
        {children}
      </div>
    </div>
  </div>
)

//======================================
export const CardWithLines = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-hidden rounded-md border border-zinc-900 bg-zinc-950 p-[1px]">
    <div className="size-full rounded-md bg-[url(/svg/lines.svg)] bg-[length:40px_40px] bg-repeat">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/40">
        {children}
      </div>
    </div>
  </div>
)
//======================================
export const CardWithPlus = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
      <div className="size-full bg-[url(/svg/plus.svg)] bg-[length:65px_65px] bg-repeat">
        <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[0.93] to-zinc-950">
          {children}
        </div>
      </div>
    </div>
  )
}
//======================================
export const CardWithSquareX = ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div className="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
    <div className="size-full bg-[url(/svg/square-x.svg)] bg-[length:95px_95px] bg-repeat">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[0.93] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
)
//======================================
export const CardWithGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
    <div className="size-full bg-[url(/svg/grid.svg)] bg-[length:50px_50px] bg-repeat">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[.85] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
)

//======================================
export const CardWithNoise = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
    <div
      className={`size-full bg-[url(/svg/noise.svg)] bg-[length:500px_500px] bg-repeat`}
    >
      <div className="bg-zinc-950/30">{children}</div>
    </div>
  </div>
)
