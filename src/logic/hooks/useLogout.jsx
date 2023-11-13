import Swal from "sweetalert2";
import { useAuthContext } from "./useAuthContext";
import { setloginState } from "../LocalStorageManager";
import { useToast } from "@chakra-ui/react";

export const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext();
    const toast = useToast();

    const logout = () => {
        // remove token from local storage
        localStorage.removeItem("token");
        authDispatch({ type: "LOGOUT" });

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
