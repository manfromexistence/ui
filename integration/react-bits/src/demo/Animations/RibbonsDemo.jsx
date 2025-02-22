import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, IconButton, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";
import { FiMinus, FiPlus } from "react-icons/fi";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Ribbons from "../../content/Animations/Ribbons/Ribbons";
import { ribbons } from "../../constants/code/Animations/ribbonsCode";

const RibbonsDemo = () => {
  const [baseThickness, setBaseThickness] = useState(30);
  const [colors, setColors] = useState(['#00d8ff']);
  const [speedMultiplier, setSpeedMultiplier] = useState(0.5);
  const [maxAge, setMaxAge] = useState(500);

  const [enableFade, setEnableFade] = useState(false);
  const [enableWaves, setEnableWaves] = useState(false);

  const propData = [
    {
      name: "colors",
      type: "string[]",
      default: "['#00d8ff']",
      description: "An array of color strings to be used for the ribbons."
    },
    {
      name: "baseSpring",
      type: "number",
      default: "0.03",
      description: "Base spring factor for the physics controlling ribbon motion."
    },
    {
      name: "baseFriction",
      type: "number",
      default: "0.9",
      description: "Base friction factor that dampens the ribbon motion."
    },
    {
      name: "baseThickness",
      type: "number",
      default: "30",
      description: "The base thickness of the ribbons."
    },
    {
      name: "offsetFactor",
      type: "number",
      default: "0.02",
      description: "A factor to horizontally offset the starting positions of the ribbons."
    },
    {
      name: "maxAge",
      type: "number",
      default: "500",
      description: "Delay in milliseconds controlling how long the ribbon trails extend."
    },
    {
      name: "pointCount",
      type: "number",
      default: "50",
      description: "The number of points that make up each ribbon."
    },
    {
      name: "speedMultiplier",
      type: "number",
      default: "0.5",
      description: "Multiplier that adjusts how fast trailing points interpolate towards the head."
    },
    {
      name: "enableFade",
      type: "boolean",
      default: "true",
      description: "If true, a fade effect is applied along the length of the ribbon."
    },
    {
      name: "enableShaderEffect",
      type: "boolean",
      default: "true",
      description: "If true, an additional sine-wave shader effect is applied to the ribbons."
    },
    {
      name: "effectAmplitude",
      type: "number",
      default: "2",
      description: "The amplitude of the shader displacement effect."
    },
    {
      name: "backgroundColor",
      type: "number[]",
      default: "[0, 0, 0, 0]",
      description: "An RGBA array specifying the clear color for the renderer."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Text position="absolute" fontSize="clamp(2rem, 6vw, 6rem)" fontWeight={900} color="#222">Hover Me.</Text>
          <Ribbons
            baseThickness={baseThickness}
            colors={colors}
            speedMultiplier={speedMultiplier}
            maxAge={maxAge}
            enableFade={enableFade}
            enableShaderEffect={enableWaves}
          />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Count</Text>
            <IconButton icon={<FiMinus />} onClick={() => colors.length > 1 && setColors(colors.slice(0, -1))}></IconButton>
            <Text>{colors.length}</Text>
            <IconButton icon={<FiPlus />} onClick={() => {
              if (colors.length < 10) {
                const newColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
                setColors([...colors, newColor]);
              }
            }} />
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Thickness</Text>
            <Slider
              min={1}
              max={60}
              step={1}
              value={baseThickness}
              onChange={(val) => setBaseThickness(val)}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{baseThickness}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Speed</Text>
            <Slider
              min={0.3}
              max={0.7}
              step={0.01}
              value={speedMultiplier}
              onChange={(val) => setSpeedMultiplier(val)}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{speedMultiplier}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Max Age</Text>
            <Slider
              min={300}
              max={1000}
              step={100}
              value={maxAge}
              onChange={(val) => setMaxAge(val)}
              width="150px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{maxAge}</Text>
          </Flex>

          <Flex align="center" gap={2} mt={4}>
            <Switch
              isChecked={enableFade}
              onChange={(e) => setEnableFade(e.target.checked)}
            />
            <Text>Enable Fade</Text>
          </Flex>

          <Flex align="center" gap={2} mt={4}>
            <Switch
              isChecked={enableWaves}
              onChange={(e) => setEnableWaves(e.target.checked)}
            />
            <Text>Enable Waves</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={ribbons} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...ribbons} />
      </CliTab>
    </TabbedLayout>
  );
};

export default RibbonsDemo;