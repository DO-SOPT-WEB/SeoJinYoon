import { useState } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import StepButton from '../UI/stepButton';
import H1 from '../UI/H1';

const Prefer = () => {
  const [btnActive, setBtnActive] = useState();
  const songTypeData = ['인디/밴드', 'k-pop', '팝송'];

  const onClickTypeBtn = (e) => {
    setBtnActive((prev) => {
      return e.target.value;
    });
  };

  return (
    <ContentWrapper>
      <ContentHeader>
        <H1>지금 무슨 노래를 듣고싶어?</H1>
      </ContentHeader>

      <ChooseContainer>
        {songTypeData.map((type, idx) => {
          return (
            <SelectBtn key={idx} value={idx} className={idx == btnActive ? 'active' : ""} onClick={onClickTypeBtn}>
              <H1>{type}</H1>
            </SelectBtn>
          );
        })}
      </ChooseContainer>

      <StepBtncontainer>
        <StepButton>이전으로</StepButton>
        <StepButton>다음으로</StepButton>
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
