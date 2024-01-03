import { useQuery } from "@tanstack/react-query";
import {
    fetchAllQuestions,
    fetchCountQuestionsByLevelTypeSet,
} from "../../services/apiQuestions";

export function useQuestions() {
    // const {
    //     isLoading: isGettingQuestions,
    //     data: questions,
    //     error: questionsError,
    // } = useQuery({
    //     queryKey: ["questions"],
    //     queryFn: fetchAllQuestions,
    // });

    const {
        isLoading: isGettingQuestionsByTypeLevelSet,
        data: questionsByTypeLevelSet,
    } = useQuery({
        queryKey: ["questionsByTypeLevelSet"],
        queryFn: fetchCountQuestionsByLevelTypeSet,
    });

    return {
        isGettingQuestionsByTypeLevelSet,
        questionsByTypeLevelSet,
    };
}
