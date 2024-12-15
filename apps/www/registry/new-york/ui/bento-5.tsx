import { cn } from "@/lib/utils"

export const Cell = ({ i = 0 }) => {
  return (
    <div className="center size-full rounded-lg bg-zinc-200 text-xl dark:bg-zinc-900">
      {i}
    </div>
  )
}
const cells = [1, 2, 3, 4, 5]
//======================================
export const Bento_5_v1 = () => {
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-4">
        {cells.map((n, i) => (
          <div
            key={n}
            className={cn(
              "h-32 rounded-lg p-1",
              i == 0 && "md:col-start-1",
              i == 1 && "md:col-span-2",
              i == 2 && "md:col-start-4",
              i > 2 && "md:col-span-2"
            )}
          >
            <Cell i={i + 1} />
          </div>
        ))}
      </div>
    </div>
  )
}

//======================================
export const Bento_5_v2 = () => {
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-4">
        {cells.map((n, i) => (
          <div
            key={n}
            className={cn(
              "h-32 rounded-lg p-1",
              i < 3 && "md:col-span-2",
              i == 2 && "md:col-span-4",
              i > 2 && "md:col-span-2"
            )}
          >
            <Cell i={i + 1} />
          </div>
        ))}
      </div>
    </div>
  )
}

//======================================
export const Bento_5_v3 = () => {
  return (
    <div>
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-9">
        {cells.map((n, i) => (
          <div
            key={n}
            className={cn(
              "h-32 rounded-lg p-1",
              i == 0 && "md:col-span-5",
              i == 1 && "md:col-span-4",
              i > 1 && "md:col-span-3"
            )}
          >
            <Cell i={i + 1} />
          </div>
        ))}
      </div>
    </div>
  )
}

//======================================
export const Bento_5_v4 = () => {
  return (
    <div>
      <div className="grid gap-2 md:grid-cols-4">
        {cells.map((n, i) => (
          <div
            key={n}
            className={cn(
              "h-32 rounded-lg p-1",
              i == 1 && "md:col-span-2 md:row-span-2 md:h-full",
              i == 4 && "md:col-start-4"
            )}
          >
            <Cell i={i + 1} />
          </div>
        ))}
      </div>
    </div>
  )
}
