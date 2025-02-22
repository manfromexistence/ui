import { useState } from "react";
import { Box, Flex, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import CodeExample from "../../components/code/CodeExample";
import PropTable from "../../components/common/PropTable";
import CliInstallation from "../../components/code/CliInstallation";

import ShinyText from "../../content/TextAnimations/ShinyText/ShinyText";
import { shinyText } from '../../constants/code/TextAnimations/shinyTextCode';

const ShinyTextDemo = () => {
  const [speed, setSpeed] = useState(3);

  const propData = [
    {
      name: 'text',
      type: 'string',
      default: '-',
      description: 'The text to be displayed with the shiny effect.',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Disables the shiny effect when set to true.',
    },
    {
      name: 'speed',
      type: 'number',
      default: '5',
      description: 'Specifies the duration of the animation in seconds.',
    },
    {
      name: 'className',
      type: 'string',
      default: "''",
      description: 'Adds custom classes to the root element.',
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <h2 className="demo-title-extra">Button Example</h2>
        <Box position="relative" className="demo-container" minH={150}>
          <div className="shiny-button">
            <ShinyText text="Shiny Button" disabled={false} speed={3} className="shiny-text-demo" />
          </div>
        </Box>

        <h2 className="demo-title-extra">Text Example</h2>
        <Box position="relative" className="demo-container" minH={150}>
          <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="shiny-text-demo" />
        </Box>

        <h2 className="demo-title-extra">Configurable Speed</h2>
        <Box position="relative" className="demo-container" minH={150}>
          <ShinyText text={speed < 2.5 ? '🐎 This is fast!' : '🐌 This is slow!'} disabled={false} speed={speed} className="shiny-text-demo" />
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex gap={4} align="center" mt={4}>
            <Text fontSize="sm">Animation Speed (s):</Text>
            <Slider
              min={1}
              max={5}
              step={0.1}
              value={speed}
              onChange={(val) => setSpeed(val)}
              width="200px"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize="sm">{speed}s</Text>
          </Flex>
        </div>



        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={shinyText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...shinyText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ShinyTextDemo;
