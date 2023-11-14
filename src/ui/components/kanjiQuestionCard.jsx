import {
  Text,
  SimpleGrid,
  Button,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

function kanjiQuestionCard(index, question, handleUserHasAnswered) {
  const border = useColorModeValue("dark.100", "light.400");
  const bg = useColorModeValue("light.400", "dark.100");
  const [isChosen, setIsChosen] = useState("");

  function handleOnClick(choice) {
    setIsChosen(choice);
    handleUserHasAnswered(index, true);
  }

  return (
    <Box key={question.q}>
      <Text fontSize={"1.25vw"} py={"5"}>
        {question.q}
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        <Button
          borderColor={border}
          bg={isChosen === question.choice1 ? "green.400" : bg}
          variant="outline"
          onClick={() => {
            handleOnClick(question.choice1);
          }}
        >
          {question.choice1}
          {index}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice2 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice2);
          }}
        >
          {question.choice2}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice3 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice3);
          }}
        >
          {question.choice3}
        </Button>
        <Button
          borderColor={border}
          bg={isChosen === question.choice4 ? "green.400" : bg}
          variant={"outline"}
          onClick={() => {
            handleOnClick(question.choice4);
          }}
        >
          {question.choice4}
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default kanjiQuestionCard;
