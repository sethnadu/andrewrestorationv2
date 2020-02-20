import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Links, Title, TitleMobile, TitleTablet, TitleDiv, TopDiv, TopDivMobile, LeftDiv, LogoDiv, RightDiv, MainDiv, LandingCar, SubTitle, SubMobile } from './landingStyles'

// Images
import Logo from '../Assets/Images/logo.jpg'
import favicon from '../Assets/Images/favicon.png'
import Basement from '../Assets/Images/Main-Carousel/basement.jpg'

// Material UI
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery"

// React icons
import { FaHammer, FaPaintRoller } from 'react-icons/fa'
import { IoIosConstruct } from 'react-icons/io'
import { GiBrickWall } from 'react-icons/gi'

const useStyles = makeStyles({
    menuIconStyle: {
        color: 'white',
        fontSize: "3rem",
        alignSelf: 'center',
    }
});


const Landing = () => {
    const classes = useStyles();
    const phoneSize = useMediaQuery("(max-width:900px)");
    const tabletSize = useMediaQuery("(max-width:1160px)");
    const titleHeight = useMediaQuery("(min-height: 730px)")
    return (
        <>
            <TitleDiv>
                {!phoneSize && !tabletSize ? (
                    <Title>A{" "}N{" "}D{" "}R{" "}E{" "}W<span><img style={{ margin: "0 0 5px 5px" }} src={favicon} alt="favicon" /></span> N{" "}A{" "}D{" "}U <span><img style={{ margin: "0 0 5px 5px" }} src={favicon} alt="favicon" /></span> R{" "}E{" "}S{" "}T{" "}O{" "}R{" "}A{" "}T{" "}I{" "}O{" "}N</Title>

                ) : !phoneSize && tabletSize ? (
                    <TitleTablet>Andrew Nadu Restoration</TitleTablet>
                ) : (
                        <TitleMobile>Andrew Nadu Restoration</TitleMobile>
                    )}

            </TitleDiv>
            <MainDiv>
                {!phoneSize ? (
                    <LeftDiv>
                        {!tabletSize ? (
                        <TopDiv>
                            <LogoDiv src={Logo} alt="logo" />
                            <div>
                                <SubTitle>Masonry<span><GiBrickWall style={{ marginLeft: "10px" }} /></span></SubTitle>
                                <SubTitle>Restoration<span><IoIosConstruct style={{ marginLeft: "10px" }} /></span></SubTitle>
                                <SubTitle>Interior<span><FaPaintRoller style={{ marginLeft: "10px" }} /></span></SubTitle>
                                <SubTitle>Exterior<span><FaHammer style={{ marginLeft: "10px" }} /></span></SubTitle>
                            </div>
                        </TopDiv>
                        ) : (
                        <TopDivMobile>
                            <LogoDiv src={Logo} alt="logo" />
                            <div>
                                <SubMobile>Masonry<span><GiBrickWall style={{ marginLeft: "10px" }} /></span></SubMobile>
                                <SubMobile>Restoration<span><IoIosConstruct style={{ marginLeft: "10px" }} /></span></SubMobile>
                                <SubMobile>Interior<span><FaPaintRoller style={{ marginLeft: "10px" }} /></span></SubMobile>
                                <SubMobile>Exterior<span><FaHammer style={{ marginLeft: "10px" }} /></span></SubMobile>
                            </div>
                        </TopDivMobile>    
                            )}
                        
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap' }}>
                            <Links>Mission</Links>
                            <Links>Projects</Links>
                            <Links>Contact</Links>
                        </div>
                    </LeftDiv>
                    )
                    :
                    (
                    <LeftDiv>
                        <TopDivMobile>
                            <LogoDiv src={Logo} alt="logo" />
                            <div>
                                <SubMobile>Masonry</SubMobile>
                                <SubMobile>Restoration</SubMobile>
                                <SubMobile>Interior</SubMobile>
                                <SubMobile>Exterior</SubMobile>
                            </div>
                        </TopDivMobile>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexFlow: 'wrap' }}>
                            <Links>Mission</Links>
                            <Links>Projects</Links>
                            <Links>Contact</Links>
                        </div>
                    </LeftDiv>
                    )}
                <RightDiv>
                    <LandingCar src={Basement} alt="landing page" />
                </RightDiv>

            </MainDiv>
        </>
    )
}

export default Landing