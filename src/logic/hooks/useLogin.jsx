import { useState } from "react";
import Swal from "sweetalert2";
import { useRetrieveProfile } from "./useRetrieveProfile";
import { useToast } from "@chakra-ui/react";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { dispatch: authDispatch } = useAuthContext();
    const { retrieveProfile } = useRetrieveProfile();
    // const { user } = useAuthContext();
    const toast = useToast();

    const login = async (email, password) => {
        setIsLoading(true);
        const response = await fetch(
            `https://aws-nihongo-api.onrender.com/api/users/login`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            }
        );

        const json = await response.json();

        if (!response.ok) {
            console.log(json.error);
            setError(json.error);
            toast({
                title: "Login Failed",
                position: "top",
                description: "Check Password and Email if input is Valid",
                status: "error",
                duration: 2500,
                isClosable: true,
            });
            setIsLoading(false);
        }

        if (response.ok) {
            // save the token to local storage
            localStorage.setItem("token", JSON.stringify(json));

            retrieveProfile(json);
            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
