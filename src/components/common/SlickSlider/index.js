import styles from './index.styles'
import Slider from "react-slick"
import { Box} from "@mui/material";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './index.scss'
import {useRef} from "react";



const SlickSlider = ({children,customArrows}) => {

    const sliderRef = useRef();

    const classes = styles()
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
       <Box className={classes.root}>
           <Slider {...settings} ref={slider => (sliderRef.current = slider)}>
               {children}
           </Slider>
           <Box className={customArrows}>
               <h1 onClick={() => sliderRef.current.slickPrev()}>LEFT</h1>
               <h1 onClick={() => sliderRef.current.slickNext()}>RIGHT</h1>
           </Box>
       </Box>
    )
}
export default SlickSlider