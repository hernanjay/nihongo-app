import { useMutation } from "@tanstack/react-query";
import { fetchAllUsersAPI } from "../../services/apiUsers";

export function useUpdateUsers() {
    const { mutate: updateUser, isPending: isGettingUsers } = useMutation({
        mutationFn: fetchAllUsersAPI,
    });

    return { updateUser, isGettingUsers };
}
