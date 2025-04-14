import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import { useState } from "react";
import useForceRerender from "../../hooks/useForceRerender";
import Aurora from "../../content/Backgrounds/Aurora/Aurora";
import { aurora } from "../../constants/code/Backgrounds/auroraCode";
import PreviewSlider from "../../components/common/PreviewSlider";
import Customize from "../../components/common/Customize";

const AuroraDemo = () => {
  const [color1, setColor1] = useState('#00d8ff');
  const [color2, setColor2] = useState('#7cff67');
  const [color3, setColor3] = useState('#00d8ff');

  const [speed, setSpeed] = useState(1);
  const [blend, setBlend] = useState(0.5);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "colorStops",
      type: "[string, string, string]",
      default: '["#3A29FF", "#FF94B4", "#FF3232"]',
      description: "An array of three hex colors defining the aurora gradient.",
    },
    {
      name: "speed",
      type: "number",
      default: "1.0",
      description: "Controls the animation speed. Higher values make the aurora move faster.",
    },
    {
      name: "blend",
      type: "number",
      default: "0.5",
      description: "Controls the blending of the aurora effect with the background.",
    },
    {
      name: "amplitude",
      type: "number",
      default: "1.0",
      description: "Controls the height intensity of the aurora effect.",
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Aurora key={key} blend={blend} speed={speed} colorStops={[color1, color2, color3]} />
        </Box>

        <Customize>
          <Flex gap={4} mb={2}>
            <Flex alignItems="center">
              <Text mr={2}>Color 1</Text>
              <input
                type="color"
                value={color1}
                style={{ height: '22px', outline: 'none', border: 'none' }}
                onChange={(e) => {
                  setColor1(e.target.value);
                  forceRerender();
                }}
              />
            </Flex>

            <Flex alignItems="center">
              <Text mr={2}>Color 2</Text>
              <input
                type="color"
                value={color2}
                style={{ height: '22px', outline: 'none', border: 'none' }}
                onChange={(e) => {
                  setColor2(e.target.value);
                  forceRerender();
                }}
              />
            </Flex>

            <Flex alignItems="center">
              <Text mr={2}>Color 3</Text>
              <input
                type="color"
                value={color3}
                style={{ height: '22px', outline: 'none', border: 'none' }}
                onChange={(e) => {
                  setColor3(e.target.value);
                  forceRerender();
                }}
              />
            </Flex>
          </Flex>

          <PreviewSlider
            title="Speed"
            min={0}
            max={2}
            step={0.1}
            value={speed}
            onChange={(val) => {
              setSpeed(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Blend"
            min={0}
            max={1}
            step={0.01}
            value={blend}
            onChange={(val) => {
              setBlend(val);
              forceRerender();
            }}
          />
        </Customize>


        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={aurora} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...aurora} />
      </CliTab>
    </TabbedLayout>
  );
};

export default AuroraDemo;