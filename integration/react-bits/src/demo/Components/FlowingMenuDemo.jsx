import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import FlowingMenu from "../../content/Components/FlowingMenu/FlowingMenu";
import { flowingMenu } from "../../constants/code/Components/flowingMenuCode";

const FlowingMenuDemo = () => {
  const propData = [
    {
      name: "items",
      type: "object[]",
      default: "[]",
      description: "An array of object scontaining: link, text, image."
    }
  ];

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
    { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
    { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
    { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={600} overflow="hidden" px={0} pt='100px' pb='100px'>
          <FlowingMenu items={demoItems} />
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['gsap']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={flowingMenu} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...flowingMenu} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FlowingMenuDemo;