import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Flex, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import FallingText from "../../content/TextAnimations/FallingText/FallingText";
import { fallingText } from "../../constants/code/TextAnimations/fallingTextCode";

const FallingTextDemo = () => {
  const propData = [
    {
      name: "text",
      type: "string",
      default: '',
      description: "The text content to display and eventually animate."
    },
    {
      name: "highlightWords",
      type: "string[]",
      default: '[]',
      description: "List of words or substrings to apply a highlight style."
    },
    {
      name: "highlightClass",
      type: "string",
      default: `"highlighted"`,
      description: "CSS class name for highlighted words."
    },
    {
      name: "trigger",
      type: "'click' | 'hover' | 'auto' | 'scroll'",
      default: `"click"`,
      description: "Defines how the falling effect is activated."
    },
    {
      name: "backgroundColor",
      type: "string",
      default: `"transparent"`,
      description: "Canvas background color for the physics world."
    },
    {
      name: "wireframes",
      type: "boolean",
      default: "false",
      description: "Whether to render the physics bodies in wireframe mode."
    },
    {
      name: "gravity",
      type: "number",
      default: "1",
      description: "Vertical gravity factor for the physics engine."
    },
    {
      name: "mouseConstraintStiffness",
      type: "number",
      default: "0.2",
      description: "Stiffness for the mouse drag constraint."
    },
    {
      name: "fontSize",
      type: "string",
      default: `"1rem"`,
      description: "Font size applied to the text before it falls."
    },
    {
      name: "wordSpacing",
      type: "string",
      default: `"2px"`,
      description: "Horizontal spacing between each word."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Flex position="relative" className="demo-container" h={400} overflow="hidden" justifyContent="center" alignItems="center" p={0}>
          <FallingText
            text={`React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow.`}
            highlightWords={["React", "Bits", "animated", "components", "simplify"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
          />

          <Text color="#222" fontSize='4rem' fontWeight={900} position="absolute" zIndex={0} userSelect="none">Hover Me</Text>
        </Flex>

        <PropTable data={propData} />
        <Dependencies dependencyList={['matter-js']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={fallingText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...fallingText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FallingTextDemo;