import { Container, Grid, border, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import QuestionSideSets from "./QuestionSideSets";
import QuestionList from "./QuestionList";
import { useQuestionContext } from "./../../../logic/hooks/question/useQuestionContext";
import QuestionAnsweredTracker from "./QuestionAnsweredTracker";

const QuestionLayout = () => {
  const bg = useColorModeValue("light.400", "dark.100");
  const border = useColorModeValue("dark.100", "light.400");
  const hoverColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const [hasSubmit, setHasSubmit] = useState(false);

  const {
    questions,
    answers,
    dispatch: questionDispatch,
  } = useQuestionContext();
  const { level, type, set } = useParams();

  const checked = questions?.map(
    (qn, index) => qn.answer === answers[index] && true
  );

  useEffect(() => {
    async function fetchQuestions() {
      const res = await fetch(
        `${
          import.meta.env.VITE_LOCALHOST_API
        }/api/questions/${level}-${type}-exercise-${set}`
      );

      const json = await res.json();

      if (!res.ok) console.log(json.error);

      if (res.ok) {
        questionDispatch({ type: "questionReceived", payload: json });
      }
    }
    fetchQuestions();
  }, [level, type, set, questionDispatch]);

  return (
    <Container minW="98vw">
      <Grid
        h={"100%"}
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={3}
        pt="7.5vw"
      >
        <QuestionSideSets
          bg={bg}
          hoverColor={hoverColor}
          type={type}
          level={level}
          setHasSubmit={setHasSubmit}
        />
        <QuestionList bg={bg} hoverColor={hoverColor} hasSubmit={hasSubmit} />
        <QuestionAnsweredTracker
          bg={bg}
          border={border}
          checked={checked}
          hasSubmit={hasSubmit}
          setHasSubmit={setHasSubmit}
        />
      </Grid>
    </Container>
  );
};
export default QuestionLayout;
