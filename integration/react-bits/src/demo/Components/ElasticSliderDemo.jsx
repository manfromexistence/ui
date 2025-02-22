import { Box, Icon } from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import PropTable from "../../components/common/PropTable";
import Dependencies from "../../components/code/Dependencies";
import CodeExample from '../../components/code/CodeExample';
import CliInstallation from "../../components/code/CliInstallation";

import ElasticSlider from "../../content/Components/ElasticSlider/ElasticSlider";
import { elasticSlider } from '../../constants/code/Components/elasticSliderCode';

const ElasticSliderDemo = () => {
  const propData = [
    {
      name: 'defaultValue',
      type: 'number',
      default: 50,
      description: 'The initial value of the slider. It can be less than startingValue or greater than maxValue.',
    },
    {
      name: 'startingValue',
      type: 'number',
      default: 0,
      description: 'The starting point for the slider\'s range, e.g., startingValue=100 allows the slider to start at 100.',
    },
    {
      name: 'maxValue',
      type: 'number',
      default: 100,
      description: 'The maximum value the slider can reach.',
    },
    {
      name: 'className',
      type: 'string',
      default: '',
      description: 'Allows passing custom class names to style the component.',
    },
    {
      name: 'isStepped',
      type: 'boolean',
      default: false,
      description: 'Enables or disables stepped increments on the slider.',
    },
    {
      name: 'stepSize',
      type: 'number',
      default: 1,
      description: 'The size of the increments for the slider when isStepped is enabled.',
    },
    {
      name: 'leftIcon',
      type: 'JSX.Element',
      default: '<>-</>',
      description: 'Custom JSX or HTML code to display on the left side of the slider.',
    },
    {
      name: 'rightIcon',
      type: 'JSX.Element',
      default: '<>+</>',
      description: 'Custom JSX or HTML code to display on the right side of the slider.',
    },
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <h2 className="demo-title-extra">Default</h2>
        <Box position="relative" className="demo-container" minH={200}>
          <ElasticSlider />
        </Box>

        <h2 className="demo-title-extra">Steps</h2>
        <Box position="relative" className="demo-container" minH={200}>
          <ElasticSlider isStepped stepSize={10} />
        </Box>

        <h2 className="demo-title-extra">Custom Values & Icons</h2>
        <Box position="relative" className="demo-container" minH={200}>
          <ElasticSlider
            leftIcon={<Icon as={FaMinusCircle} />}
            rightIcon={<Icon as={FaPlusCircle} />}
            startingValue={500}
            defaultValue={750}
            maxValue={1000}
          />
        </Box>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={elasticSlider} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...elasticSlider} />
      </CliTab>
    </TabbedLayout>
  );
};

export default ElasticSliderDemo;
