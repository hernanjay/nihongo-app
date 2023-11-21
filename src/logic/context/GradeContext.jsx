import { useReducer } from "react";
import { createContext } from "react";

const GradeContext = createContext();

const initialGradeState = {
    score: 0,
    userId: null,
    questionId: null,
};

const gradeReducer = (state, action) => {
    switch (action.type) {
        case "receivedScore":
            return {
                ...state,
                score: action.payload.score,
                userId: action.payload.userId,
                questionId: action.payload.questionId,
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
