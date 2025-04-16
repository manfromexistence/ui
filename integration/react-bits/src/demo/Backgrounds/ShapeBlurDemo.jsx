import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import ShapeBlur from "../../content/Backgrounds/ShapeBlur/ShapeBlur";
import { shapeBlur } from '../../constants/code/Backgrounds/shapeBlurCode';

const ShapeBlurDemo = () => {
  const [shapeSize, setShapeSize] = useState(1.0);
  const [roundness, setRoundness] = useState(0.5);
  const [borderSize, setBorderSize] = useState(0.05);
  const [circleSize, setCircleSize] = useState(0.25);
  const [circleEdge, setCircleEdge] = useState(1);

  const propData = [
    {
      name: "variation",
      type: "number",
      default: "0",
      description: "Selects the shape variation (0-3) used by the shader."
    },
    {
      name: "pixelRatioProp",
      type: "number",
      default: "2",
      description: "Overrides the pixel ratio, typically set to the device pixel ratio."
    },
    {
      name: "shapeSize",
      type: "number",
      default: "1.2",
      description: "Controls the size of the shape."
    },
    {
      name: "roundness",
      type: "number",
      default: "0.4",
      description: "Determines the roundness of the shape's corners."
    },
    {
      name: "borderSize",
      type: "number",
      default: "0.05",
      description: "Sets the thickness of the border."
    },
    {
      name: "circleSize",
      type: "number",
      default: "0.3",
      description: "Determines the size of the hover circle effect."
    },
    {
      name: "circleEdge",
      type: "number",
      default: "0.5",
      description: "Controls the edge softness of the hover circle."
    }
  ];


  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          background='#060606'
          height={500}
          overflow="hidden"
          p={0}
        >
          <ShapeBlur
            className="shapeblur-demo"
            variation={0}
            pixelRatioProp={window.devicePixelRatio || 1}
            shapeSize={shapeSize}
            roundness={roundness}
            borderSize={borderSize}
            circleSize={circleSize}
            circleEdge={circleEdge}
          />
          <Text position="absolute" left='50%' top='50%' transform='translate(-50%, -50%)' fontSize='6rem' fontWeight={900} zIndex={0} color='#222'>
            Hover Me.
          </Text>
        </Box>

        <Box mt={4}>
          <Flex direction="column" gap={4}>
            <Flex align="center" gap={4}>
              <Text w="120px">Shape Size:</Text>
              <Slider
                min={0.1}
                max={2}
                step={0.1}
                value={shapeSize}
                onChange={(val) => setShapeSize(val)}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{shapeSize.toFixed(1)}</Text>
            </Flex>

            <Flex align="center" gap={4}>
              <Text w="120px">Roundness:</Text>
              <Slider
                min={0}
                max={1}
                step={0.05}
                value={roundness}
                onChange={(val) => setRoundness(val)}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{roundness.toFixed(2)}</Text>
            </Flex>

            <Flex align="center" gap={4}>
              <Text w="120px">Border Size:</Text>
              <Slider
                min={0.01}
                max={0.2}
                step={0.005}
                value={borderSize}
                onChange={(val) => setBorderSize(val)}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{borderSize.toFixed(3)}</Text>
            </Flex>

            <Flex align="center" gap={4}>
              <Text w="120px">Circle Size:</Text>
              <Slider
                min={0.1}
                max={0.5}
                step={0.01}
                value={circleSize}
                onChange={(val) => setCircleSize(val)}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{circleSize.toFixed(2)}</Text>
            </Flex>

            <Flex align="center" gap={4}>
              <Text w="120px">Circle Edge:</Text>
              <Slider
                min={0.1}
                max={2}
                step={0.1}
                value={circleEdge}
                onChange={(val) => setCircleEdge(val)}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{circleEdge.toFixed(1)}</Text>
            </Flex>
          </Flex>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['three']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={shapeBlur} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...shapeBlur} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ShapeBlurDemo;