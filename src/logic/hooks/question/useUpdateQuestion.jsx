import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuestionAPI } from "../../services/apiQuestions";
import { useToast } from "@chakra-ui/react";

export function useUpdateQuestion() {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: updateQuestion, isPending: isUpdating } = useMutation({
        mutationFn: ({ question }) => updateQuestionAPI(question),
        onSuccess: async (data) => {
            await queryClient.invalidateQueries({
                queryKey: ["questions"],
            });

            toast({
                title: `${data.message}`,
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        },
        onError: (err) => {
            toast({
                title: "Failed to update Question!",
                position: "top",
                status: "error",
                description: `${err.message}`,
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return { updateQuestion, isUpdating };
}
