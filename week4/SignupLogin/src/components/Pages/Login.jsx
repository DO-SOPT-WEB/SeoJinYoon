import React, { useState, useReducer, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { LOGIN_LABEL, LOGIN_PLACEHOLDER } from '../../assets/constants/constants';
import API from '../../api';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';
import ErrorToast from '../UI/ErrorToast';

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

const portalElement = document.getElementById('modal');

const Login = () => {
  // 로그인 폼 입력값
  const [inputVal, dispatch] = useReducer(reducerFn, initialState);
  // 토스트 모달 
  const [toastState, setToastState] = useState({
    message: '',
    flag: false,
  });
  const navigate = useNavigate();

  // 회원가입으로 이동
  const onClickSignup = () => {
    navigate('/signup');
  };

  // 아이디, 비밀번호 업데이트
  const onChangeHandler = (e) => {
    dispatch({ type: e.target.name, value: e.target.value });
  };

  // 로그인 요청
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
      navigate(`/mypage/${userInfo.id}`);
    } catch (error) {
      setToastState({ message: error.response.data.message, flag: true });
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
        <LoginBtn $login={true} type="submit">로그인</LoginBtn>
        <LoginBtn $login={false} type="button" onClick={onClickSignup}>
          회원가입
        </LoginBtn>
      </BtnWrapper>
      {toastState.flag
        ? createPortal(<ErrorToast setToastState={setToastState}>{toastState.message}</ErrorToast>, portalElement)
        : null}
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
  background-color: ${({ $login, theme }) => ($login? theme.colors.darkGreen : theme.colors.darkIvory)};
  color: ${({ $login, theme }) => ($login? theme.colors.ivory : theme.colors.brown)};
`;
