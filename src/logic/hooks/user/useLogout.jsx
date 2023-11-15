import { useUserContext } from "./UserContext";
import { useToast } from "@chakra-ui/react";

export const useLogout = () => {
    const { dispatch } = useUserContext();
    const toast = useToast();

    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });

        toast({
            title: "User Logged Out",
            position: "top",
            status: "info",
            duration: 2500,
            isClosable: true,
        });
    };

    return { logout };
};
