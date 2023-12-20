import { UserContextProvider } from "../../logic/context/UserContext";
import { QuestionContextProvider } from "../../logic/context/QuestionContext";
import { KanaContextProvider } from "../../logic/context/KanaContext";
import { GradeContextProvider } from "../../logic/context/GradeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

function ContextWrapper({ children }) {
    return (
        // <UserContextProvider>
        <QueryClientProvider client={queryClient}>
            <KanaContextProvider>
                <QuestionContextProvider>
                    <GradeContextProvider>
                        <ReactQueryDevtools />
                        {children}
                    </GradeContextProvider>
                </QuestionContextProvider>
            </KanaContextProvider>
        </QueryClientProvider>
        // </UserContextProvider>
    );
}

export default ContextWrapper;
