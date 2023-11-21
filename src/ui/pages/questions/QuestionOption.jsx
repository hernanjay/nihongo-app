import { Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const QuestionOption = ({
    option,
    bg,
    index,
    handleOptionClicked,
    selectedOption,
    answer,
    hasSubmit,
}) => {
    const border = useColorModeValue("dark.100", "light.400");

    // get the index of the selected option
    const isSelected = selectedOption.index === index;
    // Check if already submit and selected option equal to answer
    const isCorrect = hasSubmit && isSelected && answer === option;
    // Check if already submit and selected option not equal to answer
    const isIncorrect = hasSubmit && isSelected && answer !== option;

    return (
        <Button
            isDisabled={hasSubmit}
            borderColor={border}
            variant="outline"
            bg={
                isCorrect
                    ? "green.300"
                    : isIncorrect
                    ? "red.300"
                    : isSelected
                    ? "blue.300"
                    : bg
            }
            onClick={() => {
                handleOptionClicked(index, option);
            }}
        >
            {option}
        </Button>
    );
};
export default QuestionOption;
