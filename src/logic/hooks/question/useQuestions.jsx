import { useQuery } from "@tanstack/react-query";
import { fetchAllQuestions } from "../../services/apiQuestions";

export function useQuestions() {
    const {
        isLoading,
        data: questions,
        error,
    } = useQuery({
        queryKey: ["questions"],
        queryFn: fetchAllQuestions,
    });

    return { isLoading, questions, error };
}
