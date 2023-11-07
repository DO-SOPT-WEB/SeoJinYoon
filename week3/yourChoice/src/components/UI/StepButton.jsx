import React from 'react';
import styled from 'styled-components';

// start, 다시하기 버튼
const StepButton = (props) => {
  return (
    <>
      <Button>{props.children}</Button>
    </>
  );
};

export default StepButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.5rem;

  background-color: #f5f5f5;
  border: 1px solid gray;
  border-radius: 0.5rem;

  font-size: 18px;
  cursor: pointer;
`;
