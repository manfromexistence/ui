// InfiniteScrollDemo.jsx

import { useState } from "react";
import {CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Text, Switch, Select, Divider } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from "../../components/code/Dependencies";
import Ballpit from "../../content/Backgrounds/Ballpit/Ballpit";

import InfiniteScroll from "../../content/Components/InfiniteScroll/InfiniteScroll";
import { infiniteScroll } from "../../constants/code/Components/infiniteScrollCode";

const InfiniteScrollDemo = () => {
  const propData = [
    {
      name: "width",
      type: "string",
      default: '"30rem"',
      description: "Width of the outer wrapper.",
    },
    {
      name: "maxHeight",
      type: "string",
      default: '"100%"',
      description: "Maximum height of the outer wrapper.",
    },
    {
      name: "items",
      type: "array",
      default: "[]",
      description:
        "Array of items with custom content. Each item should have a 'content' property containing a string or React node.",
    },
    {
      name: "itemMinHeight",
      type: "number",
      default: "150",
      description: "Fixed height for each item in pixels.",
    },
    {
      name: "isTilted",
      type: "boolean",
      default: "false",
      description: "Whether the container has a skewed perspective.",
    },
    {
      name: "tiltDirection",
      type: '"left" | "right"',
      default: '"left"',
      description: "Direction of the tilt if 'isTilted' is true.",
    },
    {
      name: "autoplay",
      type: "boolean",
      default: "false",
      description: "Whether the scroll should autoplay.",
    },
    {
      name: "autoplaySpeed",
      type: "number",
      default: "20",
      description: "Speed of autoplay in pixels/frame.",
    },
    {
      name: "autoplayDirection",
      type: '"up" | "down"',
      default: '"down"',
      description: "Direction of autoplay scrolling.",
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      default: "false",
      description: "Pause autoplay when hovering over the component.",
    },
    {
      name: "negativeMargin",
      type: "string",
      default: '"-0.5em"',
      description: "Negative margin to reduce spacing between items.",
    },
  ];

  const [isTilted, setIsTilted] = useState(true);
  const [tiltDirection, setTiltDirection] = useState("left");
  const [autoplay, setAutoplay] = useState(true);
  const [autoplayDirection, setAutoplayDirection] = useState("up");
  const [pauseOnHover, setPauseOnHover] = useState(true);

  const items = [
    {
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            border: "1px solid #fff",
            overflow: "hidden",
            position: 'realtive'
          }}
        >
          <p style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: -1, fontSize: '3rem', fontWeight: 900, color: '#222' }}>Balls!</p>
          <Ballpit count={50} followCursor={false} />
        </div>
      ),
    },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box
          position="relative"
          className="demo-container"
          h={500}
          p={0}
          overflow="hidden"
          display="flex"
          bg="#060606"
          justifyContent="center"
          alignItems="center"
        >
          <InfiniteScroll
            items={items}
            isTilted={isTilted}
            tiltDirection={tiltDirection}
            autoplay={autoplay}
            autoplaySpeed={0.1}
            autoplayDirection={autoplayDirection}
            pauseOnHover={pauseOnHover}
          />
        </Box>

        <Customize>
          <PreviewSwitch isChecked={isTilted} title="Tilt" onChange={() => setIsTilted(!isTilted)} />

          {isTilted && (
            <Flex direction="column" my={4}>
              <Text mb={2} color="#fff">
                Tilt Direction
              </Text>
              <Select
                value={tiltDirection}
                onChange={(e) => setTiltDirection(e.target.value)}
                width="200px"
                size="sm"
              >
                <option value="left">Left</option>
                <option value="right">Right</option>
              </Select>
            </Flex>
          )}

          <Divider my={4} />

          <PreviewSwitch isChecked={autoplay} title="Autoplay" onChange={() => setAutoplay(!autoplay)} />

          {autoplay && (
            <>
              <Flex align="center" mt={4}>
                <Text mr={2} color="#fff">
                  Pause on Hover
                </Text>
                <Switch
                  isChecked={pauseOnHover}
                  onChange={() => setPauseOnHover(!pauseOnHover)}
                  colorScheme="teal"
                />
              </Flex>
              <Flex direction="column" mt={4}>
                <Text mb={2} color="#fff">
                  Autoplay Direction
                </Text>
                <Select
                  value={autoplayDirection}
                  onChange={(e) => setAutoplayDirection(e.target.value)}
                  width="200px"
                  size="sm"
                >
                  <option value="down">Down</option>
                  <option value="up">Up</option>
                </Select>
              </Flex>
            </>
          )}
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["gsap"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={infiniteScroll} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...infiniteScroll} />
      </CliTab>
    </TabbedLayout>
  );
};

export default InfiniteScrollDemo;
