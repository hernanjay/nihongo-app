import { useQuery } from "@tanstack/react-query";
import { fetchSpecificGrade } from "../../services/apiGrades";

export function useFetchSpecificGrade(user, level, type, set) {
    const {
        data: specificGrade,
        isLoading: isGettingSpecificGrade,
        error: errorSpecificGrade,
    } = useQuery({
        queryKey: ["specificGrade"],
        queryFn: () => fetchSpecificGrade(user, level, type, set),
    });

    return { specificGrade, isGettingSpecificGrade, errorSpecificGrade };
}
