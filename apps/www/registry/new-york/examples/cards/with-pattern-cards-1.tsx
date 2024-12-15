import {
  CardBody,
  CardWithCircleEllipsis,
} from "@/registry/new-york/ui/card-with-pattern"

export default function CardWithCircleEllipsis_Demo() {
  return (
    <div className="min-w-full">
      <CardWithCircleEllipsis>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithCircleEllipsis>
    </div>
  )
}
