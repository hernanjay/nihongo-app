import { IconButton, Td, Tr } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";

const QuestionRow = ({
    question,
    index,
    setIsView,
    deleteQuestion,
    setQnPreview,
    setIsEdit,
    setPreviewIndex,
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
                    icon={<FiEye />}
                    size="lg"
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => {
                        setIsView(true);
                        setQnPreview(question);
                        setPreviewIndex(index);
                    }}
                />
                &nbsp;&nbsp;
                <IconButton
                    icon={<FiEdit />}
                    size="lg"
                    bg="transparent"
                    cursor="pointer"
                    onClick={() => {
                        setIsEdit(true);
                        setQnPreview(question);
                        setPreviewIndex(index);
                    }}
                />
                &nbsp;&nbsp;
                <IconButton
                    icon={<FiTrash2 />}
                    size="lg"
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
