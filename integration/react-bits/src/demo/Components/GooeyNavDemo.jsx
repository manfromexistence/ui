import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import GooeyNav from "../../content/Components/GooeyNav/GooeyNav";
import { gooeyNav } from "../../constants/code/Components/gooeyNavCode";
import PreviewSlider from "../../components/common/PreviewSlider";

const GooeyNavDemo = () => {
  const [particleCount, setParticleCount] = useState(15);
  const [timeVariance, setTimeVariance] = useState(300);
  const [particleR, setParticleR] = useState(100);

  const propData = [
    {
      name: "items",
      type: "GooeyNavItem[]",
      default: "[]",
      description: "Array of navigation items."
    },
    {
      name: "animationTime",
      type: "number",
      default: "600",
      description: "Duration (ms) of the main animation."
    },
    {
      name: "particleCount",
      type: "number",
      default: "15",
      description: "Number of bubble particles per transition."
    },
    {
      name: "particleDistances",
      type: "[number, number]",
      default: "[90, 10]",
      description: "Outer and inner distances of bubble spread."
    },
    {
      name: "particleR",
      type: "number",
      default: "100",
      description: "Radius factor influencing random particle rotation."
    },
    {
      name: "timeVariance",
      type: "number",
      default: "300",
      description: "Random time variance (ms) for particle animations."
    },
    {
      name: "colors",
      type: "number[]",
      default: "[1, 2, 3, 1, 2, 3, 1, 4]",
      description: "Color indices used when creating bubble particles."
    },
    {
      name: "initialActiveIndex",
      type: "number",
      default: "0",
      description: "Which item is selected on mount."
    }
  ];


  const items = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <GooeyNav
            items={items}
            animationTime={500}
            particleCount={particleCount}
            particleDistances={[90, 0]}
            particleR={particleR}
            timeVariance={timeVariance}
            initialActiveIndex={0}
          />
        </Box>

        <Customize>
          <PreviewSlider
            title="Particle Count"
            min={1}
            max={50}
            step={1}
            value={particleCount}
            onChange={(val) => {
              setParticleCount(val);
            }}
          />

          <PreviewSlider
            title="Animation Variance"
            min={0}
            max={2000}
            step={100}
            value={timeVariance}
            onChange={(val) => {
              setTimeVariance(val);
            }}
          />

          <PreviewSlider
            title="Radius Factor"
            min={0}
            max={1000}
            step={100}
            value={particleR}
            onChange={(val) => {
              setParticleR(val);
            }}
          />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={gooeyNav} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...gooeyNav} />
      </CliTab>
    </TabbedLayout>
  );
};

export default GooeyNavDemo;