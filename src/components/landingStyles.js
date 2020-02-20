import styled from 'styled-components';
import {keyFrameImage, keyFrameText, keyFrameSubTitles, keyFrameLink} from './keyframes'

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

export const TitleTablet = styled.h2 `
    font-size: 3rem;
    color: white;
    margin: auto;
    text-align: center;

`

export const TitleMobile = styled.h2 `
    font-size: 2.4rem;
    padding: 20px;
    color: white;
    margin: auto;
    text-align: center;

`

export const SubTitle = styled.h3 `
    font-size: 1.2rem;
    color: white;
    text-align: right;
    animation: ${keyFrameSubTitles} 7s ease-in-out;
`

export const SubMobile = styled.h3 `
    font-size: 1rem;
    color: white;
    text-align: center;
    animation: ${keyFrameSubTitles} 7s ease-in-out;
`

export const Links = styled.h3 `
    font-size: 1.2rem;
    color: white;
    // text-decoration: underline white;
    animation: ${keyFrameLink} 10s ease-in-out;
`
    

export const LeftDiv = styled.div `
    display: flex;
    width: 45%;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px
    

`

export const LogoDiv = styled.img `
    width: 100%;
    max-width: 160px;
    align-self: center;
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

export const TopDiv = styled.div `
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;


`

export const TopDivMobile = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;

`


