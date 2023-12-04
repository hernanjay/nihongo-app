import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
  useBoolean,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import ThemeColors from "../main/ThemeColors";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import VocabListFactory from "../../../logic/objects/VocabListFactory";

function LearnVocab() {
  const { body, bg, border, fontColor, success, error, warning, info, hover } =
    ThemeColors();
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueLevel, setSearchValueLevel] = useState("All");
  const [searchResults, setSearchResults] = useState(
    new VocabListFactory("All")
  );
  const toast = useToast();
  const [toggleMode, setToggleMode] = useBoolean();

  function search() {
    return new VocabListFactory(searchValueLevel).filter((param) => {
      return (
        param.kanji.includes(searchValue) ||
        param.romaji.includes(searchValue) ||
        param.hiragana.includes(searchValue)
      );
    });
  }

  return (
    <Box minH={"100vh"}>
      <Divider minH={"10vh"} />

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
        <Container minW="80vw">
          <HStack mt="2.5vh" bg={bg} borderRadius="lg" p="0.25em">
            <Box w="100%" bg={bg} borderRadius="lg">
              <InputGroup zIndex="1" h="2.5em">
                <Menu>
                  <MenuButton mx="1em" variant="outline">
                    <HStack>
                      <Text>{searchValueLevel}</Text> <ChevronDownIcon />
                    </HStack>
                  </MenuButton>
                  <MenuList fontSize="0.75em">
                    <MenuItem onClick={() => setSearchValueLevel("All")}>
                      All
                    </MenuItem>
                    <MenuItem onClick={() => setSearchValueLevel("N1")}>
                      N1
                    </MenuItem>
                    <MenuItem onClick={() => setSearchValueLevel("N2")}>
                      N2
                    </MenuItem>
                    <MenuItem onClick={() => setSearchValueLevel("N3")}>
                      N3
                    </MenuItem>
                    <MenuItem onClick={() => setSearchValueLevel("N4")}>
                      N4
                    </MenuItem>
                    <MenuItem onClick={() => setSearchValueLevel("N5")}>
                      N5
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Input
                  variant="flushed"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                />
                <InputRightElement cursor={"pointer"}>
                  <SearchIcon
                    onClick={() => {
                      setPageNumber(0);
                      setSearchResults(search());
                      toast({
                        title: "Loaded",
                        position: "top",
                        status: "success",
                        duration: 500,
                        isClosable: true,
                      });
                    }}
                  />
                </InputRightElement>
              </InputGroup>
            </Box>
            <Stack w="50%" justifyContent="center" direction="row" spacing={5}>
              <IconButton
                icon={<ChevronLeftIcon />}
                variant="outline"
                border={border}
                bg={bg}
                isDisabled={pageNumber <= 0}
                onClick={() => {
                  if (pageNumber > 0) setPageNumber(pageNumber - 1);
                }}
              />
              <InputGroup maxW="7.5em">
                <Input
                  fontWeight="normal"
                  variant="outline"
                  border={border}
                  bg={bg}
                  placeholder={pageNumber + 1}
                  type="number"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (
                        e.target.value <
                          Math.ceil(searchResults.length / 12) + 1 &&
                        e.target.value > 0
                      ) {
                        setPageNumber(Number(e.target.value) - 1);
                      }
                      e.target.value = "";
                      e.target.blur();
                    }
                  }}
                />
                <InputRightAddon
                  border="none"
                  bg={bg}
                  children={`/ ${
                    searchResults.length > 12
                      ? Math.ceil(searchResults.length / 12)
                      : 1
                  }`}
                />
              </InputGroup>
              <IconButton
                icon={<ChevronRightIcon />}
                variant="outline"
                border={border}
                bg={bg}
                isDisabled={pageNumber >= Math.floor(searchResults.length / 12)}
                onClick={() => {
                  if (pageNumber < Math.floor(searchResults.length / 12))
                    setPageNumber(pageNumber + 1);
                }}
              />
            </Stack>
            <Stack w="25%" justifyContent="center" direction="row">
              <Tabs borderRadius="lg" bg={bg} variant="unstyled">
                <TabList>
                  <Tab
                    minW="5em"
                    _selected={{
                      bg: hover,
                      borderLeftRadius: "lg",
                    }}
                    isDisabled={toggleMode}
                    onClick={setToggleMode.on}
                  >
                    Cards
                  </Tab>
                  <Tab
                    minW="5em"
                    _selected={{
                      bg: hover,
                      borderRightRadius: "lg",
                    }}
                    isDisabled={!toggleMode}
                    onClick={setToggleMode.off}
                  >
                    Lists
                  </Tab>
                </TabList>
              </Tabs>
            </Stack>
          </HStack>
        </Container>
        <Container mb="5vh" minH="80vh" minW="80vw">
          {toggleMode ? (
            <SimpleGrid mt="2.5vh" columns={4} gap={10}>
              {searchResults.map((value, index) => {
                if (
                  index >= 0 + pageNumber * 12 &&
                  index <= 11 + pageNumber * 12
                ) {
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
                        <Text py="1em" textAlign="center" fontSize="2.5em">
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
          ) : (
            <VStack my="2.5vh">
              <Grid
                bg={bg}
                p="0.75em"
                borderRadius="lg"
                templateColumns="repeat(8, 1fr)"
                w="100%"
              >
                <GridItem colSpan={1} pl="0.5em">
                  Kanji
                </GridItem>
                <GridItem colSpan={2}>Hiragana / Katakana</GridItem>
                <GridItem colSpan={2}>Romaji</GridItem>
                <GridItem colSpan={3}>Definition</GridItem>
              </Grid>
              <VStack w="100%">
                {searchResults.map((value, index) => {
                  if (
                    index >= 0 + pageNumber * 12 &&
                    index <= 11 + pageNumber * 12
                  ) {
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
                            {value.kanji}
                          </GridItem>
                          <GridItem colSpan={2}>{value.hiragana}</GridItem>
                          <GridItem colSpan={2}>{value.romaji}</GridItem>
                          <GridItem
                            colSpan={3}
                            my="auto"
                            fontStyle="oblique"
                            fontWeight="light"
                            fontSize="0.75em"
                            color="GrayText"
                          >
                            {value.meaning}
                          </GridItem>
                        </Grid>
                        <Divider />
                      </Box>
                    );
                  }
                })}
              </VStack>
            </VStack>
          )}
        </Container>
      </Box>
    </Box>
  );
}

export default LearnVocab;
