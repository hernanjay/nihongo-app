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
        case "addGrades":
            const { type, data } = action.payload;

            // Assuming you have separate properties for kanjiGrades, vocabGrades, and grammarGrades
            const updatedGrades = { ...state.grades };

            let isGradedIndex;

            if (type === "kanji") {
                isGradedIndex = updatedGrades.kanjiGrades
                    .map(
                        (grades, index) =>
                            grades.questionSetId === data.questionSetId && index
                    )
                    .filter((kanjiIndex) => kanjiIndex === 0 || kanjiIndex);

                // we need to assign the updatedGrades to empty array if there are no grades yet
                isGradedIndex[0] || isGradedIndex[0] === 0
                    ? (updatedGrades.kanjiGrades[isGradedIndex] = data)
                    : (updatedGrades.kanjiGrades = [
                          ...(updatedGrades.kanjiGrades || []),
                          data,
                      ]);
            } else if (type === "vocab") {
                isGradedIndex = updatedGrades.vocabGrades
                    .map(
                        (grades, index) =>
                            grades.questionSetId === data.questionSetId && index
                    )
                    .filter((vocabIndex) => vocabIndex === 0 || vocabIndex);

                isGradedIndex[0] || isGradedIndex[0] === 0
                    ? (updatedGrades.vocabGrades[isGradedIndex] = data)
                    : (updatedGrades.vocabGrades = [
                          ...(updatedGrades.vocabGrades || []),
                          data,
                      ]);
            } else if (type === "grammar") {
                isGradedIndex = updatedGrades.grammarGrades
                    .map(
                        (grades, index) =>
                            grades.questionSetId === data.questionSetId && index
                    )
                    .filter(
                        (grammarIndex) => grammarIndex === 0 || grammarIndex
                    );

                isGradedIndex[0] || isGradedIndex[0] === 0
                    ? (updatedGrades.grammarGrades[isGradedIndex] = data)
                    : (updatedGrades.grammarGrades = [
                          ...(updatedGrades.grammarGrades || []),
                          data,
                      ]);
            }

            return {
                ...state,
                grades: updatedGrades,
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
