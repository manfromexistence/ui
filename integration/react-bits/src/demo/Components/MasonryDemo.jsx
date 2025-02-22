import { Box } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from '../../components/code/CodeExample';
import Dependencies from "../../components/code/Dependencies";
import CliInstallation from "../../components/code/CliInstallation";

import Masonry from "../../content/Components/Masonry/Masonry";
import { masonry } from '../../constants/code/Components/masonryCode';

const MasonryDemo = () => {
  const data = [
    { id: 1, image: 'https://picsum.photos/id/10/200/300?grayscale', height: 400 },
    { id: 2, image: 'https://picsum.photos/id/14/200/300?grayscale', height: 300 },
    { id: 3, image: 'https://picsum.photos/id/15/200/300?grayscale', height: 300 },
    { id: 4, image: 'https://picsum.photos/id/16/200/300?grayscale', height: 300 },
    { id: 5, image: 'https://picsum.photos/id/17/200/300?grayscale', height: 300 },
    { id: 6, image: 'https://picsum.photos/id/19/200/300?grayscale', height: 300 },
    { id: 7, image: 'https://picsum.photos/id/37/200/300?grayscale', height: 200 },
    { id: 8, image: 'https://picsum.photos/id/39/200/300?grayscale', height: 300 },
    { id: 9, image: 'https://picsum.photos/id/85/200/300?grayscale', height: 200 },
    { id: 10, image: 'https://picsum.photos/id/103/200/300?grayscale', height: 400 }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" overflow="hidden">
          <Masonry data={data} />
        </Box>

        <Dependencies dependencyList={['@react-spring/web']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={masonry} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...masonry} />
      </CliTab>
    </TabbedLayout>
  );
}

export default MasonryDemo;