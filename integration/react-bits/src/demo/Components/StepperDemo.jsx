import { useState } from "react";
import { toast } from "sonner";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Input, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Stepper, { Step } from "../../content/Components/Stepper/Stepper";
import { stepper } from "../../constants/code/Components/stepperCode";

const StepperDemo = () => {
  const [name, setName] = useState('');
  const [step, setStep] = useState(1);

  const propData = [
    {
      name: "children",
      type: "ReactNode",
      default: "—",
      description: "The Step components (or any custom content) rendered inside the stepper."
    },
    {
      name: "initialStep",
      type: "number",
      default: "1",
      description: "The first step to display when the stepper is initialized."
    },
    {
      name: "onStepChange",
      type: "(step: number) => void",
      default: "() => {}",
      description: "Callback fired whenever the step changes."
    },
    {
      name: "onFinalStepCompleted",
      type: "() => void",
      default: "() => {}",
      description: "Callback fired when the stepper completes its final step."
    },
    {
      name: "stepCircleContainerClassName",
      type: "string",
      default: "",
      description: "Custom class name for the container holding the step indicators."
    },
    {
      name: "stepContainerClassName",
      type: "string",
      default: "",
      description: "Custom class name for the row holding the step circles/connectors."
    },
    {
      name: "contentClassName",
      type: "string",
      default: "",
      description: "Custom class name for the step’s main content container."
    },
    {
      name: "footerClassName",
      type: "string",
      default: "",
      description: "Custom class name for the footer area containing navigation buttons."
    },
    {
      name: "backButtonProps",
      type: "object",
      default: "{}",
      description: "Extra props passed to the Back button."
    },
    {
      name: "nextButtonProps",
      type: "object",
      default: "{}",
      description: "Extra props passed to the Next/Complete button."
    },
    {
      name: "backButtonText",
      type: "string",
      default: "\"Back\"",
      description: "Text for the Back button."
    },
    {
      name: "nextButtonText",
      type: "string",
      default: "\"Continue\"",
      description: "Text for the Next button when not on the last step."
    },
    {
      name: "disableStepIndicators",
      type: "boolean",
      default: "false",
      description: "Disables click interaction on step indicators."
    },
    {
      name: "renderStepIndicator",
      type: "{}",
      default: "undefined",
      description: "Renders a custom step indicator."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <Stepper
            initialStep={step}
            onStepChange={(step) => {
              if (step === 4) {
                name ? toast(`👋🏻 Hello ${name}!`) : toast(`You didn't provide your name :(`)
                setStep(4);
              } else {
                toast(`✅ Step ${step}!`);
                setStep(step);
              }
            }}
            onFinalStepCompleted={() => toast('✅ All steps completed!')}
            nextButtonProps={{ disabled: step === 3 && !name }}
            disableStepIndicators={step === 3 && !name}
            backButtonText="Previous"
            nextButtonText="Next"
          >
            <Step>
              <Text color="#00d8ff" fontSize='1.2rem' fontWeight={600}>Welcome to the React Bits stepper!</Text>
              <p>Check out the next step!</p>
            </Step>

            <Step>
              <h2>Step 2</h2>
              <img style={{ height: '100px', width: '100%', objectFit: 'cover', objectPosition: 'center -70px', borderRadius: '15px', marginTop: '1em' }} src="https://www.purrfectcatgifts.co.uk/cdn/shop/collections/Funny_Cat_Cards_640x640.png?v=1663150894" />
              <p style={{ marginTop: '1em' }}>Custom step content!</p>
            </Step>

            <Step>
              <h2>How about an input?</h2>
              <Input value={name} onChange={(e) => setName(e.target.value)} mt={2} placeholder="Your name?" />
            </Step>

            <Step>
              <Text color="#00d8ff" fontSize='1.2rem' fontWeight={600}>Final Step</Text>
              <p>You made it!</p>
            </Step>
          </Stepper>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={stepper} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...stepper} />
      </CliTab>
    </TabbedLayout>
  );
};

export default StepperDemo;