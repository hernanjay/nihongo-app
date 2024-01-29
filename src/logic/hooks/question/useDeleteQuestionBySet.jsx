import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteQuestionBySetAPI } from "../../services/apiQuestions";
import { useToast } from "@chakra-ui/react";

export function useDeleteQuestionBySet() {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: deleteQuestionBySet, isPending: isDeletingQuestionBySet } =
        useMutation({
            mutationFn: ({ level, type, set }) =>
                deleteQuestionBySetAPI(level, type, set),
            onSuccess: async (data) => {
                await queryClient.invalidateQueries({
                    queryKey: ["questions"],
                });
                await queryClient.invalidateQueries({
                    queryKey: ["questionsByTypeLevelSet"],
                });
                await queryClient.invalidateQueries({ queryKey: ["grades"] });

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
                    title: "Failed to delete Question!",
                    position: "top",
                    status: "error",
                    description: `${err.message}`,
                    duration: 3000,
                    isClosable: true,
                });
            },
        });

    return { deleteQuestionBySet, isDeletingQuestionBySet };
}
