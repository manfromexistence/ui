import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from "../../hooks/useForceRerender";

import Iridescence from "../../content/Backgrounds/Iridescence/Iridescence";
import { iridescence } from "../../constants/code/Backgrounds/iridescenceCode";

const IridescenceDemo = () => {
  const [colors, setColors] = useState([1, 1, 1]);

  const [speed, setSpeed] = useState(1);
  const [mouseInteraction, setMouseInteraction] = useState(true);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "color",
      type: "Array<number>",
      default: "[0.3, 0.2, 0.5]",
      description: "Base color as an array of RGB values (each between 0 and 1)."
    },
    {
      name: "speed",
      type: "number",
      default: "1.0",
      description: "Speed multiplier for the animation."
    },
    {
      name: "amplitude",
      type: "number",
      default: "0.1",
      description: "Amplitude for the mouse-driven effect."
    },
    {
      name: "mouseReact",
      type: "boolean",
      default: "false",
      description: "Enable or disable mouse interaction with the shader."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Iridescence key={key} speed={speed} color={colors} mouseReact={mouseInteraction} />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Text fontSize="sm">Colors</Text>
          <Flex gap={4} wrap="wrap">
            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">R</Text>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={colors[0]}
                onChange={(val) => {
                  setColors(prev => {
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
              <Text position="absolute" right={3.5} fontSize="sm">{colors[0]}</Text>
            </Flex>

            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">G</Text>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={colors[1]}
                onChange={(val) => {
                  setColors(prev => {
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
              <Text position="absolute" right={3.5} fontSize="sm">{colors[1]}</Text>
            </Flex>

            <Flex gap={4} align="center" mt={2} background="#0D0D0D" pl={4} pr={10} py={4} borderRadius={16} position="relative">
              <Text fontSize="sm">B</Text>
              <Slider
                min={0}
                max={1}
                step={0.1}
                value={colors[2]}
                onChange={(val) => {
                  setColors(prev => {
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
              <Text position="absolute" right={3.5} fontSize="sm">{colors[2]}</Text>
            </Flex>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Speed</Text>
            <Slider
              min={0}
              max={2}
              step={0.1}
              value={speed}
              onChange={(val) => {
                setSpeed(val);
                forceRerender();
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
            <Text fontSize="sm">Mouse Interaction</Text>
            <Switch
              isChecked={mouseInteraction}
              onChange={(e) => {
                setMouseInteraction(e.target.checked);
                forceRerender();
              }}
            />
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={iridescence} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...iridescence} />
      </CliTab>
    </TabbedLayout>
  );
};

export default IridescenceDemo;