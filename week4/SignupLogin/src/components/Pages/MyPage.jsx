import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../Layout/ContentWrapper';
import AuthContext from '../../context/authContext';
import API from '../../api';

const MyPage = (props) => {
  const authContext = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    id: '',
    nickname: '',
  })

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API.get(`api/v1/members/${authContext.id}`);
        setUserInfo({id: response.data.username, nickname: response.data.nickname});
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, [authContext.id]);

  return (
    <ContentWrapper header={'MY PAGE'}>
      <ProfileWrapper>
        <ProfileImg src="/img/profileImg.jpeg" alt="프로필사진" />
        <InfoWrapper>
          <InfoDiv>ID : {userInfo.id}</InfoDiv>
          <InfoDiv>닉네임 : {userInfo.nickname}</InfoDiv>
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
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
`;
