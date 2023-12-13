/* eslint-disable no-case-declarations */
import { createContext, useEffect, useReducer } from "react";
import { fetchCountQuestionsByLevelTypeSet } from "../services/apiQuestions";

export const QuestionContext = createContext();

const initialQuestionState = {
    questions: null,
    userAnswers: null,
    questionsQty: null,
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
                userAnswers: action.payload.map((qn) => null),
            };
        case "addQuestion":
            let updatedKanji = state.countBySetKanji;
            let updatedVocab = state.countBySetVocab;
            let updatedGrammar = state.countBySetGrammar;
            let updatedQuantity = state.questionsQty;

            for (let i = 0; i < action.payload.length - 1; i++) {
                //** THIS IS FOR THE KANJI */
                if (action.payload[i].type === "kanji") {
                    // Find if it already exist
                    const isKanjiExist = updatedKanji.findIndex((kanji) => {
                        const { _id } = kanji;
                        if (
                            _id.type == action.payload[i].type &&
                            _id.level == action.payload[i].level &&
                            _id.set == action.payload[i].set
                        )
                            return kanji;
                    });

                    // if isKanjiExist -1 it means it did not exist yet so we push the data
                    if (isKanjiExist < 0)
                        updatedKanji.push({
                            _id: {
                                type: action.payload[i].type,
                                level: action.payload[i].level,
                                set: action.payload[i].set,
                            },
                        });
                }

                //** THIS IS FOR THE VOCAB */
                if (action.payload[i].type === "vocab") {
                    // Find if it already exist
                    const isVocabExist = updatedVocab.findIndex((vocab) => {
                        const { _id } = vocab;
                        if (
                            _id.type == action.payload[i].type &&
                            _id.level == action.payload[i].level &&
                            _id.set == action.payload[i].set
                        )
                            return vocab;
                    });

                    // if isVocabExist -1 it means it did not exist yet so we push the data
                    if (isVocabExist < 0)
                        updatedVocab.push({
                            _id: {
                                type: action.payload[i].type,
                                level: action.payload[i].level,
                                set: action.payload[i].set,
                            },
                        });
                    console.log(updatedVocab);
                }

                //** THIS IS FOR THE GRAMMAR */
                if (action.payload[i].type === "grammar") {
                    // Find if it already exist
                    const isGrammarExist = updatedGrammar.findIndex(
                        (grammar) => {
                            const { _id } = grammar;
                            if (
                                _id.type == type &&
                                _id.level == level &&
                                _id.set == set
                            )
                                return grammar;
                        }
                    );

                    // if isVocabExist -1 it means it did not exist yet so we update the updatedGrammar
                    if (isGrammarExist < 0)
                        updatedGrammar.push({
                            _id: {
                                type: action.payload[i].type,
                                level: action.payload[i].level,
                                set: action.payload[i].set,
                            },
                        });
                }

                //** THIS IS FOR THE QUANTITY */
                const isQuantityExist = updatedQuantity.findIndex(
                    (qty) =>
                        qty._id.level == action.payload[i].level &&
                        qty._id.type == action.payload[i].type &&
                        qty._id.set == action.payload[i].set
                );

                if (isQuantityExist < 0) {
                    updatedQuantity.push({
                        _id: {
                            type: action.payload[i].type,
                            level: action.payload[i].level,
                            set: action.payload[i].set,
                        },
                        count: 1,
                    });
                } else {
                    updatedQuantity = updatedQuantity.map((qty) =>
                        qty._id.level == action.payload[i].level &&
                        qty._id.type == action.payload[i].type &&
                        qty._id.set == action.payload[i].set
                            ? { ...qty, count: qty.count++ }
                            : qty
                    );
                }
                console.log(updatedQuantity);
            }

            return {
                ...state,
                countBySetKanji: updatedKanji,
                countBySetVocab: updatedVocab,
                countBySetGrammar: updatedGrammar,
                questionsQty: updatedQuantity,
            };
        case "receivedQuestionQty":
            return {
                ...state,
                questionsQty: action.payload,
            };
        case "answered":
            const updatedAnswers = [...state.userAnswers];
            updatedAnswers[action.payload.index] = action.payload.answer;

            return {
                ...state,
                userAnswers: updatedAnswers,
            };
        case "gradedQnAnswers":
            return {
                ...state,
                userAnswers: action.payload,
            };
        case "clearAnswers":
            return {
                ...state,
                userAnswers: state.questions.map((qn) => null),
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
                if (json.error === "Token has expired") {
                    dispatch({ type: "LOGOUT" });
                    // remove token from local storage
                    localStorage.removeItem("token");
                }
            }

            if (response.ok) {
                dispatch({ type: "dataReceived", payload: json });

                const count = await fetchCountQuestionsByLevelTypeSet();

                dispatch({ type: "receivedQuestionQty", payload: count });
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
