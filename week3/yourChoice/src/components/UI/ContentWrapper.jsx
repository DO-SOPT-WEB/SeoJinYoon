import React from "react"
import styled from 'styled-components';

// content 전체 감싸는 div
const ContentWrapper = (props) => {
    return (
        <Div>{props.children}</Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
    height: 35rem;
    padding: 2rem 8rem;
    margin: 4rem 10rem;
    border-radius: 0.5rem;
    
    background-color: #FDEDEC;
`

export default ContentWrapper;