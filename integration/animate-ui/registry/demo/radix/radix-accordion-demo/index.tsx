import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/registry/radix/radix-accordion';

export const RadixAccordionDemo = () => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      className="max-w-[400px] w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Animate UI?</AccordionTrigger>
        <AccordionContent>
          Animate UI is an open-source distribution of React components built
          with TypeScript, Tailwind CSS, and Motion.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How is it different from other libraries?
        </AccordionTrigger>
        <AccordionContent>
          Instead of installing via NPM, you copy and paste the components
          directly. This gives you full control to modify or customize them as
          needed.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Is Animate UI free to use?</AccordionTrigger>
        <AccordionContent>
          Absolutely! Animate UI is fully open-source. You can use, modify, and
          adapt it to fit your needs.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
