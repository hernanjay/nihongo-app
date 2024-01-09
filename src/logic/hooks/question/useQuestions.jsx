import { useQuery } from "@tanstack/react-query";
import {
    fetchAllQuestions,
    fetchCountQuestionsByLevelTypeSet,
} from "../../services/apiQuestions";

export function useQuestions() {
    const { isLoading: isGettingQuestions, data: questions } = useQuery({
        queryKey: ["questions"],
        queryFn: fetchAllQuestions,
    });

    return {
        isGettingQuestions,
        questions,
    };
}
