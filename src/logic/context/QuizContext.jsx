import { createContext, useReducer } from "react";

export const QuizContext = createContext();

const initialQuestionState = {
    questions: null,
};

const questionReducer = (state, action) => {
    switch (action.type) {
        case "dataReceive":
            return {
                ...state,
                questions: action.payload,
            };
    }
};

export const QuizContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(questionReducer, initialQuestionState);
    return (
        <QuizContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuizContext.Provider>
    );
};
