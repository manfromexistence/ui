import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";
import { randomHex } from "../../utils/utils";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import LetterGlitch from "../../content/Backgrounds/LetterGlitch/LetterGlitch";
import { letterGlitch } from "../../constants/code/Backgrounds/letterGlitchCode";
import useForceRerender from "../../hooks/useForceRerender";

const LetterGlitchDemo = () => {
  const [smooth, setSmooth] = useState(true);
  const [speed, setSpeed] = useState(10);
  const [colors, setColors] = useState(['#2b4539', '#61dca3', '#61b3dc']);
  const [showCenterText, setShowCenterText] = useState(true);
  const [showCenterVignette, setShowCenterVignette] = useState(true);
  const [showOuterVignette, setShowOuterVignette] = useState(false);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "glitchColors",
      type: "string[]",
      default: "['#2b4539', '#61dca3', '#61b3dc']",
      description: "Controls the colors of the letters rendered in the canvas."
    },
    {
      name: "glitchSpeed",
      type: "number",
      default: "50",
      description: "Controls the speed at which letters scramble in the animation."
    },
    {
      name: "centerVignette",
      type: "boolean",
      default: "false",
      description: "When true, renders a radial gradient in the center of the container"
    },
    {
      name: "outerVignette",
      type: "boolean",
      default: "true",
      description: "When true, renders an inner radial gradient around the edges of the container."
    },
    {
      name: "smooth",
      type: "boolean",
      default: "true",
      description: "When true, smoothens the animation of the letters for a more subtle feel."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden" p={0}>
          <LetterGlitch
            key={key}
            glitchColors={colors}
            glitchSpeed={speed}
            centerVignette={showCenterVignette}
            outerVignette={showOuterVignette}
            smooth={smooth}
          />
          {showCenterText && <Text fontSize='clamp(4rem, 4vw, 8rem)' fontWeight={900} position="absolute" zIndex={0} color="#fff" mixBlendMode="color-dodge">react_bits</Text>}
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex wrap="wrap" alignItems="center" gap={4}>
            <Flex gap={2} wrap="wrap">
              <Button
                fontSize="xs"
                h={8}
                onClick={() => {
                  setShowCenterText(!showCenterText);
                }}
              >
                Center Text:{" "}
                <Text color={showCenterText ? "lightgreen" : "coral"}>&nbsp;{String(showCenterText)}</Text>
              </Button>
            </Flex>
            <Flex gap={2} wrap="wrap">
              <Button
                fontSize="xs"
                h={8}
                onClick={() => {
                  setSmooth(!smooth);
                }}
              >
                Smooth:{" "}
                <Text color={smooth ? "lightgreen" : "coral"}>&nbsp;{String(smooth)}</Text>
              </Button>
            </Flex>
            <Flex gap={2} wrap="wrap">
              <Button
                fontSize="xs"
                h={8}
                onClick={() => {
                  setShowCenterVignette(!showCenterVignette);
                }}
              >
                Inner Vignette:{" "}
                <Text color={showCenterVignette ? "lightgreen" : "coral"}>&nbsp;{String(showCenterVignette)}</Text>
              </Button>
            </Flex>

            <Flex gap={2} wrap="wrap">
              <Button
                fontSize="xs"
                h={8}
                onClick={() => {
                  setShowOuterVignette(!showOuterVignette);
                }}
              >
                Outer Vignette:{" "}
                <Text color={showOuterVignette ? "lightgreen" : "coral"}>&nbsp;{String(showOuterVignette)}</Text>
              </Button>
            </Flex>

            <Flex gap={4} align="center">
              <Text fontSize="sm">Glitch Speed</Text>
              <Slider
                min={0}
                max={100}
                step={5}
                value={speed}
                onChange={(val) => {
                  setSpeed(val);
                }}
                width="100px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text fontSize="sm">{speed}</Text>
            </Flex>
          </Flex>

          <Flex gap={2} wrap="wrap" mt={4}>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setColors([randomHex(), randomHex(), randomHex()])
                forceRerender();
              }}
            >
              Randomize Colors
            </Button>
          </Flex>
        </div>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={letterGlitch} />
      </CodeTab>

      <CliTab>
      <CliInstallation {...letterGlitch} />
      </CliTab>
    </TabbedLayout>
  );
};

export default LetterGlitchDemo;