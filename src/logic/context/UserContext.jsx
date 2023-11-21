import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

const initialAuthState = {
    user: null,
    isLoading: true,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOADED":
            return {
                ...state,
                isLoading: false,
            };
        case "LOGIN":
            return { user: action.payload, isLoading: false };
        case "LOGOUT":
            return { user: null, isLoading: false };
        default:
            return state;
    }
};

export const UserContextProvider = ({ children }) => {
    const token = JSON.parse(localStorage.getItem("token"));
    const [state, dispatch] = useReducer(authReducer, initialAuthState);

    useEffect(() => {
        const retrieveProfile = async (token) => {
            const response = await fetch(
                `${import.meta.env.VITE_LOCALHOST_API}/api/users/profile`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const json = await response.json();

            dispatch({ type: "LOGIN", payload: json });
        };

        token ? retrieveProfile(token) : dispatch({ type: "LOADED" });
    }, [token]);

    return (
        <UserContext.Provider value={{ ...state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

UserContextProvider.propTypes = {
    children: PropTypes.object,
};
