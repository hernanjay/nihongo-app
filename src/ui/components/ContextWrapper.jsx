import React from "react";
import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";
import { KanaContextProvider } from "../../logic/context/KanaContext";
import { GradeContextProvider } from "../../logic/context/GradeContext";

function ContextWrapper({ children }) {
  return (
    <KanaContextProvider>
      <UserContextProvider>
        <QuestionContextProvider>
          <GradeContextProvider>{children}</GradeContextProvider>
        </QuestionContextProvider>
      </UserContextProvider>
    </KanaContextProvider>
  );
}

export default ContextWrapper;
