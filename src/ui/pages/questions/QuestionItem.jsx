import { ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import QuestionOption from "./QuestionOption";
import { useState } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionItem = ({ qn, index, bg, hasSubmit }) => {
    const { question, options } = qn;
    const { dispatch: questionDispatch } = useQuestionContext();
    const [selectedOption, setSelectedOption] = useState({
        index: null,
        answers: null,
    });

    // Find the index of '[' and ']'
    const startIndex = question.indexOf("[");
    const endIndex = question.indexOf("]");

    // Split the question into parts before, within, and after '[' and ']'
    const before = question.substring(0, startIndex);
    const within = question.substring(startIndex + 1, endIndex);
    const after = question.substring(endIndex + 1);

    function handleOptionClicked(i, answer) {
        // Check if the selected option is the same as the previously selected one
        const isDeselecting =
            selectedOption.index === i && selectedOption.answer === answer;

        setSelectedOption((prevState) => ({
            ...prevState,
            index: isDeselecting ? null : i,
            answer: isDeselecting ? null : answer,
        }));

        // If the user is deselecting, remove the answer from the answers array
        if (isDeselecting) {
            questionDispatch({
                type: "answered",
                payload: { answer: null, index },
            });
        } else {
            // Otherwise, dispatch the "answered" action with the selected answer
            questionDispatch({ type: "answered", payload: { answer, index } });
        }
    }

    return (
        <ListItem listStyleType="none" pt={index + 1 > 1 && "2rem"}>
            <Text fontSize={"1.25vw"} py={"5"}>
                {index + 1}.{before}
                <Text
                    as="span"
                    textDecoration="underline"
                    fontWeight="bold"
                    textUnderlineOffset=".3rem"
                >
                    {within}
                </Text>
                {after}
            </Text>
            <SimpleGrid columns={2} spacing={10}>
                {options.map((option, index) => (
                    <QuestionOption
                        option={option}
                        key={option}
                        index={index}
                        bg={bg}
                        handleOptionClicked={handleOptionClicked}
                        selectedOption={selectedOption}
                        hasSubmit={hasSubmit}
                        answer={qn.answer}
                    />
                ))}
            </SimpleGrid>
        </ListItem>
    );
};
export default QuestionItem;
