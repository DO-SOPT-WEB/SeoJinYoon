import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import H1 from '../UI/H1';

const Prefer = () => {
  return (
    <ContentWrapper>
      <ContentHeader>지금 무슨 노래를 듣고싶어?</ContentHeader>

      <ChooseContainer>
        <SelectBtn><H1>인디/밴드</H1></SelectBtn>
        <SelectBtn><H1>k-pop</H1></SelectBtn>
        <SelectBtn><H1>팝송</H1></SelectBtn>
      </ChooseContainer>
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
  margin: 3rem 0;
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
    background-color: pink;
  }
`;
