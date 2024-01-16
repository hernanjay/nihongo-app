import {
    Button,
    Card,
    CardBody,
    CardHeader,
    GridItem,
    StackDivider,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";
import { scrollTo } from "scroll-js";
import { useQueryClient } from "@tanstack/react-query";
import { useQuestionsTypeLevelSet } from "../../../logic/hooks/question/useQuestionsTypeLevelSet";
import Loader from "../../components/Loader";

const QuestionSideSets = ({
    bg,
    hoverColor,
    type,
    level,
    setHasSubmit,
    questionsByTypeLevelSet,
}) => {
    const filteredQuestions = questionsByTypeLevelSet.filter(
        (question) =>
            question._id.type == type && question._id.level == level[1]
    );

    const { set } = useParams();
    const navigate = useNavigate();
    return (
        <GridItem colSpan="1" display={{ base: "none", lg: "inline-block" }}>
            <Card
                size={{ base: "sm", lg: "lg" }}
                boxShadow="lg"
                bgColor={bg}
                position={{ base: "fixed", lg: "sticky" }}
                top={{ base: "12.5vh", lg: "5.5vh" }}
            >
                <CardBody>
                    <Text
                        align="center"
                        fontSize={{ base: "0.60em", lg: "1.25em" }}
                        mb={{ base: "1.5vh", lg: "2.5vh" }}
                    >
                        {`${level.toUpperCase()} ${
                            type[0].toUpperCase() + type.slice(1)
                        } Sets`}
                    </Text>
                    <VStack
                        divider={<StackDivider borderColor="gray.200" />}
                        align="stretch"
                        textAlign="start"
                        maxH="50vh"
                        overflowY="auto"
                        overflowX="hidden"
                        overscrollBehavior="auto"
                        sx={{
                            "&::-webkit-scrollbar": {
                                width: "8px",
                                backgroundColor: `rgb(0, 0, 0,0.25)`,
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: `rgba(0, 0, 0, 0.25 )`,
                            },
                        }}
                    >
                        {filteredQuestions.map((question) => (
                            <Button
                                minH="2.5em"
                                size={{ base: "xs", lg: "md" }}
                                isDisabled={question._id.set == set}
                                variant="ghost"
                                key={type + level + question._id.set}
                                fontWeight="light"
                                bg={question._id.set == set ? "blue.300" : bg}
                                _hover={
                                    question._id.set == set
                                        ? { bg: "blue.300" }
                                        : { bg: hoverColor }
                                }
                                onClick={() => {
                                    setHasSubmit(false);
                                    scrollTo(
                                        document.getElementById(
                                            "questionLayoutContainer"
                                        ),
                                        { top: 0 }
                                    );
                                    navigate(
                                        `/questions/${level}/${question._id.type}/${question._id.set}`
                                    );
                                }}
                            >
                                <Text
                                    fontSize={{
                                        base: "0.75em",
                                        lg: "1em",
                                    }}
                                >
                                    Question Set {question._id.set}
                                </Text>
                            </Button>
                        ))}
                    </VStack>
                </CardBody>
            </Card>
        </GridItem>
    );
};
export default QuestionSideSets;
