import { ExpandableCard } from "@/registry/new-york/ui/card-expandable"

export function ExpandableCard_Demo() {
  return (
    <div className="min-w-full">
      <ExpandableCard height="10rem" wide>
        <div className="prose-p:mt-0 text-sm/relaxed">
          <h4 className="my-2 text-lg font-bold">Default expandable card</h4>
          Lorem ipsum, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit
          amet hendrerit risus, sed porttitor quam. Magna exercitation
          reprehenderit magna cillum tempor amet aliquip ullamco.
        </div>
      </ExpandableCard>
      <br />
      <ExpandableCard height="10rem" wide>
        <div className="prose-p:mt-0 text-sm/relaxed">
          <h4 className="my-2 text-lg font-bold">
            Customize the height & button width
          </h4>
          Lorem ipsum, consectetur adipiscing elit. Nullam pulvinar risus non
          risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit
          amet hendrerit risus, sed porttitor quam. Magna exercitation
          reprehenderit magna cillum tempor amet aliquip ullamco.
        </div>
      </ExpandableCard>
    </div>
  )
}
