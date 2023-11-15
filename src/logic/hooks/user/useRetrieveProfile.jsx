import { useUserContext } from "./UserContext";
import { useToast } from "@chakra-ui/react";

export const useRetrieveProfile = () => {
    const { dispatch } = useUserContext();
    const toast = useToast();

    const retrieveProfile = async (token) => {
        const response = await fetch(
            `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const json = await response.json();

        dispatch({ type: "LOGIN", payload: json });
        toast({
            title: "User Logged In",
            position: "top",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return { retrieveProfile };
};
