import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import ContentWrapper from '../Layout/ContentWrapper';
import API from '../../api';

const MyPage = (props) => {
  const navigate = useNavigate();
  const { userId } = useParams(); // URL에서 유저 id 받아오기

  // 유저 정보 저장
  const [userInfo, setUserInfo] = useState({
    id: '',
    nickname: '',
  });

  // GET 유저 정보 받아와서 userInfo state에 저장
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await API.get(`api/v1/members/${userId}`);
        setUserInfo({ id: response.data.username, nickname: response.data.nickname });
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, [userId]);

  // 로그아웃 연결
  const logoutHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <ContentWrapper header={'MY PAGE'}>
      <ProfileWrapper>
        <ProfileImg src="/img/profileImg.jpeg" alt="프로필사진" />
        <InfoWrapper>
          <InfoDiv>
            <Key>아이디 : </Key> <Value>{userInfo.id}</Value>
          </InfoDiv>
          <InfoDiv>
            <Key>닉네임 : </Key> <Value>{userInfo.nickname}</Value>
          </InfoDiv>
        </InfoWrapper>
      </ProfileWrapper>

      <LogoutBtn onClick={logoutHandler}>로그아웃</LogoutBtn>
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
  display: flex;
  align-items: center;

  width: 100%;
  padding: 12px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.darkGreen};
  border-radius: 0.5rem;
`;

const Key = styled.span`
  margin-right: 10px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.ivory};
`;
const Value = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.ivory};
`;

const LogoutBtn = styled.button`
  padding: 1rem;
  width: 10rem;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.brown};
  background-color: ${({ theme }) => theme.colors.darkIvory};
  border-radius: 0.5rem;
`;
