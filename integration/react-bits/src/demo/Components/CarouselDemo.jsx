import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from "../../hooks/useForceRerender";

import Carousel from "../../content/Components/Carousel/Carousel";
import { carousel } from "../../constants/code/Components/carouselCode";
import PreviewSlider from "../../components/common/PreviewSlider";

const CarouselDemo = () => {
  const [width, setWidth] = useState(300);
  const [autoplay, setAutoplay] = useState(false);
  const [autoplayDelay, setAutoplayDelay] = useState(3000);
  const [pauseOnHover, setPauseOnHover] = useState(false);
  const [loop, setLoop] = useState(false);
  const [round, setRound] = useState(false);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "items",
      type: "CarouselItem[]",
      default: "DEFAULT_ITEMS",
      description:
        "An array of carousel items. Each item must include title, description, id, and icon."
    },
    {
      name: "baseWidth",
      type: "number",
      default: "300",
      description:
        "Total width (in px) of the carousel container. Effective item width is baseWidth minus padding."
    },
    {
      name: "autoplay",
      type: "boolean",
      default: "false",
      description:
        "Enables automatic scrolling to the next item at a fixed interval."
    },
    {
      name: "autoplayDelay",
      type: "number",
      default: "3000",
      description:
        "Delay in milliseconds between automatic scrolls when autoplay is enabled."
    },
    {
      name: "pauseOnHover",
      type: "boolean",
      default: "false",
      description:
        "Pauses the autoplay functionality when the carousel is hovered."
    },
    {
      name: "loop",
      type: "boolean",
      default: "false",
      description:
        "When true, the carousel loops seamlessly from the last item back to the first."
    },
    {
      name: "round",
      type: "boolean",
      default: "true",
      description:
        "When true, the carousel is rendered with a 1:1 aspect ratio and circular container/items."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <Carousel
            key={key}
            baseWidth={width}
            autoplay={autoplay}
            autoplayDelay={autoplayDelay}
            pauseOnHover={pauseOnHover}
            loop={loop}
            round={round}
          />
        </Box>

        <Customize>
          <PreviewSlider
            title="Width"
            min={250}
            max={330}
            step={10}
            value={width}
            onChange={(val) => {
              setWidth(val);
              forceRerender();
            }}
          />

          <PreviewSwitch title="Round Variant" isChecked={round} onChange={(e) => { setRound(e.target.checked); forceRerender() }} />
          <PreviewSwitch title="Loop" isChecked={loop} onChange={(e) => { setLoop(e.target.checked); forceRerender() }} />
          <PreviewSwitch title="Autoplay" isChecked={autoplay} onChange={(e) => { setAutoplay(e.target.checked); forceRerender() }} />

          <PreviewSlider
            title="Delay"
            min={1000}
            max={4000}
            step={1000}
            value={autoplayDelay}
            isDisabled={!autoplay}
            onChange={(val) => {
              setAutoplayDelay(val);
              forceRerender();
            }}
          />

          <PreviewSwitch
            title="Pause On Hover"
            sChecked={pauseOnHover}
            isDisabled={!autoplay}
            onChange={(e) => { setPauseOnHover(e.target.checked); forceRerender() }}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={carousel} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...carousel} />
      </CliTab>
    </TabbedLayout>
  );
};

export default CarouselDemo;