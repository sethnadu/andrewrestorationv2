import React from 'react'

// Styled Components
import {Title, TitleDiv, LeftDiv, LogoDiv, RightDiv, MainDiv, LandingCar} from './landingStyles'

// Images
import Logo from '../Assets/Images/logo.jpg'
import favicon from '../Assets/Images/favicon.png'
import Basement from '../Assets/Images/Main-Carousel/basement.jpg'

// Material UI


const Landing = () => {
    return (
        <>
        <TitleDiv>
            <Title>A{" "}N{" "}D{" "}R{" "}E{" "}W<span><img style={{margin: "0 0 5px 5px"}} src={favicon} alt="favicon" /></span> N{" "}A{" "}D{" "}U <span><img style={{margin: "0 0 5px 5px"}} src={favicon} alt="favicon" /></span> R{" "}E{" "}S{" "}T{" "}O{" "}R{" "}A{" "}T{" "}I{" "}O{" "}N</Title>  
        </TitleDiv>
        <MainDiv>
        <LeftDiv>
            <div>
                <LogoDiv src={Logo} alt="logo" />
            </div>
        </LeftDiv>
        <RightDiv>
            <LandingCar src={Basement} alt="landing page"/>
        </RightDiv>
            
        </MainDiv>
        </>
    )
}

export default Landing