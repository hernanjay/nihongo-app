const token = JSON.parse(localStorage.getItem("token"));

// LOGIN RETURNS A TOKEN
export const loginAPI = async (email, password) => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/login`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify({
                email,
                password,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(json.error);
    }

    return json;
};

// SIGN-UP USER
export const signupAPI = async (username, email, password, confirmPassword) => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/signup`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "cors",
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
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
            mode: "cors",
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

export const fetchAllUsersAPI = async () => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/all`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
};

export const fetchStudentUsersAPI = async () => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/student-list`,
        {
            headers: { Authorization: `Bearer ${token}` },
        }
    );

    console.log("hello");
    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }
    console.log(json);

    return json;
};

export const updateUserRoleAPI = async (userId, role) => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/update-role`,
        {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
                role,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
};

export const deleteUserAPI = async (userId) => {
    const res = await fetch(
        `${import.meta.env.VITE_LOCALHOST_API}/api/users/delete`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userId,
            }),
        }
    );

    const json = await res.json();

    if (!res.ok) {
        console.error(json.error);
        throw new Error(`${json.error}`);
    }

    return json;
};
