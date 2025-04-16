import { useState } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from '../../components/code/CodeExample';
import Dependencies from "../../components/code/Dependencies";
import CliInstallation from '../../components/code/CliInstallation';

import BlobCursor from "../../content/Animations/BlobCursor/BlobCursor";
import { blobCursor } from '../../constants/code/Animations/blobCursorCode';

const BlobCursorDemo = () => {
  const [shape, setShape] = useState('circle');
  const [color, setColor] = useState('#00f0ff');

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box height={200} position="relative" className="demo-container" overflow="hidden">
          <BlobCursor blobType={shape} fillColor={color} />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex gap={2}>
            <Button
              fontSize="xs"
              h={8}
              onClick={() => {
                setShape(shape === 'circle' ? 'square' : 'circle');
              }}
            >
              Shape: <Text color={"#a1a1aa"}>&nbsp;{String(shape)}</Text>
            </Button>
            <Flex alignItems="center"
              fontSize="xs"
              h={8}
              onClick={() => {

              }}
            >
              Color:&nbsp;&nbsp;<input type="color" value={color} style={{ height: '22px', outline: 'none', border: 'none' }} onChange={(e) => setColor(e.target.value)} />
            </Flex>
          </Flex>
        </div>

        <p className="demo-extra-info">
          <WarningIcon position="relative" /> SVG filters are not fully supported on Safari.
        </p>

        <Dependencies dependencyList={['@react-spring/web']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={blobCursor} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...blobCursor} />
      </CliTab>
    </TabbedLayout>
  );
}

export default BlobCursorDemo;