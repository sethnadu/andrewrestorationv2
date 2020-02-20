import styled from 'styled-components';
import {keyFrameImage, keyFrameText} from './keyframes'

export const MainDiv = styled.div `
    display: flex;
    background-color: black;
    height: 100vh;
`

export const TitleDiv = styled.div `
    z-index: 1;
    position: absolute;
    top: 50%;
    animation: ${keyFrameText} 3s ease-in-out;
    width: 100%;

`
export const Title = styled.h2 `
    font-size: 3.4rem;
    color: white;
    margin: auto;
    text-align: center;

`

export const LeftDiv = styled.div `
    display: flex;
    width: 40%;
    max-width: 500px;

`

export const LogoDiv = styled.img `
    width: 100%;
    max-width: 160px;
    margin: 30px 0 0 40px;
`

export const RightDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: black;
    align-items: center;

`

export const LandingCar = styled.img `
    object-fit: cover;
    width: 100%;
    height: 100%;
    animation: ${keyFrameImage} 5s ease-in-out;
    
`


