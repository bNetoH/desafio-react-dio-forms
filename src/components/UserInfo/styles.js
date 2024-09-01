import styled from "styled-components";

export const UserInfoContainer = styled.button`
    background-color: transparent;
    color: inherit;
    display: flex;
    border: 0;
    flex-direction: row;
    margin-bottom: 24px;
`

export const NameText = styled.div`
    font-styled: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: inherit;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;
    margin-right:12px;
`

export const Progress = styled.div`
    width:180px;
    height:6px;
    background-color: #FFFFFF;
    border-radius:3px;
    position:relative;
    &::after {
        content: '';
        height:6px;
        position:absolute;
        top:0;
        left:0;
        width:${ ({ percentual }) => percentual }%;
        background-color:#23dd7a;
        border-radius:3px;
    }
`