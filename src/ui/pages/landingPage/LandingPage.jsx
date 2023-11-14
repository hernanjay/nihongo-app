import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Center,
  Divider,
  SimpleGrid,
  Box,
  Container,
  Stack,
  ButtonGroup,
} from "@chakra-ui/react";
import React from "react";
import kanjiQuestionSample from "../../components/kanjiQuestionSample";
import vocabQuestionSample from "../../components/vocabQuestionSample";
import grammarQuestionSample from "../../components/grammarQuestionSample";

export default function LandingPage() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const element = document.getElementById("sampleQuestions");

  return (
    <>
      <Grid
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
        bg={bg}
      >
        <GridItem rowSpan={1} colSpan={8} />
        <GridItem rowSpan={3} colSpan={1} />

        <GridItem
          rowSpan={3}
          colSpan={3}
          justifyContent="center"
          alignContent="center"
        >
          <Image
            src="src\assets\4672600_2466250.svg"
            alt="pictureForLandingPage"
          ></Image>
        </GridItem>
        <GridItem rowSpan={3} colSpan={3}>
          <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(1, 1fr)"
          >
            <GridItem rowSpan={1} />
            <GridItem rowSpan={1}>
              <Card bg={"transparent"} variant={"unstyled"}>
                <CardHeader my={"5"}>
                  <Heading fontSize="3vw">日本語のアプリ</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1vw">
                    Cras a risus ex. In auctor faucibus dolor sit amet
                    condimentum. Maecenas sed orci vitae ligula commodo dictum
                    sit amet quis tellus. Maecenas et viverra lacus. Morbi sit
                    amet ex libero. Praesent sagittis sapien ac fermentum
                    laoreet. Mauris semper sem urna, nec viverra ante eleifend
                    sit amet. Phasellus venenatis sagittis scelerisque. Quisque
                    elit augue, sodales sit amet bibendum a, tempor eget mi.
                    Proin finibus lectus vitae nisi congue hendrerit.
                  </Text>
                  <Button
                    my={"5"}
                    variant={"outline"}
                    bg={"transparent"}
                    borderColor={border}
                    onClick={() => {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                  >
                    Take a Look
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem rowSpan={1} />
          </Grid>
        </GridItem>

        <GridItem rowSpan={3} />
        <GridItem rowSpan={1} colSpan={8} />
      </Grid>
      <Divider />
      <Center id="sampleQuestions" pt={"10"} pb={"5"} bg={bg}>
        <Heading fontSize="3vw">Sample Questions</Heading>
      </Center>
      <Tabs isFitted variant={"line"} colorScheme="white">
        <TabList mb="1em" bg={bg}>
          <Tab>
            <InfoOutlineIcon mx={"2"} />
            Kanji Quenstions
          </Tab>
          <Tab>
            <InfoOutlineIcon mx={"2"} />
            Vocab Quenstions
          </Tab>
          <Tab>
            <InfoOutlineIcon mx={"2"} />
            Grammar Quenstions
          </Tab>
        </TabList>
        <TabIndicator mt="-4" height="2px" bg={border} borderRadius="1px" />
        <TabPanels>
          <TabPanel>{kanjiQuestionSample()}</TabPanel>
          <TabPanel>{vocabQuestionSample()}</TabPanel>
          <TabPanel>{grammarQuestionSample()}</TabPanel>
        </TabPanels>
      </Tabs>
      <Box maxW="100vw" bg={bg}>
        <Container maxW="80vw" py="10">
          <SimpleGrid columns={3} spacing={10}>
            <Box minH="25vh">
              <Card maxW="sm" bg={bg} variant="unstyled">
                <CardBody>
                  <Heading size="md" py="2">
                    Kanji Questions
                  </Heading>
                  <Text>
                    Cras a risus ex. In auctor faucibus dolor sit amet
                    condimentum. Maecenas sed orci vitae ligula commodo dictum
                    sit amet quis tellus.
                  </Text>
                  <Button
                    mt={"5"}
                    variant={"ghost"}
                    bg={"transparent"}
                    borderColor={border}
                  >
                    Try it out
                  </Button>
                </CardBody>
              </Card>
            </Box>
            <Box minH="25vh">
              <Card maxW="sm" bg={bg} variant="unstyled">
                <CardBody>
                  <Heading size="md" py="2">
                    Vocab Questions
                  </Heading>
                  <Text>
                    Cras a risus ex. In auctor faucibus dolor sit amet
                    condimentum. Maecenas sed orci vitae ligula commodo dictum
                    sit amet quis tellus.
                  </Text>
                  <Button
                    mt={"5"}
                    variant={"ghost"}
                    bg={"transparent"}
                    borderColor={border}
                  >
                    Try it out
                  </Button>
                </CardBody>
              </Card>
            </Box>
            <Box minH="25vh">
              <Card maxW="sm" bg={bg} variant="unstyled">
                <CardBody>
                  <Heading size="md" py="2">
                    Grammar Questions
                  </Heading>
                  <Text>
                    Cras a risus ex. In auctor faucibus dolor sit amet
                    condimentum. Maecenas sed orci vitae ligula commodo dictum
                    sit amet quis tellus.
                  </Text>
                  <Button
                    mt={"5"}
                    variant={"ghost"}
                    bg={"transparent"}
                    borderColor={border}
                  >
                    Try it out
                  </Button>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Divider />
      <Grid
        h="100vh"
        templateRows="repeat(5, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
        bg={bg}
      >
        <GridItem rowSpan={1} colSpan={8} />
        <GridItem rowSpan={3} colSpan={1} />

        <GridItem
          rowSpan={3}
          colSpan={3}
          justifyContent="center"
          alignContent="center"
        >
          <Image
            src="src\assets\4672600_2466250.svg"
            alt="pictureForLandingPage"
          ></Image>
        </GridItem>
        <GridItem rowSpan={3} colSpan={3}>
          <Grid
            h="100%"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(1, 1fr)"
          >
            <GridItem rowSpan={1} />
            <GridItem rowSpan={1}>
              <Card bg={"transparent"} variant={"unstyled"}>
                <CardHeader my={"5"}>
                  <Heading fontSize="3vw">日本語のアプリ</Heading>
                </CardHeader>
                <CardBody>
                  <Text fontSize="1vw">
                    Cras a risus ex. In auctor faucibus dolor sit amet
                    condimentum. Maecenas sed orci vitae ligula commodo dictum
                    sit amet quis tellus. Maecenas et viverra lacus. Morbi sit
                    amet ex libero. Praesent sagittis sapien ac fermentum
                    laoreet. Mauris semper sem urna, nec viverra ante eleifend
                    sit amet. Phasellus venenatis sagittis scelerisque. Quisque
                    elit augue, sodales sit amet bibendum a, tempor eget mi.
                    Proin finibus lectus vitae nisi congue hendrerit.
                  </Text>
                  <Button
                    my={"5"}
                    variant={"outline"}
                    bg={"transparent"}
                    borderColor={border}
                    onClick={() => {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                  >
                    Take a Look
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem rowSpan={1} />
          </Grid>
        </GridItem>

        <GridItem rowSpan={3} />
        <GridItem rowSpan={1} colSpan={8} />
      </Grid>
    </>
  );
}
