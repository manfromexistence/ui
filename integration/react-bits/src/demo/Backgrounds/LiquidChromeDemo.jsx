import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import LiquidChrome from "../../content/Backgrounds/LiquidChrome/LiquidChrome";
import { liquidChrome } from "../../constants/code/Backgrounds/liquidChromeCode";
import { useState } from "react";

const LiquidChromeDemo = () => {
  const [speed, setSpeed] = useState(0.3);
  const [baseColor, setBaseColor] = useState([0.1, 0.1, 0.1]);
  const [interactive, setInteractive] = useState(true);
  const [amplitude, setAmplitude] = useState(0.3);

  const propData = [
    {
      name: "baseColor",
      type: "RGB array (number[3])",
      default: "[0.1, 0.1, 0.1]",
      description: "Base color of the component. Specify as an RGB array."
    },
    {
      name: "speed",
      type: "number",
      default: "1.0",
      description: "Animation speed multiplier."
    },
    {
      name: "amplitude",
      type: "number",
      default: "0.6",
      description: "Amplitude of the distortion."
    },
    {
      name: "frequencyX",
      type: "number",
      default: "2.5",
      description: "Frequency modifier for the x distortion."
    },
    {
      name: "frequencyY",
      type: "number",
      default: "1.5",
      description: "Frequency modifier for the y distortion."
    },
    {
      name: "interactive",
      type: "boolean",
      default: "true",
      description: "Enable mouse/touch interaction."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <LiquidChrome baseColor={baseColor} amplitude={amplitude} speed={speed} interactive={interactive} />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Text fontSize="sm">Colors</Text>
          <Flex gap={4} wrap="wrap">
            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">R</Text>
              <Slider
                min={0.1}
                max={0.5}
                step={0.01}
                value={baseColor[0]}
                onChange={(val) => {
                  setBaseColor(prev => {
                    const newColors = [...prev];
                    newColors[0] = val;
                    return newColors;
                  });
                }}
                minWidth="60px"
                maxWidth="60px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text position="absolute" right={3.5} fontSize="sm">{baseColor[0]}</Text>
            </Flex>

            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">G</Text>
              <Slider
                min={0.1}
                max={0.5}
                step={0.01}
                value={baseColor[1]}
                onChange={(val) => {
                  setBaseColor(prev => {
                    const newColors = [...prev];
                    newColors[1] = val;
                    return newColors;
                  });
                }}
                minWidth="60px"
                maxWidth="60px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text position="absolute" right={3.5} fontSize="sm">{baseColor[1]}</Text>
            </Flex>

            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">B</Text>
              <Slider
                min={0.1}
                max={0.5}
                step={0.01}
                value={baseColor[2]}
                onChange={(val) => {
                  setBaseColor(prev => {
                    const newColors = [...prev];
                    newColors[2] = val;
                    return newColors;
                  });
                }}
                minWidth="60px"
                maxWidth="60px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text position="absolute" right={3.5} fontSize="sm">{baseColor[2]}</Text>
            </Flex>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Speed</Text>
            <Slider
              min={0}
              max={5}
              step={0.01}
              value={speed}
              onChange={(val) => {
                setSpeed(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{speed}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Amplitude</Text>
            <Slider
              min={0.1}
              max={1}
              step={0.01}
              value={amplitude}
              onChange={(val) => {
                setAmplitude(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{amplitude}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Interactive</Text>
            <Switch
              isChecked={interactive}
              onChange={(e) => {
                setInteractive(e.target.checked);
              }}
            />
          </Flex>

        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={liquidChrome} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...liquidChrome} />
      </CliTab>
    </TabbedLayout>
  );
};

export default LiquidChromeDemo;