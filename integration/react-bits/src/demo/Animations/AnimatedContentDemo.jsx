import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from '../../components/common/PropTable';
import CliInstallation from "../../components/code/CliInstallation";

import AnimatedContent from '../../content/Animations/AnimatedContent/AnimatedContent';
import { animatedContent } from '../../constants/code/Animations/animatedContentCode';

const AnimatedContentDemo = () => {
  const [direction, setDirection] = useState("vertical");
  const [distance, setDistance] = useState(100);
  const [delay, setDelay] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [initialOpacity, setInitialOpacity] = useState(0);
  const [animateOpacity, setAnimateOpacity] = useState(true);
  const [scale, setScale] = useState(1);
  const [tension, setTension] = useState(50);
  const [friction, setFriction] = useState(25);
  const [threshold, setThreshold] = useState(0.1);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: 'direction',
      type: 'string',
      default: 'vertical',
      description: 'Specifies the direction of the animation. Can be either "vertical" or "horizontal".',
    },
    {
      name: 'distance',
      type: 'number',
      default: 100,
      description: 'Defines the distance (in pixels) the component moves during the animation.',
    },
    {
      name: 'delay',
      type: 'number',
      default: 0,
      description: 'Adds a delay in milliseconds before triggering the animation.',
    },
    {
      name: 'reverse',
      type: 'boolean',
      default: false,
      description: 'Determines whether the animation moves in the reverse direction.',
    },
    {
      name: 'initialOpacity',
      type: 'number',
      default: 0,
      description: 'Sets the initial opacity of the component before the animation begins.',
    },
    {
      name: 'animateOpacity',
      type: 'boolean',
      default: true,
      description: 'Enables or disables the opacity animation during the transition.',
    },
    {
      name: 'scale',
      type: 'number',
      default: 1,
      description: 'Sets the initial scale of the component for scaling animations.',
    },
    {
      name: 'config',
      type: 'object',
      default: '{ tension: 50, friction: 25 }',
      description: 'Configures the spring animation with tension and friction values.',
    },
    {
      name: 'threshold',
      type: 'number',
      default: 0.1,
      description: 'Defines the intersection threshold (percentage of visibility) required to trigger the animation.',
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <AnimatedContent
            key={key}
            direction={direction}
            delay={delay}
            distance={distance}
            reverse={reverse}
            initialOpacity={initialOpacity}
            animateOpacity={animateOpacity}
            scale={scale}
            config={{ tension, friction }}
            threshold={threshold}
          >
            <Flex
              fontSize="xl"
              fontWeight="bolder"
              justifyContent="center"
              alignItems="center"
              color="#fff"
              h={100}
              borderRadius="25px"
              border="1px solid #222"
              w={200}
              bg={"#060606"}
            >
              Animate Me
            </Flex>
          </AnimatedContent>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex gap={2} wrap="wrap">
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setDirection(direction === "vertical" ? "horizontal" : "vertical");
                forceRerender();
              }}
            >
              Direction: <Text color={"#a1a1aa"}>&nbsp;{String(direction)}</Text>
            </Button>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setReverse(!reverse);
                forceRerender();
              }}
            >
              Reverse: <Text color={reverse ? "lightgreen" : "coral"}>&nbsp;{String(reverse)}</Text>
            </Button>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setAnimateOpacity(!animateOpacity);
                forceRerender();
              }}
            >
              Opacity Animation:{" "}
              <Text color={animateOpacity ? "lightgreen" : "coral"}>&nbsp;{String(animateOpacity)}</Text>
            </Button>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Initial Opacity:</Text>
            <Slider
              min={0}
              max={1}
              step={0.1}
              value={initialOpacity}
              onChange={(val) => {
                setInitialOpacity(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{initialOpacity.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Distance:</Text>
            <Slider
              min={50}
              max={200}
              step={10}
              value={distance}
              onChange={(val) => {
                setDistance(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{distance}px</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Delay:</Text>
            <Slider
              min={0}
              max={2000}
              step={100}
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
            <Text fontSize="sm">Scale:</Text>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              value={scale}
              onChange={(val) => {
                setScale(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{scale.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Tension:</Text>
            <Slider
              min={10}
              max={100}
              step={5}
              value={tension}
              onChange={(val) => {
                setTension(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{tension}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Friction:</Text>
            <Slider
              min={5}
              max={50}
              step={5}
              value={friction}
              onChange={(val) => {
                setFriction(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{friction}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Threshold:</Text>
            <Slider
              min={0.1}
              max={0.4}
              step={0.1}
              value={threshold}
              onChange={(val) => {
                setThreshold(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{threshold.toFixed(1)}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["@react-spring/web"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={animatedContent} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...animatedContent} />
      </CliTab>
    </TabbedLayout>
  );
};

export default AnimatedContentDemo;
