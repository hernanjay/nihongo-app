import { useState } from "react";
import Swal from "sweetalert2";
import { useRetrieveProfile } from "./useRetrieveProfile";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { dispatch: authDispatch } = useAuthContext();
    const { retrieveProfile } = useRetrieveProfile();
    // const { user } = useAuthContext();

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
            setError(json.error);
            Swal.fire({
                title: `Error`,
                icon: "error",
                text: `${json.error}`,
            });
            setIsLoading(false);
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem("token", JSON.stringify(json));
            retrieveProfile(json);

            setIsLoading(false);
        }
    };

    return { login, isLoading, error };
};
