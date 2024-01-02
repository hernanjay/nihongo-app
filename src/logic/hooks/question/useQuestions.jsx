import { useQuery } from "@tanstack/react-query";
import {
    fetchAllQuestions,
    fetchCountQuestionsByLevelTypeSet,
    fetchQuestionsType,
} from "../../services/apiQuestions";

export function useQuestions() {
    const {
        isLoading: isGettingQuestions,
        data: questions,
        error: questionsError,
    } = useQuery({
        queryKey: ["questions"],
        queryFn: fetchAllQuestions,
    });

    const {
        isLoading: isGettingQuestionsByTypeLevelSet,
        data: questionsByTypeLevelSet,
        error: questionsTypeLevelSetError,
    } = useQuery({
        queryKey: ["questionsByTypeLevelSet"],
        queryFn: fetchCountQuestionsByLevelTypeSet,
    });

    return {
        isGettingQuestions,
        isGettingQuestionsByTypeLevelSet,
        questions,
        questionsByTypeLevelSet,
        questionsError,
        questionsTypeLevelSetError,
    };
}
