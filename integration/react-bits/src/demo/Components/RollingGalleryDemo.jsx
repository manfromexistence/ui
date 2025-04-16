import { Box, Flex, Text } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/PropTable";
import Dependencies from "../../components/code/Dependencies";
import CliInstallation from "../../components/code/CliInstallation";

import RollingGallery from "../../content/Components/RollingGallery/RollingGallery";
import { rollingGallery } from '../../constants/code/Components/rollingGalleryCode';

const RollingGalleryDemo = () => {
  const propData = [
    {
      name: 'autoplay',
      type: 'boolean',
      default: 'false',
      description: 'Controls the autoplay toggle of the carousel. When turned on, it rotates and loops infinitely.',
    },
    {
      name: 'pauseOnHover',
      type: 'boolean',
      default: 'false',
      description: 'Allows the carousel to be paused on hover when autoplay is turned on.',
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" bg={'#060606'} overflow='hidden' p={0}>
          <Flex h={'100%'} maxW={'600px'} alignItems="center" justifyContent="center" direction="column">
            <Text textAlign="center" position="absolute" fontWeight={900} top={{ base: '4em', md: '1em' }} whiteSpace="nowrap" fontSize={{ base: '1.6em', md: '3rem' }}>Your trip to Thailand.</Text>
            <RollingGallery autoplay={true} pauseOnHover={true} />
          </Flex>
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={rollingGallery} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...rollingGallery} />
      </CliTab>
    </TabbedLayout>
  );
};

export default RollingGalleryDemo;
