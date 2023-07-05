import { styled } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    padding: 0 123px;
    font-family: "Pretendard";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    width: 100%;
`

export const Title = styled.h2`
    color: #1C1C1C;
    font-size: 48px;
    font-weight: 800;
`

export const ToggleArea = styled.div`
    width: 234px;
    height: 56px;
    border-radius: 16px;
    background-color: #F7F7F7;
    margin-top: 37px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Btn = styled.button`
    width: 106px;
    height: 40px;
    border-radius: 8px;
    background-color: #FF6C3E;
    color: white;
    font-weight: 500;
`

export const ImgArea = styled.div`
    width: 100%;
`

export const UserImage = styled.img`
    width: 582px;
    height: 370px;
`