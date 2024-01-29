//
import React, { useEffect, useState } from "react";

// 2. import `ChakraProvider` component
import { ChakraProvider, flattenTokens } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
import StudentList from "../admin/StudentList";
import Grading from "../admin/Grading";
import ManageQuestioner from "../manageQuestionare/ManageQuestioner";
import Users from "../admin/Users";
import LearnVocab from "../learnVocab/LearnVocab";

// Under development version of Register page
import BatchQnAdd from "../dummies/BatchQnAdd";
import { useUser } from "../../../logic/hooks/user/useUser";

function App() {
  // Retrieves user details
  const { user, isLoading } = useUser();

    return (
        // Chakra wrapper do not remove
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                {isLoading && <Loader isLoading={isLoading} />}
                {!isLoading && (
                    <>
                        <NavBar />
                        <Routes>
                            {/* Brings user to landing page if user is not logged in or to homepage if user is logged in */}
                            <Route
                                path="/"
                                element={user ? <Home /> : <LandingPage />}
                            />
                            {/* Goes to login page */}
                            <Route
                                path="/login"
                                // User validation if user exists go to page if not redirect to "/"
                                //Same goes for other routings
                                element={
                                    !user ? <Login /> : <Navigate to="/" />
                                }
                            />
                            {/* Goes to register page */}
                            <Route
                                path="/register"
                                element={
                                    !user ? <Register /> : <Navigate to="/" />
                                }
                            />
                            {/* Goes to student profile page where users can view their account details */}
                            <Route
                                path="/userprofile"
                                element={<UserProfile />}
                            />
                            {/* Goes to a page where users can practice typing hiragana or katakana characters */}
                            <Route
                                path="/kana-quiz"
                                element={
                                    user ? <KanaLayout /> : <Navigate to="/" />
                                }
                            />
                            {/* Currently being used as a Dictionary type feature planned to make it a Vocab learning quiz type page */}
                            <Route
                                path="/learnVocab"
                                element={
                                    user ? <LearnVocab /> : <Navigate to="/" />
                                }
                            />
                            {/* Admin Pages */}
                            {/* Goes to main admin page */}
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
                            {/* Goes to page where users can add questions */}
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
                            {/* Under Development? */}
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
                                path="/student-list"
                                element={
                                    user?.role === "admin" ||
                                    user?.role === "teacher" ? (
                                        <StudentList />
                                    ) : (
                                        <Navigate to="/" />
                                    )
                                }
                            />
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

              <Route path="/MulQnAdd" element={<BatchQnAdd />} />

              {/* General routing that sends users back to "/" when entering invalid url routes */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
