import React from 'react';
import styled from 'styled-components';

import ContentWrapper from '../Layout/ContentWrapper';
import InputWrapper from '../Layout/InputWrapper';
import BtnWrapper from '../Layout/BtnWrapper';
import Input from '../UI/Input';

const Signup = () => {
  const Signup_LABEL = ['ID', '비밀번호', '비밀번호 확인', '닉네임'];
  const Signup_PLACEHOLDER = [
    '아이디를 입력해주세요',
    '비밀번호를 입력해주세요',
    '비밀번호를 다시 한 번 입력해주세요',
    '닉네임을 입력해주세요',
  ];

  return (
    <ContentWrapper header={'회원가입'}>
      <InputWrapper>
        {Signup_LABEL.map((label, idx) => (
          <Input key={idx} label={label} content={idx === 0 ? '중복체크' : ''} placeholder={Signup_PLACEHOLDER[idx]} />
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
