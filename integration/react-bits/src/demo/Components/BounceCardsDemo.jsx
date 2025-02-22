import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import RefreshButton from "../../components/common/RefreshButton";
import PropTable from "../../components/common/PropTable";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import CliInstallation from "../../components/code/CliInstallation";

import BounceCards from "../../content/Components/BounceCards/BounceCards";
import { bounceCards } from "../../constants/code/Components/bounceCardsCode";

const BounceCardsDemo = () => {
  const [key, forceRerender] = useForceRerender();

  const [enableHover, setEnableHover] = useState(false);
  const [animationDelay, setAnimationDelay] = useState(1);
  const [animationStagger, setAnimationStagger] = useState(0.08);

  const images = [
    "https://picsum.photos/400/400?grayscale",
    "https://picsum.photos/500/500?grayscale",
    "https://picsum.photos/600/600?grayscale",
    "https://picsum.photos/700/700?grayscale",
    "https://picsum.photos/300/300?grayscale"
  ];

  // Slightly customized transform styles
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  // Updated prop table with new enableHover row
  const propData = [
    {
      name: "className",
      type: "string",
      default: "",
      description: "Additional CSS classes for the container."
    },
    {
      name: "images",
      type: "string[]",
      default: "[]",
      description: "Array of image URLs to display."
    },
    {
      name: "containerWidth",
      type: "number",
      default: 400,
      description: "Width of the container (px)."
    },
    {
      name: "containerHeight",
      type: "number",
      default: 400,
      description: "Height of the container (px)."
    },
    {
      name: "animationDelay",
      type: "number",
      default: 0.5,
      description: "Delay (in seconds) before the animation starts."
    },
    {
      name: "animationStagger",
      type: "number",
      default: 0.06,
      description: "Time (in seconds) between each card's animation."
    },
    {
      name: "easeType",
      type: "string",
      default: "elastic.out(1, 0.8)",
      description: "Easing function for the bounce."
    },
    {
      name: "transformStyles",
      type: "string[]",
      default: "various rotations/translations",
      description: "Custom transforms for each card position."
    },
    {
      name: "enableHover",
      type: "boolean",
      default: "false",
      description: "If true, hovering pushes siblings aside and flattens the hovered card's rotation."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Flex
          overflow="hidden"
          justifyContent="center"
          alignItems="center"
          minH="400px"
          position="relative"
          pb="4em"
          className="demo-container"
        >
          <BounceCards
            key={key}
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={animationDelay}
            animationStagger={animationStagger}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={enableHover}
          />
          <RefreshButton onClick={forceRerender} />
        </Flex>

        <Customize>
          <PreviewSwitch title="Enable Hover Effect" isChecked={enableHover} onChange={(e) => { setEnableHover(e.target.checked); forceRerender() }} />

          <PreviewSlider
            title="Animation Delay"
            min={0.1}
            max={2}
            step={0.1}
            value={animationDelay}
            onChange={(val) => {
              setAnimationDelay(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Animation Stagger"
            min={0}
            max={0.3}
            step={0.01}
            value={animationStagger}
            onChange={(val) => {
              setAnimationStagger(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={["gsap"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={bounceCards} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...bounceCards} />
      </CliTab>
    </TabbedLayout>
  );
};

export default BounceCardsDemo;
