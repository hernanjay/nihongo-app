import { useNavigate } from "react-router-dom";
import { useUserContext } from "./useUserContext";
import { useToast } from "@chakra-ui/react";
import { useKanaContext } from "../kana/useKanaContext";
import { useQueryClient } from "@tanstack/react-query";
import { useProfile } from "./useProfile";

export const useLogout = () => {
    // const { dispatch } = useUserContext();
    const toast = useToast();
    const navigate = useNavigate();
    const { dispatch: kanaDispatch } = useKanaContext();
    const queryClient = useQueryClient();
    const { user } = useProfile();

    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("questions");
        // Set the user data to null
        queryClient.setQueryData(["user"], null);
        // Remove the token
        queryClient.removeQueries(["token"]);

        // Invalidate the "user" query to trigger a re-fetch
        queryClient.invalidateQueries(["user"]);

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
