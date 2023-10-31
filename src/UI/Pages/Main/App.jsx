import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </>
    </ChakraProvider>
  )
}

export default App;