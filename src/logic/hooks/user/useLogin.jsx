import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI, retrieveProfileAPI } from "../../services/apiUsers";
import { useToast } from "@chakra-ui/react";
import { useUser } from "./useUser";

export function useLogin() {
    const queryClient = useQueryClient();
    const toast = useToast();

    // const { refetch: refetchUser } = useUser(); // destructure refetch function

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginAPI(email, password),
        onSuccess: async (token) => {
            const user = await retrieveProfileAPI(token);
            queryClient.setQueryData(["user"], user);

            localStorage.setItem("token", JSON.stringify(token));

            toast({
                title: "Logged In Successfully",
                position: "top",
                description: `Welcome ${user.username}`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
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
