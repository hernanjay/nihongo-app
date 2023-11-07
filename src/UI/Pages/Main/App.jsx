//

import * as React from 'react'
import "./App.css"

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Importing Website Components
import Home from './Main';

// 3. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    dark: {
      100: "#3F4E4F", //Primary
      200: "#2C3639", //Seconday
      300: "#A27B5C", //Accent
      400: "#DCD7C9" //Accent
    },
    light: {
      100: "#CEE5D0", //Primary
      200: "#94B49F", //Seconday 
      300: "#ECB390", //Accent
      400: "#FCF8E8" //Accent
    }
  },
})

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