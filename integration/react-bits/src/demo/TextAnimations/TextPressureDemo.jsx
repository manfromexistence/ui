import { useState } from 'react';
import {
  CliTab,
  CodeTab,
  PreviewTab,
  TabbedLayout
} from '../../components/common/TabbedLayout';
import {
  Box,
  Flex,
  Input,
  Switch,
  FormControl,
  FormLabel,
  Text
} from '@chakra-ui/react';

import CodeExample from '../../components/code/CodeExample';
import PropTable from '../../components/common/PropTable';
import CliInstallation from '../../components/code/CliInstallation';
import useForceRerender from '../../hooks/useForceRerender';
import RefreshButton from '../../components/common/RefreshButton';

import TextPressure from '../../content/TextAnimations/TextPressure/TextPressure';
import { textPressure } from '../../constants/code/TextAnimations/textPressureCode';

const propData = [
  {
    name: 'text',
    type: 'string',
    default: '"Hello!"',
    description: 'Text content that will be displayed and animated.'
  },
  {
    name: 'fontFamily',
    type: 'string',
    default: '',
    description: 'Name of the variable font family.'
  },
  {
    name: 'fontUrl',
    type: 'string',
    default: 'URL to a .woff2 or .ttf file',
    description: 'URL for the variable font file (needed)'
  },
  {
    name: 'flex',
    type: 'boolean',
    default: 'true',
    description: 'Whether the characters are spaced using flex layout.'
  },
  {
    name: 'scale',
    type: 'boolean',
    default: 'false',
    description: 'If true, vertically scales the text to fill its container height.'
  },
  {
    name: 'alpha',
    type: 'boolean',
    default: 'false',
    description: 'If true, applies an opacity effect based on cursor distance.'
  },
  {
    name: 'stroke',
    type: 'boolean',
    default: 'false',
    description: 'If true, adds a stroke effect around characters.'
  },
  {
    name: 'width',
    type: 'boolean',
    default: 'true',
    description: 'If true, varies the variable-font "width" axis.'
  },
  {
    name: 'weight',
    type: 'boolean',
    default: 'true',
    description: 'If true, varies the variable-font "weight" axis.'
  },
  {
    name: 'italic',
    type: 'boolean',
    default: 'true',
    description: 'If true, varies the variable-font "italics" axis.'
  },
  {
    name: 'textColor',
    type: 'string',
    default: 'true',
    description: 'The fill color of the text'
  },
  {
    name: 'strokeColor',
    type: 'string',
    default: '#FFFFFF',
    description: 'The stroke color that will be applied to the text when "stroke" is set to true'
  },
  {
    name: 'className',
    type: 'string',
    default: '#FF0000',
    description: 'Additional class for styling the <h1> wrapper.'
  },
  {
    name: 'minFontSize',
    type: 'number',
    default: '24',
    description: 'Sets a minimum font-size to avoid overly tiny text on smaller screens.'
  }
];

const TextPressureDemo = () => {
  const [text, setText] = useState('Hello!');
  const [flex, setFlex] = useState(true);
  const [alpha, setAlpha] = useState(false);
  const [stroke, setStroke] = useState(false);
  const [width, setWidth] = useState(true);
  const [weight, setWeight] = useState(true);
  const [italic, setItalic] = useState(true);
  const [textColor, setTextColor] = useState('#ffffff');
  const [strokeColor, setStrokeColor] = useState('#00d8ff');

  const [key, forceRerender] = useForceRerender();

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" bg='#060606' minH={400} maxH={450} overflow="hidden" mb={6}>
          <RefreshButton onClick={forceRerender} />
          <Box w="100%" h="100%">
            <TextPressure
              key={key}
              text={text}
              flex={flex}
              alpha={alpha}
              stroke={stroke}
              width={width}
              weight={weight}
              italic={italic}
              textColor={textColor}
              strokeColor={strokeColor}
              minFontSize={36}
            />
          </Box>
        </Box>

        <div className="preview-options">
          <h2 className="demo-title-extra">Customize</h2>
          <Flex alignItems='center' gap={4} flexWrap="wrap">
            <Input
              width="100%"
              maxWidth='200px'
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                forceRerender();
              }}
              maxLength={11}
              placeholder="Enter some text"
            />

            {/* Text Color */}
            <Flex gap={4} align="center">
              <Text fontSize="sm">Text Color</Text>
              <input
                type="color"
                value={textColor}
                width="60px"
                onChange={(e) => {
                  setTextColor(e.target.value);
                  forceRerender();
                }}
              />
            </Flex>

            {/* Stroke Color */}
            <Flex gap={4} align="center">
              <Text fontSize="sm">Stroke Color</Text>
              <input
                type="color"
                value={strokeColor}
                width="60px"
                onChange={(e) => {
                  setStrokeColor(e.target.value);
                  forceRerender();
                }}
              />
            </Flex>
          </Flex>

          <Text mt={8} color='#999'>Animation Settings</Text>
          <Flex gap={4} flexWrap="wrap" mt={4}>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Flex</FormLabel>
              <Switch
                isChecked={flex}
                onChange={(e) => {
                  setFlex(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Alpha</FormLabel>
              <Switch
                isChecked={alpha}
                onChange={(e) => {
                  setAlpha(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Stroke</FormLabel>
              <Switch
                isChecked={stroke}
                onChange={(e) => {
                  setStroke(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Width</FormLabel>
              <Switch
                isChecked={width}
                onChange={(e) => {
                  setWidth(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Weight</FormLabel>
              <Switch
                isChecked={weight}
                onChange={(e) => {
                  setWeight(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" w="140px">
              <FormLabel mb="0" fontSize="sm">Italic</FormLabel>
              <Switch
                isChecked={italic}
                onChange={(e) => {
                  setItalic(e.target.checked);
                  forceRerender();
                }}
              />
            </FormControl>
          </Flex>
        </div>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={textPressure} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...textPressure} />
      </CliTab>
    </TabbedLayout>
  );
};

export default TextPressureDemo;
