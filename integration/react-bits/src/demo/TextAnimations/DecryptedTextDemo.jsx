import { useState } from "react";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
  Text,
} from "@chakra-ui/react";
import {
  TabbedLayout,
  PreviewTab,
  CodeTab,
  CliTab,
} from "../../components/common/TabbedLayout";
import { toast } from "sonner";

import CliInstallation from "../../components/code/CliInstallation";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import PropTable from "../../components/common/PropTable";
import RefreshButton from "../../components/common/RefreshButton";
import useForceRerender from "../../hooks/useForceRerender";

import DecryptedText from "../../content/TextAnimations/DecryptedText/DecryptedText";
import { decryptedText } from "../../constants/code/TextAnimations/decryptedTextCode";

const DecryptedTextDemo = () => {
  const [speed, setspeed] = useState(60);
  const [maxIterations, setMaxIterations] = useState(10);
  const [sequential, setSequential] = useState(true);
  const [revealDirection, setRevealDirection] = useState("start");
  const [useOriginalCharsOnly, setUseOriginalCharsOnly] = useState(false);
  const [animateOn, setAnimateOn] = useState("view");

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "text",
      type: "string",
      default: '""',
      description: "The text content to decrypt.",
    },
    {
      name: "speed",
      type: "number",
      default: "50",
      description: "Time in ms between each iteration.",
    },
    {
      name: "maxIterations",
      type: "number",
      default: "10",
      description: "Max # of random iterations (non-sequential mode).",
    },
    {
      name: "sequential",
      type: "boolean",
      default: "false",
      description: "Whether to reveal one character at a time in sequence.",
    },
    {
      name: "revealDirection",
      type: `"start" | "end" | "center"`,
      default: `"start"`,
      description:
        "From which position characters begin to reveal in sequential mode.",
    },
    {
      name: "useOriginalCharsOnly",
      type: "boolean",
      default: "false",
      description:
        "Restrict scrambling to only the characters already in the text.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "CSS class for revealed characters.",
    },
    {
      name: "parentClassName",
      type: "string",
      default: '""',
      description: "CSS class for the main characters container.",
    },
    {
      name: "encryptedClassName",
      type: "string",
      default: '""',
      description: "CSS class for encrypted characters.",
    },
    {
      name: "animateOn",
      type: `"view" | "hover"`,
      default: `"hover"`,
      description: "Trigger scrambling on hover or scroll-into-view.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          justifyContent="flex-start"
          py={{ md: 6, sm: 4 }}
          className="demo-container"
          overflow="hidden"
        >
          <RefreshButton onClick={forceRerender} />
          <Flex
            pl={{ md: 6, sm: 3 }}
            m={{ md: 8, sm: 2 }}
            direction="column"
            key={key}
          >
            <DecryptedText
              speed={speed}
              text="Ahoy, matey!"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="Set yer eyes on this"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="And try tinkerin’ round’"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
            />
            <DecryptedText
              speed={speed}
              text="with these here props, arr!"
              maxIterations={maxIterations}
              sequential={sequential}
              revealDirection={revealDirection}
              parentClassName="decrypted-text"
              useOriginalCharsOnly={useOriginalCharsOnly}
              animateOn={animateOn}
              onAnimationComplete={() => toast("✅ Animation Finished!")}
            />
          </Flex>
        </Box>

        <Flex
          direction="column"
          alignItems="flex-start"
          gap={4}
          my={4}
          style={{ maxWidth: "100%", overflow: "auto" }}
        >
          <h2 className="demo-title-extra">Customize</h2>
          <Flex wrap="wrap" gap={4} mb={4}>
            <FormControl width="auto">
              <FormLabel mb="2">Animate On</FormLabel>
              <Select
                width="auto"
                value={animateOn}
                onChange={(e) => {
                  setAnimateOn(e.target.value);
                  forceRerender();
                }}
              >
                <option value="hover">hover</option>
                <option value="view">view</option>
              </Select>
            </FormControl>

            <FormControl width="auto">
              <FormLabel mb="2">Direction</FormLabel>
              <Select
                width="auto"
                value={revealDirection}
                onChange={(e) => {
                  setRevealDirection(e.target.value);
                  forceRerender();
                }}
              >
                <option value="start">start</option>
                <option value="end">end</option>
                <option value="center">center</option>
              </Select>
            </FormControl>
          </Flex>

          <Flex wrap="wrap" gap={4} mb={4}>
            <FormControl width="auto">
              <FormLabel mb="0">Speed</FormLabel>
              <Flex alignItems="center" gap={2}>
                <Slider
                  min={10}
                  max={200}
                  step={10}
                  width="100px"
                  value={speed}
                  onChange={(val) => {
                    setspeed(val);
                    forceRerender();
                  }}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>{speed}ms</Text>
              </Flex>
            </FormControl>

            <FormControl width="auto">
              <FormLabel mb="0">Iterations</FormLabel>
              <Flex alignItems="center" gap={2}>
                <Slider
                  min={1}
                  max={50}
                  step={1}
                  width="100px"
                  value={maxIterations}
                  onChange={(val) => {
                    setMaxIterations(val);
                    forceRerender();
                  }}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text ml={2}>{maxIterations}</Text>
              </Flex>
            </FormControl>
          </Flex>

          <Flex wrap="wrap" gap={4} mb={4}>
            <FormControl width="auto" display="flex" alignItems="center">
              <FormLabel mb="0" mr={2}>
                Sequential
              </FormLabel>
              <Switch
                mr={4}
                isChecked={sequential}
                onChange={() => {
                  setSequential(!sequential);
                  forceRerender();
                }}
              />
            </FormControl>

            <FormControl width="auto" display="flex" alignItems="center">
              <FormLabel mb="0" mr={2}>
                Original Chars
              </FormLabel>
              <Switch
                isChecked={useOriginalCharsOnly}
                onChange={() => {
                  setUseOriginalCharsOnly(!useOriginalCharsOnly);
                  forceRerender();
                }}
              />
            </FormControl>
          </Flex>
        </Flex>

        <PropTable data={propData} />
        <Dependencies dependencyList={["framer-motion"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={decryptedText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...decryptedText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default DecryptedTextDemo;
