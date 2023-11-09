import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import App from "./UI/Pages/Main/App.jsx";
import theme from "./UI/Pages/Main/Theme.jsx";
import { AuthContextProvider } from "./logic/context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>
);
