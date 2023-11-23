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

const QuestionAnsweredTracker = ({
    bg,
    border,
    checked,
    hasSubmit,
    setHasSubmit,
}) => {
    const {
        questions,
        answers,
        dispatch: questionDispatch,
    } = useQuestionContext();

    const { user } = useUserContext();

    // Check if all questions are answered
    const allAnswered = answers.includes(null);

    const correctAnswers = useMemo(
        () => checked?.filter((answer) => answer === true),
        [checked]
    );

    async function addScore() {
        const res = await fetch(
            `${import.meta.env.VITE_LOCALHOST_API}/api/grades/add-grades`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    userId: user._id,
                    questionId: `${questions[0].level}${questions[0].type}${questions[0].set}`,
                    score: correctAnswers.length,
                }),
            }
        );

        const json = await res.json();

        if (!res.ok) console.log(json.error);

        if (res.ok) console.log("Score added");
    }

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
                        Score: {correctAnswers.length} / {checked.length}
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
                                            ? checked[index]
                                                ? "green.300"
                                                : "red.300"
                                            : answers[index] !== null
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
                            addScore();
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
