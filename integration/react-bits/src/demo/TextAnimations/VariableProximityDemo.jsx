import { useState, useRef } from "react";
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout
} from "../../components/common/TabbedLayout";
import {
  Box,
  Button,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text
} from "@chakra-ui/react";

import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";

import VariableProximity from "../../content/TextAnimations/VariableProximity/VariableProximity";
import { variableProximity } from '../../constants/code/TextAnimations/variableProximityCode';

const VariableProximityDemo = () => {
  const containerRef = useRef(null);

  const [radius, setRadius] = useState(100);
  const [falloff, setFalloff] = useState("linear");

  const propData = [
    {
      name: "label",
      type: "string",
      default: '""',
      description: "The text content to display.",
    },
    {
      name: "fromFontVariationSettings",
      type: "string",
      default: "'wght' 400, 'opsz' 9",
      description: "The starting variation settings.",
    },
    {
      name: "toFontVariationSettings",
      type: "string",
      default: "'wght' 800, 'opsz' 40",
      description: "The variation settings to reach at cursor proximity.",
    },
    {
      name: "containerRef",
      type: "RefObject<HTMLDivElement>",
      default: "undefined",
      description: "Reference to container for relative calculations.",
    },
    {
      name: "radius",
      type: "number",
      default: "50",
      description: "Proximity radius to influence the effect.",
    },
    {
      name: "falloff",
      type: "'linear' | 'exponential' | 'gaussian'",
      default: '"linear"',
      description: "Type of falloff for the effect.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          ref={containerRef}
          position="relative"
          className="demo-container"
          minH={400}
          overflow="hidden"
          p={4}
        >
          <VariableProximity
            label={'Hover me! And then star React Bits on GitHub, or else...'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={radius}
            falloff={falloff}
          />
        </Box>

        <Box mt={6} className="preview-options">
          <Text fontSize="xl" mb={2}>Customize</Text>
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Radius:</Text>
            <Slider
              min={50}
              max={300}
              step={10}
              value={radius}
              onChange={(val) => setRadius(val)}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{radius}px</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Falloff:</Text>
            {["linear", "exponential", "gaussian"].map((type) => (
              <Button
                key={type}
                size="sm"
                colorScheme='gray'
                color={type === falloff ? '#00d8ff' : 'white'}
                onClick={() => setFalloff(type)}
              >
                {type}
              </Button>
            ))}
          </Flex>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={variableProximity} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...variableProximity} />
      </CliTab>
    </TabbedLayout>
  );
};

export default VariableProximityDemo;
