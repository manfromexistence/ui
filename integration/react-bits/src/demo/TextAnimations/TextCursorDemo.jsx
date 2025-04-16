import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from "../../hooks/useForceRerender";

import TextCursor from "../../content/TextAnimations/TextCursor/TextCursor";
import { textCursor } from "../../constants/code/TextAnimations/textCursorCode";

const TextCursorDemo = () => {
  const [text, setText] = useState("⚛️");
  const [followMouseDirection, setFollowMouseDirection] = useState(true);
  const [randomFloat, setRandomFloat] = useState(true);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "text",
      type: "string",
      default: "⚛️",
      description: "The text string to display as the trail."
    },
    {
      name: "delay",
      type: "number",
      default: "0.01",
      description: "The entry stagger delay in seconds for the fade-out animation."
    },
    {
      name: "spacing",
      type: "number",
      default: "100",
      description: "The spacing in pixels between each trail point."
    },
    {
      name: "followMouseDirection",
      type: "boolean",
      default: "true",
      description: "If true, each text rotates to follow the mouse direction."
    },
    {
      name: "randomFloat",
      type: "boolean",
      default: "true",
      description: "If true, enables random floating offsets in position and rotation for a dynamic effect."
    },
    {
      name: "exitDuration",
      type: "number",
      default: "0.5",
      description: "The duration in seconds for the exit animation of each trail item."
    },
    {
      name: "removalInterval",
      type: "number",
      default: "30",
      description: "The interval in milliseconds between removing trail items when the mouse stops moving."
    },
    {
      name: "maxPoints",
      type: "number",
      default: "5",
      description: "The maximum number of trail points to display."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <TextCursor
            key={key}
            text={text}
            followMouseDirection={followMouseDirection}
            randomFloat={randomFloat}
          />
          <Text pointerEvents='none' position="absolute" textAlign='center' fontSize="4rem" fontWeight={900} userSelect="none" color='#222'>Hover Around!</Text>
        </Box>

        <Customize>
          <FormControl w="200px">
            <FormLabel fontSize="sm">Text</FormLabel>
            <Input
              value={text}
              maxLength={10}
              onChange={(e) => {
                setText(e.target.value);
              }}
              placeholder="Enter text..."
            />
          </FormControl>

          <PreviewSwitch title="Follow Mouse Direction" isChecked={followMouseDirection} onChange={(e) => { setFollowMouseDirection(e.target.checked); forceRerender(); }} />
          <PreviewSwitch title="Enable Random Floating" isChecked={randomFloat} onChange={(e) => { setRandomFloat(e.target.checked); forceRerender(); }} />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={textCursor} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...textCursor} />
      </CliTab>
    </TabbedLayout>
  );
};

export default TextCursorDemo;