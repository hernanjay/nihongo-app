import {
  Container,
  Grid,
  border,
  useColorModeValue,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Box,
  Divider,
} from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import { useGradeContext } from "./../../../logic/hooks/grade/useGradeContext";
import { useQuestionContext } from "./../../../logic/hooks/question/useQuestionContext";

import QuestionSideSets from "./QuestionSideSets";
import QuestionList from "./QuestionList";
import QuestionAnsweredTracker from "./QuestionAnsweredTracker";
import Loader from "../../components/Loader";
import QuestionSkeletonLoader from "../../components/QuestionSkeletonLoader";
import ThemeColors from "../main/ThemeColors";

const QuestionLayout = () => {
  const { body, bg, border, fontColor, success, error, warning, info } =
    ThemeColors();
  const hoverColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmit, setHasSubmit] = useState(false);

  const {
    questions,
    answers,
    dispatch: questionDispatch,
  } = useQuestionContext();

  const { user } = useUserContext();

  const { dispatch: gradeDispatch } = useGradeContext();

  const { level, type, set } = useParams();

  const checked = questions?.map(
    (qn, index) => qn.answer === answers[index] && true
  );

  useEffect(() => {
    async function fetchQuestions() {
      setIsLoading(true);
      const res = await fetch(
        `${
          import.meta.env.VITE_LOCALHOST_API
        }/api/questions/${level}-${type}-exercise-${set}`
      );

      const json = await res.json();

      if (!res.ok) console.log(json.error);
      setIsLoading(false);
      if (res.ok) {
        questionDispatch({ type: "questionReceived", payload: json });
        setIsLoading(false);
      }
    }
    fetchQuestions();
  }, [level, type, set, questionDispatch]);

  useEffect(() => {
    async function fetchSpecificGrade() {
      const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/grades/grade`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user._id,
            questionId: `${level}${type}${set}`,
          }),
        }
      );

      const json = await res.json();

      if (!res.ok) console.log(json.error);

      if (res.ok)
        gradeDispatch({ type: "receivedSpecificGrade", payload: json });
    }
    fetchSpecificGrade();
  }, [user, level, type, set, gradeDispatch]);

  return (
    <Box minW="100vw">
      {isLoading && <Loader isLoading={isLoading} />}
      <Loader />
      <Divider minH="9vh" />
      <Box
        px="2.5vw"
        maxH="91vh"
        overflow="auto"
        overscrollBehavior="auto"
        sx={{
          "&::-webkit-scrollbar": {
            width: "12px",
            borderRadius: "8px",
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.25)`,
          },
        }}
      >
        <Grid
          h={"100%"}
          templateRows="repeat(1, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={3}
          pt="2.5vw"
        >
          <QuestionSideSets
            bg={bg}
            hoverColor={hoverColor}
            type={type}
            level={level}
            setHasSubmit={setHasSubmit}
          />
          {isLoading ? (
            <QuestionSkeletonLoader />
          ) : (
            <QuestionList
              bg={bg}
              hoverColor={hoverColor}
              hasSubmit={hasSubmit}
            />
          )}
          <QuestionAnsweredTracker
            bg={bg}
            border={border}
            checked={checked}
            hasSubmit={hasSubmit}
            setHasSubmit={setHasSubmit}
          />
        </Grid>
      </Box>
    </Box>
  );
};
export default QuestionLayout;
