import styled from 'styled-components';

// content 공통 스타일 컴포넌트 분리

// 카테고리 선택 버튼 컨테이너
const ChooseContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin: 2.5rem 0 0.5rem 0;
`;

// 이전으로, 다음으로 컨테이너
const StepBtncontainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 1rem 0;
  width: 100%;
`;

// 처음으로 버튼
const ToStartButton = styled.button`
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

export {ChooseContainer, StepBtncontainer, ToStartButton};