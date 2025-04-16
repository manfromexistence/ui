import { useState } from "react";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text
} from "@chakra-ui/react";

import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import { clickSpark } from '../../constants/code/Animations/clickSparkCode';
import ClickSpark from "../../ts-default/Animations/ClickSpark/ClickSpark";

const ClickSparkDemo = () => {
  const [sparkColor, setSparkColor] = useState("#ffffff");
  const [sparkSize, setSparkSize] = useState(10);
  const [sparkRadius, setSparkRadius] = useState(15);
  const [sparkCount, setSparkCount] = useState(8);
  const [duration, setDuration] = useState(400);
  const [extraScale, setExtraScale] = useState(1.0);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "sparkColor",
      type: "string",
      default: "'#f00'",
      description: "Color of each spark line.",
    },
    {
      name: "sparkSize",
      type: "number",
      default: 30,
      description: "Initial length of each spark line.",
    },
    {
      name: "sparkRadius",
      type: "number",
      default: 30,
      description: "How far sparks travel from the click center.",
    },
    {
      name: "sparkCount",
      type: "number",
      default: 8,
      description: "Number of spark lines that appear on each click.",
    },
    {
      name: "duration",
      type: "number",
      default: 660,
      description: "Animation duration in milliseconds.",
    },
    {
      name: "easing",
      type: "string",
      default: "'ease-out'",
      description: "Easing function used for the spark animation.",
    },
    {
      name: "extraScale",
      type: "number",
      default: 1.0,
      description: "Additional multiplier for spark distance.",
    },
    {
      name: "children",
      type: "React.ReactNode",
      default: "",
      description: "React children to render.",
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={300} p={0} overflow="hidden">
          <ClickSpark
            key={key}
            sparkColor={sparkColor}
            sparkSize={sparkSize}
            sparkRadius={sparkRadius}
            sparkCount={sparkCount}
            duration={duration}
            extraScale={extraScale}
          />

          <Text position='absolute' fontWeight={900} fontSize='2rem' textAlign='center' color='#222' userSelect='none'>Click Around!</Text>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          {/* Spark Color */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Spark Color:</Text>
            <input
              type="color"
              value={sparkColor}
              onChange={(e) => {
                setSparkColor(e.target.value);
                forceRerender();
              }}
            />
          </Flex>

          {/* Spark Size */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Spark Size:</Text>
            <Slider
              min={5}
              max={60}
              step={1}
              value={sparkSize}
              onChange={(val) => {
                setSparkSize(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{sparkSize}</Text>
          </Flex>

          {/* Spark Radius */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Spark Radius:</Text>
            <Slider
              min={10}
              max={200}
              step={5}
              value={sparkRadius}
              onChange={(val) => {
                setSparkRadius(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{sparkRadius}</Text>
          </Flex>

          {/* Spark Count */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Spark Count:</Text>
            <Slider
              min={1}
              max={20}
              step={1}
              value={sparkCount}
              onChange={(val) => {
                setSparkCount(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{sparkCount}</Text>
          </Flex>

          {/* Duration */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Duration (ms):</Text>
            <Slider
              min={200}
              max={2000}
              step={100}
              value={duration}
              onChange={(val) => {
                setDuration(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{duration}</Text>
          </Flex>

          {/* Extra Scale */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Extra Scale:</Text>
            <Slider
              min={0.5}
              max={2}
              step={0.1}
              value={extraScale}
              onChange={(val) => {
                setExtraScale(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{extraScale.toFixed(1)}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={clickSpark} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...clickSpark} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ClickSparkDemo;
