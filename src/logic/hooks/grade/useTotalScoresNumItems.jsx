import { useQuery } from "@tanstack/react-query";
import { fetchTotalScoresAndItems } from "../../services/apiGrades";

export function useTotalScoresNumItems(user) {
    const { data: totalScoresNumItems } = useQuery({
        queryKey: ["totalScoresNumItems"],
        queryFn: () => fetchTotalScoresAndItems(user._id),
        enabled: !!user,
    });

    return { totalScoresNumItems };
}
