import { useQuery } from "@tanstack/react-query";
import { retrieveProfileAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export function useUser() {
    const token = JSON.parse(localStorage.getItem("token"));
    const toast = useToast();

    const {
        data: user,
        isLoading,
        isSuccess,
    } = useQuery({
        queryKey: ["user"],
        queryFn: () => retrieveProfileAPI(token),
        enabled: !!token,
    });

    // I need useEffect because useQuery hook automatically triggers queries when the component mounts or if any of its dependencies change
    useEffect(() => {
        // This will only run once when the component mounts
        if (isSuccess && user) {
            toast({
                title: "Logged In Successfully",
                position: "top",
                description: `Welcome ${user.username}`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    }, [isSuccess, user, toast]);

    return { user, isLoading };
}
