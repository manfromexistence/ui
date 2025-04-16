import { useState } from "react";
import { toast } from "sonner";
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout,
} from "../../components/common/TabbedLayout";
import {
  Box,
  Button,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import BlurText from "../../content/TextAnimations/BlurText/BlurText";
import { blurText } from "../../constants/code/TextAnimations/blurTextCode";

const BlurTextDemo = () => {
  const [animateBy, setAnimateBy] = useState("words");
  const [direction, setDirection] = useState("top");
  const [delay, setDelay] = useState(200);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "text",
      type: "string",
      default: '""',
      description: "The text content to animate.",
    },
    {
      name: "animateBy",
      type: "string",
      default: '"words"',
      description: "Determines whether to animate by 'words' or 'letters'.",
    },
    {
      name: "direction",
      type: "string",
      default: '"top"',
      description:
        "Direction from which the words/letters appear ('top' or 'bottom').",
    },
    {
      name: "delay",
      type: "number",
      default: "200",
      description: "Delay between animations for each word/letter (in ms).",
    },
    {
      name: "threshold",
      type: "number",
      default: "0.1",
      description: "Intersection threshold for triggering the animation.",
    },
    {
      name: "rootMargin",
      type: "string",
      default: '"0px"',
      description: "Root margin for the intersection observer.",
    },
    {
      name: "onAnimationComplete",
      type: "function",
      default: "undefined",
      description: "Callback function triggered when all animations complete.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          minH={400}
          overflow="hidden"
        >
          <RefreshButton onClick={forceRerender} />
          <BlurText
            key={key}
            text="Isn't this so cool?!"
            animateBy={animateBy}
            direction={direction}
            delay={delay}
            onAnimationComplete={() => toast("✅ Animation Finished!")}
            className="blur-text-demo"
          />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex gap={4} wrap="wrap">
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setAnimateBy(animateBy === "words" ? "letters" : "words");
                forceRerender();
              }}
            >
              Animate By: <Text color={"#a1a1aa"}>&nbsp;{animateBy}</Text>
            </Button>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setDirection(direction === "top" ? "bottom" : "top");
                forceRerender();
              }}
            >
              Direction: <Text color={"#a1a1aa"}>&nbsp;{direction}</Text>
            </Button>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Delay (ms):</Text>
            <Slider
              min={50}
              max={500}
              step={10}
              value={delay}
              onChange={(val) => {
                setDelay(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{delay}ms</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["@react-spring/web"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={blurText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...blurText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default BlurTextDemo;
