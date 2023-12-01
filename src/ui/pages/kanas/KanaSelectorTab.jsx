import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import KanaSelector from "./KanaSelector";
import ThemeColors from "../main/ThemeColors";

function KanaSelectorTab() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  return (
    <Box>
      <Tabs
        isFitted
        variant="line"
        colorScheme="white"
        h="72.5vh"
        minW={{ base: "92vw", lg: "60vw" }}
        bg={bg}
        borderRadius="10"
        boxShadow="lg"
        pb="2.25vh"
      >
        <TabList>
          <Tab>Learn Hiragana</Tab>
          <Tab>Learn Katakana</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <KanaSelector type="hiragana" key="KanaSelectorHiragana" />
          </TabPanel>
          <TabPanel>
            <KanaSelector type="katakana" key="KanaSelectorKatakana" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default KanaSelectorTab;
