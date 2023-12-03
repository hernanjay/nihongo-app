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
import User from "../admin/User";
import ManageQuestioner from "../admin/ManageQuestioner";
import Side from "../dummies/Side";
import Comp from "../dummies/Comp";
import Userlist from "../dummies/Userlist";
import LearnVocab from "../dummies/LearnVocab";
import { useKanaContext } from "../../../logic/hooks/kana/useKanaContext";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { retrieveProfile } from "../../../logic/services/apiUsers";
function App() {
  const { user, isLoading } = useUserContext();

  //   const {
  //     isLoading,
  //     data: user,
  //     error: errorUser,
  //   } = useQuery({
  //     queryKey: ["user"],
  //     queryFn: retrieveProfile,
  //   });
  //   4. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        {isLoading && <Loader isLoading={isLoading} />}
        {!isLoading && (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={user ? <Home /> : <LandingPage />} />
              <Route
                path="/users"
                element={
                  user?.role === "admin" ? <Userlist /> : <Navigate to="/" />
                }
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/" />}
              />

              <Route
                path="/register"
                element={!user ? <Register /> : <Navigate to="/" />}
              />

              <Route path="/admin" element={<Admindashboard />} />
              <Route path="/chart" element={<AdminChart />} />
              <Route path="/userprofile" element={<UserProfile />} />

              <Route
                path="/kana-quiz"
                element={user ? <KanaLayout /> : <Navigate to="/" />}
              />

              <Route path="/user" element={<User />} />
              <Route path="/grading" element={<Grading />} />

              <Route path="/managequestioner" element={<ManageQuestioner />} />
              <Route path="/list" element={<List />} />
              <Route path="/comp" element={<Comp />} />

              <Route
                path="/questions/:level/:type/:set"
                element={user ? <QuestionLayout /> : <Navigate to="/" />}
              />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/user" element={<User />} />
              <Route path="/grading" element={<Grading />} />
              <Route path="/managequestioner" element={<ManageQuestioner />} />
              <Route path="/list" element={<List />} />
              <Route path="/dummy" element={<Side />} />
              <Route path="/learnVocab" element={<LearnVocab />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
