import styled from "styled-components"

export const Container = styled.div`
    max-width: 80%;
    width: 100%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    font-style: normal;
    font-weight: 700;
    font-size: 18px;   
    `
    
export const Title = styled.h2`
    margin-bottom: 24px;
    line-height: 25px;
    color: #FFFFFF;
`

export const TitleHighlight = styled.span`
    margin-bottom: 24px;
    line-height: 25px;
    color: #e4105d;
`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right:24px;
`
