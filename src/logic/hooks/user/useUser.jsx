import { useQuery } from "@tanstack/react-query";
import { retrieveProfileAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export function useUser() {
    const token = JSON.parse(localStorage.getItem("token"));

    const {
        data: user,
        isLoading,
        error,
        refetch,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () => retrieveProfileAPI(token),
        enabled: !!token,
    });

    if (error) {
        localStorage.removeItem("token");
    }

    return { user, isLoading, refetch };
}
