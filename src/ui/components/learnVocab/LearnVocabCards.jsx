import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";
import LearnVocabNotFound from "./LearnVocabNotFound";
import { useState } from "react";

function LearnVocabCards({ searchResults, pageNumber }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [displayText, setDisplayText] = useState("hir");
  const [selectionTextLeft, setSelectionTextLeft] = useState("kan");
  const [selectionTextRight, setSelectionTextRight] = useState("rom");
  return (
    <SimpleGrid mt="2.5vh" columns={{ base: 1, lg: 3, xl: 4 }} gap={10}>
      {!searchResults.length && <LearnVocabNotFound />}
      {searchResults.map((value, index) => {
        if (index >= 0 + pageNumber * 12 && index <= 11 + pageNumber * 12) {
          return (
            <Card key={value + index} bg={bg} boxShadow="lg">
              <CardHeader>
                <HStack>
                  <Spacer />
                  <Text
                    cursor="pointer"
                    color="GrayText"
                    textAlign="right"
                    fontWeight="light"
                    fontSize="1em"
                    onClick={() => {
                      setDisplayText(selectionTextLeft);
                      setSelectionTextLeft(displayText);
                    }}
                  >
                    {selectionTextLeft === "hir" && value.hiragana}
                    {selectionTextLeft === "rom" && value.romaji}
                    {selectionTextLeft === "kan" && value.kanji}
                  </Text>
                  <Text
                    color="GrayText"
                    textAlign="right"
                    fontWeight="light"
                    fontSize="1em"
                  >
                    ・
                  </Text>
                  <Text
                    cursor="pointer"
                    color="GrayText"
                    textAlign="right"
                    fontWeight="light"
                    fontSize="1em"
                    onClick={() => {
                      setDisplayText(selectionTextRight);
                      setSelectionTextRight(displayText);
                    }}
                  >
                    {selectionTextRight === "hir" && value.hiragana}
                    {selectionTextRight === "rom" && value.romaji}
                    {selectionTextRight === "kan" && value.kanji}
                  </Text>
                </HStack>
              </CardHeader>
              <CardBody>
                <Text py="1em" textAlign="center" fontSize="200%">
                  {displayText === "hir" && value.hiragana}
                  {displayText === "rom" && value.romaji}
                  {displayText === "kan" && value.kanji}
                </Text>
              </CardBody>
              <CardFooter>
                <Text
                  fontStyle="oblique"
                  key={value.meaning + index}
                  w="100%"
                  fontWeight="light"
                  fontSize="0.75em"
                  color="GrayText"
                >
                  {`- ${value.meaning}`}
                </Text>
              </CardFooter>
            </Card>
          );
        }
      })}
    </SimpleGrid>
  );
}

export default LearnVocabCards;