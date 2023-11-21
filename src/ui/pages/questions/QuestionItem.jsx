import { Box, Divider, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import QuestionOption from "./QuestionOption";
import { useEffect, useMemo, useState } from "react";
import { useQuestionContext } from "../../../logic/hooks/question/useQuestionContext";

const QuestionItem = ({ qn, index, bg, hoverColor, hasSubmit }) => {
    const { question, options } = qn;
    const { answers, dispatch: questionDispatch } = useQuestionContext();
    const [selectedOption, setSelectedOption] = useState({
        index: null,
    });

    const answersAreNull = useMemo(() =>
        answers.every((answer) => answer === null, [answers])
    );

    useEffect(() => {
        if (answersAreNull) {
            setSelectedOption({ index: null });
        }
    }, [answersAreNull]);

    // Find the index of '[' and ']'
    const startIndex = question.indexOf("[");
    const endIndex = question.indexOf("]");

    // Split the question into parts before, within, and after '[' and ']'
    const before = question.substring(0, startIndex);
    const within = question.substring(startIndex + 1, endIndex);
    const after = question.substring(endIndex + 1);

    function handleOptionClicked(i, answer) {
        // Check if the selected option is the same as the previously selected one
        const isDeselecting = selectedOption.index === i;

        setSelectedOption((prevState) => ({
            ...prevState,
            index: isDeselecting ? null : i,
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
        <Box
            bg={bg}
            mr="1.25vw"
            px="2.25vw"
            pb="2.5vw"
            mb="2vh"
            borderRadius="lg"
        >
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
                            hoverColor={hoverColor}
                            handleOptionClicked={handleOptionClicked}
                            selectedOption={selectedOption}
                            hasSubmit={hasSubmit}
                            answer={qn.answer}
                        />
                    ))}
                </SimpleGrid>
            </ListItem>
        </Box>
    );
};
export default QuestionItem;
