import { Box, Container, Flex } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import QuestionLevel from "../../components/QuestionLevel";
import QuestionType from "../../components/QuestionType";

export default function Home() {
  const bg = useColorModeValue("light.400", "dark.100");
  const numberOfLevel = [1, 2, 3, 4, 5];

  return (
    <>
      <Box data-testid="home-container" pt={"7vw"} pb={"5vw"}>
        <Flex>
          <Box minW="20vw" ml="2.5vw" bg={bg}></Box>
          <Box minW="70vw" ml="2.5vw" bg={bg} p="5" borderRadius="10">
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
