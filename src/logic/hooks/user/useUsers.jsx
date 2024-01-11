import { useQuery } from "@tanstack/react-query";
import { fetchAllUsersAPI } from "../../services/apiUsers";

export function useUsers() {
    const { data: users, isLoading: isGettingUsers } = useQuery({
        queryKey: ["users"],
        queryFn: fetchAllUsersAPI,
    });

    return { users, isGettingUsers };
}
