import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { LayoutGroup, motion } from 'framer-motion';
import { Box } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import RotatingText from "../../content/TextAnimations/RotatingText/RotatingText";
import { rotatingText } from "../../constants/code/TextAnimations/rotatingTextCode";

const RotatingTextDemo = () => {
  const propData = [
    {
      name: "texts",
      type: "string[]",
      default: "[]",
      description: "An array of text strings to be rotated."
    },
    {
      name: "rotationInterval",
      type: "number",
      default: "2000",
      description: "The interval (in milliseconds) between text rotations."
    },
    {
      name: "initial",
      type: "object",
      default: '{ y: "100%", opacity: 0 }',
      description: "Initial animation state for each element."
    },
    {
      name: "animate",
      type: "object",
      default: '{ y: 0, opacity: 1 }',
      description: "Animation state when elements enter."
    },
    {
      name: "exit",
      type: "object",
      default: '{ y: "-120%", opacity: 0 }',
      description: "Exit animation state for elements."
    },
    {
      name: "animatePresenceMode",
      type: "string",
      default: '"wait"',
      description: "Mode for AnimatePresence; for example, 'wait' to finish exit animations before entering."
    },
    {
      name: "animatePresenceInitial",
      type: "boolean",
      default: "false",
      description: "Determines whether the AnimatePresence component should run its initial animation."
    },
    {
      name: "staggerDuration",
      type: "number",
      default: "0",
      description: "Delay between each character's animation."
    },
    {
      name: "staggerFrom",
      type: 'string',
      default: '"first"',
      description: "Specifies the order from which the stagger starts."
    },
    {
      name: "transition",
      type: "object",
      default: '',
      description: "Transition settings for the animations."
    },
    {
      name: "loop",
      type: "boolean",
      default: "true",
      description: "Determines if the rotation should loop back to the first text after the last one."
    },
    {
      name: "auto",
      type: "boolean",
      default: "true",
      description: "If true, the text rotation starts automatically."
    },
    {
      name: "splitBy",
      type: 'string',
      default: '"characters"',
      description: "Determines how the text is split into animatable elements (e.g., by characters, words, or lines)."
    },
    {
      name: "onNext",
      type: "function",
      default: "undefined",
      description: "Callback function invoked when the text rotates to the next item."
    },
    {
      name: "mainClassName",
      type: "string",
      default: "''",
      description: "Additional class names for the main container element."
    },
    {
      name: "splitLevelClassName",
      type: "string",
      default: "''",
      description: "Additional class names for the container wrapping each split group (e.g., a word)."
    },
    {
      name: "elementLevelClassName",
      type: "string",
      default: "''",
      description: "Additional class names for each individual animated element."
    }
  ];

  const words = [
    "thinking",
    "coding",
    "components!",
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400} maxH={400} overflow="hidden">
          <div className="rotating-text-demo">
            <LayoutGroup>
              <motion.p className="rotating-text-ptag" layout>
                <motion.span
                  className="pt-0.5 sm:pt-1 md:pt-2"
                  layout
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                  Creative{" "}
                </motion.span>
                <RotatingText
                  texts={words}
                  mainClassName="rotating-text-main"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="rotating-text-split"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </motion.p>
            </LayoutGroup>
          </div>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={rotatingText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...rotatingText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default RotatingTextDemo;