import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../pages/Main.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ChakraProvider } from '@chakra-ui/react';
import MainPage from '../pages/Main.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
