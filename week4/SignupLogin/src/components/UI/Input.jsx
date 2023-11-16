import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <InputDiv>
      <InputLabel>{props.label}</InputLabel>
      <UserInput type="text" placeholder={props.placeholder}>
      </UserInput>
    </InputDiv>
  );
};

export default Input;

const InputDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    width: 100%
`;

const InputLabel = styled.label`
  font-size: 17px;
`;

const UserInput = styled.input`
  display: flex;
  align-items: center;
  width: 80%;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 10px;
  font-size: 17px;

  &::placeholder {
    font-size: 17px;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
