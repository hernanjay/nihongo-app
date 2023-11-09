import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const userLoggedIn = JSON.parse(localStorage.getItem("user"));

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload };
        case "LOGOUT":
            return { user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { user: null });

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        userLoggedIn && dispatch({ type: "LOGIN", payload: user });
        // const fetchUser = async () => {
        //     const response = await fetch(
        //         `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
        //         {
        //             headers: { Authorization: `Bearer ${token}` },
        //         }
        //     );

        //     const json = await response.json();

        //     if (!response.ok) {
        //         console.log(json.error);
        //     }

        //     if (response.ok) {
        //         dispatch({ type: "LOGIN", payload: json });
        //     }
        // };
        // token && fetchUser();
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.object,
};
