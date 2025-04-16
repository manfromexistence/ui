import { useState } from "react";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Switch,
} from "@chakra-ui/react";
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout,
} from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";
import Dependencies from "../../components/code/Dependencies";

import TrueFocus from "../../content/TextAnimations/TrueFocus/TrueFocus";
import { trueFocus } from '../../constants/code/TextAnimations/trueFocusCode';

const TrueFocusDemo = () => {
  const [manualMode, setManualMode] = useState(false);
  const [blurAmount, setBlurAmount] = useState(5);
  const [animationDuration, setAnimationDuration] = useState(0.5);
  const [pauseBetweenAnimations, setPauseBetweenAnimations] = useState(1);
  const [borderColor, setBorderColor] = useState("#00d8ff");

  const config = {
    sentence: 'True Focus',
    manualMode,
    blurAmount,
    borderColor,
    animationDuration: animationDuration,
    pauseBetweenAnimations,
  };

  const propData = [
    {
      name: "sentence",
      type: "string",
      default: "'True Focus'",
      description: "The text to display with the focus animation.",
    },
    {
      name: "manualMode",
      type: "boolean",
      default: "false",
      description: "Disables automatic animation when set to true.",
    },
    {
      name: "blurAmount",
      type: "number",
      default: "5",
      description: "The amount of blur applied to non-active words.",
    },
    {
      name: "borderColor",
      type: "string",
      default: "'green'",
      description: "The color of the focus borders.",
    },
    {
      name: "glowColor",
      type: "string",
      default: "'rgba(0, 255, 0, 0.6)'",
      description: "The color of the glowing effect on the borders.",
    },
    {
      name: "animationDuration",
      type: "number",
      default: "0.5",
      description: "The duration of the animation for each word.",
    },
    {
      name: "pauseBetweenAnimations",
      type: "number",
      default: "1",
      description:
        "Time to pause between focusing on each word (in auto mode).",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={200}>
          <TrueFocus {...config} />
        </Box>

        <h2 className="demo-title-extra">Customize</h2>
        <Flex gap={4} align="flex-start" mt={4} direction="column" wrap="wrap">
          <Flex align="center" gap={2}>
            <Text fontSize="sm">Border Color</Text>
            <input
              type="color"
              value={borderColor}
              onChange={(e) => setBorderColor(e.target.value)}
              style={{
                width: "40px",
                border: "none",
                padding: "0",
                background: "none",
                cursor: "pointer",
              }}
            />
          </Flex>

          <Flex align="center" gap={2}>
            <Text fontSize="sm">Hover Mode</Text>
            <Switch
              colorScheme="black"
              border="1px solid #222"
              borderRadius="50px"
              isChecked={manualMode}
              onChange={(e) => {
                setManualMode(e.target.checked);
              }}
            />
          </Flex>

          <Flex align="center" gap={2}>
            <Text fontSize="sm">Blur Amount</Text>
            <Slider
              min={0}
              max={15}
              step={0.5}
              value={blurAmount}
              onChange={(val) => setBlurAmount(val)}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{blurAmount}px</Text>
          </Flex>

          <Flex align="center" gap={2}>
            <Text fontSize="sm">Animation Duration</Text>
            <Slider
              min={0.1}
              max={3}
              step={0.1}
              value={animationDuration}
              onChange={(val) => setAnimationDuration(val)}
              width="200px"
              isDisabled={!manualMode} // Enable when in manual mode
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{animationDuration}s</Text>
          </Flex>

          <Flex align="center" gap={2}>
            <Text fontSize="sm">Pause Between Animations</Text>
            <Slider
              min={0}
              max={5}
              step={0.5}
              value={pauseBetweenAnimations}
              onChange={(val) => setPauseBetweenAnimations(val)}
              width="200px"
              isDisabled={manualMode} // Disable in manual mode
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{pauseBetweenAnimations}s</Text>
          </Flex>
        </Flex>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={trueFocus} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...trueFocus} />
      </CliTab>
    </TabbedLayout>
  );
};

export default TrueFocusDemo;
