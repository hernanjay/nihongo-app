import User from "../model/userModel";

// const admin = new User('1', 'admin', 'admin', 'admin@awsys-i.com', []);
// const users = [admin];

export function getUser(id) {
    for (const user of users) {
        if (user.id === id) {
            return user;
        }
    }
}

export function createUser(userName, passWord, email) {
    const studentSheet = [];
    const userId = String(users.length + 1);
    const newUser = new User(userId, userName, passWord, email, studentSheet);
    users.push(newUser);
    return newUser;
}

export async function loginUser(email, password) {
    const response = await fetch(
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
    return 404;
}
