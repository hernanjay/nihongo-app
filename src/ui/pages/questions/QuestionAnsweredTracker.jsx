import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  GridItem,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useMemo } from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import { addScore } from "../../../logic/services/apiGrades";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";

const QuestionAnsweredTracker = ({
  bg,
  border,
  hasSubmit,
  setHasSubmit,
  ...htmlProps
}) => {
  const {
    questions,
    userAnswers,
    dispatch: questionDispatch,
  } = useQuestionContext();

  const { user } = useUserContext();
  const { dispatch: gradeDispatch } = useGradeContext();
  // Check if all questions are answered
  const allAnswered = userAnswers.includes(null);

  const checker = useMemo(
    () =>
      questions?.map((qn, index) => qn.answer === userAnswers[index] && true),
    [questions, userAnswers]
  );

  const correctAnswers = useMemo(
    () => checker?.filter((answer) => answer === true),
    [checker]
  );
  const questionIds = questions?.map((qn) => qn._id);

  return (
    <GridItem colSpan="1">
      <Card
        textColor={border}
        boxShadow={{ base: "none", lg: "lg" }}
        bgColor={bg}
        position="sticky"
        top="5vh"
        textAlign="center"
        {...htmlProps}
      >
        <CardHeader pb="-1">
          <Text fontSize={{ base: "1em", lg: "1.5vw" }}>Answer Tracker</Text>
        </CardHeader>
        {hasSubmit && (
          <Text fontSize={{ base: "1em", lg: "1.5vw" }}>
            Score: {correctAnswers.length} / {checker.length}
          </Text>
        )}
        <CardBody>
          <SimpleGrid columns={{ base: 2, lg: 5 }} gap="0.5em">
            {questions?.map((question, index) => {
              return (
                <Tag
                  minH="2.5em"
                  key={question._id}
                  variant="outline"
                  borderColor={border}
                  bg={
                    hasSubmit
                      ? checker[index]
                        ? "green.300"
                        : "red.300"
                      : userAnswers[index] !== null
                      ? "blue.300"
                      : bg
                  }
                >
                  <TagLabel mx="auto" key={index}>{`Q${index + 1}`}</TagLabel>
                </Tag>
              );
            })}
          </SimpleGrid>
        </CardBody>
        <CardFooter>
          <Button
            hidden={hasSubmit}
            mx="auto"
            px="1.4rem"
            borderColor={border}
            variant="outline"
            onClick={() => {
              questionDispatch({ type: "clearAnswers" });
            }}
          >
            Clear
          </Button>
          <Button
            hidden={!hasSubmit}
            mx="auto"
            px="1.4rem"
            borderColor={border}
            variant="outline"
            onClick={() => {
              questionDispatch({ type: "clearAnswers" });
              gradeDispatch({ type: "clearGradeBySet" });
              setHasSubmit(false);
            }}
          >
            Retry
          </Button>
          <Button
            mx="auto"
            borderColor={border}
            variant="outline"
            isDisabled={allAnswered || hasSubmit}
            onClick={() => {
              addScore(
                user,
                questions,
                questionIds,
                userAnswers,
                correctAnswers
              );
              setHasSubmit(true);
            }}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </GridItem>
  );
};
export default QuestionAnsweredTracker;
