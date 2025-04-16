import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import {
  Box,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Switch,
  Input
} from "@chakra-ui/react";

import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import PixelTrail from "../../content/Animations/PixelTrail/PixelTrail";
import { pixelTrail } from "../../constants/code/Animations/pixelTrailCode";

const PixelTrailDemo = () => {
  const [gridSize, setGridSize] = useState(50);
  const [trailSize, setTrailSize] = useState(0.1);
  const [maxAge, setMaxAge] = useState(250);
  const [interpolate, setInterpolate] = useState(5);
  const [color, setColor] = useState("#00d8ff");
  const [gooeyEnabled, setGooeyEnabled] = useState(true);
  const [gooStrength, setGooStrength] = useState(2);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    { name: "gridSize", type: "number", default: "40", description: "Number of pixels in grid." },
    { name: "trailSize", type: "number", default: "0.1", description: "Size of each trail dot." },
    { name: "maxAge", type: "number", default: "500", description: "Duration of the trail effect." },
    { name: "interpolate", type: "number", default: "5", description: "Interpolation factor for pointer movement." },
    { name: "color", type: "string", default: "#ffffff", description: "Pixel color." },
    { name: "gooeyFilter", type: "object", default: "{ id: 'custom-goo-filter', strength: 5 }", description: "Configuration for gooey filter." },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <RefreshButton onClick={forceRerender} />
          <PixelTrail
            key={key}
            gridSize={gridSize}
            trailSize={trailSize}
            maxAge={maxAge}
            interpolate={interpolate}
            color={color}
            gooeyFilter={gooeyEnabled ? { id: "custom-goo-filter", strength: gooStrength } : undefined}
          />
          <Text
            position="absolute"
            zIndex={0}
            fontSize="clamp(2rem, 6vw, 6rem)"
            color="#222"
            fontWeight={900}
          >
            Hover Me.
          </Text>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Grid Size</Text>
            <Slider
              min={10}
              max={100}
              step={1}
              value={gridSize}
              onChange={(val) => { setGridSize(val); forceRerender(); }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{gridSize}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Trail Size</Text>
            <Slider
              min={0.05}
              max={0.5}
              step={0.01}
              value={trailSize}
              onChange={(val) => { setTrailSize(val); forceRerender(); }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{trailSize.toFixed(2)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Max Age</Text>
            <Slider
              min={100}
              max={1000}
              step={50}
              value={maxAge}
              onChange={(val) => { setMaxAge(val); forceRerender(); }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{maxAge}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Interpolate</Text>
            <Slider
              min={0}
              max={10}
              step={0.1}
              value={interpolate}
              onChange={(val) => { setInterpolate(val); forceRerender(); }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{interpolate.toFixed(1)}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Color</Text>
            <Input
              type="color"
              value={color}
              onChange={(e) => { setColor(e.target.value); forceRerender(); }}
              width="50px"
            />
            <Text fontSize="sm">{color}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Gooey Filter</Text>
            <Switch
              isChecked={gooeyEnabled}
              onChange={(e) => { setGooeyEnabled(e.target.checked); forceRerender(); }}
            />
          </Flex>

          {gooeyEnabled && (
            <Flex gap={4} align="center" mt={4}>
              <Text fontSize="sm">Gooey Strength</Text>
              <Slider
                min={1}
                max={20}
                step={1}
                value={gooStrength}
                onChange={(val) => { setGooStrength(val); forceRerender(); }}
                width="200px"
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text fontSize="sm">{gooStrength}</Text>
            </Flex>
          )}
        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={["@react-three/fiber", "@react-three/drei", "three"]} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={pixelTrail} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...pixelTrail} />
      </CliTab>
    </TabbedLayout>
  );
};

export default PixelTrailDemo;
