import React, { useState } from 'react';

import styled, {ThemeProvider} from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

import Nav from './components/Layout/Nav';
import Content from './components/Layout/Content';
import Prefer from './components/Prefer/Prefer';
import Random from './components/Random/Random';

function App() {
  // nav바 처음처럼 버튼
  const [isStart, setIsStart] = useState('');

  // start 버튼
  const [gameStart, setGameStart] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav
        isStart={isStart}
        isStartHandler={(startContent) => {
          setIsStart(startContent);
        }}
        setGameHandler={(startClicked) => {
          setGameStart(startClicked);
        }}
      />
      {gameStart === true ? (
        isStart === '취향대로 추천' ? (
          <Prefer
            isStartHandler={(startContent) => {
              setIsStart(startContent);
            }}
            setGameHandler={(startClicked) => {
              setGameStart(startClicked);
            }}
          />
        ) : (
          <Random
            setGameHandler={(startClicked) => {
              setGameStart(startClicked);
            }}
          />
        )
      ) : (
        <Content
          isStart={isStart}
          isStartHandler={(startContent) => {
            setIsStart(startContent);
          }}
          setGameHandler={(startClicked) => {
            setGameStart(startClicked);
          }}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
