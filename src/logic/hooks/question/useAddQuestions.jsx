import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addQuestionsAPI } from "../../services/apiQuestions";
import { useToast } from "@chakra-ui/react";

export function useAddQuestions() {
    const toast = useToast();
    const queryClient = useQueryClient();

    const { mutate: addQuestions, isPending: isAddingQuestions } = useMutation({
        mutationFn: ({ questions }) => addQuestionsAPI(questions),
        onSuccess: async () => {
            toast({
                title: "Questions Added Successfully!",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            await queryClient.invalidateQueries({
                queryKey: ["questionByTypeLevel"],
            });
        },
        onError: (err) => {
            toast({
                title: "Questions Not Added!",
                position: "top",
                description: `${err.message}`,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        },
    });

    return { addQuestions, isAddingQuestions };
}
