import { useRef, useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import ScrollReveal from "../../content/TextAnimations/ScrollReveal/ScrollReveal";
import { scrollReveal } from "../../constants/code/TextAnimations/scrollRevealCode";

const ScrollRevealDemo = () => {
  const containerRef = useRef(null);

  const [enableBlur, setEnableBlur] = useState(true);
  const [baseOpacity, setBaseOpacity] = useState(0.1);
  const [baseRotation, setBaseRotation] = useState(3);
  const [blurStrength, setBlurStrength] = useState(4);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "children",
      type: "ReactNode",
      default: "—",
      description: "The text or elements to be animated. If a string is provided, it will be split into words."
    },
    {
      name: "scrollContainerRef",
      type: "React.RefObject",
      default: "window",
      description: "Optional ref for the scroll container. If provided, GSAP will use this container for scroll triggers; otherwise, it defaults to the window."
    },
    {
      name: "enableBlur",
      type: "boolean",
      default: "true",
      description: "Enables the blur animation effect on the words."
    },
    {
      name: "baseOpacity",
      type: "number",
      default: "0.1",
      description: "The initial opacity value for the words before the animation."
    },
    {
      name: "baseRotation",
      type: "number",
      default: "3",
      description: "The starting rotation (in degrees) for the container before it animates to 0."
    },
    {
      name: "blurStrength",
      type: "number",
      default: "4",
      description: "The strength of the blur effect (in pixels) applied at the start of the animation."
    },
    {
      name: "containerClassName",
      type: "string",
      default: '""',
      description: "Additional CSS class(es) to apply to the container element."
    },
    {
      name: "textClassName",
      type: "string",
      default: '""',
      description: "Additional CSS class(es) to apply to the text element."
    },
    {
      name: "rotationEnd",
      type: "string",
      default: '"bottom bottom"',
      description: "The scroll trigger end point for the container rotation animation."
    },
    {
      name: "wordAnimationEnd",
      type: "string",
      default: '"bottom bottom"',
      description: "The scroll trigger end point for the word opacity and blur animations. The animation will complete when the bottom of the text reaches the bottom of the container."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box className="demo-container" style={{ height: '500px', maxHeight: '500px' }} overflowY='scroll' overflowX='hidden' ref={containerRef} position='relative'>
          <Text textAlign="center" color='#222' fontSize="clamp(4rem, 6vw, 4rem)" fontWeight={900} position="absolute" top='50%' transform='translateY(-50%)'>Scroll Down</Text>
          <Box position="relative" pt={1600} pb={600} px='3rem'>
            <ScrollReveal
              key={key}
              scrollContainerRef={containerRef}
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
            >
              When does a man die? When he is hit by a bullet? No! When he suffers a disease?
              No! When he ate a soup made out of a poisonous mushroom?
              No! A man dies when he is forgotten!
            </ScrollReveal>
          </Box>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Enable Blur</Text>
            <Switch
              isChecked={enableBlur}
              onChange={(e) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setEnableBlur(e.target.checked);
                forceRerender();
              }}
            />
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Blur Strength</Text>
            <Slider
              min={0}
              max={15}
              step={1}
              value={blurStrength}
              onChange={(val) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setBlurStrength(val);
                forceRerender();
              }}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{blurStrength}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Starting Opacity</Text>
            <Slider
              min={0}
              max={1}
              step={0.1}
              value={baseOpacity}
              onChange={(val) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setBaseOpacity(val);
                forceRerender();
              }}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{baseOpacity}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Starting Rotation</Text>
            <Slider
              min={0}
              max={10}
              step={1}
              value={baseRotation}
              onChange={(val) => {
                containerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                setBaseRotation(val);
                forceRerender();
              }}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{baseRotation}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['gsap']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={scrollReveal} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...scrollReveal} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ScrollRevealDemo;