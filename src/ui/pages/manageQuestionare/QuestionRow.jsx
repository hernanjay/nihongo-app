import { IconButton, Td, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import ThemeColors from "../main/ThemeColors";
import AlerPopUp from "../../components/AlerPopUp";

const QuestionRow = ({
    question,
    index,
    setIsViewLocal,
    setQnPreview,
    deleteQuestion,
    setIsEditLocal,
    setPreviewIndex,
}) => {
    const { bg, hover } = ThemeColors();
    // For individual question delete
    const {
        isOpen: isAlertRowOpen,
        onOpen: onAlertRowOpen,
        onClose: onAlertRowClose,
    } = useDisclosure();
    const { level, type, set, question: qn } = question;

    return (
        <Tr>
            <Td>{index + 1}</Td>
            <Td>{level}</Td>
            <Td>{type}</Td>
            <Td>{set}</Td>
            <Td maxW="xs" overflow="hidden">
                {qn}
            </Td>
            <Td py="-2.5em">
                <Tooltip
                    label="View"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiEye />}
                        colorScheme="green"
                        bg="green.500"
                        size="md"
                        cursor="pointer"
                        onClick={() => {
                            setIsViewLocal(true);
                            setQnPreview(question);
                            setPreviewIndex(index);
                        }}
                    />
                </Tooltip>
                &nbsp;&nbsp;
                <Tooltip
                    label="Edit"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiEdit />}
                        colorScheme="blue"
                        bg="blue.500"
                        size="md"
                        cursor="pointer"
                        onClick={() => {
                            setIsEditLocal(true);
                            setQnPreview(question);
                            setPreviewIndex(index);
                        }}
                    />
                </Tooltip>
                &nbsp;&nbsp;
                <Tooltip
                    label="Delete"
                    fontSize="md"
                    offset={[0, -70]}
                    closeOnClick
                >
                    <IconButton
                        icon={<FiTrash2 />}
                        colorScheme="red"
                        bg="red.500"
                        size="md"
                        cursor="pointer"
                        onClick={onAlertRowOpen}
                    />
                </Tooltip>
                &nbsp;
                <AlerPopUp
                    isOpen={isAlertRowOpen}
                    onClose={onAlertRowClose}
                    onClick={() => {
                        deleteQuestion(index);
                        onAlertRowClose();
                    }}
                    message={"Question"}
                />
            </Td>
        </Tr>
    );
};
export default QuestionRow;
