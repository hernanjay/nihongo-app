import { Box, Container, Heading, Accordion } from "@chakra-ui/react";

import { useColorModeValue } from "@chakra-ui/react";
import Level from "../../components/Level";
import { useEffect } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

export default function Home() {
  const bg = useColorModeValue("light.400", "dark.100");
  const { dispatch: questionDispatch } = useQuestionContext();
  const numberOfLevel = [1, 2, 3, 4, 5];

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/questions/type-set`
      );

      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }

      if (response.ok) {
        console.log(json);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <>
      <Box data-testid="home-container" pt={"10vw"} pb={"5vw"}>
        <Container maxW="container.xl" bg={bg} p="5" borderRadius="10">
          <Heading m="10">Kanji Questions</Heading>
          <Accordion allowToggle m="10" bg={bg} variant="outline">
            {numberOfLevel.map((num, index) => (
              <Level index={index + 1} key={num} />
            ))}
          </Accordion>
          <Heading m="10">Vocab Questions</Heading>
          <Accordion allowToggle m="10" bg={bg} variant="outline">
            {numberOfLevel.map((num, index) => (
              <Level index={index + 1} key={num} />
            ))}
          </Accordion>
          <Heading m="10">Grammar Questions</Heading>
          <Accordion allowToggle m="10" bg={bg} variant="outline">
            {numberOfLevel.map((num, index) => (
              <Level index={index + 1} key={num} />
            ))}
          </Accordion>
        </Container>
      </Box>
    </>
  );
}
