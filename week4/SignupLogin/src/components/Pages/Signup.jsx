import React, { useState, useReducer, useEffect} from 'react';
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
  const [inputVal, dispatch] = useReducer(reducerFn, initialState);
  // 아이디 중복여부 bool
  const [isExist, setIsExist] = useState(false);
  // 중복 버튼 색 변경, 리셋용
  const [isClickedExistBtn, setIsClickedExistBtn] = useState(false);
  // 회원가입 버튼 활성화
  const [signupValid, setSignupValid] = useState(false);


  // 중복체크 하지 않은 경우 비활성화
  useEffect(() => {
    console.log(isClickedExistBtn);
    setSignupValid((prev)=>{
      if(isClickedExistBtn) {
        return true;
      }
      return false;
    })
  }, [isClickedExistBtn, signupValid])

  // 하나라도 비어있으면 비활성화
  useEffect(() => {
    setSignupValid((prev) => {
      for (const [key, value] of Object.entries(inputVal)) {
        console.log(value.length)
        if (value.length === 0) {
          return false;
        }
      }
      return true;
    });
  }, []);

  // 아이디 중복이면 비활성화
  useEffect(() => {
    setSignupValid((prev) => {
      if (isExist) {
        return false;
      } else {
        return true;
      }
    })
  }, [isExist])

  const onChangeHandler = (e) => {
    if (isClickedExistBtn && e.target.name === 'ID') {
      setIsClickedExistBtn((prev) => !prev);
      dispatch({ type: e.target.name, value: e.target.value });
    } else {
      dispatch({ type: e.target.name, value: e.target.value });
    }
    if (e.target.name === '비밀번호 확인') {
      passwordCheckHandler(e);
    }
  };

  const passwordCheckHandler = (e) => {
    const passwordCheckVal = e.target.value;
    if (passwordCheckVal === inputVal.password) {
      setSignupValid(true);
    } else {
      setSignupValid(false);
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
      } else {
        setIsClickedExistBtn(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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
  background-color: ${({ $valid, theme }) => ($valid ? theme.colors.green : theme.colors.gray)};
  color: ${({ theme }) => theme.colors.white};
`;
