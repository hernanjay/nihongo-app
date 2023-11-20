import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import { UserContextProvider } from "./logic/context/UserContext.jsx";
import { QuestionContextProvider } from "./logic/context/QuestionContext.jsx";
import theme from "./ui/pages/main/Theme.jsx";
import App from "./ui/pages/main/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <UserContextProvider>
      <QuestionContextProvider>
        <App />
      </QuestionContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
