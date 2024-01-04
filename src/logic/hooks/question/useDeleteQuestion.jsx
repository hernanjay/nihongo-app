import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestionAPI } from "../../services/apiQuestions";
import { useToast } from "@chakra-ui/react";

export function useDeleteQuestion() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const { mutate: deleteQuestion, isLoading: isDeleting } = useMutation({
        mutationFn: ({ questionId }) => deleteQuestionAPI(questionId),
        onSuccess: () => {
            toast({
                title: "Questions Deleted Successfully!",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            queryClient.invalidateQueries({ queryKey: ["questions"] });
        },
        onError: (err) => {
            toast({
                title: "Failed to delete Question!",
                position: "top",
                status: "error",
                description: `${err}`,
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return { deleteQuestion, isDeleting };
}
