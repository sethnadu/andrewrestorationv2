import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// Styled Components
import { Links, Title, TitleMobile, TitleTablet, TitleDiv, TopDiv, TopDivMobile, LeftDiv, LogoDiv, RightDiv, MainDiv, LandingCar, SubTitle} from './landingStyles'

// Images
import Logo from '../Assets/Images/logo.jpg'
import favicon from '../Assets/Images/favicon.png'
import Basement from '../Assets/Images/Main-Carousel/basement.jpg'

// Material UI
// import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery"

// React icons
import { FaHammer, FaPaintRoller } from 'react-icons/fa'
import { IoIosConstruct } from 'react-icons/io'
import { GiBrickWall } from 'react-icons/gi'

// const useStyles = makeStyles({
//     menuIconStyle: {
//         color: 'white',
//         fontSize: "3rem",
//         alignSelf: 'center',
//     }
// });


const Landing = () => {
    // const classes = useStyles();
    const phoneSize = useMediaQuery("(max-width:900px)");
    const tabletSize = useMediaQuery("(max-width:1160px)");
    const titleHeight = useMediaQuery("(min-height: 730px)")
    return (
        <>
            {titleHeight ? (<TitleDiv>
                {!phoneSize && !tabletSize ? (
                    <>
                    <Title>A{" "}N{" "}D{" "}R{" "}E{" "}W<span><img style={{ margin: "0 0 5px 5px", opacity: 0}} src={favicon} alt="favicon" /></span> N{" "}A{" "}D{" "}U <span><img style={{ margin: "0 0 5px 5px", opacity: 0 }} src={favicon} alt="favicon" /></span> R{" "}E{" "}S{" "}T{" "}O{" "}R{" "}A{" "}T{" "}I{" "}O{" "}N</Title>
                    <SubTitle>Masonry | Interior | Exterior</SubTitle>
                    </>
                ) : !phoneSize && tabletSize ? (
                    <>
                    <TitleTablet>ANDREW NADU RESTORATION</TitleTablet>
                    <SubTitle>Masonry | Interior | Exterior</SubTitle>
                    </>
                ) : (
                    <>
                    <TitleMobile>ANDREW NADU RESTORATION</TitleMobile>
                    <SubTitle>Masonry | Interior | Exterior</SubTitle>
                    </>
                    )}

            </TitleDiv>) : null}
            <MainDiv>
                {!phoneSize ? (
                    <LeftDiv>
                        {!tabletSize ? (
                        <TopDiv>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
                            <FaHammer style={{color: 'white', fontSize: '2rem'}}/>
                            <FaPaintRoller style={{color: 'white', fontSize: '2rem'}}/>
                            </div>
                            <LogoDiv src={Logo} alt="logo" />
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
                            <IoIosConstruct style={{color: 'white', fontSize: '2rem'}}/>
                            <GiBrickWall style={{color: 'white', fontSize: '2rem'}}/>
                            </div>
                        </TopDiv>
                        ) : (
                        <TopDiv>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
                            <FaHammer style={{color: 'white', fontSize: '2rem'}}/>
                            <FaPaintRoller style={{color: 'white', fontSize: '2rem'}}/>
                            </div>
                            <LogoDiv src={Logo} alt="logo" />
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%'}}>
                            <IoIosConstruct style={{color: 'white', fontSize: '2rem'}}/>
                            <GiBrickWall style={{color: 'white', fontSize: '2rem'}}/>
                            </div>
                        </TopDiv>    
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