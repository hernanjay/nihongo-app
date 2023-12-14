// const token = JSON.parse(localStorage.getItem("token"));

// LOGIN RETURNS A TOKEN
export const loginAPI = async (email, password) => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                password,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        // console.error(json.error);
        throw new Error(json.error);
    }

    return json;
};

// THIS IS TO GET THE PROFILE OF SIGNED-IN USER
export const retrieveProfileAPI = async (token) => {
    const response = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    const json = await response.json();

    if (!response.ok) {
        console.error(json.error);
        if (json.error === "Token has expired") {
            // dispatch({ type: "LOGOUT" });
            // remove token from local storage
            localStorage.removeItem("token");
            localStorage.removeItem("questions");
            throw new Error("Token has been expired, Please Log-in again");
        }
        throw new Error("Failed to retrieve Profile");
    }

    return json;
};
