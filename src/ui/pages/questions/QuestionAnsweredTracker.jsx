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

const QuestionAnsweredTracker = ({
    bg,
    border,
    checked,
    hasSubmit,
    setHasSubmit,
}) => {
    const { questions, answers } = useQuestionContext();
    const allAnswered = answers.includes(null);
    return (
        <GridItem colSpan="1">
            <Card
                textColor={"black"}
                boxShadow="lg"
                bgColor={bg}
                position="sticky"
                top="7.5vw"
                textAlign="center"
            >
                <CardHeader pb="-1">
                    <Text fontSize={"1.5vw"}>Answer Tracker</Text>
                </CardHeader>
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
                                    mt="1rem"
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
                <CardFooter justify={"end"}>
                    <Button
                        borderColor={border}
                        variant="outline"
                        isDisabled={allAnswered || hasSubmit}
                        onClick={() => {
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
