import React from 'react';
import styled from 'styled-components';

// Nav바 버튼
// position 적용 위해서 다른 버튼들과 분리
const NavButton = (props) => {
    return (
        <Button>{props.children}</Button>
    )
};

const Button = styled.button`
    position: absolute;
    top: 1.3rem;
    right: 4rem;
    padding: 1rem 1.5rem;

    background-color: #F5F5F5;
    border: 1px solid gray;
    border-radius: 0.5rem;

    font-size: 18px;
    cursor: pointer;
`;

export default NavButton;
