import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@/registry/headless/headless-accordion';

export const HeadlessAccordionDemo = () => {
  return (
    <Accordion className="max-w-[400px] w-full">
      <AccordionItem defaultOpen>
        <AccordionButton>What is Animate UI?</AccordionButton>
        <AccordionPanel>
          Animate UI is an open-source distribution of React components built
          with TypeScript, Tailwind CSS, and Motion.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          How is it different from other libraries?
        </AccordionButton>
        <AccordionPanel>
          Instead of installing via NPM, you copy and paste the components
          directly. This gives you full control to modify or customize them as
          needed.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Is Animate UI free to use?</AccordionButton>
        <AccordionPanel>
          Absolutely! Animate UI is fully open-source. You can use, modify, and
          adapt it to fit your needs.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
