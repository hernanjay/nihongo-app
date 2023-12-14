import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";
import { useUser } from "./useUser";

export function useLogin() {
    const queryClient = useQueryClient();
    const toast = useToast();

    const retrieveProfile = useUser();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginAPI(email, password),
        onSuccess: (token) => {
            queryClient.setQueryData(["token"], token);
            localStorage.setItem("token", JSON.stringify(token));
            retrieveProfile;
        },
        onError: (err) => {
            toast({
                title: "Login Failed",
                position: "top",
                description: `${err.message}`,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
        },
    });

    return { login, isLoading };
}
