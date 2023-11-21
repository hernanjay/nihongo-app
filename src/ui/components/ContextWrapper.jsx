import React from "react";
import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";
import { GradeContextProvider } from "../../logic/context/GradeContext";

function ContextWrapper({ children }) {
    return (
        <UserContextProvider>
            <QuestionContextProvider>
                <GradeContextProvider>{children}</GradeContextProvider>
            </QuestionContextProvider>
        </UserContextProvider>
    );
}

export default ContextWrapper;
