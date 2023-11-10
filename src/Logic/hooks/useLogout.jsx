import Swal from "sweetalert2";
import { useAuthContext } from "./useAuthContext";
import { setloginState } from "../LocalStorageManager";
import { useToast } from "@chakra-ui/react";
// import { useCartContext } from "./useCartContext";

export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  // const { dispatch: cartDispatch } = useCartContext();
  const toast = useToast();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    // cartDispatch({ type: "CHECKOUT" });

    toast({
      title: "User Logged Out",
      position: "top-right",
      status: "info",
      duration: 2500,
      isClosable: true,
    });
  };

  return { logout };
};
