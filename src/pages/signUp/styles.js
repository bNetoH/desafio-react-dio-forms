import styled from "styled-components"

export const Container = styled.div`
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    width: 320px;
    margin-bottom: 18px;
    line-height: 32px;

    color: #FFFFFF;
`

export const TitleSignUp = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 32px;

    color: inherit;
`

export const SubtitleSignUp = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;

    color: inherit;
`

export const Termos = styled.div`
    margim: 8px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: inherit;
    a {
    text-decoration: none;
    color: inherit;
    }
    a:hover {
        color: #23dd7a;
        cursor: pointer;
    }
`

export const JaTenhoConta = styled.p`
    margim: 8px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    a {
        text-decoration: none;
        color: #23dd7a;
    }
    a:hover {
        cursor: pointer;
    }
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Column = styled.div`
    flex: 1;
`

