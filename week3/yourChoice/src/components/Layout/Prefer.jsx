import { useState } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import H1 from '../UI/H1';

const Prefer = () => {
  // 선택 가능 버튼 중 어느 것이 눌렸는지 확인
  const [btnActive, setBtnActive] = useState();

  // 다음으로 버튼 활성화
  const [goNextBtn, setGoNextBtn] = useState(false);

  const songTypeData = ['인디/밴드', 'k-pop', '팝송'];

  const onClickTypeBtn = (e) => {
    setBtnActive((prev) => e.target.value);
    setGoNextBtn(true);
  };

  return (
    <ContentWrapper>
      <ContentHeader>
        <H1>지금 무슨 노래를 듣고싶어?</H1>
      </ContentHeader>

      <ChooseContainer>
        {songTypeData.map((type, idx) => {
          return (
            <SelectBtn key={idx} value={idx} className={idx == btnActive ? 'active' : ''} onClick={onClickTypeBtn}>
              <H1>{type}</H1>
            </SelectBtn>
          );
        })}
      </ChooseContainer>

      <StepBtncontainer>
        <StepGoBackButton >이전으로</StepGoBackButton>
        <StepGoNextButton $goNextActive={goNextBtn}>다음으로</StepGoNextButton>
      </StepBtncontainer>
    </ContentWrapper>
  );
};

export default Prefer;

const ChooseContainer = styled.div`
  display: flex;
  // display: ${(props) => (props.$selectedContent === '' ? 'flex' : 'none')};
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
`;
