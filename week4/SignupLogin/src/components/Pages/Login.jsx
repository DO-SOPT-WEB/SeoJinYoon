import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { LOGIN_LABEL, LOGIN_PLACEHOLDER } from '../../assets/constants/constants';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';

const Login = () => {
  const navigate = useNavigate();
  const onClickSignup = () => {
    navigate('/signup');
  };

  return (
    <ContentWrapper header={'로그인'}>
      <InputWrapper>
        {LOGIN_LABEL.map((label, idx) => (
          <Input key={idx} label={label} placeholder={LOGIN_PLACEHOLDER[idx]} />
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
