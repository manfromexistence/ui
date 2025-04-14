import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Text } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSlider from "../../components/common/PreviewSlider";
import CodeExample from "../../components/code/CodeExample";
import useForceRerender from "../../hooks/useForceRerender";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import Folder from "../../content/Components/Folder/Folder";
import { folder } from "../../constants/code/Components/folderCode";

const FolderDemo = () => {
  const propData = [
    {
      name: "color",
      type: "string",
      default: "#00d8ff",
      description: "The primary color of the folder."
    },
    {
      name: "size",
      type: "number",
      default: "1",
      description: "Scale factor for the folder size."
    },
    {
      name: "items",
      type: "React.ReactNode[]",
      default: "[]",
      description: "An array of up to 3 items rendered as papers in the folder."
    },
    {
      name: "className",
      type: "string",
      default: "",
      description: "Additional CSS classes for the folder container."
    }
  ];

  const [color, setColor] = useState("#00d8ff");
  const [size, setSize] = useState(2);

  const [key, forceRerender] = useForceRerender();

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <Folder key={key} size={size} color={color} className="custom-folder" />
        </Box>

        <Customize>
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Color</Text>
            <input
              type="color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                forceRerender();
              }}
            />
          </Flex>

          <PreviewSlider
            title="Size"
            min={0.1}
            max={3}
            step={0.1}
            value={size}
            onChange={(val) => {
              setSize(val);
              forceRerender();
            }}
          />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={folder} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...folder} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FolderDemo;