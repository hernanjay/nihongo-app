import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { fetchGrades } from "../services/apiGrades";
import { useUserContext } from "./../hooks/user/useUserContext";

export const GradeContext = createContext();

const initialGradeState = {
    grades: null,
    gradesBySet: null,
};

const gradeReducer = (state, action) => {
    switch (action.type) {
        case "receivedGrades":
            return {
                ...state,
                grades: action.payload,
            };
        case "receivedSpecificGrade":
            return {
                ...state,
                gradesBySet: action.payload,
            };
        case "clearGradeBySet":
            return {
                ...state,
                gradesBySet: null,
            };
        default:
            return state;
    }
};

export const GradeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gradeReducer, initialGradeState);

    const { user } = useUserContext();

    useEffect(() => {
        async function fetchGrd() {
            const grades = await fetchGrades(user);

            if (grades) dispatch({ type: "receivedGrades", payload: grades });
        }
        user && fetchGrd();
    }, [user]);

    return (
        <GradeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GradeContext.Provider>
    );
};
