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

const QuestionAnsweredTracker = ({ bg, border }) => {
    const { questions, answers } = useQuestionContext();
    return (
        <GridItem colSpan="1">
            <Card boxShadow="lg" bgColor={bg} position="sticky" top="7.5vw">
                <CardHeader pb="-1">
                    <Text fontSize={"1.5vw"}>Questions</Text>
                </CardHeader>
                <CardBody>
                    <Flex flexWrap="wrap">
                        {questions?.map((question, index) => {
                            const questionNumber = index + 1;

                            return (
                                <>
                                    <Tag
                                        key={questionNumber}
                                        size="lg"
                                        variant="outline"
                                        mx=".5rem"
                                        borderColor={border}
                                        mt="1rem"
                                        bg={
                                            answers[index] !== null
                                                ? "blue.300"
                                                : bg
                                        }
                                    >
                                        <TagLabel>{`Q${questionNumber}`}</TagLabel>
                                    </Tag>
                                </>
                            );
                        })}
                    </Flex>
                </CardBody>
                <CardFooter justify={"end"}>
                    <Button
                        borderColor={border}
                        variant="outline"
                        onClick={() => {
                            const element =
                                document.getElementById("tryItOutScrollLoc");
                            element.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest",
                            });
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
