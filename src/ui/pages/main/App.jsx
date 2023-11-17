//

// 2. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
// 3. CSS for admin dashboard design
import "../styles/globals.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//Importing Website Components
import NavBar from "../../components/NavBar";
import Login from "../login/Login.Jsx";
import Register from "../register/Register";
import HomePage from "../home/Home";
import theme from "./Theme";
import { useAuthContext } from "../../../Logic/hooks/useAuthContext";
import Admindashboard from "../admin/Admindashboard";
import User from "../admin/user";
import AdminChart from "../admin/AdminChart";
// import Chart from "../../Components/chartComponent/Chart";

function App() {
  const { user } = useAuthContext();
  // 4. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />

            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route path="/admin" element={<Admindashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/chart" element={<AdminChart />} />
          </Routes>
        </BrowserRouter>
      </>
    </ChakraProvider>
  );
}

export default App;
