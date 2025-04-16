import { useState } from "react";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Switch
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout,
} from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import FollowCursor from "../../content/Animations/FollowCursor/FollowCursor";
import { followCursor } from "../../constants/code/Animations/followCursorCode";

const FollowCursorDemo = () => {
  const [offsetX, setOffsetX] = useState(20);
  const [cardWidth, setCardWidth] = useState(200);
  const [rotationFactor, setRotationFactor] = useState(20);
  const [enableTilt, setEnableTilt] = useState(true);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Additional CSS class names to apply to the container.",
    },
    {
      name: "animationConfig",
      type: "object",
      default: "{ mass: 5, tension: 350, friction: 40 }",
      description: "Configuration object for react-spring animations.",
    },
    {
      name: "hoverScale",
      type: "number",
      default: "1.1",
      description: "Scale factor when hovering over the component.",
    },
    {
      name: "offsetX",
      type: "number",
      default: "20",
      description: "Horizontal offset for the cursor following effect.",
    },
    {
      name: "cardWidth",
      type: "string",
      default: "'200px'",
      description: "Width of the card element.",
    },
    {
      name: "rotationFactor",
      type: "number",
      default: "20",
      description: "Factor determining the rotation effect based on cursor position.",
    },
    {
      name: "perspective",
      type: "string",
      default: "'300px'",
      description: "CSS perspective value for 3D transformations.",
    },
    {
      name: "zoomSensitivity",
      type: "number",
      default: "200",
      description: "Sensitivity for zoom interactions via wheel or pinch gestures.",
    },
    {
      name: "wheelConfig",
      type: "object",
      default: "{ mass: 1, tension: 200, friction: 30 }",
      description: "Configuration object for wheel-related animations.",
    },
    {
      name: "enableTilt",
      type: "boolean",
      default: "true",
      description: "Enable or disable the tilt effect based on cursor movement.",
    },
    {
      name: "enableZoom",
      type: "boolean",
      default: "true",
      description: "Enable or disable zoom interactions.",
    },
    {
      name: "enableDrag",
      type: "boolean",
      default: "true",
      description: "Enable or disable drag interactions on mobile devices.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          minH={400}
          overflow="hidden"
        >
          <FollowCursor
            key={key}
            offsetX={offsetX}
            cardWidth={`${cardWidth}px`}
            rotationFactor={rotationFactor}
            enableTilt={enableTilt}
            animationConfig={{ mass: 5, tension: 350, friction: 40 }}
            wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
          >
            {/* Other content can go in here */}
          </FollowCursor>

          <Text userSelect="none" position="absolute" zIndex={0} fontSize="clamp(2rem, 6vw, 6rem)" fontWeight={900} color="#222">Hover Me.</Text>
        </Box>

        <p className="demo-extra-info">
          <InfoOutlineIcon position="relative" /> Hover for desktop, drag for
          mobile.
        </p>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          {/* Offset X */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Offset X</Text>
            <Slider
              min={0}
              max={50}
              step={1}
              value={offsetX}
              onChange={(val) => {
                setOffsetX(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{offsetX}</Text>
          </Flex>

          {/* Card Width */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Card Width</Text>
            <Slider
              min={200}
              max={300}
              step={1}
              value={cardWidth}
              onChange={(val) => {
                setCardWidth(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{cardWidth}</Text>
          </Flex>

          {/* Rotation Factor */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Rotation Factor</Text>
            <Slider
              min={5}
              max={50}
              step={1}
              value={rotationFactor}
              onChange={(val) => {
                setRotationFactor(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{rotationFactor}</Text>
          </Flex>

          {/* Enable Effect */}
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Enable Effect
            </Text>
            <Switch
              isChecked={enableTilt}
              onChange={(e) => {
                setEnableTilt(e.target.checked);
                forceRerender();
              }}
            />
          </Flex>
        </div>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={followCursor} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...followCursor} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FollowCursorDemo;
