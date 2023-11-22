import React from "react";
import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";
import { KanaContextProvider } from "../../logic/context/KanaContext";

function ContextWrapper({ children }) {
  return (
    <KanaContextProvider>
      <UserContextProvider>
        <QuestionContextProvider>{children}</QuestionContextProvider>
      </UserContextProvider>
    </KanaContextProvider>
  );
}

export default ContextWrapper;
