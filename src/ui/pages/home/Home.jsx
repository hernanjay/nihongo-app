import {
  Box,
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

  return (
    <>
      <Box data-testid="home-container" pt={"7vw"} pb={"5vw"}>
        <Flex>
          <Box position="fixed" minW="30vw" ml="2.5vw">
            <Card variant="outlined" bg="transparent">
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
          <Box minW="60vw" ml="35vw" bg={bg} p="5" borderRadius="10">
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
          </Box>
        </Flex>
      </Box>
    </>
  );
}
