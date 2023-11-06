import React from "react";
import styled from 'styled-components';

// 모든 h1 text 사이즈 지정
const H1 = (props) => {
    return <H1Text>{props.children}</H1Text>
}

const H1Text = styled.h1`
    font-size: 30px;
    font-weight: bold;
`

export default H1;