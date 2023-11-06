import React, { useState } from 'react';
import styled from 'styled-components';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import H1 from '../UI/H1';
import ChooseBtn from '../UI/ChooseBtn';
import Button from '../UI/Button';

// 전체 content div
const Content = (props) => {
  return (
    <ContentWrapper>
      <ContentHeader>
        <H1>원하는 추천 방식을 골라줘!</H1>
      </ContentHeader>

      {(props.isStart === '')  && (
        <ChooseContainer>
          <ChooseBtn
            onClick={() => {
              props.isStartHandler('취향대로 추천');
            }}
          ><H1>취향대로 추천</H1></ChooseBtn>
          <ChooseBtn
            onClick={()=> {
            props.isStartHandler('랜덤 추천');
          }}
          ><H1>랜덤 추천</H1></ChooseBtn>
        </ChooseContainer>
      )}

      <SelectedContent $selectedContent={props.isStart}>
        <H1>{props.isStart}</H1>
      </SelectedContent>
      
      <Button $selectedContent={props.isStart}>
        Start
      </Button>
    </ContentWrapper>
  );
};

export default Content;

const ChooseContainer = styled.div`
  display: flex;
  // display: ${props  => (props.$selectedContent === "" ? 'flex' : 'none')};
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20rem;
  margin: 3rem 0;
`;

const SelectedContent = styled.div`
    display: ${(props) => (props.$selectedContent === "" ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 18rem;
    padding: 2rem;
    margin: 3rem 0 2rem 0;
    border-radius: 1.5rem;
    border: 1px solid gray;
    background-color: white;
`