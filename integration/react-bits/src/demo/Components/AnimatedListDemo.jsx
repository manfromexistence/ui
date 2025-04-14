import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box } from "@chakra-ui/react";

import useForceRerender from "../../hooks/useForceRerender";
import Customize from "../../components/common/Customize";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";
import Dependencies from '../../components/code/Dependencies';

import AnimatedList from "../../content/Components/AnimatedList/AnimatedList";
import { animatedList } from "../../constants/code/Components/animatedListCode";

const AnimatedListDemo = () => {
  const [showGradients, setShowGradients] = useState(true);
  const [enableArrowNavigation, setEnableArrowNavigation] = useState(true);
  const [displayScrollbar, setDisplayScrollbar] = useState(true);

  const [key, forceRerender] = useForceRerender();

  const propData = [
    {
      name: "items",
      type: "string[]",
      default: "['Item 1', 'Item 2', ...]",
      description: "An array of items to display in the scrollable list."
    },
    {
      name: "onItemSelect",
      type: "function",
      default: "undefined",
      description: "Callback function triggered when an item is selected. Receives the selected item and its index."
    },
    {
      name: "showGradients",
      type: "boolean",
      default: "true",
      description: "Toggle to display the top and bottom gradient overlays."
    },
    {
      name: "enableArrowNavigation",
      type: "boolean",
      default: "true",
      description: "Toggle to enable keyboard navigation via arrow and tab keys."
    },
    {
      name: "className",
      type: "string",
      default: "''",
      description: "Additional CSS class names for the main container."
    },
    {
      name: "itemClassName",
      type: "string",
      default: "''",
      description: "Additional CSS class names for each list item."
    },
    {
      name: "displayScrollbar",
      type: "boolean",
      default: "true",
      description: "Toggle to display or hide the custom scrollbar."
    },
    {
      name: "initialSelectedIndex",
      type: "number",
      default: "-1",
      description: "Initial index of the selected item. Set to -1 for no selection."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <AnimatedList
            key={key}
            showGradients={showGradients}
            enableArrowNavigation={enableArrowNavigation}
            displayScrollbar={displayScrollbar}
          />
        </Box>

        <Customize>
          <PreviewSwitch title="Fade Items" isChecked={showGradients} onChange={(e) => { setShowGradients(e.target.checked); forceRerender() }} />
          <PreviewSwitch title="Keboard Navigation" isChecked={enableArrowNavigation} onChange={(e) => { setEnableArrowNavigation(e.target.checked); forceRerender() }} />
          <PreviewSwitch title="Show Scrollbar" isChecked={displayScrollbar} onChange={(e) => { setDisplayScrollbar(e.target.checked); forceRerender() }} />
        </Customize>

        <PropTable data={propData} />
        <Dependencies dependencyList={['framer-motion']} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={animatedList} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...animatedList} />
      </CliTab>
    </TabbedLayout>
  );
};

export default AnimatedListDemo;