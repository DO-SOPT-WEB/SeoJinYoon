import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Router from './components/Router';
import AuthContext from './context/authContext';
import { AuthContextProvider } from './context/authContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
