import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../../pages/main/ThemeColors";
import LearnVocabNotFound from "./LearnVocabNotFound";

function LearnVocabCards({ searchResults, pageNumber }) {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  return (
    <SimpleGrid mt="2.5vh" columns={4} gap={10}>
      {!searchResults.length && <LearnVocabNotFound />}
      {searchResults.map((value, index) => {
        if (index >= 0 + pageNumber * 12 && index <= 11 + pageNumber * 12) {
          return (
            <Card key={value + index} bg={bg} boxShadow="lg">
              <CardHeader>
                <Text
                  color="GrayText"
                  textAlign="right"
                  fontWeight="light"
                  fontSize="1em"
                >{`${value.kanji} ・ ${value.romaji} `}</Text>
              </CardHeader>
              <CardBody>
                <Text py="1em" textAlign="center" fontSize="200%">
                  {value.hiragana}
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
