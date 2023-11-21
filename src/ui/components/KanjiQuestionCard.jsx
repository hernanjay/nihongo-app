import {
  Text,
  SimpleGrid,
  Button,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";

function KanjiQuestionCard({ index, question, handleUserHasAnswered }) {
  const border = useColorModeValue("dark.200", "gray.400");
  const bg = useColorModeValue("light.400", "dark.100");
  const chosen = useColorModeValue("gray.200", "dark.200");
  const [isChosen, setIsChosen] = useState("");

  function handleOnClick(choice) {
    setIsChosen(choice);
    handleUserHasAnswered(index, true);
  }

  return (
    <Box>
      <Box>
        <Text fontSize={"1.5vw"} py={"5"}>
          {question.q}
        </Text>
        <SimpleGrid columns={2} spacing={10}>
          <Button
            fontWeight={isChosen === question.choice1 ? "bold" : "light"}
            borderColor={border}
            bg={isChosen === question.choice1 ? chosen : bg}
            variant="outline"
            onClick={() => {
              handleOnClick(question.choice1);
            }}
          >
            {question.choice1}
            {index}
          </Button>
          <Button
            fontWeight={isChosen === question.choice2 ? "bold" : "light"}
            borderColor={border}
            bg={isChosen === question.choice2 ? chosen : bg}
            variant={"outline"}
            onClick={() => {
              handleOnClick(question.choice2);
            }}
          >
            {question.choice2}
          </Button>
          <Button
            fontWeight={isChosen === question.choice3 ? "bold" : "light"}
            borderColor={border}
            bg={isChosen === question.choice3 ? chosen : bg}
            variant={"outline"}
            onClick={() => {
              handleOnClick(question.choice3);
            }}
          >
            {question.choice3}
          </Button>
          <Button
            fontWeight={isChosen === question.choice4 ? "bold" : "light"}
            borderColor={border}
            bg={isChosen === question.choice4 ? chosen : bg}
            variant={"outline"}
            onClick={() => {
              handleOnClick(question.choice4);
            }}
          >
            {question.choice4}
          </Button>
        </SimpleGrid>
      </Box>
      <Divider mt="5vh" colorScheme="facebook" />
    </Box>
  );
}

export default KanjiQuestionCard;
