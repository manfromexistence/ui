import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";
import { useDebounce } from "react-haiku";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Orb from "../../content/Backgrounds/Orb/Orb";
import { orb } from "../../constants/code/Backgrounds/orbCode";

const OrbDemo = () => {
  const [hue, setHue] = useState(0);
  const [hoverIntensity, setHoverIntensity] = useState(0.5)
  const [rotateOnHover, setRotateOnHover] = useState(true);
  const [forceHoverState, setForceHoverState] = useState(false)

  const debouncedHue = useDebounce(hue, 300);
  const debouncedHoverIntensity = useDebounce(hoverIntensity, 300);

  const propData = [
    {
      name: "hue",
      type: "number",
      default: "0",
      description: "The base hue for the orb (in degrees)."
    },
    {
      name: "hoverIntensity",
      type: "number",
      default: "0.2",
      description: "Controls the intensity of the hover distortion effect."
    },
    {
      name: "rotateOnHover",
      type: "boolean",
      default: "true",
      description: "Toggle to enable or disable continuous rotation on hover."
    },
    {
      name: "forceHoverState",
      type: "boolean",
      default: "false",
      description: "Force hover animations even when the orb is not actually hovered."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Orb
            hoverIntensity={debouncedHoverIntensity}
            rotateOnHover={rotateOnHover}
            hue={debouncedHue}
            forceHoverState={forceHoverState}
          />

          <Text position="absolute" zIndex={0} fontSize="clamp(2rem, 2vw, 6rem)" fontWeight={900} mb={0} mixBlendMode="difference">
            Hover.
          </Text>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Hue Shift</Text>
            <Slider
              min={0}
              max={360}
              step={1}
              value={hue}
              onChange={(val) => {
                setHue(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{hue}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Hover Intensity</Text>
            <Slider
              min={0}
              max={5}
              step={0.01}
              value={hoverIntensity}
              onChange={(val) => {
                setHoverIntensity(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{hoverIntensity}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Rotate On Hover</Text>
            <Switch
              isChecked={rotateOnHover}
              onChange={(e) => {
                setRotateOnHover(e.target.checked);
              }}
            />
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Force Hover State</Text>
            <Switch
              isChecked={forceHoverState}
              onChange={(e) => {
                setForceHoverState(e.target.checked);
              }}
            />
          </Flex>

        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={orb} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...orb} />
      </CliTab>
    </TabbedLayout>
  );
};

export default OrbDemo;