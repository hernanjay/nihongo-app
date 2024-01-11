import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { IconButton, Td, Tooltip, Tr } from "@chakra-ui/react";
import { useDeleteQuestion } from "../../../logic/hooks/question/useDeleteQuestion";

function ManageQuestionRow({
    question,
    setQnPreview,
    setIsEditDatabase,
    setIsViewDatabase,
}) {
    const { deleteQuestion, isDeleting } = useDeleteQuestion();

    function handleDeleteButton(questionId) {
        deleteQuestion({ questionId });
    }

    return (
        <Tr>
            <Td>{question._id}</Td>
            <Td>{question.question}</Td>
            <Td>
                <Tooltip label="View" fontSize="md" offset={[0, -70]}>
                    <IconButton
                        size="sm"
                        bg="green.400"
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
                        bg="blue.400"
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
                        bg="red.400"
                        colorScheme="red"
                        icon={<DeleteIcon />}
                        mr="1rem"
                        isLoading={isDeleting}
                        onClick={() => handleDeleteButton(question._id)}
                    />
                </Tooltip>
            </Td>
        </Tr>
    );
}
export default ManageQuestionRow;
