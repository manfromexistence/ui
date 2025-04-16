import { useRef, useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import ScrollFloat from "../../content/TextAnimations/ScrollFloat/ScrollFloat";
import { scrollFloat } from "../../constants/code/TextAnimations/scrollFloatCode";

const ScrollFloatDemo = () => {
  const containerRef = useRef(null);
  const [stagger, setStagger] = useState(0.03);
  const [duration, setDuration] = useState(1);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "children",
      type: "ReactNode",
      default: "—",
      description: "The content to animate. If a string, it will be split into individual characters."
    },
    {
      name: "scrollContainerRef",
      type: "RefObject<HTMLElement>",
      default: "window",
      description: "Optional ref to the scroll container. Defaults to window if not provided."
    },
    {
      name: "containerClassName",
      type: "string",
      default: '""',
      description: "Additional Tailwind classes for the container element."
    },
    {
      name: "textClassName",
      type: "string",
      default: '""',
      description: "Additional Tailwind classes for the text element."
    },
    {
      name: "animationDuration",
      type: "number",
      default: "1",
      description: "Duration (in seconds) of the animation."
    },
    {
      name: "ease",
      type: "string",
      default: '"back.inOut(2)"',
      description: "Easing function used for the animation."
    },
    {
      name: "scrollStart",
      type: "string",
      default: '"center bottom+=50%"',
      description: "The scroll trigger start position."
    },
    {
      name: "scrollEnd",
      type: "string",
      default: '"bottom bottom-=40%"',
      description: "The scroll trigger end position."
    },
    {
      name: "stagger",
      type: "number",
      default: "0.03",
      description: "Delay between the animation start of each character."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box className="demo-container" style={{ height: '500px', maxHeight: '500px' }} overflowY='scroll' overflowX='hidden' ref={containerRef} position='relative'>
          <Text textAlign="center" color='#222' fontSize="clamp(4rem, 6vw, 4rem)" fontWeight={900} position="absolute" top='50%' transform='translateY(-50%)'>Scroll Down</Text>
          <Box position="relative" pt={1600} pb={600} px='3rem'>
            <ScrollFloat stagger={stagger} animationDuration={duration} key={key} scrollContainerRef={containerRef}>
              reactbits
            </ScrollFloat>
          </Box>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Stagger</Text>
            <Slider
              min={0.01}
              max={0.1}
              step={0.01}
              value={stagger}
              onChange={(val) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setStagger(val);
                forceRerender();
              }}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{stagger}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Duration</Text>
            <Slider
              min={1}
              max={10}
              step={0.1}
              value={duration}
              onChange={(val) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setDuration(val);
                forceRerender();
              }}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{duration}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['gsap']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={scrollFloat} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...scrollFloat} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ScrollFloatDemo;