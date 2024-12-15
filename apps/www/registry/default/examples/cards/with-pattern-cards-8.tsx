import {
  CardBody,
  CardWithSquareX,
} from "@/registry/default/ui/card-with-pattern"

export default function CardWithSquareX_Demo() {
  return (
    <div className="min-w-full">
      <CardWithSquareX>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithSquareX>
    </div>
  )
}
