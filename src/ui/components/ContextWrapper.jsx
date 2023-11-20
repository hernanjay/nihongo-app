import React from "react";
import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";

function ContextWrapper(props) {
  return (
    <UserContextProvider>
      <QuestionContextProvider>{props.app}</QuestionContextProvider>
    </UserContextProvider>
  );
}

export default ContextWrapper;
