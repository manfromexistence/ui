import {
  CardBody,
  MultilayerCardV_3,
} from "@/registry/default/ui/card-multi-layers"

export default function MultilayerCardV_3_Demo() {
  return (
    <div className="min-w-full">
      <MultilayerCardV_3>
        <CardBody className="relative mx-auto rounded-lg px-6 py-10 shadow backdrop-blur-xl dark:bg-zinc-900/90" />
      </MultilayerCardV_3>
    </div>
  )
}
