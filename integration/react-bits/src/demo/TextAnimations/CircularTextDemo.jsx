import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, FormControl, FormLabel, Input, Select, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import CircularText from "../../content/TextAnimations/CircularText/CircularText";
import { circularText } from "../../constants/code/TextAnimations/circularTextCode";

const CircularTextDemo = () => {
  const [text, setText] = useState("REACT*BITS*COMPONENTS*");
  const [onHover, setOnHover] = useState("speedUp");
  const [spinDuration, setSpinDuration] = useState(20);

  const propData = [
    {
      name: "text",
      type: "string",
      default: "''",
      description: "The text to display in a circular layout."
    },
    {
      name: "spinDuration",
      type: "number",
      default: "20",
      description: "The duration (in seconds) for one full rotation."
    },
    {
      name: "onHover",
      type: "'slowDown' | 'speedUp' | 'pause' | 'goBonkers'",
      default: "undefined",
      description: "Specifies the hover behavior variant. Options include 'slowDown', 'speedUp', 'pause', and 'goBonkers'."
    },
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Optional additional CSS classes to apply to the component."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={400} overflow="hidden">
          <CircularText text={text} onHover={onHover} spinDuration={spinDuration} />
        </Box>


        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex alignItems="center" gap={4} flexWrap="wrap" mb={4}>
            <FormControl>
              <FormLabel fontSize="sm">Text</FormLabel>
              <Input
                rounded="xl"
                w={'300px'}
                maxLength={25}
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
                placeholder="Enter text..."
              />
            </FormControl>
          </Flex>

          <Flex alignItems="center" gap={4} flexWrap="wrap" mb={6}>
            <FormControl>
              <FormLabel fontSize="sm">On Hover</FormLabel>
              <Select defaultValue="one" rounded="xl" w={'300px'} onChange={(e) => {
                setOnHover(e.target.value);
              }}>
                <option value='speedUp'>Speed Up</option>
                <option value='slowDown'>Slow Down</option>
                <option value='pause'>Pause</option>
                <option value='goBonkers'>Go Bonkers</option>
              </Select>
            </FormControl>
          </Flex>

          <Flex gap={4} align="center">
            <Text fontSize="sm">Speed</Text>
            <Slider
              min={1}
              max={60}
              step={1}
              value={spinDuration}
              onChange={(val) => {
                setSpinDuration(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{spinDuration}</Text>
          </Flex>

        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={circularText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...circularText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default CircularTextDemo;