//
import React from "react";

// 2. import `ChakraProvider` component
import { ChakraProvider, flattenTokens } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserContext } from "../../../logic/hooks/user/useUserContext";

//Importing Website Components
import NavBar from "../../components/NavBar";
import Login from "../login/Login";
import Register from "../register/Register";
import Home from "../home/Home";
import theme from "./Theme";
import LandingPage from "../landingPage/LandingPage";
import Loader from "../../components/Loader";
import QuestionLayout from "../questions/QuestionLayout";
import Admindashboard from "../admin/Admindashboard";
import AdminChart from "../admin/AdminChart";
import UserProfile from "../userProfile/UserProfile";
import KanaLayout from "../kanas/KanaLayout";
import List from "../admin/List";
import Grading from "../admin/Grading";
import ManageQuestioner from "../manageQuestionare/ManageQuestioner";
import Side from "../dummies/Side";
import Users from "../admin/Users";
import LearnVocab from "../learnVocab/LearnVocab";

// Under development version of Register page
import RegisterStepper from "../register/RegisterStepper";

function App() {
    const { user, isLoading } = useUserContext();

    return (
        <ChakraProvider theme={theme}>
            <>
                <BrowserRouter>
                    {isLoading && <Loader isLoading={isLoading} />}
                    {!isLoading && (
                        <>
                            <NavBar />
                            <Routes>
                                {/* Brings user to homepage */}
                                <Route
                                    path="/"
                                    element={user ? <Home /> : <LandingPage />}
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

                                <Route
                                    path="/userprofile"
                                    element={
                                        user?.role === "student" ? (
                                            <UserProfile />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/kana-quiz"
                                    element={
                                        user ? (
                                            <KanaLayout />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/learnVocab"
                                    element={
                                        user ? (
                                            <LearnVocab />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/admin"
                                    element={
                                        user?.role === "admin" ? (
                                            <Admindashboard />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/manage-questionaire"
                                    element={
                                        user?.role === "admin" ||
                                        user?.role === "teacher" ? (
                                            <ManageQuestioner />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/users"
                                    element={
                                        user?.role === "admin" ? (
                                            <Users />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/chart"
                                    element={
                                        user?.role === "admin" ? (
                                            <AdminChart />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/grading"
                                    element={
                                        user?.role === "admin" ? (
                                            <Grading />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route
                                    path="/list"
                                    element={
                                        user?.role === "admin" ? (
                                            <List />
                                        ) : (
                                            <Navigate to="/" />
                                        )
                                    }
                                />

                                <Route path="*" element={<Navigate to="/" />} />

                                <Route
                                    path="/questions/:level/:type/:set"
                                    element={
                                        user ? (
                                            <QuestionLayout />
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
