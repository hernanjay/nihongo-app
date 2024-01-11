import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addScore } from "../../services/apiGrades";
import { useToast } from "@chakra-ui/react";

export const useAddGrades = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: addScores, isLoading: isAddingScore } = useMutation({
        mutationFn: ({
            user,
            questions,
            questionIds,
            userAnswers,
            correctAnswers,
        }) =>
            addScore(user, questions, questionIds, userAnswers, correctAnswers),
        onSuccess: async () => {
            toast({
                title: "Score Added Successfully!",
                position: "top",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            await queryClient.invalidateQueries({ queryKey: ["grades"] });
        },
        onError: (err) =>
            toast({
                title: "Score not added!",
                position: "top",
                description: `${err.message}`,
                status: "error",
                duration: 3000,
                isClosable: true,
            }),
    });

    return { addScores, isAddingScore };
};
