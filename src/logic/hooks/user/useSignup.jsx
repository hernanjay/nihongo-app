import { useToast } from "@chakra-ui/react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { retrieveProfileAPI, signupAPI } from "../../services/apiUsers";

export const useSignup = () => {
    const queryClient = useQueryClient();
    const toast = useToast();

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: ({ username, email, password, confirmPassword }) =>
            signupAPI(username, email, password, confirmPassword),
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
                title: "Sign-up Failed",
                position: "top",
                description: `${err.message}`,
                status: "error",
                duration: 2500,
                isClosable: true,
            });
        },
    });

    return { signup, isLoading };
};
