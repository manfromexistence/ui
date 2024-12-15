import {
  CardBody,
  MultilayerCardV_1,
} from "@/registry/default/ui/card-multi-layers"

export default function MultilayerCardV_1_Demo() {
  return (
    <div className="min-w-full">
      <MultilayerCardV_1>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </MultilayerCardV_1>
    </div>
  )
}
