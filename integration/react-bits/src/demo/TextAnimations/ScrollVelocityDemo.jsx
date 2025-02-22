import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import ScrollVelocity from "../../content/TextAnimations/ScrollVelocity/ScrollVelocity";
import { scrollVelocity } from "../../constants/code/TextAnimations/scrollVelocityCode";

const ScrollVelocityDemo = () => {
  const [velocity, setVelocity] = useState(100);

  const propData = [
    {
      name: "scrollContainerRef",
      type: "React.RefObject<HTMLElement>",
      default: "undefined",
      description: "Optional ref for a custom scroll container to track scroll position."
    },
    {
      name: "texts",
      type: "string[]",
      default: "[]",
      description: "Array of strings to display as scrolling text."
    },
    {
      name: "velocity",
      type: "number",
      default: "100",
      description: "Base velocity for scrolling; sign is flipped for odd indexed texts."
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "CSS class applied to each text copy (span)."
    },
    {
      name: "damping",
      type: "number",
      default: "50",
      description: "Damping value for the spring animation."
    },
    {
      name: "stiffness",
      type: "number",
      default: "400",
      description: "Stiffness value for the spring animation."
    },
    {
      name: "numCopies",
      type: "number",
      default: "6",
      description: "Number of copies of the text rendered for a continuous scrolling effect."
    },
    {
      name: "velocityMapping",
      type: "{ input: number[]; output: number[] }",
      default: "{ input: [0, 1000], output: [0, 5] }",
      description: "Mapping from scroll velocity to a movement multiplier for dynamic scrolling."
    },
    {
      name: "parallaxClassName",
      type: "string",
      default: '"parallax"',
      description: "CSS class for the parallax container."
    },
    {
      name: "scrollerClassName",
      type: "string",
      default: '"scroller"',
      description: "CSS class for the scroller container."
    },
    {
      name: "parallaxStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles for the parallax container."
    },
    {
      name: "scrollerStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Inline styles for the scroller container."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          h={600}
          maxH={600}
          overflow={"hidden"}
        >
          <Flex position="relative" justifyContent="center" alignItems="center">
            <ScrollVelocity texts={['React Bits', 'Scroll Down']} velocity={velocity} className="custom-scroll-text" />
          </Flex>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Velocity</Text>
            <Slider
              min={10}
              max={500}
              step={10}
              value={velocity}
              onChange={(val) => {
                setVelocity(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{velocity}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
        <Box mb="50vh"></Box>
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={scrollVelocity} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...scrollVelocity} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ScrollVelocityDemo;