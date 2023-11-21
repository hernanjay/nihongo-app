import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import QuestionLevel from "../../components/QuestionLevel";
import QuestionType from "../../components/QuestionType";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";

export default function Home() {
  const bg = useColorModeValue("light.400", "dark.100");
  const numberOfLevel = [1, 2, 3, 4, 5];
  const { user, isLoading } = useUserContext();

  const mainKana = [
    "あ・a",
    "か・ka",
    "さ・sa",
    "た・ta",
    "な・na",
    "は・ha",
    "ま・ma",
    "や・ya",
    "ら・ra",
    "わ・wa",
  ];

  const dakutenKana = ["が・ga", "ざ・za", "だ・da", "ば・ba", "ぱ・pa"];

  const combinationKana = [
    "きゃ・kya",
    "しゃ・sya",
    "ちゃ・cha",
    "にゃ・nya",
    "ひゃ・hya",
    "みゃ・mya",
    "りゃ・rya",
    "ぎゃ・gya",
    "ざ・ja",
    "ぢゃ・dya",
    "びゃ・bya",
    "ぴゃ・pya",
  ];

  return (
    <>
      <Box data-testid="home-container" pt={"7vw"} pb={"5vw"}>
        {/* Home Page Start */}
        <Flex>
          {/* User Profile Card*/}
          <Box position="fixed" minW="30vw" ml="2.5vw">
            <Card variant="outlined" bg="transparent" boxShadow="lg">
              <CardHeader
                roundedTop="xl"
                minH="20vh"
                backgroundImage="url('src/assets/josh-hild-2oDMoju8bfk-unsplash.jpg')"
                backgroundSize="cover"
                backgroundPosition="center"
              >
                <Center position="relative" top="15vh">
                  <Image
                    borderRadius="full"
                    boxSize="150px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                </Center>
              </CardHeader>
              <CardBody minH="30vh" bg={bg}>
                <Box minH="12.5vh"></Box>
                <Heading fontWeight="normal" textAlign="center">
                  @{user.username}
                </Heading>
                <Divider />
                <Text fontWeight="normal" textAlign="center">
                  {user.email}
                </Text>
              </CardBody>
              <CardFooter minH="20vh" bg={bg}></CardFooter>
            </Card>
          </Box>

          {/*Question Pages List*/}
          <Box>
            <Box
              minW="60vw"
              ml="35vw"
              bg={bg}
              p="5"
              borderRadius="10"
              boxShadow="lg"
            >
              <SimpleGrid px="10" columns={3} gap={5}>
                {/* Main Kana */}
                <Box textAlign="center">
                  <Flex mb="1.5vh">
                    <Button fontWeight="normal" minW="100%">
                      All Main Kana
                    </Button>
                  </Flex>
                  <SimpleGrid columns={2} gap={2.5}>
                    {mainKana.map((kana) => {
                      return (
                        <>
                          <Button
                            minW="47.5%"
                            fontSize="2vh"
                            fontWeight="light"
                          >
                            {kana}
                          </Button>
                        </>
                      );
                    })}
                  </SimpleGrid>
                </Box>
                {/* Dakuten Kana */}
                <Box textAlign="center">
                  <Flex mb="1.5vh">
                    <Button fontWeight="normal" minW="100%">
                      All Dakuten Kana
                    </Button>
                  </Flex>
                  <SimpleGrid columns={1} gap={2.5}>
                    {dakutenKana.map((kana) => {
                      return (
                        <>
                          <Button
                            minW="47.5%"
                            fontSize="2vh"
                            fontWeight="light"
                          >
                            {kana}
                          </Button>
                        </>
                      );
                    })}
                  </SimpleGrid>
                </Box>
                {/* Combination Kana */}
                <Box textAlign="center">
                  <Flex mb="1.5vh">
                    <Button fontWeight="normal" minW="100%">
                      All Combination Kana
                    </Button>
                  </Flex>
                  <SimpleGrid columns={2} gap={2.5}>
                    {combinationKana.map((kana) => {
                      return (
                        <>
                          <Button
                            minW="47.5%"
                            fontSize="2vh"
                            fontWeight="light"
                          >
                            {kana}
                          </Button>
                        </>
                      );
                    })}
                  </SimpleGrid>
                </Box>
              </SimpleGrid>
            </Box>

            {/* Divider */}
            <Divider ml="35vw" maxW="60vw" my="2.5vh" />
            {/* Divider */}

            {/* Kanji Questions Container */}
            <Box
              minW="60vw"
              ml="35vw"
              bg={bg}
              p="5"
              borderRadius="10"
              boxShadow="lg"
            >
              {/* Kanji Questions */}
              <QuestionType type="Kanji" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel
                    index={index + 1}
                    key={index}
                    type="Kanji"
                  ></QuestionLevel>
                ))}
              </QuestionType>
            </Box>
            <Divider ml="35vw" maxW="60vw" my="2.5vh" />
            {/* Vocab Questions Container */}
            <Box
              minW="60vw"
              ml="35vw"
              bg={bg}
              p="5"
              borderRadius="10"
              boxShadow="lg"
            >
              {/* Vocab Questions */}
              <QuestionType type="Vocab" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={index} type="Vocab" />
                ))}
              </QuestionType>
            </Box>

            {/* Divider */}
            <Divider ml="35vw" maxW="60vw" my="2.5vh" />
            {/* Divider */}

            {/* Grammar Questions Container */}
            <Box
              minW="60vw"
              ml="35vw"
              bg={bg}
              p="5"
              borderRadius="10"
              boxShadow="lg"
            >
              {/* Grammar Questions */}
              <QuestionType type="Grammar" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={num} type="Grammar" />
                ))}
              </QuestionType>
            </Box>
            {/* <Box
              minW="60vw"
              ml="35vw"
              bg={bg}
              p="5"
              borderRadius="10"
              boxShadow="lg"
            >
              <QuestionType type="Kanji" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel
                    index={index + 1}
                    key={index}
                    type="Kanji"
                  ></QuestionLevel>
                ))}
              </QuestionType>
              <QuestionType type="Vocab" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={index} type="Vocab" />
                ))}
              </QuestionType>
              <QuestionType type="Grammar" bg={bg}>
                {numberOfLevel.map((num, index) => (
                  <QuestionLevel index={index + 1} key={num} type="Grammar" />
                ))}
              </QuestionType>
            </Box> */}
          </Box>

          {/* Home Page End */}
        </Flex>
      </Box>
    </>
  );
}
