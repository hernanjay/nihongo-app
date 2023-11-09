import Swal from "sweetalert2";
import { useAuthContext } from "./useAuthContext";
// import { useCartContext } from "./useCartContext";

export const useLogout = () => {
    const { dispatch: authDispatch } = useAuthContext();
    // const { dispatch: cartDispatch } = useCartContext();

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        authDispatch({ type: "LOGOUT" });
        // cartDispatch({ type: "CHECKOUT" });

        Swal.fire({
            title: "Thank you for using our App",
            icon: "info",
            text: "Comeback again 😇",
        });
    };

    return { logout };
};
