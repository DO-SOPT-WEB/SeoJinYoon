import { useState } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import H1 from '../UI/H1';

const Prefer = (props) => {
  const CONTENT_HEADER = [
    '지금 무슨 노래를 듣고싶어?',
    '그럼 이 중에서는 뭐가 끌려?',
    '마지막으로 선택해 줘!',
    '오늘의 추천 플리는 바로!',
  ];

  const SONG_DATA = [
    ['인디/밴드', 'k-pop', '팝송'],
    ['신나는', '잔잔한', '주인장 추천'],
    ['여자', '남자', '상관없어!'],
  ];

  const SONG_TITLE = [
    [
      ['제이레빗 happy things', '데이식스 한 페이지가 될 수 있게', 'LUCY 아니근데진짜'],
      ['최유리 바람', '데이식스 hihello', '데이먼스이어 yours'],
      ['옥상달빛 수고했어 오늘도', '하현상 등대', 'KozyPop Dezavu'],
    ],
    [
      ['아이브 iam', '부석순 파이팅해야지', '전소미 fast forward'],
      ['뉴진스 Ditto', 'EXO 첫눈', '수지 cape'],
      ['STAYC so what', '엔시티 드림 미니카', '선미 보랏빛 밤'],
    ],
    [
      ['Taylor Swift Shake it off', 'Sam Smith Unholy', 'Justin Bieber, 라로이 STAY'],
      ['Selena Gomez lose you to love me', 'Justin Bieber off my face', '5S0S high'],
      ['Selena Gomez Who says', "Charlie Puth That's hilarious", "Why don't we What am I"],
    ],
  ];

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
    setStep((prev) => (prev -= 1));
    setGoNextBtn(false);
  };

  // 결과보기 버튼
  const onClickResultBtn = () => {
    let result = [];
    setStep((prev) => (prev += 1));
    for (const [key, value] of Object.entries(pickedArr)) {
      result.push(value);
    }
    let resultImgSrc = `src/assets/img/p${result[0]}_${result[1]}_${result[2]}.jpeg`;

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
            <ResultContainer>
              <img src={imgSrc} />
              <ResultTitle>
                <h2>{songTitle}</h2>
              </ResultTitle>
            </ResultContainer>
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

const ChooseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin: 2.5rem 0 0.5rem 0;
`;

const SelectBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 33%;
  height: 18rem;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;

  &:hover {
    border: 3px solid gray;
  }
  &.active {
    background-color: pink;
  }
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;
  height: 20rem;
  width: 100%;
`;

const ResultImg = styled.img`
  width: 50%;
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

const StepGoBackButton = styled.button`
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

const StepGoNextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: ${(props) => (props.$goNextActive ? 'lightblue' : 'gray')};
  border: 1px solid gray;
  border-radius: 0.5rem;

  font-size: 18px;
  cursor: ${(props) => (props.$goNextActive ? 'pointer' : '')};
  pointer-events: ${(props) => (props.$goNextActive ? '' : 'none')};
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
