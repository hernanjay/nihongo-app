import { useQuery } from "@tanstack/react-query";
import { fetchGrades } from "../../services/apiGrades";

export const useGrades = (userId) => {
    const {
        data: grades,
        isLoading,
        error,
    } = useQuery({ queryKey: ["grades"], queryFn: () => fetchGrades(userId) });

    return { grades, isLoading, error };
};
