import { useState } from 'react';
import styled from 'styled-components';

import { CONTENT_HEADER, SONG_DATA, SONG_TITLE } from '../../assets/song_data/songData';
import { ChooseContainer, StepBtncontainer, ToStartButton } from './style/ContentStyles';
import ContentWrapper from '../Layout/ContentWrapper';
import ContentHeader from '../Layout/ContentHeader';
import Result from '../Layout/Result';
import H1 from '../UI/H1';

// 취향대로 content
const Prefer = (props) => {
  // 단계 확인용
  const [step, setStep] = useState(0);

  // 다음으로 버튼 활성화
  const [goNextBtn, setGoNextBtn] = useState(false);

  // 선택 가능 버튼 중 어느 것이 눌렸는지 확인
  const [btnActive, setBtnActive] = useState('');

  // 어느 것이 눌렸는지 저장,
  const [pickedArr, setPickedArr] = useState({
    0: '',
    1: '',
    2: '',
  });

  // 이미지 경로 매칭
  const [imgSrc, setImgSrc] = useState('');

  // 노래 제목 매칭
  const [songTitle, setSongTitle] = useState('');

  const onClickTypeBtn = (e) => {
    setBtnActive((prev) => e.target.value);
    setGoNextBtn(true);
    setPickedArr((prevPickedArr) => {
      return { ...pickedArr, [step]: e.target.name };
    });
  };

  const onClickNextBtn = () => {
    setStep((prev) => (prev += 1));
    setGoNextBtn(false);
  };

  const onClickPrevBtn = () => {
    if (step === 0) {
      props.setGameHandler(false);
    }
    setBtnActive((prev) => SONG_DATA[step - 1][pickedArr[step - 1]]);
    setStep((prev) => (prev -= 1));
    setGoNextBtn(true);
  };

  // 결과보기 버튼
  const onClickResultBtn = () => {
    let result = [];

    for (const [key, value] of Object.entries(pickedArr)) {
      result.push(value);
    }

    let resultImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;

    setStep((prev) => (prev += 1));
    setSongTitle(SONG_TITLE[result[0]][result[1]][result[2]]);
    setImgSrc(resultImgSrc);
  };

  return (
    <>
      <ContentWrapper>
        <ContentHeader>
          <H1>{CONTENT_HEADER[step]}</H1>
        </ContentHeader>

        {step !== 3 ? <StepNum>{step + 1}/3</StepNum> : ''}

        <ChooseContainer>
          {step !== 3 ? (
            SONG_DATA[step].map((item, idx) => {
              return (
                <SelectBtn
                  key={idx}
                  name={idx}
                  value={item}
                  className={item == btnActive ? 'active' : ''}
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

        {step !== 3 ? (
          <StepBtncontainer>
            <StepGoBackButton onClick={onClickPrevBtn}>이전으로</StepGoBackButton>
            {step !== 2 ? (
              <StepGoNextButton $goNextActive={goNextBtn} onClick={onClickNextBtn}>
                다음으로
              </StepGoNextButton>
            ) : (
              <StepGoNextButton $goNextActive={goNextBtn} onClick={onClickResultBtn}>
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

  background-color: ${({ $goNextActive, theme }) => ($goNextActive ? theme.colors.skyBlue : theme.colors.gray)};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;

  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily};

  cursor: ${(props) => (props.$goNextActive ? 'pointer' : '')};
  pointer-events: ${(props) => (props.$goNextActive ? '' : 'none')};
`;
