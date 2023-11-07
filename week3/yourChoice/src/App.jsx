import React, { useState } from 'react';
import Nav from './components/Layout/Nav';
import Content from './components/Layout/Content';
import Prefer from './components/Layout/Prefer';

function App() {
  // 처음처럼 버튼
  const [isStart, setIsStart] = useState('');

  // start 버튼
  const [gameStart, setGameStart] = useState(false);

  return (
    <>
      <Nav
        isStart={isStart}
        isStartHandler={(startContent) => {
          setIsStart(startContent);
        }}
        setGameHandler={(startClicked) => {
          setGameStart(startClicked);
        }}
      />
      {gameStart ===true ? <Prefer /> : <Content
        isStart={isStart}
        isStartHandler={(startContent) => {
          setIsStart(startContent);
        }}
        setGameHandler={(startClicked) => {
          setGameStart(startClicked);
        }}
      />}
    </>
  );
}

export default App;
