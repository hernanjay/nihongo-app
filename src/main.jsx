import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./UI/Pages/Main/App.jsx";
import theme from "./UI/Pages/Main/Theme.jsx";
import { UserContextProvider } from "./logic/context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </React.StrictMode>
);
