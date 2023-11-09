import { useState } from "react";
import Swal from "sweetalert2";
// import { useAuthContext } from "./useAuthContext";
import { useRetrieveProfile } from "./useRetrieveProfile";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const { retrieveProfile } = useRetrieveProfile();

    const signup = async (
        firstName,
        lastName,
        cellNumber,
        gender,
        street,
        barangay,
        municipality,
        province,
        region,
        username,
        email,
        password,
        confirmPassword
    ) => {
        setIsLoading(true);
        const response = await fetch(
            `${import.meta.env.VITE_LOCALHOST_API}/api/users/signup`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    cellNumber,
                    gender,
                    street,
                    barangay,
                    municipality,
                    province,
                    region,
                    username,
                    email,
                    password,
                    confirmPassword,
                }),
            }
        );

        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
            Swal.fire(`Somethings Not Right!`, `${json.error}`, "error");
            setIsLoading(false);
        }

        if (response.ok) {
            // save the user to local storage
            localStorage.setItem("token", JSON.stringify(json));

            // retrieveProfile(json);
            Swal.fire(
                `Welcome ${username}`,
                `Please enjoy shopping 🤗`,
                "success"
            );
            setIsLoading(false);
        }
    };

    return { signup, isLoading, error };
};
