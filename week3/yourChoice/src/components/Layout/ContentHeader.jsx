import React from "react";
import styled from 'styled-components';

// content의 header부분
const ContentHeader = (props) => {
    return <Header>
        {props.children}
    </Header>
}

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0.5rem;

    border-radius: 0.5rem;

    background-color: ${({ theme }) => theme.colors.white};
    font-size : 30px;
`

export default ContentHeader;