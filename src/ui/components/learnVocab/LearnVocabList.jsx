import {
  Box,
  Button,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";
import LearnVocabNotFound from "./LearnVocabNotFound";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

function LearnVocabList({ searchResults, pageNumber }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [toggleKanji, setToggleKanji] = useBoolean(true);
  const [toggleHirKat, setToggleHirKat] = useBoolean(true);
  const [toggleRomaji, setToggleRomaji] = useBoolean(true);
  const [toggleDef, setToggleDef] = useBoolean(true);
  return (
    <VStack my="2.5vh">
      <Grid
        bg={bg}
        p="0.75em"
        borderRadius="lg"
        templateColumns="repeat(8, 1fr)"
        w="100%"
      >
        <GridItem colSpan={1} pl="0.5em">
          <HStack cursor="pointer" onClick={setToggleKanji.toggle}>
            <Button variant="unstyled">Kanji</Button>
            {toggleKanji ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack cursor="pointer" onClick={setToggleHirKat.toggle}>
            <Button variant="unstyled">Hiragana / Katakana</Button>
            {toggleHirKat ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={2}>
          <HStack cursor="pointer" onClick={setToggleRomaji.toggle}>
            <Button variant="unstyled">Romaji</Button>
            {toggleRomaji ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
        <GridItem colSpan={3}>
          <HStack cursor="pointer" onClick={setToggleDef.toggle}>
            <Button variant="unstyled">Definition</Button>
            {toggleDef ? (
              <ViewIcon color="gray.400" boxSize="0.75em" />
            ) : (
              <ViewOffIcon color="gray.400" boxSize="0.75em" />
            )}
          </HStack>
        </GridItem>
      </Grid>
      <VStack w="100%">
        {!searchResults.length && <LearnVocabNotFound />}
        {searchResults.map((value, index) => {
          if (index >= 0 + pageNumber * 12 && index <= 11 + pageNumber * 12) {
            return (
              <Box w="100%">
                <Divider minH="0.5vh" />
                <Grid
                  boxShadow="lg"
                  bg={bg}
                  p="0.75em"
                  borderRadius="lg"
                  templateColumns="repeat(8, 1fr)"
                  w="100%"
                >
                  <GridItem
                    my="auto"
                    colSpan={1}
                    fontStyle="oblique"
                    fontWeight="light"
                    fontSize="0.75em"
                    color="GrayText"
                  >
                    {toggleKanji ? value.kanji : "・・・・・"}
                  </GridItem>
                  <GridItem colSpan={2}>
                    {toggleHirKat ? value.hiragana : "・・・・・"}
                  </GridItem>
                  <GridItem colSpan={2}>
                    {toggleRomaji ? value.romaji : "・・・・・"}
                  </GridItem>
                  <GridItem
                    colSpan={3}
                    my="auto"
                    fontStyle="oblique"
                    fontWeight="light"
                    fontSize="0.75em"
                    color="GrayText"
                  >
                    {toggleDef ? value.meaning : "・・・・・"}
                  </GridItem>
                </Grid>
                <Divider />
              </Box>
            );
          }
        })}
      </VStack>
    </VStack>
  );
}

export default LearnVocabList;
