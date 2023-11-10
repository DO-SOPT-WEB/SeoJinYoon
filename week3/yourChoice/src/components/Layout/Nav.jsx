import React from 'react';
import styled from 'styled-components';

import H1 from '../UI/H1';

// 상단 nav
const Nav = (props) => {
  return (
    <>
      <NavHeader>
        <H1>🎧 오늘의 플리 🎧</H1>
        {props.isStart !== '' && (
          <NavButton
            onClick={() => {
              props.isStartHandler('');
              props.setGameHandler(false);
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

  background-color: ${({ theme }) => theme.colors.babyPink};
`;

const NavButton = styled.button`
  position: absolute;
  top: 1.3rem;
  right: 4rem;
  padding: 1rem 1.5rem;

  background-color: ${({ theme }) => theme.colors.skyBlue};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;

  font-size: 18px;
  font-family: ${({ theme }) => theme.font.fontFamily};
  cursor: pointer;
`;
