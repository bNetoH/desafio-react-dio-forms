import styled from "styled-components";

export const Container = styled.div`
    max-width: 80%;
    width: 100%;
    height: 47px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center; 
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center; 

`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`

export const Wrapper = styled.div`
    backgroud-color: #151515;
    width: 100%;
    height: 47px;

    display: flex;
    justify-content: center;
    align-items: center;  
`

export const BuscarInputContainer = styled.div`
    width: 175px;
    height: 30px;
    backgroud: #2d2d37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;

    display: flex;
    align-itens: center;
    justity-content: center;
`

export const Menu = styled.a`
    min-width: 70px;
    font-style: normal;
    font-size: 13px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-align: center;
    text-decoration: none;
`

export const MenuRight = styled.a`
    min-width: 70px;
    font-style: normal;
    font-size: 13px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 12px;
    text-align: center;
    text-decoration: none;

    &:hover {
        cursor: default;
        font-weight: 600;
        color: #23dd7a;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #ffffff;
`

export const Input = styled.input`
    background-color: transparent;
    flex: 1;
    border: 0;
    color: #ffffff;
`