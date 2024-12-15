import {
  CardBody,
  CardWithPlus,
} from "@/registry/new-york/ui/card-with-pattern"

export default function CardWithPlus_Demo() {
  return (
    <div className="min-w-full">
      <CardWithPlus>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </CardWithPlus>
    </div>
  )
}
