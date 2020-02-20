import React from 'react'
import { makeStyles} from '@material-ui/core/styles';
// Styled Components
import {Links,Title, TitleDiv, TopDiv, LeftDiv, LogoDiv, RightDiv, MainDiv, LandingCar, SubTitle} from './landingStyles'

// Images
import Logo from '../Assets/Images/logo.jpg'
import favicon from '../Assets/Images/favicon.png'
import Basement from '../Assets/Images/Main-Carousel/basement.jpg'

// Material UI
import MenuIcon from '@material-ui/icons/Menu';

// React icons
import {FaHammer, FaPaintRoller} from 'react-icons/fa'
import {IoIosConstruct} from 'react-icons/io'
import {GiBrickWall} from 'react-icons/gi'

const useStyles = makeStyles({
    menuIconStyle: {
        color: 'white',
        fontSize: "3rem",
        alignSelf: 'center',
    }
  });


const Landing = () => {
    const classes = useStyles();
    return (
        <>
        <TitleDiv>
            <Title>A{" "}N{" "}D{" "}R{" "}E{" "}W<span><img style={{margin: "0 0 5px 5px"}} src={favicon} alt="favicon" /></span> N{" "}A{" "}D{" "}U <span><img style={{margin: "0 0 5px 5px"}} src={favicon} alt="favicon" /></span> R{" "}E{" "}S{" "}T{" "}O{" "}R{" "}A{" "}T{" "}I{" "}O{" "}N</Title>  
        </TitleDiv>
        <MainDiv>
        <LeftDiv>
            <TopDiv>
                <LogoDiv src={Logo} alt="logo" />
                <div>
                    <SubTitle>Masonry<span><GiBrickWall style={{marginLeft: "10px"}} /></span></SubTitle>
                    <SubTitle>Restoration<span><IoIosConstruct style={{marginLeft: "10px"}}/></span></SubTitle>
                    <SubTitle>Interior<span><FaPaintRoller style={{marginLeft: "10px"}}/></span></SubTitle>
                    <SubTitle>Exterior<span><FaHammer style={{marginLeft: "10px"}}/></span></SubTitle>
                </div>
            </TopDiv>
            <div>
                <Links>Mission</Links>
                <Links>Projects</Links>
                <Links>Contact</Links>
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