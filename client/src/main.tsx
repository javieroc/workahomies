import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { App } from './App';
import '@fontsource/lato';
import '@fontsource/gloria-hallelujah';

const theme = extendTheme({
  fonts: {
    heading: 'Lato',
    body: 'Lato',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
