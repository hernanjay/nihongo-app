import { Button, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const QuestionOption = ({
    option,
    bg,
    index,
    handleOptionClicked,
    selectedOption,
}) => {
    const border = useColorModeValue("dark.100", "light.400");
    return (
        <Button
            borderColor={border}
            variant="outline"
            bg={selectedOption.index == index ? "blue.300" : bg}
            onClick={() => {
                handleOptionClicked(index, option);
            }}
        >
            {option}
        </Button>
    );
};
export default QuestionOption;
