import { Container, GridItem, ListItem, UnorderedList } from "@chakra-ui/react";
import QuestionItem from "./QuestionItem";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionList = ({ bg }) => {
    const { questions } = useQuestionContext();
    return (
        <GridItem colSpan={"2"}>
            <Container
                maxW={"50vw"}
                mb={"10"}
                p={"10"}
                bg={"white"}
                boxShadow="lg"
                bgColor={bg}
            >
                <UnorderedList>
                    {questions?.map((qn, index) => (
                        <QuestionItem
                            qn={qn}
                            bg={bg}
                            key={qn.question}
                            index={index}
                        />
                    ))}
                </UnorderedList>
            </Container>
        </GridItem>
    );
};
export default QuestionList;
