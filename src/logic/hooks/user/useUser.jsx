import { useQuery, useQueryClient } from "@tanstack/react-query";
import { retrieveProfileAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";

export function useUser() {
    const token = JSON.parse(localStorage.getItem("token"));
    const toast = useToast();
    const queryClient = useQueryClient();

    const {
        data: user,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () => retrieveProfileAPI(token),
        enabled: !!token,
    });

    if (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("questions");

        toast({
            title: "Logged Out",
            position: "top",
            description: `${error.message}`,
            status: "info",
            duration: 2500,
            isClosable: true,
        });
        queryClient.setQueryData(["user"], null);
    }

    return { user, isLoading };
}
