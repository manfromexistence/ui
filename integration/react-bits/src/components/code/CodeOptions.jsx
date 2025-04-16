import { Children, useEffect, useState } from "react";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Icon, Text, Flex, Select } from "@chakra-ui/react";
import { RiEmotionSadLine, RiTailwindCssFill } from "react-icons/ri";
import { FiCode } from "react-icons/fi";
import { useLanguage } from '../context/LanguageContext/useLanguage';

const CodeOptions = ({ children }) => {
  const { languagePreset, setLanguagePreset } = useLanguage();

  const tabComponents = {
    JS: { css: CSSTab, tailwind: TailwindTab },
    TS: { css: TSCSSTab, tailwind: TSTailwindTab },
  };

  const categorizedTabs = Children.toArray(children).reduce((acc, child) => {
    Object.entries(tabComponents).forEach(([lang, types]) => {
      Object.entries(types).forEach(([type, component]) => {
        if (child.type === component) acc[lang][type] = child;
      });
    });
    return acc;
  }, { JS: { css: null, tailwind: null }, TS: { css: null, tailwind: null } });

  const hasValidContent = (content) => content?.props?.children;

  const renderTabContent = (type) => {
    const content = languagePreset === "JS" ? categorizedTabs.JS[type] : categorizedTabs.TS[type];
    return hasValidContent(content) ? content : (
      <Flex alignItems="center" gap={2} my={6} color="#a1a1aa">
        <Text>Nothing here yet!</Text>
        <Icon as={RiEmotionSadLine} />
      </Flex>
    );
  };

  const tabStyles = {
    _selected: { color: "#fff", bg: "#111" },
    borderRadius: "10px",
    bg: "#060606",
    fontSize: "14px",
    border: "1px solid #ffffff1c",
    height: 9,
    padding: "0.5rem 1rem",
    transition: "background-color 0.3s",
    "&:hover": { bg: "#222" },
  };

  const selectStyles = { ...tabStyles, paddingRight: "2.2em" };

  return (
    <Tabs mt={4} variant="unstyled" border="none" opacity={languagePreset ? 1 : 0} transition={languagePreset ? "opacity 0.3s" : "none"}>
      <TabList mb={4} justifyContent="space-between">
        <Flex wrap="wrap" gap="0.5rem">
          <Tab sx={tabStyles}><Icon as={FiCode} />&nbsp;Default</Tab>
          <Tab sx={tabStyles}><Icon as={RiTailwindCssFill} />&nbsp;Tailwind</Tab>
        </Flex>

        <Flex alignItems="center" gap="8px">
          <Select
            width="fit-content"
            sx={selectStyles}
            onChange={(e) => setLanguagePreset(e.target.value)}
            value={languagePreset}
          >
            <option value="JS">JS</option>
            <option value="TS">TS</option>
          </Select>
        </Flex>
      </TabList>
      <TabPanels>
        <TabPanel p={0}>{renderTabContent("css")}</TabPanel>
        <TabPanel p={0}>{renderTabContent("tailwind")}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

// Helper components to wrap tab content
const CSSTab = ({ children }) => <>{children}</>;
const TailwindTab = ({ children }) => <>{children}</>;
const TSCSSTab = ({ children }) => <>{children}</>;
const TSTailwindTab = ({ children }) => <>{children}</>;

export { CodeOptions, CSSTab, TailwindTab, TSCSSTab, TSTailwindTab };
