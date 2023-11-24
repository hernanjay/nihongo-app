import {
    Container,
    Grid,
    border,
    useColorModeValue,
    Skeleton,
    SkeletonCircle,
    SkeletonText,
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
import { fetchSpecificGrade } from "../../../logic/services/apiGrades";
import {
    fetchQuestions,
    fetchQuestionsByIds,
} from "../../../logic/services/apiQuestions";

const QuestionLayout = () => {
    const bg = useColorModeValue("light.400", "dark.100");
    const border = useColorModeValue("dark.100", "light.400");
    const hoverColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
    const [isLoading, setIsLoading] = useState(false);
    const [hasSubmit, setHasSubmit] = useState(false);

    const { userAnswers, dispatch: questionDispatch } = useQuestionContext();

    const { user } = useUserContext();

    const { dispatch: gradeDispatch } = useGradeContext();

    const { level, type, set } = useParams();

    // fetch the grades
    useEffect(() => {
        const fetchGradeAndQuestions = async () => {
            setIsLoading(true);
            try {
                const specificGrade = await fetchSpecificGrade(
                    user,
                    level,
                    type,
                    set
                );

                // if specificGrade not equal to null it means the user already answered this set
                if (specificGrade) {
                    gradeDispatch({
                        type: "receivedSpecificGrade",
                        payload: specificGrade,
                    });

                    const gradedQuestions = await fetchQuestionsByIds(
                        specificGrade.idPerQuestion
                    );

                    questionDispatch({
                        type: "questionReceived",
                        payload: gradedQuestions,
                    });

                    questionDispatch({
                        type: "gradedQnAnswers",
                        payload: specificGrade.userAnswers,
                    });
                    setHasSubmit(true);
                }

                if (!specificGrade) {
                    const qn = await fetchQuestions(level, type, set);
                    questionDispatch({
                        type: "questionReceived",
                        payload: qn,
                    });
                    questionDispatch({
                        type: "clearAnswers",
                    });

                    gradeDispatch({ type: "clearGradeBySet" });

                    setHasSubmit(false);
                }
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching specific grade:", error.message);
            }
        };

        fetchGradeAndQuestions();
    }, [user, level, type, set, gradeDispatch, questionDispatch]);

    return (
        <Container minW="98vw">
            {isLoading && <Loader isLoading={isLoading} />}
            <Loader />
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
                    hasSubmit={hasSubmit}
                    setHasSubmit={setHasSubmit}
                />
            </Grid>
        </Container>
    );
};
export default QuestionLayout;
