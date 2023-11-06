import React, { useState } from 'react';
import Nav from './components/Layout/Nav';
import Content from './components/Layout/Content';

function App() {
  const [isStart, setIsStart] = useState('');

  return (
    <>
      <Nav
        isStart={isStart}
        isStartHandler={(startContent) => {
          setIsStart(startContent);
        }}
      />
      <Content
        isStart={isStart}
        isStartHandler={(startContent) => {
          setIsStart(startContent);
        }}
      />
    </>
  );
}

export default App;
