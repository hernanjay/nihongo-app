import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import KanaSelectorHiragana from "./KanaSelectorHiragana";
import KanaSelectorKatakana from "./KanaSelectorKatakana";

function KanaSelectorTab() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  return (
    <Box>
      <Tabs
        isFitted
        variant="line"
        colorScheme="white"
        minW="60vw"
        ml="35vw"
        bg={bg}
        borderRadius="10"
        boxShadow="lg"
        pb="2.25vh"
      >
        <TabList>
          <Tab>Learn Hiragana Kana</Tab>
          <Tab>Learn Katakana Kana</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <KanaSelectorHiragana key="KanaSelectorHiragana" />
          </TabPanel>
          <TabPanel>
            <KanaSelectorKatakana key="KanaSelectorKatakana" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default KanaSelectorTab;
