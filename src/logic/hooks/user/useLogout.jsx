import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useKanaContext } from "../kana/useKanaContext";
import { useQueryClient } from "@tanstack/react-query";

export const useLogout = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const { dispatch: kanaDispatch } = useKanaContext();
    const queryClient = useQueryClient();

    const logout = async () => {
        // remove token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("questions");
        // Set the user data to null
        queryClient.setQueryData(["user"], null);
        // Remove the token
        queryClient.removeQueries(["token"]);

        await queryClient.invalidateQueries(["user"]);

        kanaDispatch({ type: "clear" });
        // dispatch({ type: "LOGOUT" });
        navigate("/login");
        toast({
            title: "Logged Out",
            position: "top",
            description: "Thank you for using our App 😇",
            status: "info",
            duration: 2500,
            isClosable: true,
        });
    };

    return { logout };
};
