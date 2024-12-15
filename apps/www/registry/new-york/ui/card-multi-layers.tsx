/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/**
 *
 * Simple Cards
 *  - Rounded
 *  - Square
 *  - One border
 *  - Two border
 *  - with Badge
 * Cards with images
 * Complex Cards: multi layers, hover effects, etc.
 *
 */

import { cn } from "@/lib/utils"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
}
export const CardBody = ({ className = "" }) => (
  <div className={cn(className)}>
    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">
      {cardContent.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-400">
      {cardContent.description}
    </p>
  </div>
)

type CardProps = {
  children?: React.ReactNode
}

//======================================
export const MultilayerCardV_1 = ({
  children = (
    <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-2xl dark:bg-zinc-900/80" />
  ),
}: CardProps) => {
  return (
    <div className="py-14">
      <div className="relative w-full">
        <div className="absolute inset-0 -rotate-[3deg] scale-x-95 rounded-lg bg-gray-200 py-10 dark:bg-zinc-800" />
        {children}
      </div>
    </div>
  )
}
//======================================
export const MultilayerCardV_2 = ({
  children = <CardBody className="p-3" />,
}: CardProps) => {
  return (
    <div className="py-14">
      <div className="relative mx-auto h-72 sm:h-52">
        <div
          className="absolute -top-4 size-full scale-x-90 scale-y-[1.15] rounded-3xl border border-neutral-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="center absolute size-full rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0px_0px_16px_#D4D4D8] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)] md:p-4"
          style={{
            transformOrigin: "top center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
//======================================
export const MultilayerCardV_3 = ({
  children = <CardBody className="p-3" />,
}: CardProps) => {
  return (
    <div className="py-14">
      <div className="relative mx-auto h-72 sm:h-64">
        <div
          className="absolute top-6 size-full scale-x-[1.01] scale-y-[.75] rounded-3xl border border-neutral-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="center absolute size-full scale-95 rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0px_0px_16px_#D4D4D8] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)] md:p-4"
          style={{
            transformOrigin: "top center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
//======================================
export const MultilayerCardV_4 = ({
  children = <CardBody className="p-3" />,
}: CardProps) => {
  return (
    <div className="py-14">
      <div className="relative mx-auto h-72 sm:h-48">
        <div
          className="absolute -top-6 size-full scale-[0.95] rounded-3xl border border-neutral-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="absolute -top-3 size-full scale-[0.97] rounded-3xl border border-neutral-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
          style={{
            transformOrigin: "top center",
          }}
        ></div>
        <div
          className="center absolute size-full rounded-3xl border border-neutral-200 bg-white p-2 shadow-xl shadow-black/[0.1] dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-white/[0.02] md:p-4"
          style={{
            transformOrigin: "top center",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
