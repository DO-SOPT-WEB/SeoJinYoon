import React from 'react';
import styled from 'styled-components';

// 시작, 다시하기 버튼
const Button = (props) => {
  return (
    <>
      <ElButton>{props.children}</ElButton>
    </>
  );
};

export default Button;

const ElButton = styled.button`
    display: flex
    justify-content: center;
    align-items: center;

    padding: 1rem 1.5rem;

    background-color: #F5F5F5;
    border: 1px solid gray;
    border-radius: 0.5rem;

    font-size: 18px;
    cursor: pointer;
`;
