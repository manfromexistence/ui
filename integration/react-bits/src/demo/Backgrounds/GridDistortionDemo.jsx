import { useRef, useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Button, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from "../../hooks/useForceRerender";

import GridDistortion from "../../content/Backgrounds/GridDistortion/GridDistortion";
import { gridDistortion } from "../../constants/code/Backgrounds/gridDistortionCode";

const GridDistortionDemo = () => {
  const [grid, setGrid] = useState(10);
  const [mouse, setMouse] = useState(0.25);

  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef(null);


  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "imgageSrc",
      type: "string",
      default: "",
      description: "The image you want to render inside the container."
    },
    {
      name: "grid",
      type: "number",
      default: "15",
      description: "The number of cells present in the distortion grid"
    },
    {
      name: "mouse",
      type: "number",
      default: "0.1",
      description: "The size of the distortion effect that follows the cursor."
    },
    {
      name: "relaxation",
      type: "number",
      default: "0.9",
      description: "The speed at which grid cells return to their initial state."
    },
    {
      name: "strength",
      type: "number",
      default: "0.15",
      description: "The overall strength of the distortion effect."
    },
    {
      name: "className",
      type: "string",
      default: "",
      description: "Any custom class(es) you want to apply to the container."
    }
  ];

  const enterFullScreen = () => {
    if (containerRef.current) {
      containerRef.current.requestFullscreen().then(() => setIsFullScreen(true));
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => setIsFullScreen(false));
    }
  };

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={600} p={0} overflow="hidden" ref={containerRef}>
          <GridDistortion
            key={key}
            imageSrc="https://picsum.photos/1920/1080?grayscale"
            grid={grid}
            mouse={mouse}
            strength={0.15}
            relaxation={0.9}
            className="grid-distortion"
          />

          <Text position="absolute" textAlign='center' fontSize="6rem" fontWeight={900} userSelect="none" mixBlendMode="difference">Distortion.</Text>

          <Button
            position="absolute"
            fontSize="sm"
            bg="#060606"
            borderRadius="15px"
            px={6}
            _active={{ backgroundColor: '#111' }}
            _hover={{ backgroundColor: '#111' }}
            right='2em'
            bottom='2em'
            h={16}
            onClick={() => {
              !isFullScreen ? enterFullScreen() : exitFullScreen()
            }}
          >
            {!isFullScreen ? 'Go Fullscreen!' : 'Exit Fullscreen'}
          </Button>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Grid Size</Text>
            <Slider
              min={6}
              max={200}
              step={1}
              value={grid}
              onChange={(val) => {
                setGrid(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{grid}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Mouse Size</Text>
            <Slider
              min={0.1}
              max={0.5}
              step={0.01}
              value={mouse}
              onChange={(val) => {
                setMouse(val);
                forceRerender();
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{mouse}</Text>
          </Flex>
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['three']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={gridDistortion} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...gridDistortion} />
      </CliTab>
    </TabbedLayout>
  );
};

export default GridDistortionDemo;