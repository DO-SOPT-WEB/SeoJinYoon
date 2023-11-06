import React from 'react';

import styled from 'styled-components';

// 선택 버튼 감싸는 div
const ChooseContainer = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
`;

export default ChooseContainer;
