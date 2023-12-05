import { IconButton, Td, Tr } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";

const QuestionRow = ({
    question,
    index,
    setIsView,
    deleteQuestion,
    setQnPreview,
}) => {
    const { bg } = ThemeColors();
    const {
        level,
        type,
        set,
        question: qn,
        options,
        answer,
        optionsTranslate,
        questionTranslate,
    } = question;

    return (
        <Tr>
            <Td>{index + 1}</Td>

            <Td>{level}</Td>
            <Td>{type}</Td>
            <Td isNumeric>{set}</Td>
            <Td>{qn}</Td>
            <Td>{options.join(", ")}</Td>
            <Td>{answer}</Td>
            <Td>{optionsTranslate.join(", ")}</Td>
            <Td>{questionTranslate}</Td>
            <Td position="sticky" right="0" bg={bg}>
                <IconButton
                    as={FiEye}
                    size={"xs"}
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => {
                        setIsView(true);
                        setQnPreview(question);
                    }}
                />
                &nbsp;&nbsp;
                <IconButton
                    as={FiEdit}
                    size={"xs"}
                    bg="transparent"
                    cursor="pointer"
                />
                &nbsp;&nbsp;
                <IconButton
                    as={FiTrash2}
                    size="xs"
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => deleteQuestion(index)}
                />
                &nbsp;
            </Td>
        </Tr>
    );
};
export default QuestionRow;
