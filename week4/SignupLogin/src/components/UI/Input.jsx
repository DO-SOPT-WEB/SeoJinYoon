import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputDiv>
      <InputLabel>{props.label}</InputLabel>
      <UserInput type="text" placeholder={props.placeholder} content={props.content}></UserInput>
      {props.content === '중복체크' && <IsExistIdBtn>{props.content}</IsExistIdBtn>}
    </InputDiv>
  );
};

export default Input;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem 0;
  align-items: center;

  width: 100%;
`;

const InputLabel = styled.label`
  width: 20%;
  font-size: 17px;
`;

const UserInput = styled.input`
  display: flex;
  align-items: center;
  ${(props) => props.content === '중복체크' ? `width: 50%` : `width: 75%`};
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  font-size: 15px;

  &::placeholder {
    font-size: 15px;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const IsExistIdBtn = styled.button`
  width: 20%;
  padding: 12px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;