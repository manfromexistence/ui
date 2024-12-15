import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
}
const CardBody = ({ className = "" }) => (
  <div
    className={cn(
      "px-2 py-0 text-left text-gray-100 sm:px-4 sm:pb-3",
      className
    )}
  >
    <h3 className="mb-1 mt-3 text-lg font-bold tracking-tighter">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
)
type CardProps = {
  children?: React.ReactNode
}
//======================================
export const Card_with_image_v1 = ({
  children = (
    <CardBody className="absolute inset-0 flex size-full flex-col justify-end px-4 pb-4" />
  ),
}: CardProps) => {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        fill
        className="m-0 w-full object-cover"
        src="/lemons.jpeg"
        alt="lemon"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"></div>
      {children}
    </div>
  )
}

//======================================
export const Card_with_image_v2 = ({
  children = (
    <CardBody className="absolute inset-0 flex size-full flex-col justify-end px-4 pb-4 " />
  ),
}: CardProps) => {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        fill
        className="m-0 w-full object-cover"
        src="/lemons.jpeg"
        alt="veggtables"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10"></div>
      {children}
    </div>
  )
}

//======================================
export const Card_with_image_v3 = ({
  children = (
    <CardBody className="absolute inset-0 flex size-full flex-col justify-end px-3 pb-4" />
  ),
}: CardProps) => {
  return (
    <div className="rounded-2xl bg-gradient-to-bl from-red-700 to-teal-500 p-0.5">
      <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
        <Image
          fill
          src="/waterlemons.jpg"
          alt="image"
          className="m-0 w-full rounded-2xl object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-red-900/15 backdrop-blur-[1px]"></div>
        {children}
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_v4 = ({
  children = (
    <CardBody className="rounded-2xl bg-gray-600/35 px-4 pb-4 backdrop-blur-lg sm:pb-2" />
  ),
}: CardProps) => {
  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        fill
        className="m-0 w-full object-cover"
        src="/lemons.jpeg"
        alt="veggtables"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
      />
      {/* overlay */}
      <div className="flex h-full flex-col justify-end p-1 sm:p-2">
        {children}
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_v5 = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-zinc-50 p-2 pb-3 dark:bg-zinc-950 ">
      <div className="prose-img:m-0 relative aspect-video">
        <Image
          fill
          className="rounded-xl shadow-[0px_0px_10px_#A1A1AA] dark:shadow-[0px_0px_12px_rgb(39,39,42,0.7)]"
          src="/lemons.jpeg"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          alt="image"
        />
      </div>
      <CardBody className="relative mb-2 text-gray-800 dark:text-gray-200" />
      <div className="px-2">
        <Button className="w-full rounded-lg" asChild>
          <Link href="/docs/cards-with-image-bg">Learn more</Link>
        </Button>
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_v6 = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-lime-200  bg-zinc-50 pb-3 dark:border-lime-800 dark:bg-zinc-950">
      <div className="w-full rounded-t-xl bg-gradient-to-tr from-lime-300 to-lime-200 p-2">
        <div className="prose-img:m-0 relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            fill
            src="/lemons.jpeg"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            alt="image"
          />
        </div>
      </div>
      <CardBody className="text-gray-800 dark:text-gray-200" />
      <div className="px-2">
        <Button
          asChild
          className="w-full rounded-lg bg-lime-600 no-underline dark:bg-lime-200 dark:text-lime-900"
        >
          <Link href="/docs/cards-with-image-bg">Learn more</Link>
        </Button>
      </div>
    </div>
  )
}
