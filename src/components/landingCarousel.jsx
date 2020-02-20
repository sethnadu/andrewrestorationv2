import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core'

// Styled Components
import {LandingCar} from './landingStyles'

// Carousel Images
import Basement from '../Assets/Images/Main-Carousel/basement.jpg'
import Basement2 from '../Assets/Images/Main-Carousel/basement2.jpg'
import Beam from '../Assets/Images/Main-Carousel/beam.jpg'
import Bedroom from '../Assets/Images/Main-Carousel/bedroom.jpg'
import BrickPath from '../Assets/Images/Main-Carousel/brick-path.jpg'
import BrickRetainingWall from '../Assets/Images/Main-Carousel/brickretainingwall.jpg'
import Ceiling from '../Assets/Images/Main-Carousel/ceiling.jpg'
import Kitchen from '../Assets/Images/Main-Carousel/kitchen.jpg'
import Kitchen2 from '../Assets/Images/Main-Carousel/kitchen2.jpg'
import LivingRoom from '../Assets/Images/Main-Carousel/livingRoom.jpg'
import Outside from '../Assets/Images/Main-Carousel/outside.jpg'
import Porch from '../Assets/Images/Main-Carousel/porch.jpg'
import Restored from '../Assets/Images/Main-Carousel/restored.jpg'
import StonePath from '../Assets/Images/Main-Carousel/stonepath.jpg'

const imageObj = [{
    image: Basement
},
{
    image: Basement2
},
{
    image: Beam
},
{
    image: Bedroom
},
{
    image: BrickPath
},
{
    image: BrickRetainingWall
},
{
    image: Ceiling
},
{
    image: Kitchen
},
{
    image: Kitchen2
},
{
    image: LivingRoom
},
{
    image: Outside
},
{
    image: Porch
},
{
    image: Restored
},
{
    image: StonePath
}]

const LandingCarousel = () => {
    return (
        <Carousel indicators={false} style={{height: "100%", height: "100%"}}>
            {imageObj.map(image => {
                return <LandingCar src={image.image} alt ='landing page' />
            })}
        </Carousel>
    )
}

export default LandingCarousel