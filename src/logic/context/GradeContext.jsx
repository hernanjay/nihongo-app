import { useReducer } from "react";
import { createContext } from "react";

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
        default:
            return state;
    }
};

export const GradeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gradeReducer, initialGradeState);

    return (
        <GradeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GradeContext.Provider>
    );
};
