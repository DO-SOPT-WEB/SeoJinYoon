import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import ContentWrapper from './components/Layout/ContentWrapper';
import Login from './components/Login';
import Signup from './components/Signup';
import MyPage from './components/MyPage';


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          {/* <Login /> */}
          {/* <Signup /> */}
          <MyPage />
      </ThemeProvider>
    </>
  );
}

export default App;
