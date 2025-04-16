import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';
import useForceRerender from "../../hooks/useForceRerender";

import CircularGallery from "../../content/Components/CircularGallery/CircularGallery";
import { circularGallery } from "../../constants/code/Components/circularGalleryCode";

const CircularGalleryDemo = () => {
  const [bend, setBend] = useState(1);
  const [borderRadius, setBorderRadius] = useState(0.05);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "items",
      type: "Array<{ image: string; text: string }>",
      default: "undefined",
      description: "List of items to display in the gallery. Each item should have an image URL and a text label."
    },
    {
      name: "bend",
      type: "number",
      default: "3",
      description: "Determines the curvature of the gallery layout. A negative value bends in one direction, a positive value in the opposite."
    },
    {
      name: "textColor",
      type: "string",
      default: "\"#ffffff\"",
      description: "Specifies the color of the text labels."
    },
    {
      name: "borderRadius",
      type: "number",
      default: "0.05",
      description: "Sets the border radius for the media items to achieve rounded corners."
    }
  ];


  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} p={0} overflow="hidden">
          <CircularGallery key={key} bend={bend} borderRadius={borderRadius} />
        </Box>

        <Customize>
          <PreviewSlider
            title="Bend Level"
            min={-10}
            max={10}
            step={1}
            value={bend}
            onChange={(val) => {
              setBend(val);
              forceRerender();
            }}
          />

          <PreviewSlider
            title="Border Radius"
            min={0}
            max={0.5}
            step={0.01}
            value={borderRadius}
            onChange={(val) => {
              setBorderRadius(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['ogl']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={circularGallery} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...circularGallery} />
      </CliTab>
    </TabbedLayout>
  );
};

export default CircularGalleryDemo;