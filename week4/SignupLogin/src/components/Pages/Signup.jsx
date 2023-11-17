import React, { useState, useReducer, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import API from '../../api';
import { SIGNUP_LABEL, SIGNUP_PLACEHOLDER } from '../../assets/constants/constants';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';

const initialState = {
  username: '',
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
  // 입력값 저장
  const [inputVal, dispatch] = useReducer(reducerFn, initialState);
  // 아이디 중복여부 bool
  const [isExist, setIsExist] = useState(false);
  // 중복 버튼 색 변경, 리셋용
  const [isClickedExistBtn, setIsClickedExistBtn] = useState(false);
  // 회원가입 버튼 활성화
  const [signupValid, setSignupValid] = useState(false);
  const navigate = useNavigate();

  // 회원가입 활성화
  useEffect(() => {
    const idValid = !isExist && isClickedExistBtn && inputVal.username.length !== 0;
    const passwordValid = inputVal.password.length !== 0 && inputVal.password === inputVal.passwordCheck;
    const nicknameValid = inputVal.nickname.length !== 0;

    setSignupValid((prev) => {
      if (idValid && passwordValid && nicknameValid) {
        return true;
      } else {
        return false;
      }
    });
  }, [isClickedExistBtn, signupValid, isExist, inputVal.password, inputVal.passwordCheck, inputVal.nickname]);

  // input의 필드별 입력값 저장
  const onChangeHandler = (e) => {
    if (isClickedExistBtn && e.target.name === 'ID') {
      setIsClickedExistBtn((prev) => !prev);
      dispatch({ type: e.target.name, value: e.target.value });
    } else {
      dispatch({ type: e.target.name, value: e.target.value });
    }
  };

  // 중복 확인 버튼
  // Get 요청 결과를 isExist state에 업데이트
  // 중복 버튼 클릭 여부 isClickedExistBtn state에 업데이트
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
      } else {
        setIsClickedExistBtn(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // 회원가입 요청
  const onSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post(
        `/api/v1/members`,
        {
          username: `${inputVal.username}`,
          nickname: `${inputVal.nickname}`,
          password: `${inputVal.password}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      navigate('/login');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ContentWrapper header={'회원가입'} onSubmit={onSignupSubmit}>
      <InputWrapper>
        {SIGNUP_LABEL.map((label, idx) => (
          <Input
            key={idx}
            label={label}
            content={idx === 0 ? '중복체크' : ''}
            placeholder={SIGNUP_PLACEHOLDER[idx]}
            onChange={onChangeHandler}
            onClick={onClickDuplicateBtn}
            isDuplicate={isExist}
            btnClicked={isClickedExistBtn}
          />
        ))}
      </InputWrapper>

      <BtnWrapper>
        <SignupBtn type="submit" disabled={!signupValid ? true : false} $valid={signupValid}>
          회원가입
        </SignupBtn>
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
  cursor: ${({ $valid }) => ($valid ? 'pointer' : 'default')};
  background-color: ${({ $valid, theme }) => ($valid ? theme.colors.darkGreen : theme.colors.gray)};
  color: ${({ $valid, theme }) => ($valid ? theme.colors.ivory : theme.colors.white)};
`;
