import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    min-width: 275px;
    height: 30px;
    border-bottom: 1px solid #383450;

    display: flex;
    flex-direction: row;
    align-itens: center;
    justify-content: center;
    margin-bottom: 6px;
`

export const IconContainer = styled.div`
    margin-right: 10px; 
`

export const InputText = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    color: #ffffff;
    background-color: transparent;
    width:90%;
    height: 30px;
`

export const ErrorText = styled.p`
    margin-bottom: 6px;
    color: #ff0000;
    text-align: center;
    font-size: 12px;
`