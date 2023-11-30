import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  OrderedList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import data from "../../../assets/vocabList.json";
// import sampleSentence from "../../../assets/sampleSentences.json";
import ThemeColors from "../main/ThemeColors";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";

function LearnVocab() {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(data.n4);

  function search() {
    return data.n4.filter((param) => {
      return (
        param.kanji.includes(searchValue) || param.romaji.includes(searchValue)
      );
    });
  }

  function getList(value) {
    return value.meaning.split(",").map((str) => {
      return (
        <ListItem fontWeight="light" fontSize="0.9em" color={fontColor}>
          {str}
        </ListItem>
      );
    });
  }

  return (
    <Box minH={"100vh"}>
      <Divider minH={"10vh"} />
      <Box
        mt="2.5vh"
        mx="10vw"
        minW="80vw"
        position="fixed"
        bg={bg}
        borderRadius="lg"
        zIndex="5"
      >
        <InputGroup>
          <Input
            placeholder="Search"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <InputRightElement cursor={"pointer"}>
            <SearchIcon
              color="green.500"
              onClick={() => {
                console.log(search());
                setSearchResults(search());
              }}
            />
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box
        minW="100vw"
        h="90vh"
        boxShadow="lg"
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Container mb="5vh" minW="80vw">
          <SimpleGrid mt="10vh" columns={5} gap={10}>
            {searchResults.map((value, index) => {
              return (
                <Card bg={bg} boxShadow="lg">
                  <CardHeader>
                    <Text
                      color="GrayText"
                      textAlign="right"
                      fontWeight="light"
                      fontSize="0.75em"
                    >{`${value.kanji} / ${value.romaji}`}</Text>
                  </CardHeader>
                  <CardBody>
                    <Text textAlign="center" fontSize="2.25em">
                      {value.kanji}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <OrderedList justifyContent="start" alignContent="left">
                      {value.meaning.split(",").map((str, index) => {
                        return (
                          <ListItem
                            key={`${str}:${index}`}
                            fontWeight="light"
                            fontSize="0.9em"
                            color={fontColor}
                          >
                            {str}
                          </ListItem>
                        );
                      })}
                      {getList(value)}
                    </OrderedList>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default LearnVocab;
