import { useQuery } from "@tanstack/react-query";
import { fetchCountQuestionsByLevelTypeSet } from "../../services/apiQuestions";

export function useQuestionsTypeLevelSet() {
    const {
        isLoading: isGettingQuestionsByTypeLevelSet,
        data: questionsByTypeLevelSet,
    } = useQuery({
        queryKey: ["questionsByTypeLevelSet"],
        queryFn: fetchCountQuestionsByLevelTypeSet,
    });
    return { isGettingQuestionsByTypeLevelSet, questionsByTypeLevelSet };
}
