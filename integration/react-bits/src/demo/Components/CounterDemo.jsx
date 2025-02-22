import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Counter from "../../content/Components/Counter/Counter";
import { counter } from "../../constants/code/Components/counterCode";

const CounterDemo = () => {
  const [value, setValue] = useState(1);
  const [fontSize, setFontSize] = useState(80);
  const [gap, setGap] = useState(10);

  const propData = [
    {
      name: "value",
      type: "number",
      default: "N/A (required)",
      description: "The numeric value to display in the counter."
    },
    {
      name: "fontSize",
      type: "number",
      default: "100",
      description: "The base font size used for the counter digits."
    },
    {
      name: "padding",
      type: "number",
      default: "0",
      description: "Additional padding added to the digit height."
    },
    {
      name: "places",
      type: "number[]",
      default: "[100, 10, 1]",
      description: "An array of place values to determine which digits to display."
    },
    {
      name: "gap",
      type: "number",
      default: "8",
      description: "The gap (in pixels) between each digit."
    },
    {
      name: "borderRadius",
      type: "number",
      default: "4",
      description: "The border radius (in pixels) for the counter container."
    },
    {
      name: "horizontalPadding",
      type: "number",
      default: "8",
      description: "The horizontal padding (in pixels) for the counter container."
    },
    {
      name: "textColor",
      type: "string",
      default: "'white'",
      description: "The text color for the counter digits."
    },
    {
      name: "fontWeight",
      type: "string | number",
      default: "'bold'",
      description: "The font weight of the counter digits."
    },
    {
      name: "containerStyle",
      type: "React.CSSProperties",
      default: "{}",
      description: "Custom inline styles for the outer container."
    },
    {
      name: "counterStyle",
      type: "React.CSSProperties",
      default: "{}",
      description: "Custom inline styles for the counter element."
    },
    {
      name: "digitStyle",
      type: "React.CSSProperties",
      default: "{}",
      description: "Custom inline styles for each digit container."
    },
    {
      name: "gradientHeight",
      type: "number",
      default: "16",
      description: "The height (in pixels) of the gradient overlays."
    },
    {
      name: "gradientFrom",
      type: "string",
      default: "'black'",
      description: "The starting color for the gradient overlays."
    },
    {
      name: "gradientTo",
      type: "string",
      default: "'transparent'",
      description: "The ending color for the gradient overlays."
    },
    {
      name: "topGradientStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom inline styles for the top gradient overlay."
    },
    {
      name: "bottomGradientStyle",
      type: "React.CSSProperties",
      default: "undefined",
      description: "Custom inline styles for the bottom gradient overlay."
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={400} overflow="hidden">
          <Counter
            value={value}
            places={[100, 10, 1]}
            fontSize={fontSize}
            padding={5}
            gap={gap}
            borderRadius={10}
            horizontalPadding={15}
            textColor="white"
            fontWeight={900}
          />

          <Flex gap={4} bottom="1em" direction={"row"} justify={"center"} mt={4} position='absolute'>
            <Button rounded="xl" background="#060606" border="1px solid #222" h={10} w={10} onClick={() => setValue(value - 1)}>-</Button>
            <Button rounded="xl" background="#060606" border="1px solid #222" h={10} w={10} onClick={() => value < 999 && setValue(value + 1)}>+</Button>
          </Flex>
        </Box>


        <Customize>
          <PreviewSlider
            title="Value"
            min={0}
            max={999}
            step={1}
            value={value}
            onChange={(val) => setValue(val)}
          />

          <PreviewSlider
            title="Gap"
            min={0}
            max={50}
            step={10}
            value={gap}
            onChange={(val) => setGap(val)}
          />

          <PreviewSlider
            title="Font Size"
            min={40}
            max={200}
            step={10}
            value={fontSize}
            onChange={(val) => setFontSize(val)}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={counter} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...counter} />
      </CliTab>
    </TabbedLayout>
  );
};

export default CounterDemo;