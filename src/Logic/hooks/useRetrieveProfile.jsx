import Swal from "sweetalert2";
import { useAuthContext } from "./useAuthContext";

export const useRetrieveProfile = () => {
    const { dispatch } = useAuthContext();

    const retrieveProfile = async (token) => {
        const response = await fetch(
            `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
            {
                headers: { Authorization: `Bearer ${token}` },
            }
        );

        const json = await response.json();

        dispatch({ type: "LOGIN", payload: json });
        localStorage.setItem("user", JSON.stringify(json));
        Swal.fire({
            title: `Welcome ${json.username}`,
            icon: "success",
            text: "Enjoy Studying 🤗",
        });
    };

    return { retrieveProfile };
};
