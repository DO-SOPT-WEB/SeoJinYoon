import React from 'react';
import styled from 'styled-components';

// start, 다시하기 버튼
const Button = (props) => {
  return (
    <>
      <ElButton $selectedContent={props.$selectedContent} onClick={props.onClick}>{props.children}</ElButton>
    </>
  );
};

export default Button;

const ElButton = styled.button`
  display: ${(props) => (props.$selectedContent === "" ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};
  border: 1px solid gray;
  border-radius: 0.5rem;

  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily};
  cursor: pointer;
`;
