import {
  useColorModeValue,
  Grid,
  GridItem,
  Text,
  Container,
  SimpleGrid,
  Button,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Tag,
  TagLabel,
  VStack,
  StackDivider,
} from "@chakra-ui/react";
import React, { useState } from "react";

import kanjiQuestionCard from "./kanjiQuestionCard";
import kanjiQuestionList from "./questionList";

function kanjiQuestionSample() {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const [userHasAnswered, setUserHasAnswered] = useState([
    {
      questionNo: 0,
      isDone: false,
    },
  ]);

  function handleUserHasAnswered(questionNo, bool) {
    let check = false;
    for (const iterator of userHasAnswered) {
      if (iterator.questionNo === questionNo) {
        check = true;
      }
    }
    if (!check) {
      setUserHasAnswered([
        ...userHasAnswered,
        {
          questionNo: questionNo,
          isDone: bool,
        },
      ]);
    }
  }

  const questions = [
    {
      q: "1. お金。",
      choice1: "おちゃ",
      choice2: "おかし",
      choice3: "おさら",
      choice4: "おかね",
    },
    {
      q: "2. 八万円。",
      choice1: "はちまんえん",
      choice2: " はっせんえん",
      choice3: " はちばんえん",
      choice4: " はっけんえん",
    },
    {
      q: "3. 入って。",
      choice1: " いれって",
      choice2: "いって",
      choice3: "はって",
      choice4: "はいって",
    },
  ];

  return (
    <>
      <Grid
        h={"100%"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={6}
      >
        <GridItem colSpan={"1"}>
          <Card boxShadow="lg" bgColor={bg}>
            <CardHeader>
              <Text fontSize={"1.5vw"}>Question Set</Text>
            </CardHeader>
            <CardBody>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                align="stretch"
                textAlign="start"
              >
                <Button variant="ghost"> Question Set 1</Button>
                <Button variant="ghost"> Question Set 2</Button>
                <Button variant="ghost"> Question Set 3</Button>
                <Button variant="ghost"> Question Set 4</Button>
                <Button variant="ghost"> Question Set 5</Button>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={"2"}>
          {/* Question Window */}
          <Container
            maxW={"50vw"}
            mb={"10"}
            p={"10"}
            bg={"white"}
            boxShadow="lg"
            bgColor={bg}
          >
            {/* Sentence */}

            <Text fontSize={"1.75vw"} pb={"5"}>
              ふうとうにお金が八万円入っていました。
            </Text>
            {/* Question */}
            {questions.map((question, index) => {
              return kanjiQuestionCard(
                index + 1,
                question,
                handleUserHasAnswered
              );
            })}
            {/* Question */}
          </Container>
        </GridItem>
        <GridItem colSpan={"1"}>
          {/* Question List */}
          <Card boxShadow="lg" bgColor={bg}>
            <CardHeader>
              <Text fontSize={"1.5vw"}>Questions</Text>
            </CardHeader>
            <CardBody>
              <Flex>
                <>
                  {questions.map((question, index) => {
                    return kanjiQuestionList(index + 1, userHasAnswered);
                  })}
                </>
              </Flex>
            </CardBody>
            <CardFooter justify={"end"}>
              <Button
                borderColor={border}
                variant="outline"
                onClick={() => {
                  alert("Try it for real");
                }}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}

export default kanjiQuestionSample;
