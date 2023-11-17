import React, {useState, useEffect} from "react";
import styled from 'styled-components'

const ErrorToast = (props) => {
    useEffect(() => {
        let timer = setTimeout(() => {
            props.setToastState({message:'', flag: false});
        }, 1500);

        return () => {clearTimeout(timer)}
    }, [])

    return <Div>{props.children}</Div>
}

export default ErrorToast;

const Div = styled.div`
    position: fixed;
    bottom: 30px;
    right: 33%;
    
    padding: 1.5rem 3rem;
    border-radius: 0.5rem;
    opacity: 0.3;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({theme}) => theme.colors.white};
    font-size: 17px;
`