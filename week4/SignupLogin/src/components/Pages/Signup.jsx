import React, { useState, useReducer, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import API from '../../api';
import { SIGNUP_LABEL, SIGNUP_PLACEHOLDER } from '../../assets/constants/constants';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';


const initialState = {
  username: "",
  nickname: '',
  password: '',
  passwordCheck: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'ID':
      return {
        ...state,
        username: action.value,
      };
    case '비밀번호':
      return {
        ...state,
        password: action.value,
      };
    case '비밀번호 확인':
      return {
        ...state,
        passwordCheck: action.value,
      };
    case '닉네임':
      return {
        ...state,
        nickname: action.value,
      };
  }
};


const Signup = () => {
  const userNameRef = useRef();

  const [inputVal, dispatch] = useReducer(reducerFn, initialState);
  const [isExist, setIsExist] = useState(false);
  const [isClickedExistBtn, setIsClickedExistBtn] = useState(false);

  const onChangeHandler = (e) => {
    if (isClickedExistBtn && e.target.name === 'ID') {
      setIsClickedExistBtn(prev => !prev);
      dispatch({ type: e.target.name, value: e.target.value });
    } else {
      dispatch({ type: e.target.name, value: e.target.value });
    }
  };

  // 중복 확인 버튼
  // Get 요청 결과를 isExist state에 업데이트
  // 중복된 값일 경우 useRef로 접근하여 input값 초기화
  const onClickDuplicateBtn = async (e) => {
    e.preventDefault();

    try {
      const response = await API.get(`/api/v1/members/check`, {
        params: {
          username: `${inputVal.username}`,
        },
      });
      const data = response.data;

      setIsExist(data.isExist);

      if (data.isExist) {
        setIsClickedExistBtn(true);
        console.log('이미 사용 중인 아이디입니다.');
        userNameRef.current.value = '';
      } else {
        setIsClickedExistBtn(true);
      }
    } catch(error) {
      console.log(error.message);
    }
  }


  return (
    <ContentWrapper header={'회원가입'}>
      <InputWrapper>
        {SIGNUP_LABEL.map((label, idx) => (
          <Input
            key={idx}
            label={label}
            content={idx === 0 ? '중복체크' : ''}
            placeholder={SIGNUP_PLACEHOLDER[idx]}
            onChange={onChangeHandler}
            onClick={onClickDuplicateBtn}
            refVal={idx === 0 ? userNameRef : null}
            isDuplicate = {isExist}
            btnClicked= {isClickedExistBtn}
          />
        ))}
      </InputWrapper>

      <BtnWrapper>
        <SignupBtn type="submit">회원가입</SignupBtn>
      </BtnWrapper>
    </ContentWrapper>
  );
};

export default Signup;

const SignupBtn = styled.button`
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
