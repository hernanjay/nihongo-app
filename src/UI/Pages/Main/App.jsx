//

import React, { useEffect } from 'react'

// 2. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Importing Website Components
import NavBar from '../../Components/NavBar';
import Login from '../Login/Login.Jsx';
import Register from '../Register/Register';
import HomePage from '../Home/Home';
import theme from './Theme';

function App() {
  if (!localStorage.getItem('loginState')) {
    localStorage.setItem('loginState', JSON.stringify(false));
  }
  // 4. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <>
        <Router>
          {<NavBar />}
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </>
    </ChakraProvider>
  )
}

export default App;