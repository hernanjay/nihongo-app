import React from "react";
import ReactDOM from "react-dom/client";
import { ColorModeScript } from "@chakra-ui/react";
import ContextWrapper from "./ui/components/ContextWrapper.jsx";
import App from "./ui/pages/main/App.jsx";
import theme from "./ui/pages/main/Theme.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // get the update after 1 min
      // staleTime: 60 * 1000,
      // get the data every update
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ContextWrapper>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ContextWrapper>
  </React.StrictMode>
);
