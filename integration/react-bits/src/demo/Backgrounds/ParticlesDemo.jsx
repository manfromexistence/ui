import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch, Text } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import Particles from "../../ts-default/Backgrounds/Particles/Particles";
import { particles } from "../../constants/code/Backgrounds/particlesCode";

const ParticlesDemo = () => {

  const [colors, setColors] = useState('#ffffff');

  const [particleCount, setParticleCount] = useState(200);
  const [particleSpread, setParticleSpread] = useState(10);
  const [speed, setSpeed] = useState(0.1);
  const [baseSize, setBaseSize] = useState(100);

  const [moveParticlesOnHover, setMoveParticlesOnHover] = useState(true);
  const [alphaParticles, setAlphaParticles] = useState(false);
  const [disableRotation, setDisableRotation] = useState(false);

  const propData = [
    {
      name: "particleCount",
      type: "number",
      default: "200",
      description: "The number of particles to generate."
    },
    {
      name: "particleSpread",
      type: "number",
      default: "10",
      description: "Controls how far particles are spread from the center."
    },
    {
      name: "speed",
      type: "number",
      default: "0.1",
      description: "Speed factor controlling the animation pace."
    },
    {
      name: "particleColors",
      type: "string[]",
      default: "['#ffffff']",
      description: "An array of hex color strings used to color the particles."
    },
    {
      name: "moveParticlesOnHover",
      type: "boolean",
      default: "false",
      description: "Determines if particles should move in response to mouse hover."
    },
    {
      name: "particleHoverFactor",
      type: "number",
      default: "1",
      description: "Multiplier for the particle movement when hovering."
    },
    {
      name: "alphaParticles",
      type: "boolean",
      default: "false",
      description: "If true, particles are rendered with varying transparency; otherwise, as solid circles."
    },
    {
      name: "particleBaseSize",
      type: "number",
      default: "100",
      description: "The base size of the particles."
    },
    {
      name: "sizeRandomness",
      type: "number",
      default: "1",
      description: "Controls the variation in particle sizes (0 means all particles have the same size)."
    },
    {
      name: "cameraDistance",
      type: "number",
      default: "20",
      description: "Distance from the camera to the particle system."
    },
    {
      name: "disableRotation",
      type: "boolean",
      default: "false",
      description: "If true, stops the particle system from rotating."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <Particles
            particleColors={[colors]}
            particleCount={particleCount}
            particleSpread={particleSpread}
            speed={speed}
            particleBaseSize={baseSize}

            moveParticlesOnHover={moveParticlesOnHover}
            alphaParticles={alphaParticles}
            disableRotation={disableRotation}
          />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Color</Text>
            <Input
              type="color"
              value={colors}
              onChange={(e) => { setColors(e.target.value); }}
              width="50px"
            />
            <Text fontSize="sm">{colors}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Count</Text>
            <Slider
              min={100}
              max={1000}
              step={100}
              value={particleCount}
              onChange={(val) => {
                setParticleCount(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{particleCount}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Spread</Text>
            <Slider
              min={10}
              max={100}
              step={10}
              value={particleSpread}
              onChange={(val) => {
                setParticleSpread(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{particleSpread}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Speed</Text>
            <Slider
              min={0}
              max={2}
              step={0.1}
              value={speed}
              onChange={(val) => {
                setSpeed(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{speed}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Base Size</Text>
            <Slider
              min={100}
              max={1000}
              step={100}
              value={baseSize}
              onChange={(val) => {
                setBaseSize(val);
              }}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{baseSize}</Text>
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Mouse Interaction</Text>
            <Switch
              isChecked={moveParticlesOnHover}
              onChange={(e) => {
                setMoveParticlesOnHover(e.target.checked);
              }}
            />
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Particle Transparency</Text>
            <Switch
              isChecked={alphaParticles}
              onChange={(e) => {
                setAlphaParticles(e.target.checked);
              }}
            />
          </Flex>

          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Disable Rotation</Text>
            <Switch
              isChecked={disableRotation}
              onChange={(e) => {
                setDisableRotation(e.target.checked);
              }}
            />
          </Flex>

        </div>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={particles} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...particles} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ParticlesDemo;