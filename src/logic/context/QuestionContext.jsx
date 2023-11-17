import { createContext, useReducer } from "react";

export const QuestionContext = createContext();

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

export const QuestionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(questionReducer, initialQuestionState);
    return (
        <QuestionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuestionContext.Provider>
    );
};
