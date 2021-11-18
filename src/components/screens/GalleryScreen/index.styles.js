import React from "react"

import {makeStyles} from "@mui/styles"
import ArrowSlider from "../../../assets/right_arrow.png";
import GradientLeft from "../../../assets/gradient_left.png";
import GradientRight from "../../../assets/gradient_right.png";


export default makeStyles((theme) => {
    return {
        root: {
            backgroundColor: "#25252D",
        },
        tabs: {
            marginBottom: "30px",
        },
        tabWrap: {
            '& .MuiBox-root': {
                padding: '0px',
            },
        },
        tab: {
           color: "rgba(255, 255, 255, 0.3)"
        },
        imgWrap: {

        },
        img: {
            display: "block",
            width: "100%"
        },
        arrowsSlider: {
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            padding: '20px 0'
        },
        carouselWrap: {},
        arrowRight: {
            transition: "0.3s",
            opacity: "0.5",
            cursor: "pointer",
            display: "block",
            width: "200px",
            height: "100%",
            backgroundColor: "transparent",
            backgroundImage: "url(" + ArrowSlider + "), url("+ GradientRight +")",
            backgroundRepeat: "no-repeat, repeat-y",
            backgroundPosition: "130px center, center center",
            backgroundSize: "50px 15px, 100% 100%",
            border: "none",
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: "9999",
            "&:hover": {
                opacity: "1",
                backgroundPosition: "135px center, center center",
            },
            [theme.breakpoints.down('md')]: {

            },
        },
        arrowLeft: {
            transition: "0.3s",
            opacity: "0.5",
            cursor: "pointer",
            display: "block",
            width: "200px",
            height: "100%",
            transform: "rotateY(180deg)",
            backgroundColor: "transparent",
            backgroundImage: "url(" + ArrowSlider + "), url("+ GradientRight +")",
            backgroundRepeat: "no-repeat, repeat-y",
            backgroundPosition: "130px center, center center",
            backgroundSize: "50px 15px, 100% 100%",
            border: "none",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: "9999",
            "&:hover": {
                opacity: "1",
                backgroundPosition: "135px center, center center",
            },
            [theme.breakpoints.down('md')]: {

            },
        }
    }
});