import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  OrderedList,
  SimpleGrid,
  Stack,
  Text,
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
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const [pageNumber, setPageNumber] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [searchValueLevel, setSearchValueLevel] = useState("All");
  const [searchResults, setSearchResults] = useState(
    new VocabListFactory("All")
  );
  const toast = useToast();

  function search() {
    return new VocabListFactory(searchValueLevel).filter((param) => {
      return (
        param.kanji.includes(searchValue) || param.romaji.includes(searchValue)
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
        <Box mt="2.5vh" mx="10vw" bg={bg} borderRadius="lg">
          <InputGroup zIndex="1" h="2.5em">
            <Menu>
              <MenuButton mx="1em" variant="outline">
                <HStack>
                  <Text>{searchValueLevel}</Text> <ChevronDownIcon />
                </HStack>
              </MenuButton>
              <MenuList>
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
              variant="unstyled"
              placeholder="Search"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <InputRightElement cursor={"pointer"}>
              <SearchIcon
                color="green.500"
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
        <Container mb="5vh" minH="80vh" minW="80vw">
          <Stack mt="2.5vh" justifyContent="center" direction="row" spacing={5}>
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
            <Button
              fontWeight="normal"
              variant="outline"
              border={border}
              bg={bg}
            >
              {`${pageNumber + 1} / ${Math.floor(searchResults.length / 10)}`}
            </Button>
            <IconButton
              icon={<ChevronRightIcon />}
              variant="outline"
              border={border}
              bg={bg}
              onClick={() => {
                if (pageNumber < Math.floor(searchResults.length / 12))
                  setPageNumber(pageNumber + 1);
              }}
            />
          </Stack>
          <SimpleGrid mt="2.5vh" columns={4} gap={10}>
            {searchResults.map((value, index) => {
              if (
                index >= 0 + pageNumber * 10 &&
                index <= 11 + pageNumber * 10
              ) {
                return (
                  <Card key={value + index} bg={bg} boxShadow="lg">
                    <CardHeader>
                      <Text
                        color="GrayText"
                        textAlign="right"
                        fontWeight="light"
                        fontSize="0.75em"
                      >{`${value.kanji} / ${value.romaji}`}</Text>
                    </CardHeader>
                    <CardBody>
                      <Text textAlign="center" fontSize="3em">
                        {value.kanji}
                      </Text>
                    </CardBody>
                    <CardFooter>
                      <Text
                        key={value.meaning + index}
                        w="100%"
                        cursor="pointer"
                        fontWeight="light"
                        fontSize="0.75em"
                        color="GrayText"
                      >
                        {value.meaning}
                      </Text>
                    </CardFooter>
                  </Card>
                );
              }
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default LearnVocab;
