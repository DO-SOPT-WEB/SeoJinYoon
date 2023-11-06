import React from 'react';
import styled from 'styled-components';

import NavButton from '../UI/NavButton';
import H1 from '../UI/H1';

// 상단 nav
const Nav = (props) => {
  return (
    <>
      <NavHeader>
        <H1>오늘의 점메추</H1>
        {props.isStart !== '' && (
          <NavButton
            onClick={() => {
              props.isStartHandler('');
            }}
          >
            처음으로
          </NavButton>
        )}
      </NavHeader>
    </>
  );
};

export default Nav;

const NavHeader = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  padding: 2rem;

  background-color: #fdedec;
`;
