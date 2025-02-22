import { useState } from "react";
import { toast } from "sonner";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import RefreshButton from "../../components/common/RefreshButton";
import Dependencies from "../../components/code/Dependencies";
import CodeExample from "../../components/code/CodeExample";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import SplitText from "../../content/TextAnimations/SplitText/SplitText";
import { splitText } from '../../constants/code/TextAnimations/splitTextCode';

const SplitTextDemo = () => {
  const [delay, setDelay] = useState(100);
  const [easing, setEasing] = useState("easeOutCubic");
  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "text",
      type: "string",
      default: '""',
      description: "The text content to animate.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional class names to style the component.",
    },
    {
      name: "delay",
      type: "number",
      default: "100",
      description: "Delay between animations for each letter (in ms).",
    },
    {
      name: "animationFrom",
      type: "object",
      default: "{ opacity: 0, transform: 'translate3d(0,40px,0)' }",
      description: "The initial animation state of each letter.",
    },
    {
      name: "animationTo",
      type: "object",
      default: "{ opacity: 1, transform: 'translate3d(0,0,0)' }",
      description: "The target animation state of each letter.",
    },
    {
      name: "easing",
      type: "string",
      default: '"easeOutCubic"',
      description: "Easing function for the animation.",
    },
    {
      name: "threshold",
      type: "number",
      default: "0.1",
      description: "Intersection threshold to trigger the animation.",
    },
    {
      name: "rootMargin",
      type: "string",
      default: '"-100px"',
      description: "Root margin for the intersection observer.",
    },
    {
      name: "textAlign",
      type: "string",
      default: '"center"',
      description: "Sets the text alignment (e.g., 'left', 'center', 'right').",
    },
    {
      name: "onLetterAnimationComplete",
      type: "function",
      default: "undefined",
      description: "Callback function triggered when all letter animations complete.",
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
          <SplitText
            key={key}
            text="Hello!"
            delay={delay}
            easing={easing}
            className="split-text-demo"
            onLetterAnimationComplete={() => toast("✅ Animation Finished!")}
          />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
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

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Easing:</Text>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                const newEasing =
                  easing === "easeOutCubic" ? "easeInOutCubic" : "easeOutCubic";
                setEasing(newEasing);
                forceRerender();
              }}
            >
              Easing: <Text color={"#a1a1aa"}>&nbsp;{easing}</Text>
            </Button>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["@react-spring/web"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={splitText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...splitText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default SplitTextDemo;
