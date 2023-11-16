import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import ContentWrapper from './components/Layout/ContentWrapper';
import Input from './components/UI/Input';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <ContentWrapper header={'로그인'}>
        <Input label={'로그인'} placeholder={'아이디를 입력하세요'}></Input>
      </ContentWrapper>
      
    </ThemeProvider>
    </>
  )
}

export default App

