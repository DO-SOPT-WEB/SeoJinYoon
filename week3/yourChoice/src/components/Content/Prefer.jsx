import { useState, useReducer } from 'react';
import styled from 'styled-components';

import { CONTENT_HEADER, SONG_DATA, SONG_TITLE } from '../../assets/song_data/songData';
import { ChooseContainer, StepBtncontainer, ToStartButton } from './style/ContentStyles';
import ContentWrapper from '../Layout/ContentWrapper';
import ContentHeader from '../Layout/ContentHeader';
import Result from '../Layout/Result';
import H1 from '../UI/H1';

const initialState = {
  step: 0,
  goNextBtn: false,
  btnActive: '',
  pickedArr: { 0: '', 1: '', 2: '' },
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'TYPE_CLICKED':
      console.log('TYPE_CLICKED')
      return {
        ...state,
        goNextBtn: true,
        btnActive: action.btnActive,
        pickedArr: {...state.pickedArr, [state.step]: action.pickedArr},
      };
    case 'NEXT_BTN_CLICKED':
      console.log('NEXT_BTN_CLICKED')
      return {
        ...state,
        step: state.step + 1,
        goNextBtn: action.goNextBtn,
      };
    case 'PREV_BTN_CLICKED':
      if (state.step === 0) {
        action.setGameHandler(false);
        return { ...state };
      } else {
        return {
          ...state,
          btnActive: SONG_DATA[state.step - 1][state.pickedArr[state.step - 1]],
          step: state.step - 1,
          goNextBtn: true,
        };
      }

    case 'RESULT_BTN_CLICKED':
      return {
        ...state,
        step: state.step + 1,
      };
  }
};

// 취향대로 content
const Prefer = (props) => {
  const [gameState, dispatchGameState] = useReducer(reducerFn, initialState);
  
  // 이미지 경로 매칭
  const [imgSrc, setImgSrc] = useState('');

  // 노래 제목 매칭
  const [songTitle, setSongTitle] = useState('');

  const onClickTypeBtn = (e) => {
    dispatchGameState({
      type: 'TYPE_CLICKED',
      btnActive: e.target.value,
      pickedArr: e.target.name
    });
  };

  const onClickNextBtn = () => {
    dispatchGameState({ type: 'NEXT_BTN_CLICKED', goNextBtn: false });
  };

  const onClickPrevBtn = () => {
    dispatchGameState({
      type: 'PREV_BTN_CLICKED',
      setGameHandler: props.setGameHandler
    });
  };

  // 결과보기 버튼
  const onClickResultBtn = () => {
    let result = [];

    for (const [key, value] of Object.entries(gameState.pickedArr)) {
      result.push(value);
    }

    let resultImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;
    dispatchGameState({ type: 'RESULT_BTN_CLICKED' });

    setSongTitle(SONG_TITLE[result[0]][result[1]][result[2]]);
    setImgSrc(resultImgSrc);
  };

  return (
    <>
      <ContentWrapper>
        <ContentHeader>
          <H1>{CONTENT_HEADER[gameState.step]}</H1>
        </ContentHeader>

        {gameState.step !== 3 ? <StepNum>{gameState.step + 1}/3</StepNum> : ''}

        <ChooseContainer>
          {gameState.step !== 3 ? (
            SONG_DATA[gameState.step].map((item, idx) => {
              return (
                <SelectBtn
                  key={idx}
                  name={idx}
                  value={item}
                  className={item == gameState.btnActive ? 'active' : ''}
                  onClick={onClickTypeBtn}
                >
                  <H1>{item}</H1>
                </SelectBtn>
              );
            })
          ) : (
            <Result imgSrc={imgSrc} songTitle={songTitle} />
          )}
        </ChooseContainer>

        {gameState.step !== 3 ? (
          <StepBtncontainer>
            <StepGoBackButton onClick={onClickPrevBtn}>이전으로</StepGoBackButton>
            {gameState.step !== 2 ? (
              <StepGoNextButton $goNextActive={gameState.goNextBtn} onClick={onClickNextBtn}>
                다음으로
              </StepGoNextButton>
            ) : (
              <StepGoNextButton $goNextActive={gameState.goNextBtn} onClick={onClickResultBtn}>
                결과보기
              </StepGoNextButton>
            )}
          </StepBtncontainer>
        ) : (
          <StepBtncontainer>
            <ToStartButton
              onClick={() => {
                props.setGameHandler(false);
              }}
            >
              다시하기
            </ToStartButton>
          </StepBtncontainer>
        )}
      </ContentWrapper>
    </>
  );
};

export default Prefer;

const StepNum = styled.div`
  position: absolute;
  top: 6rem;
  right: 9rem;
`;

const SelectBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33%;
  height: 18rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.gray};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.boldPink};
  }
`;

const StepGoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;

  font-family: ${({ theme }) => theme.font.fontFamily};
  font-size: 18px;
  cursor: pointer;
`;

const StepGoNextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: ${({  $goNextActive, theme }) => ($goNextActive ? theme.colors.skyBlue : theme.colors.gray)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;

  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily};

  cursor: ${(props) => (props.$goNextActive ? 'pointer' : '')};
  pointer-events: ${(props) => (props.$goNextActive ? '' : 'none')};
`;
