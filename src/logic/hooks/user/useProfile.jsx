import { useQuery } from "@tanstack/react-query";
import { retrieveProfileAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";

export function useProfile() {
    const token = JSON.parse(localStorage.getItem("token"));
    const toast = useToast();

    const { data: user, isLoading } = useQuery({
        queryKey: ["user"],
        queryFn: () => retrieveProfileAPI(token),
        onSuccess: (user) => {
            toast({
                title: "Logged In Successfully",
                position: "top",
                description: `Welcome ${user.username}`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        },
        enabled: !!token,
    });

    return { user, isLoading };
}
