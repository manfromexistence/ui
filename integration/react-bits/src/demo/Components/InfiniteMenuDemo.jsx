import { useEffect, useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Spinner } from "@chakra-ui/react";

import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import InfiniteMenu from "../../content/Components/InfiniteMenu/InfiniteMenu";
import { infiniteMenu } from "../../constants/code/Components/infiniteMenuCode";

const InfiniteMenuDemo = () => {
  const [isHidden, setIsHidden] = useState(true);

  const propData = [
    {
      name: "items",
      type: "object[]",
      default: "[{...}]",
      description: "List of items containing an image, link, title, and description - or just add what you need."
    },
  ];

  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?'
    }
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsHidden(false);
    }, 1000);
  }, [])


  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={600} overflow="hidden" p={0}>
          {isHidden && <Spinner size="lg" position="absolute" />}
          <Box h={600} overflow="hidden" w='100%' p={0} opacity={isHidden ? 0 : 1} transform={isHidden ? 'scale(5)' : 'scale(1)'} transition='1s ease'>
            <InfiniteMenu items={items} />
          </Box>
        </Box>


        <PropTable data={propData} />
        <Dependencies dependencyList={['gl-matrix']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={infiniteMenu} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...infiniteMenu} />
      </CliTab>
    </TabbedLayout>
  );
};

export default InfiniteMenuDemo;