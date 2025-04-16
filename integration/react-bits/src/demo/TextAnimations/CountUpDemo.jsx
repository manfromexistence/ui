import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";
import { CliTab, CodeTab, PreviewTab, TabbedLayout } from "../../components/common/TabbedLayout";

import GradientText from "../../content/TextAnimations/GradientText/GradientText";
import RefreshButton from "../../components/common/RefreshButton";
import CodeExample from '../../components/code/CodeExample';
import PropTable from "../../components/common/PropTable";
import Dependencies from "../../components/code/Dependencies";
import useForceRerender from "../../hooks/useForceRerender";
import CliInstallation from "../../components/code/CliInstallation";

import CountUp from "../../content/TextAnimations/CountUp/CountUp";
import { countup } from '../../constants/code/TextAnimations/countUpCode';

const CountUpDemo = () => {
  const [startCounting, setStartCounting] = useState(false);
  const [keyDefault, forceRerenderDefault] = useForceRerender();
  const [keyProgramatically, forceRerenderProgramatically] = useForceRerender();
  const [keyGradient, forceRerenderGradient] = useForceRerender();

  const propData = [
    {
      name: 'to',
      type: 'number',
      default: '—',
      description: 'The target number to count up to.',
    },
    {
      name: 'from',
      type: 'number',
      default: '0',
      description: 'The initial number from which the count starts.',
    },
    {
      name: 'direction',
      type: 'string',
      default: '"up"',
      description: 'Direction of the count; can be "up" or "down". When this is set to "down", "from" and "to" become reversed, in order to count down.',
    },
    {
      name: 'delay',
      type: 'number',
      default: '0',
      description: 'Delay in seconds before the counting starts.',
    },
    {
      name: 'duration',
      type: 'number',
      default: '2',
      description: 'Duration of the count animation - based on the damping and stiffness configured inside the component.',
    },
    {
      name: 'className',
      type: 'string',
      default: '""',
      description: 'CSS class to apply to the component for additional styling.',
    },
    {
      name: 'startWhen',
      type: 'boolean',
      default: 'true',
      description: 'A boolean to control whether the animation should start when the component is in view. It basically works like an if statement, if this is true, the count will start.',
    },
    {
      name: 'separator',
      type: 'string',
      default: '""',
      description: 'Character to use as a thousands separator in the displayed number.',
    },
    {
      name: 'onStart',
      type: 'function',
      default: '—',
      description: 'Callback function that is called when the count animation starts.',
    },
    {
      name: 'onEnd',
      type: 'function',
      default: '—',
      description: 'Callback function that is called when the count animation ends.',
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <h2 className="demo-title-extra">Default</h2>
        <Box position="relative" className="demo-container" minH={200}>
          <CountUp
            key={keyDefault}
            from={0}
            to={100}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text"
          />

          <RefreshButton onClick={forceRerenderDefault} />
        </Box>

        <h2 className="demo-title-extra">Start Programatically</h2>
        <Flex direction="column" justifyContent="center" alignItems="center" position="relative" className="demo-container" minH={200}>
          <Button onClick={() => setStartCounting(true)}>Count to 500!</Button>

          <CountUp
            key={keyProgramatically}
            from={100}
            to={500}
            startWhen={startCounting}
            duration={5}
            className="count-up-text"
          />

          {startCounting && <RefreshButton onClick={forceRerenderProgramatically} />}
        </Flex>

        <h2 className="demo-title-extra">With Gradient</h2>
        <p className="demo-extra-info">
          <Flex>
            <span>
              You can wrap the counter with other components such as&nbsp;
              <Link style={{ display: 'inline', whiteSpace: 'nowrap' }} to='/text-animations/gradient-text/'>&lt;GradientText /&gt;</Link>
            </span>
          </Flex>

        </p>
        <Flex direction="column" justifyContent="center" alignItems="center" position="relative" className="demo-container" minH={200}>
          <GradientText>
            <CountUp
              key={keyGradient}
              from={0}
              to={100}
              separator=","
              duration={1}
              className="count-up-text"
            />
          </GradientText>

          <RefreshButton onClick={forceRerenderGradient} />
        </Flex>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={countup} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...countup} />
      </CliTab>
    </TabbedLayout>
  );
};

export default CountUpDemo;