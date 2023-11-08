//

import * as React from 'react';

// 2. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Importing Website Components
import Home from './Main';

import theme from './Theme';

function App() {
  // 4. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <>
        <Router>
          <Routes>
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </>
    </ChakraProvider>
  )
}

export default App;