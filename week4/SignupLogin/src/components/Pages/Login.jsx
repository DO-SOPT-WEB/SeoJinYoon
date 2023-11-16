import React, { useState, useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LOGIN_LABEL, LOGIN_PLACEHOLDER } from '../../assets/constants/constants';
import API from '../../api';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';


const initialState = {
  id: '',
  password: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'ID':
      return {
        ...state,
        id: action.value,
      };
    case 'PASSWORD':
      return {
        ...state,
        password: action.value,
      };
  }
};

const Login = () => {
  const [inputVal, dispatch] = useReducer(reducerFn, initialState);
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate('/signup');
  };

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  const onLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post(
        `api/v1/members/sign-in`,
        {
          username: `${inputVal.id}`,
          password: `${inputVal.password}`,
        },
        {
          header: {
            'Content-Type': 'application/json',
          },
        }
      );
      const userInfo = response.data;
      navigate(`/mypage/${userInfo.id}`)
    } catch (error) {
      console.log('로그인실패!')
      console.log(error.message);
    }
  };

  return (
    <ContentWrapper header={'로그인'} onSubmit={onLoginSubmit}>
      <InputWrapper>
        {LOGIN_LABEL.map((label, idx) => (
          <Input key={idx} label={label} placeholder={LOGIN_PLACEHOLDER[idx]} onChange={onChangeHandler} />
        ))}
      </InputWrapper>

      <BtnWrapper>
        <LoginBtn type="submit">로그인</LoginBtn>
        <LoginBtn type="button" onClick={onClickSignup}>
          회원가입
        </LoginBtn>
      </BtnWrapper>
    </ContentWrapper>
  );
};

export default Login;

const LoginBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem;
  width: 100%;

  font-size: 17px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;
