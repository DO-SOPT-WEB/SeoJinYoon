import React from 'react';
import styled from 'styled-components';

import ContentWrapper from './Layout/ContentWrapper';

const MyPage = (props) => {
  return (
    <ContentWrapper header={'MY PAGE'}>
      <ProfileWrapper>
        <ProfileImg src="./src/assets/img/profileImg.jpeg"/>
        <InfoWrapper>
          <InfoDiv>ID : cosmosuniverse7</InfoDiv>
          <InfoDiv>닉네임 : 코스모스</InfoDiv>
        </InfoWrapper>
      </ProfileWrapper>

      <LogoutBtn>로그아웃</LogoutBtn>
    </ContentWrapper>
  );
};

export default MyPage;

const ProfileWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  padding: 1rem;
`;

const ProfileImg = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 15rem;
`;

const InfoDiv = styled.div`
    width: 100%;
    padding: 12px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.5rem;
`;

const LogoutBtn = styled.button`
    padding: 1rem;
    width: 10rem;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.black};
    background-color : ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
`;
