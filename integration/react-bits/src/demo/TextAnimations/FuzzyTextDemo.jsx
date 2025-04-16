import { useState } from "react";
import { CodeTab, PreviewTab, CliTab, TabbedLayout } from "../../components/common/TabbedLayout";
import { Box, Flex, Spacer } from "@chakra-ui/react";

import PreviewSlider from "../../components/common/PreviewSlider";
import PreviewSwitch from "../../components/common/PreviewSwitch";
import Customize from "../../components/common/Customize";
import CodeExample from "../../components/code/CodeExample";
import CliInstallation from "../../components/code/CliInstallation";
import PropTable from "../../components/common/PropTable";

import FuzzyText from "../../content/TextAnimations/FuzzyText/FuzzyText";
import { fuzzyText } from "../../constants/code/TextAnimations/fuzzyTextCode";

const FuzzyTextDemo = () => {
  const [baseIntensity, setBaseIntensity] = useState(0.2);
  const [hoverIntensity, setHoverIntensity] = useState(0.5);
  const [enableHover, setEnableHover] = useState(true);

  const propData = [
    {
      name: "children",
      type: "React.ReactNode",
      default: "",
      description: "The text content to display inside the fuzzy text component."
    },
    {
      name: "fontSize",
      type: "number | string",
      default: `"clamp(2rem, 8vw, 8rem)"`,
      description: "Specifies the font size of the text. Accepts any valid CSS font-size value or a number (interpreted as pixels)."
    },
    {
      name: "fontWeight",
      type: "string | number",
      default: "900",
      description: "Specifies the font weight of the text."
    },
    {
      name: "fontFamily",
      type: "string",
      default: `"inherit"`,
      description: "Specifies the font family of the text. 'inherit' uses the computed style from the parent."
    },
    {
      name: "color",
      type: "string",
      default: "#fff",
      description: "Specifies the text color."
    },
    {
      name: "enableHover",
      type: "boolean",
      default: "true",
      description: "Enables the hover effect for the fuzzy text."
    },
    {
      name: "baseIntensity",
      type: "number",
      default: "0.18",
      description: "The fuzz intensity when the text is not hovered."
    },
    {
      name: "hoverIntensity",
      type: "number",
      default: "0.5",
      description: "The fuzz intensity when the text is hovered."
    }
  ];

  return (
    <TabbedLayout>
      <PreviewTab>
        <Box position="relative" className="demo-container" h={500} overflow="hidden">
          <Flex direction='column'>
            <FuzzyText baseIntensity={baseIntensity} hoverIntensity={hoverIntensity} enableHover={enableHover} fontSize={140}>
              404
            </FuzzyText>
            <Spacer my={1} />
            <FuzzyText baseIntensity={baseIntensity} hoverIntensity={hoverIntensity} enableHover={enableHover} fontSize={70} fontFamily="Gochi Hand">
              not found
            </FuzzyText>
          </Flex>
        </Box>

        <Customize>
          <PreviewSlider
            title="Base Intensity"
            min={0}
            max={1}
            step={0.01}
            value={baseIntensity}
            onChange={(val) => {
              setBaseIntensity(val);
            }}
          />

          <PreviewSlider
            title="Hover Intensity"
            min={0}
            max={2}
            step={0.01}
            value={hoverIntensity}
            onChange={(val) => {
              setHoverIntensity(val);
            }}
          />

          <PreviewSwitch title="Enable Hover" isChecked={enableHover} onChange={(e) => { setEnableHover(e.target.checked); }} />
        </Customize>

        <PropTable data={propData} />
      </PreviewTab>

      <CodeTab>
        <CodeExample codeObject={fuzzyText} />
      </CodeTab>

      <CliTab>
        <CliInstallation {...fuzzyText} />
      </CliTab>
    </TabbedLayout>
  );
};

export default FuzzyTextDemo;