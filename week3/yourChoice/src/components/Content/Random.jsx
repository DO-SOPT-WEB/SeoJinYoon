import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import ContentWrapper from '../Layout/ContentWrapper';
import { SONG_TITLE } from '../../assets/song_data/songData';
import Result from '../Layout/Result';
import { StepBtncontainer, ToStartButton } from './style/ContentStyles';

// 랜덤 content
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
      clearInterval(count);
    };
  }, [timer]);

  useEffect(() => {
    if (timer === 0) {
      randomSong();
    }
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
        <AnimateH1>{timer}</AnimateH1>
      ) : (
        <>
          <Result imgSrc={randomImgSrc} songTitle={randomSongTitle} />

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

const flicker = keyframes`
    0%, 100% {
      text-shadow:
        0 0 1vw #1041FF,
        0 0 3vw #1041FF,
        0 0 10vw #1041FF,
        0 0 10vw #1041FF,
        0 0 .4vw #8BFDFE,
        .5vw .5vw .1vw #147280;
      color: #28D7FE;
    }
    50% {
      text-shadow:
        0 0 .5vw #082180,
        0 0 1.5vw #082180,
        0 0 5vw #082180,
        0 0 5vw #082180,
        0 0 .2vw #082180,
        .5vw .5vw .1vw #0A3940;
      color: #146C80;
    }
  }
`;

const AnimateH1 = styled.h1`
  animation: ${flicker} 1s linear infinite;
  font-size: 100px;
`;
