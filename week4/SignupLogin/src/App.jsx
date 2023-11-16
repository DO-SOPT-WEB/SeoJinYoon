import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import ContentWrapper from './components/Layout/ContentWrapper';
import Login from './components/Login';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
