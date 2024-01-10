import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    deleteQuestionAPI,
    deleteQuestionWithGradesAPI,
} from "../../services/apiQuestions";
import { useToast } from "@chakra-ui/react";

export function useDeleteQuestion() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const { mutate: deleteQuestion, isLoading: isDeleting } = useMutation({
        mutationFn: ({ questionId }) => deleteQuestionWithGradesAPI(questionId),
        onSuccess: async (data) => {
            toast({
                title: `${data.message}`,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            await queryClient.invalidateQueries({ queryKey: ["questions"] });
            await queryClient.invalidateQueries({ queryKey: ["grades"] });
        },
        onError: (err) => {
            toast({
                title: "Failed to delete Question!",
                position: "top",
                status: "error",
                description: `${err.message}`,
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return { deleteQuestion, isDeleting };
}
