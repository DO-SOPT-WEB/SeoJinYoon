import React from 'react';
import styled from 'styled-components';

// 추천 선택 버튼
const ChooseBtn = (props) => {
  return <Button onClick={props.onClick}>{props.children}</Button>;
};

// width props로 관리하기
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
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

export default ChooseBtn;
