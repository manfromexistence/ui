import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { FiBarChart2, FiBook, FiCloud, FiEdit, FiFileText, FiHeart } from "react-icons/fi";
import { Box } from "@chakra-ui/react";

import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import GlassIcons from "../../content/Components/GlassIcons/GlassIcons";
import { glassIcons } from "../../constants/code/Components/glassIconsCode";

const GlassIconsDemo = () => {
  const [colorful, setColorful] = useState(false);

  const propData = [
    {
      name: "items",
      type: "GlassIconsItem[]",
      default: "[]",
      description:
        "Array of items to render. Each item should include: an icon (React.ReactElement), a color (string), a label (string), and an optional customClass (string)."
    },
    {
      name: "className",
      type: "string",
      default: "''",
      description:
        "Optional additional CSS class(es) to be added to the container."
    }
  ];

  const items = [
    { icon: <FiFileText />, color: colorful ? 'blue' : '#444', label: 'Files' },
    { icon: <FiBook />, color: colorful ? 'purple' : '#444', label: 'Books' },
    { icon: <FiHeart />, color: colorful ? 'red' : '#444', label: 'Health' },
    { icon: <FiCloud />, color: colorful ? 'indigo' : '#444', label: 'Weather' },
    { icon: <FiEdit />, color: colorful ? 'orange' : '#444', label: 'Notes' },
    { icon: <FiBarChart2 />, color: colorful ? 'green' : '#444', label: 'Stats' },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <GlassIcons items={items} className="my-glass-icons" />
        </Box>

        <Customize>
          <PreviewSwitch title="Colorful" isChecked={colorful} onChange={(e) => { setColorful(e.target.checked); }} />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={glassIcons} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...glassIcons} />
      </CliTab>
    </TabbedLayout>
  );
};

export default GlassIconsDemo;