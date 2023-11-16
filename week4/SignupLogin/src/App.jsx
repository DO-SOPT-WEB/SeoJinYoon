import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import ContentWrapper from './components/Layout/ContentWrapper';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ContentWrapper header={'로그인'}>
        <div>안녕</div>
      </ContentWrapper>
    </ThemeProvider>
    </>
  )
}

export default App

