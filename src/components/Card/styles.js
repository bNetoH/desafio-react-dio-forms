import styled from "styled-components";

export const CardContainer = styled.button`
    color: inherit;
    margin-bottom: 24px;
    width: 70%;
    background-color: #3b6651;
    border-radius: 12px;
    position: relative;
`

export const ImageBackground = styled.img`
    width: 100%;
    height: 100px;
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding:12px;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom:12px;

    div {
        margin-left: 12px
    }

    h4 {
        font-styled: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: inherit;
    }

    p {
        font-styled: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: inherit;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #ffffff;

`

export const PostInfo = styled.div`
    margin-bottom:12px;

    h4 {
        font-styled: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: inherit;
    }

    p {
        font-styled: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: inherit;
    }
`

export const HasInfo = styled.div`
    margin-top: 12px;

    h4 {
        font-styled: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: inherit;
    }

    p {
        font-styled: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: inherit;
    }
`

