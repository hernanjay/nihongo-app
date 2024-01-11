import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    GridItem,
    SimpleGrid,
    Tag,
    TagLabel,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useMemo } from "react";
import { useGradeContext } from "../../../logic/hooks/grade/useGradeContext";
import { useQueryClient } from "@tanstack/react-query";
import { useAddGrades } from "../../../logic/hooks/grade/useAddGrades";

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

    const queryClient = useQueryClient();

    const user = queryClient.getQueryData(["user"]);
    const { addScores } = useAddGrades();

    const { dispatch: gradeDispatch } = useGradeContext();
    // Check if all questions are answered
    const allAnswered = userAnswers ? userAnswers.includes(null) : false;

    const checker = useMemo(
        () =>
            questions?.map(
                (qn, index) => qn.answer === userAnswers[index] && true
            ),
        [questions, userAnswers]
    );

    const correctAnswers = useMemo(
        () => checker?.filter((answer) => answer === true),
        [checker]
    );

    const questionIds = questions?.map((qn) => qn._id);

    function handleAddGrades() {
        addScores(
            {
                user,
                questions,
                questionIds,
                userAnswers,
                correctAnswers,
            },
            {
                onSuccess: () => {
                    setHasSubmit(true);
                },
            }
        );
    }

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
                    <Text fontSize={{ base: "1em", lg: "1.5vw" }}>
                        Answer Tracker
                    </Text>
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
                                    as="button"
                                    bg={
                                        hasSubmit
                                            ? checker[index]
                                                ? "green.300"
                                                : "red.300"
                                            : userAnswers[index] !== null
                                            ? "blue.300"
                                            : bg
                                    }
                                    onClick={() => {
                                        const targetElement =
                                            document.getElementById(
                                                question._id
                                            );
                                        if (targetElement) {
                                            targetElement.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                            });
                                        }
                                    }}
                                >
                                    <TagLabel mx="auto" key={index}>{`${
                                        index + 1
                                    }`}</TagLabel>
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
                        onClick={() => handleAddGrades()}
                    >
                        Submit
                    </Button>
                </CardFooter>
            </Card>
        </GridItem>
    );
};
export default QuestionAnsweredTracker;
