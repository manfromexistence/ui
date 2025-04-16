import { useState } from "react";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import Noise from "../../content/Animations/Noise/Noise";
import { noise } from '../../constants/code/Animations/noiseCode';

const NoiseDemo = () => {
  const [patternSize, setPatternSize] = useState(250);
  const [patternScaleX, setPatternScaleX] = useState(1);
  const [patternScaleY, setPatternScaleY] = useState(1);
  const [patternAlpha, setPatternAlpha] = useState(15);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "patternSize",
      type: "number",
      default: 250,
      description: "Defines the size of the grain pattern.",
    },
    {
      name: "patternScaleX",
      type: "number",
      default: 1,
      description: "Scaling factor for the X-axis of the grain pattern.",
    },
    {
      name: "patternScaleY",
      type: "number",
      default: 1,
      description: "Scaling factor for the Y-axis of the grain pattern.",
    },
    {
      name: "patternRefreshInterval",
      type: "number",
      default: 2,
      description: "Number of frames before the grain pattern refreshes.",
    },
    {
      name: "patternAlpha",
      type: "number",
      default: 15,
      description: "Opacity of the grain pattern (0-255).",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" background='#060606' minH={400} overflow="hidden">
          <Text color="#111" fontSize="6rem" fontWeight={900} textAlign={'center'}>
            Ooh, edgy!
          </Text>
          <Noise
            key={key}
            patternSize={patternSize}
            patternScaleX={patternScaleX}
            patternScaleY={patternScaleY}
            patternAlpha={patternAlpha}
          />
          <RefreshButton onClick={forceRerender} />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Pattern Size:</Text>
            <Slider
              min={50}
              max={500}
              step={10}
              value={patternSize}
              onChange={(val) => {
                setPatternSize(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{patternSize}px</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Scale X:</Text>
            <Slider
              min={0.1}
              max={5}
              step={0.1}
              value={patternScaleX}
              onChange={(val) => {
                setPatternScaleX(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{patternScaleX.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Scale Y:</Text>
            <Slider
              min={0.1}
              max={5}
              step={0.1}
              value={patternScaleY}
              onChange={(val) => {
                setPatternScaleY(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{patternScaleY.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Pattern Alpha:</Text>
            <Slider
              min={0}
              max={25}
              step={5}
              value={patternAlpha}
              onChange={(val) => {
                setPatternAlpha(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{patternAlpha}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={noise} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...noise} />
      </CliTab>
    </TabbedLayout>
  );
};

export default NoiseDemo;