import { Box, Divider, Text } from "@chakra-ui/react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import CodeHighlighter from "./CodeHighlighter";

const CliInstallation = (cliData) => {
  const installConfigs = [
    { title: "JS + CSS", code: cliData.cliDefault },
    { title: "JS + Tailwind", code: cliData.cliTailwind },
    { title: "TS + CSS", code: cliData.cliTsDefault },
    { title: "TS + Tailwind", code: cliData.cliTsTailwind },
  ].filter(({ code }) => !!code);

  return (
    <Box>
      <h2 className="demo-title">One-Time Installation</h2>
      {installConfigs.map(({ title, code }) => (
        <div key={title}>
          <Text mb={0} fontWeight="600" fontSize='1.4rem' color="#a6a6a6" className="demo-title-extra">{title}</Text>
          <CodeHighlighter language="bash" codeString={code || ""} />
        </div>
      ))}

      <div className="cli-divider"></div>

      <h2 className="demo-title">Full CLI Setup</h2>
      <Text className="jsrepo-info" mb={2} mt={4} color="#a1a1aa">
        React Bits uses <a href="https://jsrepo.dev/" target="_blank">jsrepo</a> to help you install components via CLI - it can be set up project-wide!
      </Text>

      <Accordion allowToggle>
        <AccordionItem border="1px solid #222" backgroundColor="#060606" borderRadius="20px">
          <AccordionButton borderTop="none" py={4} px={6}>
            <Box flex="1" m={0} textAlign="left" className="demo-title" fontSize="1rem">
              Setup Steps
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={6} pb={4}>
            <p className="demo-extra-info">1. Initialize a config file for your project</p>

            {[
              { label: "JavaScript (Default)", path: "default" },
              { label: "JavaScript (Tailwind)", path: "tailwind" },
              { label: "TypeScript (Default)", path: "ts/default" },
              { label: "TypeScript (Tailwind)", path: "ts/tailwind" },
            ].map(({ label, path }) => (
              <div key={path}>
                <p className="demo-extra-info">{label}</p>
                <CodeHighlighter language="bash" codeString={`npx jsrepo init https://reactbits.dev/${path}`} />
              </div>
            ))}

            <Divider my={8} />

            <p className="demo-extra-info">2. Browse & add components from the list</p>
            <CodeHighlighter language="bash" codeString={`npx jsrepo add`} />

            <p className="demo-extra-info">3. Or just add a specific component</p>
            <CodeHighlighter language="bash" codeString={`npx jsrepo add Animations/AnimatedContainer`} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default CliInstallation;
