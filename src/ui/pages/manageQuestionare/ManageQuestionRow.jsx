import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { IconButton, Td, Tooltip, Tr, useDisclosure } from "@chakra-ui/react";
import { useDeleteQuestion } from "../../../logic/hooks/question/useDeleteQuestion";
import AlerPopUp from "../../components/AlerPopUp";
import { FiTrash2 } from "react-icons/fi";

function ManageQuestionRow({
    question,
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) {
    const {
        isOpen: isAlertOpen,
        onOpen: onAlertOpen,
        onClose: onAlertClose,
    } = useDisclosure();

    const { deleteQuestion, isDeleting } = useDeleteQuestion();

    function handleDeleteButton(questionId) {
        deleteQuestion({ questionId });
    }

    return (
        <Tr>
            <Td>{question.question}</Td>
            <Td>
                <Tooltip label="View" fontSize="md" offset={[0, -70]}>
                    <IconButton
                        size="sm"
                        bg="green.500"
                        colorScheme="green"
                        icon={<ViewIcon />}
                        mr="1rem"
                        onClick={() => {
                            setIsViewDatabase(true);
                            setQnPreview(question);
                        }}
                    />
                </Tooltip>
                <Tooltip label="Edit" fontSize="md" offset={[0, -70]}>
                    <IconButton
                        size="sm"
                        bg="blue.500"
                        colorScheme="blue"
                        icon={<EditIcon />}
                        mr="1rem"
                        onClick={() => {
                            setQnPreview(question);
                            setIsEditDatabase(true);
                        }}
                    />
                </Tooltip>
                <Tooltip label="Delete" fontSize="md" offset={[0, -70]}>
                    <IconButton
                        size="sm"
                        bg="red.500"
                        colorScheme="red"
                        icon={<FiTrash2 />}
                        mr="1rem"
                        isLoading={isDeleting}
                        onClick={onAlertOpen}
                    />
                </Tooltip>
                <AlerPopUp
                    isOpen={isAlertOpen}
                    onClose={onAlertClose}
                    onClick={() => {
                        handleDeleteButton(question._id);
                        onAlertClose();
                    }}
                    message={"Question"}
                />
            </Td>
        </Tr>
    );
}
export default ManageQuestionRow;
