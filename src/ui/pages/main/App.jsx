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
import Footer from "../../components/Footer";
import Userlist from "../dummies/userlist";

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
                                <Route path="*" element={<Navigate to="/" />} />
                                <Route path="/" element={<LandingPage />} />
                                <Route
                                    path="/users"
                                    element={
                                        user?.role === "admin" ? (
                                            <Userlist />
                                        ) : (
                                            <Navigate to="/" />
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
                            <Footer />
                        </>
                    )}
                </BrowserRouter>
            </>
        </ChakraProvider>
    );
}

export default App;
