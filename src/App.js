import React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import Index from './pages';

function App() {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Index />
    </ChakraProvider>
  );
}

export default App;
