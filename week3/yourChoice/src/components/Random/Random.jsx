import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import SONG_TITLE from '../../assets/song_data/songData';

const Random = (props) => {
  const [timer, setTimer] = useState(3);
  const [randomImgSrc, setRandomImgSrc] = useState('');
  const [randomSongTitle, setRandomSongTitle] = useState('');

  useEffect(() => {
    const count = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(count);
    }
    return () => {
      randomSong();
      clearInterval(count);
    };
  }, [timer]);

  function randomSong() {
    let result = [];
    for (let i = 0; i < 3; i++) {
      const randomNum = Math.floor(Math.random() * 3);
      result.push(randomNum);
    }
    let randomImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;
    let randomSongTitle = SONG_TITLE[result[0]][result[1]][result[2]];

    setRandomImgSrc(randomImgSrc);
    setRandomSongTitle(randomSongTitle);
  }

  return (
    <ContentWrapper>
      {timer !== 0 ? (
        timer
      ) : (
        <>
          <ResultContainer>
            <img src={randomImgSrc}/>
            <ResultTitle>
              <h2>{randomSongTitle}</h2>
            </ResultTitle>
          </ResultContainer>

          <StepBtncontainer>
            <ToStartButton
              onClick={() => {
                props.setGameHandler(false);
              }}
            >
              다시하기
            </ToStartButton>
          </StepBtncontainer>
        </>
      )}
    </ContentWrapper>
  );
};

export default Random;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  height: 20rem;
  width: 100%;
`;

const ResultTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40%;
  height: 3rem;
  background-color: white;
  border-radius: 2rem;
`;

const StepBtncontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 1rem 0;
  width: 100%;
`;

const ToStartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: lightblue;
  border: 1px solid gray;
  border-radius: 0.5rem;

  font-size: 18px;
  cursor: pointer;
`;
