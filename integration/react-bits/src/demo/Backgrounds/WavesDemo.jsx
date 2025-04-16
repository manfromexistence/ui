import { useState } from "react";
import { Flex, Select, Text } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";
import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import Waves from "../../content/Backgrounds/Waves/Waves";
import { waves } from '../../constants/code/Backgrounds/wavesCode';

const WavesDemo = () => {
  const [color, setColor] = useState('#ffffff');

  const propData = [
    {
      name: "lineColor",
      type: "string",
      default: "black",
      description: "Defines the color of the wave lines drawn on the canvas."
    },
    {
      name: "backgroundColor",
      type: "string",
      default: "transparent",
      description: "Sets the background color of the waves container."
    },
    {
      name: "waveSpeedX",
      type: "number",
      default: 0.0125,
      description: "Horizontal speed factor for the wave animation."
    },
    {
      name: "waveSpeedY",
      type: "number",
      default: 0.005,
      description: "Vertical speed factor for the wave animation."
    },
    {
      name: "waveAmpX",
      type: "number",
      default: 32,
      description: "Horizontal amplitude of each wave."
    },
    {
      name: "waveAmpY",
      type: "number",
      default: 16,
      description: "Vertical amplitude of each wave."
    },
    {
      name: "xGap",
      type: "number",
      default: 10,
      description: "Horizontal gap between individual wave lines."
    },
    {
      name: "yGap",
      type: "number",
      default: 32,
      description: "Vertical gap between points on each wave line."
    },
    {
      name: "friction",
      type: "number",
      default: 0.925,
      description: "Controls how quickly the cursor effect slows down."
    },
    {
      name: "tension",
      type: "number",
      default: 0.005,
      description: "Determines the 'springiness' of the cursor effect on points."
    },
    {
      name: "maxCursorMove",
      type: "number",
      default: 100,
      description: "Limits how far each point can shift due to cursor movement."
    },
    {
      name: "style",
      type: "object",
      default: "{}",
      description: "Inline styles applied to the container element."
    },
    {
      name: "className",
      type: "string",
      default: "",
      description: "Custom class name(s) applied to the container element."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Flex overflow="hidden" justifyContent="center" alignItems="center" minH={400} position="relative" pb={"4em"} className="demo-container">
          <Waves
            lineColor={color}
          />
        </Flex>

        <h2 className="demo-title-extra">Customize</h2>
        <Flex direction="row" alignItems="center" gap={4} mt={4}>
          <Text>Color</Text>
          <Select defaultValue="#ffffff" rounded="xl" w={'300px'} onChange={(e) => {
            setColor(e.target.value);
          }}>
            <option value='#ffffff'>White</option>
            <option value='#16e16e'>Green</option>
            <option value='#00b4d8'>Blue</option>
            <option value='#ffd60a'>Yellow</option>
            <option value='#390099'>Purple</option>
          </Select>

          <Flex gap={2} alignItems="center">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              style={{ width: '60px' }}
            />
          </Flex>
        </Flex>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={waves} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...waves} />
      </CliTab>
    </TabbedLayout>

  );
}

export default WavesDemo;