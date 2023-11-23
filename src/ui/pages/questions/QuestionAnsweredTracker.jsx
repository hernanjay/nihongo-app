import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    GridItem,
    Tag,
    TagLabel,
    Text,
} from "@chakra-ui/react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { useMemo } from "react";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";
import { addScore } from "../../../logic/services/apiGrades";

const QuestionAnsweredTracker = ({ bg, border, hasSubmit, setHasSubmit }) => {
    const {
        questions,
        userAnswers,
        dispatch: questionDispatch,
    } = useQuestionContext();

    const { user } = useUserContext();
    // Check if all questions are answered
    const allAnswered = userAnswers.includes(null);

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

    return (
        <GridItem colSpan="1">
            <Card
                textColor={border}
                boxShadow="lg"
                bgColor={bg}
                position="sticky"
                top="15.5vh"
                textAlign="center"
            >
                <CardHeader pb="-1">
                    <Text fontSize={"1.5vw"}>Answer Tracker</Text>
                </CardHeader>
                {hasSubmit && (
                    <Text>
                        Score: {correctAnswers.length} / {checker.length}
                    </Text>
                )}
                <CardBody>
                    <Flex flexWrap="wrap">
                        {questions?.map((question, index) => {
                            return (
                                <Tag
                                    key={question._id}
                                    size="lg"
                                    variant="outline"
                                    mx=".5rem"
                                    borderColor={border}
                                    mt={
                                        hasSubmit
                                            ? index > 4 && "1.3rem"
                                            : "1.3rem"
                                    }
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
                                    <TagLabel key={index}>{`Q${
                                        index + 1
                                    }`}</TagLabel>
                                </Tag>
                            );
                        })}
                    </Flex>
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
