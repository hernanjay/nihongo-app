import { useQuery } from "@tanstack/react-query";
import { fetchQuestionsByIds } from "../../services/apiQuestions";

export function useFetchQuestionsByIds(idPerQuestion) {
    const { data: gradedQuestions, isLoading: isGettingGradedQuestions } =
        useQuery({
            queryKey: ["gradedQuestions"],
            queryFn: fetchQuestionsByIds(idPerQuestion),
        });

    return { gradedQuestions, isGettingGradedQuestions };
}
