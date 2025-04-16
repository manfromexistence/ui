import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { VscAccount, VscArchive, VscHome, VscSettingsGear } from "react-icons/vsc";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import Dependencies from "../../components/code/Dependencies";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";
import useForceRerender from "../../hooks/useForceRerender";

import Dock from "../../content/Components/Dock/Dock";
import { dock } from '../../constants/code/Components/dockCode';

const DockDemo = () => {
  const [panelHeight, setPanelHeight] = useState(68);
  const [baseItemSize, setBaseItemSize] = useState(50);
  const [magnification, setMagnification] = useState(70);

  const [key, forceRerender] = useForceRerender();

  const items = [
    { icon: <VscHome size={18} />, label: 'Home', onClick: () => alert('Home!') },
    { icon: <VscArchive size={18} />, label: 'Archive', onClick: () => alert('Archive!') },
    { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  const propData = [
    {
      name: "items",
      type: "DockItemData[]",
      default: "[]",
      description:
        "Array of dock items. Each item should include an icon, label, onClick handler, and an optional className.",
    },
    {
      name: "className",
      type: "string",
      default: '""',
      description: "Additional CSS classes for the dock panel.",
    },
    {
      name: "distance",
      type: "number",
      default: "200",
      description:
        "Pixel distance used to calculate the magnification effect based on mouse proximity.",
    },
    {
      name: "panelHeight",
      type: "number",
      default: "68",
      description: "Height (in pixels) of the dock panel.",
    },
    {
      name: "baseItemSize",
      type: "number",
      default: "50",
      description: "The base size (in pixels) for each dock item.",
    },
    {
      name: "dockHeight",
      type: "number",
      default: "256",
      description: "Maximum height (in pixels) of the dock container.",
    },
    {
      name: "magnification",
      type: "number",
      default: "70",
      description:
        "The magnified size (in pixels) applied to a dock item when hovered.",
    },
    {
      name: "spring",
      type: "SpringOptions",
      default: "{ mass: 0.1, stiffness: 150, damping: 12 }",
      description: "Configuration options for the spring animation.",
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" minH={400}>
          <Text fontSize='1.2rem' fontWeight={900} color="#a7a7a7">Try it out!</Text>
          <Dock key={key} items={items} panelHeight={panelHeight} baseItemSize={baseItemSize} magnification={magnification} />
        </Box>

        <Customize>
          <PreviewSlider
            title="Background Height"
            min={30}
            max={200}
            step={10}
            value={panelHeight}
            onChange={(val) => {
              setPanelHeight(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Item Size"
            min={20}
            max={60}
            step={10}
            value={baseItemSize}
            onChange={(val) => {
              setBaseItemSize(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Magnification"
            min={50}
            max={100}
            step={10}
            value={magnification}
            onChange={(val) => {
              setMagnification(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={dock} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...dock} />
      </CliTab>
    </TabbedLayout>
  );
}

export default DockDemo;