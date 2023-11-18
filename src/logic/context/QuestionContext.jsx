import { createContext, useReducer } from "react";

export const QuestionContext = createContext();

const initialQuestionState = {
    vocabQuestions: null,
    grammarQuestions: null,
    kanjiQuestions: null,
    countBySetVocab: null,
    countBySetGrammar: null,
    countBySetKanji: null,
};

const questionReducer = (state, action) => {
    switch (action.type) {
        case "dataReceived":
            console.log(action.payload);
            return {
                ...state,
                countBySetVocab: action.payload.vocabQuestions,
                countBySetGrammar: action.payload.grammarQuestions,
                countBySetKanji: action.payload.kanjiQuestions,
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
