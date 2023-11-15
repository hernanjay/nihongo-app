//

// 2. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Importing Website Components
import NavBar from "../../Components/NavBar";
import Login from "../login/Login.Jsx";
import Register from "../register/Register";
import Home from "../home/Home";
import theme from "./Theme";
import { useUserContext } from "../../../logic/hooks/user/UserContext";
import LandingPage from "../landingPage/LandingPage";
import Loader from "../../components/Loader";

function App() {
    const { user, isLoading } = useUserContext();
    // 4. Wrap ChakraProvider at the root of your app
    return (
        <ChakraProvider theme={theme}>
            <>
                <BrowserRouter>
                    {isLoading && <Loader isLoading={isLoading} />}
                    {!isLoading && (
                        <>
                            <NavBar />
                            <Routes>
                                <Route
                                    path="/"
                                    element={
                                        !user ? (
                                            <LandingPage />
                                        ) : (
                                            <Navigate to="/home" />
                                        )
                                    }
                                />
                                <Route
                                    path="/home"
                                    element={
                                        user ? (
                                            <Home />
                                        ) : (
                                            <Navigate to="/login" />
                                        )
                                    }
                                />
                                <Route
                                    path="/login"
                                    element={
                                        !user ? <Login /> : <Navigate to="/" />
                                    }
                                />

                                <Route
                                    path="/register"
                                    element={
                                        !user ? (
                                            <Register />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />
                            </Routes>
                        </>
                    )}
                </BrowserRouter>
            </>
        </ChakraProvider>
    );
}

export default App;
