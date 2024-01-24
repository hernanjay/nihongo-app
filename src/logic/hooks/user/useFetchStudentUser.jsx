import { useQuery } from "@tanstack/react-query";
import { fetchStudentUsersAPI } from "../../services/apiUsers";

export function useFetchStudentUser() {
    const { data: studentUsers, isLoading: isFetchingStudent } = useQuery({
        queryKey: ["studentUsers"],
        queryFn: fetchStudentUsersAPI,
    });

    return { studentUsers, isFetchingStudent };
}
