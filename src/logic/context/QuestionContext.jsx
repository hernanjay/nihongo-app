import { createContext, useEffect, useReducer } from "react";

export const QuestionContext = createContext();

const initialQuestionState = {
    questions: null,
    answers: [null, null, null, null, null, null, null, null, null, null],
    countBySetVocab: null,
    countBySetGrammar: null,
    countBySetKanji: null,
};

const questionReducer = (state, action) => {
    switch (action.type) {
        case "dataReceived":
            return {
                ...state,
                countBySetVocab: action.payload.vocabQuestions,
                countBySetGrammar: action.payload.grammarQuestions,
                countBySetKanji: action.payload.kanjiQuestions,
            };
        case "questionReceived":
            return {
                ...state,
                questions: action.payload,
            };
        case "answered":
            const updatedAnswers = [...state.answers];
            updatedAnswers[action.payload.index] = action.payload.answer;

            return {
                ...state,
                answers: updatedAnswers,
            };
        case "clearAnswers":
            return {
                ...state,
                answers: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                ],
            };

        default:
            return state;
    }
};

export const QuestionContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(questionReducer, initialQuestionState);

    useEffect(() => {
        async function fetchQuestions() {
            const response = await fetch(
                `${
                    import.meta.env.VITE_LOCALHOST_API
                }/api/questions/count-type-level`
            );

            const json = await response.json();

            if (!response.ok) {
                console.log(json.error);
            }

            if (response.ok) {
                dispatch({ type: "dataReceived", payload: json });
            }
        }
        fetchQuestions();
    }, []);
    return (
        <QuestionContext.Provider value={{ ...state, dispatch }}>
            {children}
        </QuestionContext.Provider>
    );
};
