import React from "react";
import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";

function ContextWrapper({ children }) {
    return (
        <UserContextProvider>
            <QuestionContextProvider>{children}</QuestionContextProvider>
        </UserContextProvider>
    );
}

export default ContextWrapper;
