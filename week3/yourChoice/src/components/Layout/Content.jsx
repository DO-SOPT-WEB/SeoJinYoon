import React from 'react';

import ContentWrapper from '../UI/ContentWrapper';
import ContentHeader from '../UI/ContentHeader';
import H1 from '../UI/H1';
import ChooseContent from './ChooseContent';

// 전체 content div
const Content = () => {
  return (
      <ContentWrapper>
        <ContentHeader>
          <H1>원하는 추천 방식을 골라줘!</H1>
        </ContentHeader>

        <ChooseContent />
      </ContentWrapper>
  );
};

export default Content;
